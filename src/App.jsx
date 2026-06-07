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
  Activity,
  WalletCards,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

const featureCards = [
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

const whyItems = [
  ['산모 중심', '맞춤 상담', Users],
  ['가입 전/후', '모두 점검 가능', FileCheck2],
  ['불필요한 보험', '정리까지 안내', BadgeCheck],
  ['출산 후 관리까지', '지속 지원', HandHeart],
]

function scrollToApply() {
  document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function App() {
  const [done, setDone] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setDone(true)
    setTimeout(() => setDone(false), 3500)
  }

  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#top" aria-label="태아보험점검센터 홈">
          <span className="logoMark"><Baby size={25}/></span>
          <span><b>태아보험점검센터</b><em>by JN Partners</em></span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">태아보험이란?</a>
          <a href="#point">점검 포인트</a>
          <a href="#faq">궁금한 질문</a>
          <a href="#case">실제 사례</a>
          <a href="#self">자가진단</a>
        </nav>
        <a className="headerBtn" href="#apply">무료 점검 신청</a>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="heroBgGlow" />
          <div className="heroInner">
            <div className="heroCopy">
              <p className="eyebrow">가입 전 비교부터 가입 후 점검까지</p>
              <h1>우리 아이 태아보험,<br/><span>지금 준비한 내용으로</span><br/>충분할까요?</h1>
              <p className="lead">30세 만기부터 100세 만기, 입원비, 수술비까지<br/>산모님의 상황에 맞는 맞춤 점검을 무료로 받아보세요.</p>
              <div className="miniGrid">
                {featureCards.map(([a,b,Icon]) => (
                  <button className="miniCard" key={a+b} type="button" onClick={scrollToApply}>
                    <Icon/><strong>{a}<br/>{b}</strong>
                  </button>
                ))}
              </div>
              <div className="heroBtns">
                <a className="primary" href="#apply">1분 무료 점검 신청하기 <ChevronRight size={18}/></a>
                <a className="secondary" href="#faq">궁금한 내용 먼저 보기 <ChevronDown size={18}/></a>
              </div>
            </div>

            <div className="heroVisual">
              <div className="sparkle one"><Sparkles size={18}/></div>
              <div className="sparkle two"><Sparkles size={14}/></div>
              <div className="imageMist" />
              <img className="heroMom" src="/images/hero-mom.png" alt="태아보험 점검을 받는 임산부" />
              <div className="reviewCard" aria-label="후기 평점">
                <Heart className="reviewHeart" />
                <span>지금까지</span>
                <strong>27,843명의</strong>
                <p>산모님이 함께했어요!</p>
                <div className="stars"><Star/><Star/><Star/><Star/><Star/></div>
                <b>4.9 / 5.0</b>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>엄마들이 가장 많이 궁금해하는 질문</h2>
          <div className="faqGrid">
            {faqCards.map(([a,b,c,Icon]) => (
              <article className="faqCard" key={a+b}>
                <Icon />
                <h3>{a}<br/>{b}<br/>{c}</h3>
                <button type="button" onClick={scrollToApply}>자세히 보기 <ChevronRight size={14}/></button>
              </article>
            ))}
          </div>
        </section>

        <section className="contentArea" id="point">
          <div className="contentLeft">
            <article className="nicuCard" id="case">
              <img src="/images/nicu-baby.png" alt="신생아중환자실 이미지" />
              <div className="nicuText">
                <h2>신생아중환자실 입원,<br/>생각보다 비용이 큽니다</h2>
                <p>태아보험은 아이 상황에 맞는 입원비 보장이 충분한지 확인하는 것이 중요합니다.</p>
                <div className="stats">
                  <div><Hospital/><span>평균 입원 기간</span><b>10.2일</b><small>상황별 차이 발생</small></div>
                  <div><WalletCards/><span>1일 병원 비용</span><b>120~200만원</b><small>상급병실/검사 기준</small></div>
                  <div><Activity/><span>10일 입원 시</span><b>2,000만원</b><small>이상 발생 가능</small></div>
                </div>
                <small className="notice">* 병원 및 아이 상태에 따라 비용과 기간은 달라질 수 있습니다.</small>
              </div>
            </article>

            <article className="selfCard" id="self">
              <div>
                <h2>태아보험 자가진단</h2>
                <p>3가지 질문으로 우리 아이 보험 상태를 간단히 확인해보세요.</p>
                <div className="steps">
                  <span><CalendarDays/>Q1<small>현재 임신<br/>몇 주차인가요?</small></span>
                  <i>→</i>
                  <span><ShieldCheck/>Q2<small>태아보험<br/>가입하셨나요?</small></span>
                  <i>→</i>
                  <span><Heart/>Q3<small>30세 만기인지<br/>알고 계신가요?</small></span>
                </div>
              </div>
              <div className="clipBox">
                <img src="/images/clipboard.png" alt="자가진단 체크리스트" />
                <b>진단 후 전문가의<br/>무료 점검을 받아보세요!</b>
                <button type="button" onClick={scrollToApply}>자세히 점검 신청하기 <ChevronRight size={16}/></button>
              </div>
            </article>
          </div>

          <aside className="apply" id="apply">
            {done && <div className="toast"><CheckCircle2 size={18}/> 신청 정보가 접수되었습니다.</div>}
            <p>1분이면 충분해요!</p>
            <h2>무료 점검 신청하기</h2>
            <form onSubmit={handleSubmit}>
              <label>이름<input required placeholder="예) 김사랑"/></label>
              <label>연락처<input required placeholder="예) 010-1234-5678"/></label>
              <label>임신 주차<input placeholder="예) 12주차"/></label>
              <label>출산 예정일<input placeholder="예) 2026년 10월 15일"/></label>
              <label>태아보험 가입 여부<select defaultValue=""><option value="" disabled>선택해 주세요</option><option>가입 전</option><option>가입 완료</option><option>상담 중</option></select></label>
              <button type="submit">무료 점검 신청하기 <ChevronRight size={18}/></button>
            </form>
            <small><LockKeyhole size={14}/> 입력하신 정보는 점검 상담 목적으로만 사용되며 안전하게 보관됩니다.</small>
          </aside>
        </section>

        <section className="why">
          <h2>왜 태아보험점검센터일까요?</h2>
          <div className="whyBox">
            {whyItems.map(([a,b,Icon]) => <button key={a+b} type="button" onClick={scrollToApply}><Icon/>{a}<br/>{b}</button>)}
          </div>
          <p>보험 상품은 산모님의 건강상태, 임신 주차, 보험사 인수 기준에 따라 가입 가능 여부와 조건이 달라질 수 있습니다.</p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#top"><span className="logoMark"><Baby size={25}/></span><span><b>태아보험점검센터</b><em>by JN Partners</em></span></a>
        <div className="footerInfo"><div><a href="#top">회사소개</a><a href="#top">개인정보처리방침</a><a href="#top">이용약관</a></div><p>상호 : JN Partners ㅣ 대표 : 최준 ㅣ 사업자등록번호 : 123-45-67890<br/>주소 : 서울특별시 강남구 테헤란로 000, 000동 ㅣ 문의 : 010-0000-0000<br/>© 2026 JN Partners. All rights reserved.</p></div>
        <a className="talk" href="#apply"><MessageCircle/>궁금한 점이 있으신가요?<br/><b>카카오톡 채널 상담</b></a>
      </footer>
    </div>
  )
}

export default App
