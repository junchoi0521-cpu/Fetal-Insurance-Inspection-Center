const MAX_TEXT_LENGTH = 600

function createLeadId() {
  const now = new Date()
  const date = now.toISOString().slice(2, 10).replaceAll('-', '')
  const random = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `FI-${date}-${random}`
}

function sanitize(value, maxLength = MAX_TEXT_LENGTH) {
  if (typeof value !== 'string') return ''
  return value.replace(/[<>]/g, '').trim().slice(0, maxLength)
}

function send(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  return res.status(status).json(body)
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}')

  const chunks = []
  for await (const chunk of req) chunks.push(Buffer.from(chunk))
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function validateLead(payload) {
  const errors = []
  const phoneDigits = sanitize(payload.phoneDigits || payload.phone).replace(/\D/g, '')
  const dueDate = new Date(`${sanitize(payload.dueDate)}T00:00:00`)

  if (sanitize(payload.name, 60).length < 2) errors.push('name')
  if (!/^01\d{8,9}$/.test(phoneDigits)) errors.push('phone')
  if (!sanitize(payload.dueDate) || Number.isNaN(dueDate.getTime())) errors.push('dueDate')
  if (!sanitize(payload.status, 40)) errors.push('status')
  if (!sanitize(payload.channel, 40)) errors.push('channel')
  if (!sanitize(payload.contactTime, 40)) errors.push('contactTime')
  if (payload.consent !== true) errors.push('consent')

  return { errors, phoneDigits }
}

async function postWebhook(lead) {
  const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL
  if (!webhookUrl) return { configured: false }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const headers = { 'Content-Type': 'application/json' }
    if (process.env.CONSULTATION_WEBHOOK_SECRET) {
      headers.Authorization = `Bearer ${process.env.CONSULTATION_WEBHOOK_SECRET}`
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        event: 'consultation.created',
        lead,
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Webhook returned ${response.status}`)
    }

    return { configured: true }
  } finally {
    clearTimeout(timeout)
  }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return send(res, 405, { ok: false, message: 'POST 요청만 사용할 수 있습니다.' })
  }

  try {
    const payload = await readBody(req)

    if (sanitize(payload.website)) {
      return send(res, 200, { ok: true, filtered: true, leadId: createLeadId() })
    }

    const { errors, phoneDigits } = validateLead(payload)
    if (errors.length > 0) {
      return send(res, 400, {
        ok: false,
        message: '필수 상담 신청 정보를 확인해 주세요.',
        errors,
      })
    }

    const lead = {
      leadId: sanitize(payload.leadId, 40) || createLeadId(),
      submittedAt: new Date().toISOString(),
      name: sanitize(payload.name, 60),
      phone: sanitize(payload.phone, 40),
      phoneDigits,
      dueDate: sanitize(payload.dueDate, 20),
      pregnancyWeek: sanitize(payload.pregnancyWeek, 60),
      status: sanitize(payload.status, 40),
      channel: sanitize(payload.channel, 40),
      contactTime: sanitize(payload.contactTime, 40),
      concern: sanitize(payload.concern, 1000),
      pageUrl: sanitize(payload.pageUrl, 300),
      referrer: sanitize(payload.referrer, 300),
      tracking: payload.tracking && typeof payload.tracking === 'object' ? payload.tracking : {},
    }

    const delivery = await postWebhook(lead)
    if (!delivery.configured) {
      if (process.env.VERCEL_ENV === 'production') {
        return send(res, 503, {
          ok: false,
          message: '상담 접수 연결 설정이 필요합니다. 관리자에게 문의해 주세요.',
        })
      }

      return send(res, 200, { ok: true, preview: true, leadId: lead.leadId })
    }

    return send(res, 200, { ok: true, leadId: lead.leadId })
  } catch (error) {
    return send(res, 500, {
      ok: false,
      message: '상담 접수 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
    })
  }
}
