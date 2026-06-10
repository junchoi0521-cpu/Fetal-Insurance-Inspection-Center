# 태아보험점검센터

태아보험 가입 전 비교와 가입 후 보장 점검을 안내하는 React/Vite 랜딩 페이지입니다.

## 구성

- 첫 화면 CTA와 상담 신청 유도
- 임신 주차 자동 계산 입력 폼
- 상담 신청 유효성 검증, 접수번호, 제출 상태 안내
- `/api/consultations` 상담 접수 API
- 가입 전/후 점검 항목 안내
- 상담 진행 절차, 보장 점검 포인트, FAQ
- 모바일 하단 고정 신청 버튼

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 상담 신청 연결

Vercel 배포 기준으로 `api/consultations.js`가 상담 신청을 받습니다. 운영에서 실제 접수 데이터를 받으려면 환경 변수를 설정하세요.

- `CONSULTATION_WEBHOOK_URL`: 상담 신청 데이터를 받을 웹훅 URL
- `CONSULTATION_WEBHOOK_SECRET`: 선택 사항, 웹훅 요청에 `Authorization: Bearer ...`로 전달

웹훅에는 `consultation.created` 이벤트와 함께 이름, 연락처, 출산 예정일, 임신 주차, 가입 상태, 상담 방식, 연락 가능 시간, 문의 내용, 접수번호가 JSON으로 전달됩니다. 운영 배포에서 웹훅이 설정되지 않으면 API는 접수 오류를 반환합니다.
