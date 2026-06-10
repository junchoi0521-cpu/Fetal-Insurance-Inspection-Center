import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import consultationHandler from './api/consultations.js'

function consultationApiPlugin() {
  return {
    name: 'consultation-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/consultations', async (req, res) => {
        const response = {
          setHeader: res.setHeader.bind(res),
          status(code) {
            res.statusCode = code
            return this
          },
          json(body) {
            if (!res.headersSent) {
              res.setHeader('Content-Type', 'application/json; charset=utf-8')
            }
            res.end(JSON.stringify(body))
            return body
          },
          end() {
            res.end()
          },
        }

        try {
          await consultationHandler(req, response)
        } catch {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(
            JSON.stringify({
              ok: false,
              message: '상담 접수 처리 중 오류가 발생했습니다.',
            }),
          )
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), consultationApiPlugin()],
})
