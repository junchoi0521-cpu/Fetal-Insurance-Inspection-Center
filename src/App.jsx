import React, { useMemo, useState } from 'react'
import {
  Baby,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  HandHeart,
  HeartPulse,
  Hospital,
  LockKeyhole,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  WalletCards,
} from 'lucide-react'

const inspectionCards = [
  {
    title: '가입 전 비교',
    text: '보험사별 인수 기준, 만기, 납입 조건을 한 번에 비교합니다.',
    icon: Search,
  },
  {
    title: '가입 후 점검',
    text: '이미 가입한 증권도 누락 보장과 중복 특약을 함께 확인합니다.',
    icon: ClipboardCheck,
  },
  {
    title: '산모별 맞춤',
    text: '임신 주차, 산모 나이, 병력 고지 상황에 맞춰 안내합니다.',
    icon: HeartPulse,
  },
  {
    title: '강요 없는 상담',
    text: '필요한 보장과 조정 포인트를 먼저 정리해 드립니다.',
    icon: ShieldCheck,
  },
]

const checklist = [
  ['만기 구조', '30세/100세 만기 조합과 보험료 균형'],
  ['입원 보장', '신생아 입원, 중환자실, 질병 입원 일당'],
  ['수술/진단비', '선천성 질환, 저체중아, 주요 질환 특약'],
  ['산모 특약', '임신·출산 관련 산모 보장과 고지 조건'],
  ['보험료 점검', '불필요한 중복 특약과 유지 부담'],
  ['가입 타이밍', '임신 주차별 심사 가능성과 준비 서류'],
]

const processSteps = [
  {
    title: '정보 확인',
    text: '출산 예정일과 현재 가입 상태를 간단히 확인합니다.',
    icon: CalendarDays,
  },
  {
    title: '보장 분석',
    text: '예상 리스크, 보장 범위, 보험료 구조를 점검합니다.',
    icon: FileCheck2,
  },
  {
    title: '조정 안내',
    text: '추가, 축소, 유지가 필요한 항목을 정리해 드립니다.',
    icon: HandHeart,
  },
]

const faqItems = [
  {
    question: '태아보험은 언제부터 준비하는 게 좋나요?',
    answer:
      '보험사와 산모 상황에 따라 가능 시점이 달라질 수 있어요. 출산 예정일과 임신 주차를 기준으로 현재 가능한 선택지를 먼저 확인하는 것이 좋습니다.',
  },
  {
    question: '이미 가입했는데도 점검을 받을 수 있나요?',
    answer:
      '가능합니다. 가입 후에는 보장 누락, 중복 특약, 보험료 부담, 출산 후 유지 계획을 중심으로 확인합니다.',
  },
  {
    question: '30세 만기와 100세 만기 중 무엇이 더 좋은가요?',
    answer:
      '정답이 하나로 정해져 있지는 않습니다. 예산, 보장 우선순위, 성인보험 전환 계획을 함께 보고 조합을 결정하는 편이 안전합니다.',
  },
  {
    question: '상담을 받으면 꼭 가입해야 하나요?',
    answer:
      '아니요. 점검 결과를 바탕으로 가입, 유지, 보완 여부를 직접 결정하실 수 있도록 안내합니다.',
  },
]

const initialForm = {
  name: '',
  phone: '',
  dueDate: '',
  status: '',
  channel: '',
  concern: '',
  consent: false,
}

function calculatePregnancyWeek(dueDateValue) {
  if (!dueDateValue) return ''

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const dueDate = new Date(`${dueDateValue}T00:00:00`)
  if (Number.isNaN(dueDate.getTime())) return ''

  const msPerDay = 24 * 60 * 60 * 1000
  const daysUntilDue = Math.ceil((dueDate - today) / msPerDay)
  const pregnancyDays = 280 - daysUntilDue

  if (pregnancyDays < 0) return '출산 예정일을 다시 확인해 주세요'
  if (pregnancyDays > 300) return '출산 예정일이 지났거나 확인이 필요해요'

  const weeks = Math.floor(pregnancyDays / 7)
  const days = pregnancyDays % 7
  return `현재 약 ${weeks}주 ${days}일차입니다`
}

function App() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const pregnancyWeek = useMemo(() => calculatePregnancyWeek(form.dueDate), [form.dueDate])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const goApply = (event) => {
    event.preventDefault()
    document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" aria-label="태아보험점검센터 홈">
          <span className="brandMark">
            <Baby size={25} />
          </span>
          <span>
            <b>태아보험점검센터</b>
            <em>무료 보장 점검 상담</em>
          </span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#inspection">점검 항목</a>
          <a href="#process">진행 절차</a>
          <a href="#case">보장 사례</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="headerCta" href="#apply" onClick={goApply}>
          무료 점검 신청
          <ChevronRight size={17} />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroMedia" aria-hidden="true">
            <img className="heroMom" src="/images/hero-mom-final.png" alt="" />
          </div>

          <div className="heroInner">
            <div className="heroCopy">
              <p className="eyebrow">
                <Sparkles size={18} />
                가입 전 비교부터 가입 후 보장 점검까지
              </p>
              <h1 id="hero-title">태아보험점검센터</h1>
              <p className="heroLead">
                산모님의 임신 주차와 현재 가입 상태를 기준으로 태아보험의 보장 범위, 보험료,
                만기 구조를 차분하게 점검합니다.
              </p>
              <div className="heroActions">
                <a className="primaryBtn" href="#apply" onClick={goApply}>
                  1분 무료 점검 신청
                  <ChevronRight size={18} />
                </a>
                <a className="secondaryBtn" href="#inspection">
                  점검 항목 보기
                  <ChevronDown size={18} />
                </a>
              </div>
              <div className="heroProof" aria-label="상담 특징">
                <span>
                  <BadgeCheck size={18} />
                  가입 전·후 모두 가능
                </span>
                <span>
                  <LockKeyhole size={18} />
                  개인정보 보호 안내
                </span>
                <span>
                  <MessageCircle size={18} />
                  원하는 방식 상담
                </span>
              </div>
            </div>

            <div className="heroPanel" aria-label="점검 요약">
              <div className="panelHeader">
                <span>
                  <ClipboardList size={20} />
                </span>
                <p>오늘 확인할 핵심</p>
              </div>
              <ul>
                <li>출산 예정일 기준 가입 가능 시점</li>
                <li>입원·수술·선천성 질환 보장 구성</li>
                <li>30세/100세 만기와 월 보험료 균형</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="quickCards" id="inspection" aria-labelledby="inspection-title">
          <div className="sectionHead">
            <p>Inspection</p>
            <h2 id="inspection-title">처음 준비해도, 이미 가입했어도 필요한 것만 점검합니다</h2>
          </div>
          <div className="cardGrid">
            {inspectionCards.map(({ title, text, icon: Icon }) => (
              <article className="infoCard" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="checkBand" aria-labelledby="check-title">
          <div className="checkVisual">
            <img src="/images/clipboard-final.png" alt="태아보험 보장 점검표" />
          </div>
          <div className="checkCopy">
            <div className="sectionHead alignLeft">
              <p>Checklist</p>
              <h2 id="check-title">상담 전에 이런 부분을 먼저 봅니다</h2>
            </div>
            <div className="checkList">
              {checklist.map(([title, text]) => (
                <div className="checkItem" key={title}>
                  <CheckCircle2 size={20} />
                  <span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="sectionHead">
            <p>Process</p>
            <h2 id="process-title">복잡한 보험 용어는 줄이고, 결정에 필요한 내용만 정리합니다</h2>
          </div>
          <div className="processGrid">
            {processSteps.map(({ title, text, icon: Icon }, index) => (
              <article className="processStep" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contentSplit" id="case">
          <article className="casePanel">
            <img src="/images/nicu-baby-final.png" alt="신생아 집중 치료를 떠올리게 하는 의료 이미지" />
            <div>
              <p className="panelLabel">Coverage Point</p>
              <h2>작은 보장 차이가 출산 후 부담 차이로 이어질 수 있어요</h2>
              <p>
                태아보험은 단순히 저렴한 보험료만 보는 상품이 아닙니다. 신생아 입원, 수술,
                선천성 질환, 산모 특약처럼 실제로 확인해야 할 항목이 많습니다.
              </p>
              <div className="caseList">
                <span>
                  <Hospital size={18} />
                  병원 이용 상황
                </span>
                <span>
                  <WalletCards size={18} />
                  월 보험료 부담
                </span>
                <span>
                  <Stethoscope size={18} />
                  산모 고지 조건
                </span>
              </div>
            </div>
          </article>

          <aside className="applyPanel" id="apply" aria-labelledby="apply-title">
            <p className="panelLabel">Free Check</p>
            <h2 id="apply-title">무료 점검 신청</h2>
            <form onSubmit={handleSubmit}>
              <label>
                이름
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="예) 김사랑"
                />
              </label>
              <label>
                연락처
                <input
                  required
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="예) 010-1234-5678"
                />
              </label>
              <label>
                출산 예정일
                <input
                  required
                  name="dueDate"
                  type="date"
                  value={form.dueDate}
                  onChange={handleChange}
                />
              </label>
              <div className="weekResult">
                <span>자동 계산 주차</span>
                <strong>{pregnancyWeek || '출산 예정일을 입력해 주세요'}</strong>
              </div>
              <label>
                가입 상태
                <select required name="status" value={form.status} onChange={handleChange}>
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  <option>가입 전</option>
                  <option>가입 완료</option>
                  <option>상담 중</option>
                  <option>잘 모르겠음</option>
                </select>
              </label>
              <label>
                상담 방식
                <select required name="channel" value={form.channel} onChange={handleChange}>
                  <option value="" disabled>
                    선택해 주세요
                  </option>
                  <option>전화</option>
                  <option>카카오톡</option>
                  <option>문자</option>
                  <option>대면</option>
                </select>
              </label>
              <label className="wideLabel">
                가장 궁금한 점
                <textarea
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  placeholder="예) 이미 가입한 보장이 충분한지 알고 싶어요."
                />
              </label>
              <label className="consent">
                <input
                  required
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                />
                <span>개인정보 수집 및 상담 목적 이용에 동의합니다.</span>
              </label>
              <button type="submit">
                신청 내용 확인하기
                <ChevronRight size={18} />
              </button>
            </form>
            {submitted && (
              <div className="submitNotice" role="status">
                <CheckCircle2 size={20} />
                <span>
                  <strong>{form.name}님, 신청 내용이 확인되었습니다.</strong>
                  담당자가 선택하신 방식으로 순차 안내드립니다.
                </span>
              </div>
            )}
            <small>
              <LockKeyhole size={14} />
              입력 정보는 상담 안내 목적에 맞춰 관리됩니다.
            </small>
          </aside>
        </section>

        <section className="selfCheck" aria-labelledby="self-title">
          <div>
            <p className="panelLabel">Self Check</p>
            <h2 id="self-title">상담 전, 지금 상태를 빠르게 가늠해 보세요</h2>
            <p>
              임신 주차, 가입 여부, 만기 구조를 알고 있으면 상담 시간이 훨씬 짧아집니다. 아직
              모르는 항목은 상담에서 함께 확인하면 됩니다.
            </p>
            <a href="#apply" onClick={goApply}>
              내 상황으로 점검 신청
              <ChevronRight size={16} />
            </a>
          </div>
          <img src="/images/self-consultation-ai.png" alt="출산 전 보험 점검 상담 장면" />
        </section>

        <section className="why" aria-labelledby="why-title">
          <div className="sectionHead">
            <p>Why Center</p>
            <h2 id="why-title">보험을 더 많이 넣는 것보다, 맞는 구조인지 보는 일이 먼저입니다</h2>
          </div>
          <div className="whyGrid">
            <div>
              <Users />
              <strong>산모 상황 중심</strong>
              <p>나이, 주차, 병력 고지, 예산을 함께 봅니다.</p>
            </div>
            <div>
              <FileCheck2 />
              <strong>가입 전·후 점검</strong>
              <p>새 설계와 기존 증권 모두 확인합니다.</p>
            </div>
            <div>
              <BadgeCheck />
              <strong>유지 부담 확인</strong>
              <p>출산 후에도 유지 가능한 보험료인지 점검합니다.</p>
            </div>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <div className="sectionHead alignLeft">
            <p>FAQ</p>
            <h2 id="faq-title">자주 묻는 질문</h2>
          </div>
          <div className="faqList">
            {faqItems.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown size={18} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footerBrand" href="#top" aria-label="태아보험점검센터 홈">
          <span className="brandMark">
            <Baby size={25} />
          </span>
          <span>
            <b>태아보험점검센터</b>
            <em>무료 보장 점검 상담</em>
          </span>
        </a>
        <div className="footerInfo">
          <div>
            <a href="#inspection">점검 항목</a>
            <a href="#faq">자주 묻는 질문</a>
            <a href="#apply">상담 신청</a>
          </div>
          <p>
            상호 : JN Partners ㅣ 대표 : 최준 ㅣ 사업자 정보 입력 예정
            <br />
            본 사이트의 상담 내용은 개인별 상황과 보험사 심사 기준에 따라 달라질 수 있습니다.
          </p>
        </div>
        <a className="kakaoBox" href="#apply" onClick={goApply}>
          <MessageCircle />
          <span>
            궁금한 점이 있으신가요?
            <b>상담 신청하기</b>
          </span>
        </a>
      </footer>

      <a className="floatingCta" href="#apply" onClick={goApply}>
        <PhoneCall size={18} />
        무료 점검 신청
      </a>
    </div>
  )
}

export default App
