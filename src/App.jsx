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
  MessageCircleHeart,
  Baby,
  Gift,
  Activity,
  ClipboardList,
  Menu,
} from 'lucide-react'

const faqCards = [
  ['태아보험은\n언제 가입해야\n하나요?', CalendarDays],
  ['30세 만기와\n100세 만기\n뭐가 좋나요?', ShieldCheck],
  ['보험료는\n얼마 정도가\n적당한가요?', Activity],
  ['이미 가입했는데\n점검받아도\n되나요?', ClipboardCheck],
  ['현대해상 vs 메리츠\nvs DB\n어디가 좋나요?', Building2],
]

const heroCards = [
  ['가입 전\n비교견적', CalendarDays],
  ['가입 후\n보장점검', Search],
  ['산모별\n맞춤 안내', Heart],
  ['가입 강요\n절대 없음', ShieldCheck],
]

function App() {
  return (
    <div className="site">
      <header className="header">
        <a href="#top" className="brand" aria-label="태아보험점검센터 홈">
          <span className="brandMark"><Baby size={24} /></span>
          <span className="brandText">
            <strong>태아보험점검센터</strong>
            <em>by JN Partners</em>
          </span>
        </a>

        <nav className="nav">
          <a href="#about">태아보험이란?</a>
          <a href="#check">점검 포인트</a>
          <a href="#faq">궁금한 질문</a>
          <a href="#case">실제 사례</a>
          <a href="#self">자가진단</a>
        </nav>

        <a href="#apply" className="headerBtn">무료 점검 신청</a>
        <button className="mobileMenu" aria-label="메뉴"><Menu size={22} /></button>
      </header>

      <main id="top">
        <section className="hero" id="about">
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

            <div className="heroCards">
              {heroCards.map(([title, Icon]) => (
                <article className="heroCard" key={title}>
                  <Icon size={30} />
                  <strong>{title}</strong>
                </article>
              ))}
            </div>

            <div className="heroActions">
              <a href="#apply" className="primaryBtn">1분 무료 점검 신청하기 <ChevronRight size={18} /></a>
              <a href="#faq" className="secondaryBtn">궁금한 내용 먼저 보기 <ChevronDown size={18} /></a>
            </div>
          </div>

          <div className="heroImageWrap">
            <div className="heroImage">
              <div className="momIllustration" aria-label="임산부 이미지" />
              <div className="flowerVase" />
              <div className="babyShoes" />
            </div>
            <div className="scoreCard">
              <Heart size={25} />
              <span>지금까지</span>
              <strong>27,843명</strong>
              <p>산모님이 점검받았어요!</p>
              <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
              <b>4.9 / 5.0</b>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>엄마들이 가장 많이 궁금해하는 질문</h2>
          <div className="faqGrid">
            {faqCards.map(([title, Icon]) => (
              <article className="faqCard" key={title}>
                <Icon size={34} />
                <h3>{title}</h3>
                <button type="button">자세히 보기 <ChevronRight size={14} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="mainGrid" id="check">
          <div className="leftColumn">
            <article className="casePanel" id="case">
              <div className="nicuPhoto">
                <span className="incubator" />
                <span className="babyFace" />
              </div>
              <div className="caseText">
                <h2>신생아중환자실 입원, 생각보다 비용이 큽니다</h2>
                <p>예기치 못한 상황에 대비하려면 입원비 보장이 충분한지 확인하는 것이 중요합니다.</p>
                <div className="statGrid">
                  <div>
                    <span>평균 입원 기간</span>
                    <strong>10.2일</strong>
                    <small>상급병실 사용 기준</small>
                  </div>
                  <div>
                    <span>1일 병원 비용</span>
                    <strong>120~200만원</strong>
                    <small>상급종합병원 기준</small>
                  </div>
                  <div>
                    <span>10일 입원 시</span>
                    <strong>2,000만원</strong>
                    <small>이상 발생 가능</small>
                  </div>
                </div>
                <em>* 병원 및 아이 상태에 따라 비용과 기간은 달라질 수 있습니다.</em>
              </div>
            </article>

            <article className="selfPanel" id="self">
              <div className="selfText">
                <p>태아보험 자가진단</p>
                <h2>3가지 질문으로 우리 아이 보험 상태를 간단히 확인해보세요.</h2>
                <div className="steps">
                  <span><CalendarDays /> <b>Q1</b><strong>현재 임신<br />몇 주차인가요?</strong></span>
                  <i>→</i>
                  <span><ShieldCheck /> <b>Q2</b><strong>태아보험<br />가입하셨나요?</strong></span>
                  <i>→</i>
                  <span><Heart /> <b>Q3</b><strong>30세 만기인지<br />알고 계신가요?</strong></span>
                </div>
              </div>
              <div className="selfVisual">
                <span className="pencil" />
                <div className="clipboard"><ClipboardList size={62} /></div>
                <strong>진단 후 전문가의<br />무료 점검을 받아보세요!</strong>
                <a href="#apply">자가 점검 신청하기 <ChevronRight size={17} /></a>
              </div>
            </article>
          </div>

          <aside className="applyBox" id="apply">
            <p>1분이면 충분해요!</p>
            <h2>무료 점검 신청하기</h2>
            <form>
              <label>이름<input placeholder="예) 김사랑" /></label>
              <label>연락처<input placeholder="예) 010-1234-5678" /></label>
              <label>임신 주차<input placeholder="예) 12주차" /></label>
              <label>출산 예정일<input placeholder="예) 2026년 10월 15일" /></label>
              <label>태아보험 가입 여부<select defaultValue=""><option value="" disabled>선택해 주세요</option><option>가입 전</option><option>가입 완료</option><option>상담 중</option></select></label>
              <button type="button">무료 점검 신청하기 <ChevronRight size={18} /></button>
            </form>
            <small><LockKeyhole size={14} /> 입력하신 정보는 점검 상담 목적으로만 사용되며 안전하게 보호됩니다.</small>
          </aside>
        </section>

        <section className="why">
          <h2>왜 태아보험점검센터일까요?</h2>
          <div className="whyPill">
            <div><Users />산모 중심<br />맞춤 상담</div>
            <div><FileCheck2 />가입 전/후<br />모두 점검 가능</div>
            <div><BadgeCheck />불필요한 보험<br />정리까지 안내</div>
            <div><HandHeart />출산 후 관리까지<br />지속 지원</div>
          </div>
          <p>보험 상품은 산모님의 건강상태, 임신 주차, 보험사 인수 기준에 따라 가입 가능 여부와 조건이 달라질 수 있습니다.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="brand footerBrand">
          <span className="brandMark"><Baby size={24} /></span>
          <span className="brandText"><strong>태아보험점검센터</strong><em>by JN Partners</em></span>
        </div>
        <div className="footerInfo">
          <div><a>회사소개</a><a>개인정보처리방침</a><a>이용약관</a></div>
          <p>상호: JN Partners ㅣ 대표: 최준 ㅣ 사업자등록번호: 123-45-67890<br />주소: 서울특별시 강남구 테헤란로 000, 000호 ㅣ 문의: 010-0000-0000<br />© 2026 JN Partners. All rights reserved.</p>
        </div>
        <a href="#apply" className="kakaoBox"><MessageCircleHeart /> <span>궁금한 점이 있으신가요?<br /><strong>카카오톡 채널 상담</strong></span></a>
      </footer>
    </div>
  )
}

export default App
