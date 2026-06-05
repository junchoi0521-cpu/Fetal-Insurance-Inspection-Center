import React from 'react'
import {
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
  Baby,
  Hospital,
  WalletCards,
  ChartNoAxesColumnIncreasing,
  ListChecks,
  Stethoscope
} from 'lucide-react'

const featureCards = [
  ['가입 전\n비교견적', CalendarDays],
  ['가입 후\n보장점검', Search],
  ['산모별\n맞춤 안내', Heart],
  ['가입 강요\n절대 없음', ShieldCheck]
]

const faqs = [
  ['태아보험은\n언제 가입해야\n하나요?', CalendarDays],
  ['30세 만기와\n100세 만기\n뭐가 좋나요?', ShieldCheck],
  ['보험료는\n얼마 정도가\n적당한가요?', Heart],
  ['이미 가입했는데\n점검받아도\n되나요?', ClipboardCheck],
  ['현대해상 vs 메리츠\nvs DB\n어디가 좋나요?', Building2]
]

const why = [
  ['산모 중심\n맞춤 상담', Users],
  ['가입 전/후\n모두 점검 가능', FileCheck2],
  ['불필요한 보험\n정리까지 안내', BadgeCheck],
  ['출산 후 관리까지\n지속 지원', HandHeart]
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#top" aria-label="홈으로 이동">
          <span className="logoMark"><Baby size={28} /></span>
          <span>
            <strong>태아보험점검센터</strong>
            <em>by JN Partners</em>
          </span>
        </a>

        <nav className="nav" aria-label="주요 메뉴">
          <a href="#about">태아보험이란?</a>
          <a href="#point">점검 포인트</a>
          <a href="#faq">궁금한 질문</a>
          <a href="#case">실제 사례</a>
          <a href="#self">자가진단</a>
        </nav>

        <a className="headerCta" href="#apply">무료 점검 신청</a>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="heroInner">
            <div className="heroCopy">
              <p className="eyebrow">가입 전 비교부터 가입 후 점검까지</p>
              <h1>
                우리 아이 태아보험,<br />
                <span>지금 준비한 내용으로</span><br />
                충분할까요?
              </h1>
              <p className="lead">
                30세 만기부터 100세 만기, 입원비, 수술비까지<br />
                산모님의 상황에 맞는 맞춤 점검을 무료로 받아보세요.
              </p>

              <div className="featureGrid">
                {featureCards.map(([label, Icon]) => (
                  <article className="featureCard" key={label}>
                    <Icon />
                    <strong>{label}</strong>
                  </article>
                ))}
              </div>

              <div className="heroActions">
                <a href="#apply" className="primaryBtn">
                  1분 무료 점검 신청하기 <ChevronRight size={18} />
                </a>
                <a href="#faq" className="secondaryBtn">
                  궁금한 내용 먼저 보기 <ChevronDown size={18} />
                </a>
              </div>
            </div>

            <div className="heroVisual" aria-hidden="true">
              <img src="/images/hero-mom-ai.png" alt="" />
              <div className="reviewCard">
                <Heart className="reviewHeart" />
                <span>지금까지</span>
                <strong>27,843명의</strong>
                <p>산모님이 함께했어요!</p>
                <div className="stars" aria-label="평점 별점">
                  <Star /><Star /><Star /><Star /><Star />
                </div>
                <b>4.9 / 5.0</b>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>엄마들이 가장 많이 궁금해하는 질문</h2>
          <div className="faqGrid">
            {faqs.map(([title, Icon]) => (
              <article className="faqCard" key={title}>
                <Icon />
                <h3>{title}</h3>
                <a href="#apply">자세히 보기 <ChevronRight size={14} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="mainGrid" id="point">
          <div className="leftColumn">
            <article className="nicuCard" id="case">
              <div className="nicuImage">
                <img src="/images/baby-nicu-ai.png" alt="신생아 케어 이미지" />
              </div>
              <div className="nicuCopy">
                <h2>신생아중환자실 입원, 생각보다 비용이 큽니다</h2>
                <p>예기치 못한 상황에 대비하려면 입원비 보장이 충분한지 확인하는 것이 중요합니다.</p>
                <div className="statGrid">
                  <div>
                    <Hospital />
                    <span>평균 입원 기간</span>
                    <strong>10.2일</strong>
                    <small>상황별 차이 발생</small>
                  </div>
                  <div>
                    <WalletCards />
                    <span>1일 병원 비용</span>
                    <strong>120~200만원</strong>
                    <small>상급병실/검사 기준</small>
                  </div>
                  <div>
                    <ChartNoAxesColumnIncreasing />
                    <span>10일 입원 시</span>
                    <strong>2,000만원</strong>
                    <small>이상 발생 가능</small>
                  </div>
                </div>
                <p className="notice">* 병원 및 아이 상태에 따라 비용과 기간은 달라질 수 있습니다.</p>
              </div>
            </article>

            <article className="selfCard" id="self">
              <div className="selfCopy">
                <p className="sectionLabel">태아보험 자가진단</p>
                <h2>3가지 질문으로 우리 아이 보험 상태를 간단히 확인해보세요.</h2>
                <div className="steps">
                  <div><CalendarDays /><span>Q1</span><b>현재 임신<br />몇 주차인가요?</b></div>
                  <i>→</i>
                  <div><ShieldCheck /><span>Q2</span><b>태아보험<br />가입하셨나요?</b></div>
                  <i>→</i>
                  <div><Heart /><span>Q3</span><b>30세 만기인지<br />알고 계신가요?</b></div>
                </div>
              </div>
              <div className="selfVisual">
                <ListChecks className="clipIcon" />
                <img src="/images/clipboard-ai.png" alt="체크리스트 이미지" />
                <strong>진단 후 전문가의<br />무료 점검을 받아보세요!</strong>
                <a href="#apply">자세히 점검 신청하기 <ChevronRight size={16} /></a>
              </div>
            </article>
          </div>

          <aside className="applyBox" id="apply">
            <p>1분이면 충분해요!</p>
            <h2>무료 점검 신청하기</h2>
            <form>
              <label>이름<input type="text" placeholder="예) 김사랑" /></label>
              <label>연락처<input type="tel" placeholder="예) 010-1234-5678" /></label>
              <label>임신 주차<input type="text" placeholder="예) 12주차" /></label>
              <label>출산 예정일<input type="text" placeholder="예) 2026년 10월 15일" /></label>
              <label>태아보험 가입 여부
                <select defaultValue="">
                  <option value="" disabled>선택해 주세요</option>
                  <option>가입 전</option>
                  <option>가입 완료</option>
                  <option>상담 중</option>
                </select>
              </label>
              <button type="button">무료 점검 신청하기 <ChevronRight size={18} /></button>
            </form>
            <small><LockKeyhole size={14} /> 입력하신 정보는 점검 상담 목적으로만 사용되며 안전하게 보관됩니다.</small>
          </aside>
        </section>

        <section className="why" id="why">
          <h2>왜 태아보험점검센터일까요?</h2>
          <div className="whyPill">
            {why.map(([label, Icon]) => (
              <div key={label}><Icon /><span>{label}</span></div>
            ))}
          </div>
          <p>보험 상품은 산모님의 건강상태, 임신 주차, 보험사 인수 기준에 따라 가입 가능 여부와 조건이 달라질 수 있습니다.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <span className="logoMark"><Baby size={28} /></span>
          <span><strong>태아보험점검센터</strong><em>by JN Partners</em></span>
        </div>
        <div className="footerInfo">
          <div className="links"><a href="#top">회사소개</a><a href="#top">개인정보처리방침</a><a href="#top">이용약관</a></div>
          <p>상호 : JN Partners ㅣ 대표 : 최준 ㅣ 사업자등록번호 : 123-45-67890<br />주소 : 서울특별시 강남구 테헤란로 000, 000호 ㅣ 문의 : 010-0000-0000</p>
          <p>© 2026 JN Partners. All rights reserved.</p>
        </div>
        <a className="kakao" href="#apply">
          <span>궁금한 점이 있으신가요?</span>
          <b>카카오톡 채널 상담 <MessageCircle size={16} /></b>
        </a>
      </footer>

      <a className="floatingCta" href="#apply">무료 점검 신청</a>
    </div>
  )
}

export default App
