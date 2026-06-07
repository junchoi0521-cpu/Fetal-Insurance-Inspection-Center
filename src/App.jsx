import React, { useState } from 'react'
import {
  Baby,
  CalendarDays,
  Search,
  Heart,
  ShieldCheck,
  ClipboardCheck,
  Building2,
  Star,
  ChevronRight,
  ChevronDown,
  LockKeyhole,
  Users,
  FileCheck2,
  BadgeCheck,
  HandHeart,
  MessageCircle,
  Hospital,
  WalletCards,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  Sparkles,
  ClipboardList,
} from 'lucide-react'

const heroCards = [
  ['가입 전', '비교견적', CalendarDays],
  ['가입 후', '보장점검', Search],
  ['산모별', '맞춤 안내', Heart],
  ['가입 강요', '절대 없음', ShieldCheck],
]

const faqCards = [
  ['태아보험은', '언제 가입해야', '하나요?', CalendarDays],
  ['30세 만기와', '100세 만기', '뭐가 좋나요?', ShieldCheck],
  ['보험료는', '얼마 정도가', '적당한가요?', Heart],
  ['이미 가입했는데', '점검받아도', '되나요?', ClipboardCheck],
  ['현대해상 vs 메리츠', 'vs DB', '어디가 좋나요?', Building2],
]

const whyCards = [
  ['산모 중심', '맞춤 상담', Users],
  ['가입 전/후', '모두 점검 가능', FileCheck2],
  ['불필요한 보험', '정리까지 안내', BadgeCheck],
  ['출산 후 관리까지', '지속 지원', HandHeart],
]

function calculatePregnancyWeek(dueDateValue) {
  if (!dueDateValue) return ''
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const due = new Date(`${dueDateValue}T00:00:00`)
  if (Number.isNaN(due.getTime())) return ''

  const msPerDay = 24 * 60 * 60 * 1000
  const daysUntilDue = Math.ceil((due - today) / msPerDay)
  const pregnancyDays = 280 - daysUntilDue

  if (pregnancyDays < 0) return '예정일을 다시 확인해 주세요'
  if (pregnancyDays > 300) return '출산 예정일이 지났거나 다시 확인이 필요해요'

  const weeks = Math.floor(pregnancyDays / 7)
  const days = pregnancyDays % 7
  return `현재 약 ${weeks}주 ${days}일차입니다`
}

function App() {
  const [sent, setSent] = useState(false)
  const [dueDate, setDueDate] = useState('')
  const pregnancyWeek = calculatePregnancyWeek(dueDate)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4200)
  }

  const goApply = (e) => {
    e.preventDefault()
    document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" aria-label="태아보험점검센터 홈">
          <span className="brandMark"><Baby size={25} /></span>
          <span><b>태아보험점검센터</b><em>by JN Partners</em></span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">태아보험이란?</a>
          <a href="#point">점검 포인트</a>
          <a href="#faq">궁금한 질문</a>
          <a href="#case">실제 사례</a>
          <a href="#self">자가진단</a>
        </nav>
        <a className="headerBtn" href="#apply" onClick={goApply}>무료 점검 신청</a>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="heroInner">
            <div className="heroCopy">
              <p className="eyebrow">가입 전 비교부터 가입 후 점검까지</p>
              <h1>우리 아이 태아보험,<br /><span>지금 준비한 내용으로</span><br />충분할까요?</h1>
              <p className="lead">30세 만기부터 100세 만기, 입원비, 수술비까지<br />산모님의 상황에 맞는 맞춤 점검을 무료로 받아보세요.</p>

              <div className="heroCards">
                {heroCards.map(([top, bottom, Icon]) => (
                  <a href="#apply" className="heroCard" key={top + bottom} onClick={goApply}>
                    <Icon />
                    <strong>{top}<br />{bottom}</strong>
                  </a>
                ))}
              </div>

              <div className="heroActions">
                <a className="primaryBtn" href="#apply" onClick={goApply}>1분 무료 점검 신청하기 <ChevronRight size={18} /></a>
                <a className="secondaryBtn" href="#faq">궁금한 내용 먼저 보기 <ChevronDown size={18} /></a>
              </div>
            </div>

            <div className="heroVisual">
              <div className="heroAura" />
              <img className="roomBg" src="/images/hero-room-bg.png" alt="" />
              <img className="momPng" src="/images/hero-mom-final.png" alt="임산부 이미지" />
              <div className="reviewCard">
                <Heart className="reviewIcon" />
                <span>지금까지</span>
                <strong>27,843명의</strong>
                <p>산모님이 함께했어요!</p>
                <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
                <b>4.9 / 5.0</b>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>엄마들이 가장 많이 궁금해하는 질문</h2>
          <div className="faqGrid">
            {faqCards.map(([a, b, c, Icon]) => (
              <article className="faqCard" key={a + b}>
                <Icon />
                <h3>{a}<br />{b}<br />{c}</h3>
                <a href="#apply" onClick={goApply}>자세히 보기 <ChevronRight size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="content" id="point">
          <div className="contentGrid">
            <article className="nicuCard" id="case">
              <img src="/images/nicu-baby-final.png" alt="신생아중환자실 이미지" />
              <div className="nicuText">
                <h2>신생아중환자실 입원,<br />생각보다 비용이 큽니다</h2>
                <p>태아보험은 아이 상황에 맞는 입원비 보장이 충분한지 확인하는 것이 중요합니다.</p>
                <div className="statGrid">
                  <div><Hospital /><span>평균 입원 기간</span><b>10.2일</b><small>상황별 차이 발생</small></div>
                  <div><WalletCards /><span>1일 병원 비용</span><b>120~200만원</b><small>상급병실/검사 기준</small></div>
                  <div><ChartNoAxesColumnIncreasing /><span>10일 입원 시</span><b>2,000만원</b><small>이상 발생 가능</small></div>
                </div>
                <em>* 병원 및 아이 상태에 따라 비용과 기간은 달라질 수 있습니다.</em>
              </div>
            </article>

            <article className="selfCard" id="self">
              <div className="selfHeader">
                <h2>태아보험 자가진단</h2>
                <p>3가지 질문으로 우리 아이 보험 상태를 간단히 확인해보세요.</p>
              </div>
              <div className="selfSteps">
                <span><CalendarDays /><b>Q1</b><small>현재 임신<br />몇 주차인가요?</small></span><i>›</i>
                <span><ShieldCheck /><b>Q2</b><small>태아보험<br />가입하셨나요?</small></span><i>›</i>
                <span><Heart /><b>Q3</b><small>30세 만기인지<br />알고 계신가요?</small></span>
              </div>
              <div className="selfCta">
                <img src="/images/self-consultation-ai.png" alt="출산 전 전문가와 태아보험을 점검하는 상담 이미지" className="selfConsultImage" />
                <strong>출산 전 전문가의<br />무료 점검을 받아보세요!</strong>
                <a href="#apply" onClick={goApply}>무료 점검 신청하기 <ChevronRight size={15} /></a>
              </div>
            </article>

            <aside className="applyBox" id="apply">
              {sent && <div className="toast"><CheckCircle2 size={19} /> 신청 내용이 확인되었습니다.</div>}
              <p>1분이면 충분해요!</p>
              <h2>무료 점검 신청하기</h2>
              <form onSubmit={handleSubmit}>
                <label>이름<input required placeholder="예) 김사랑" /></label>
                <label>연락처<input required type="tel" placeholder="예) 010-1234-5678" /></label>
                <label>출산 예정일<input required type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></label>
                <div className="weekResult"><span>자동 계산 주차</span><strong>{pregnancyWeek || '출산 예정일을 입력하면 자동 계산됩니다'}</strong></div>
                <label>태아보험 가입 여부<select required defaultValue=""><option value="" disabled>선택해 주세요</option><option>가입 전</option><option>가입 완료</option><option>상담 중</option></select></label>
                <label>희망 점검<select required defaultValue=""><option value="" disabled>선택해 주세요</option><option>대면</option><option>카톡</option><option>전화</option><option>문자</option></select></label>
                <button type="submit">무료 점검 신청하기 <ChevronRight size={18} /></button>
              </form>
              <small><LockKeyhole size={14} /> 입력하신 정보는 점검 상담 목적으로만 사용되며 안전하게 보관됩니다.</small>
            </aside>
          </div>
        </section>

        <section className="why">
          <h2>왜 태아보험점검센터일까요?</h2>
          <div className="whyPill">
            {whyCards.map(([a, b, Icon]) => <div key={a + b}><Icon /><strong>{a}<br />{b}</strong></div>)}
          </div>
          <p>보험 상품은 산모님의 건강상태, 임신 주차, 보험사 인수 기준에 따라 가입 가능 여부와 조건이 달라질 수 있습니다.</p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footerBrand" href="#top"><span className="brandMark"><Baby size={25} /></span><span><b>태아보험점검센터</b><em>by JN Partners</em></span></a>
        <div className="footerInfo">
          <div><a href="#top">회사소개</a><a href="#top">개인정보처리방침</a><a href="#top">이용약관</a></div>
          <p>상호 : JN Partners ㅣ 대표 : 최준 ㅣ 사업자등록번호 : 123-45-67890<br />주소 : 서울특별시 강남구 테헤란로 000, 000동 ㅣ 문의 : 010-0000-0000<br />© 2026 JN Partners. All rights reserved.</p>
        </div>
        <a className="kakaoBox" href="#apply" onClick={goApply}><MessageCircle /><span>궁금한 점이 있으신가요?<br /><b>카카오톡 채널 상담</b></span></a>
      </footer>

      <a className="floating" href="#apply" onClick={goApply}>무료 점검 신청</a>
    </div>
  )
}

export default App
