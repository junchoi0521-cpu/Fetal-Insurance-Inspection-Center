import React from 'react'
import { CalendarDays, Search, Heart, ShieldCheck, Gift, ClipboardCheck, Building2, Baby, Star, ChevronRight, ChevronDown, LockKeyhole, Users, FileCheck2, BadgeCheck, HandHeart, MessageCircleHeart } from 'lucide-react'

const faqCards = [
  ['태아보험은\n언제 가입해야\n하나요?', CalendarDays],
  ['30세 만기와\n100세 만기\n뭐가 좋나요?', ShieldCheck],
  ['보험료는\n얼마 정도가\n적당한가요?', Heart],
  ['이미 가입했는데\n점검받아도\n되나요?', ClipboardCheck],
  ['현대해상 vs 메리츠\nvs DB\n어디가 좋나요?', Building2],
]

const featureCards = [
  ['임신축하\n선물 신청', Gift],
  ['가입 전\n비교점검', Search],
  ['가입 후\n보장점검', Heart],
  ['가입 강요\n절대 없음', ShieldCheck],
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#top" aria-label="마미온 홈">
          <div className="brandIcon"><Baby size={25}/></div>
          <div><strong>마미온</strong><span>임신축하선물 by JN Partners</span></div>
        </a>
        <nav className="nav">
          <a href="#gift">임신축하선물</a>
          <a href="#check">점검 포인트</a>
          <a href="#faq">궁금한 질문</a>
          <a href="#case">실제 사례</a>
          <a href="#self">자가진단</a>
        </nav>
        <a href="#apply" className="topCta">무료 선물 신청</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">임신을 진심으로 축하드립니다</p>
            <h1>예비맘을 위한<br/><span>임신축하선물,</span><br/>무료로 받아보세요</h1>
            <p className="lead">간단한 정보 입력 후 담당자가 일정 조율을 도와드려요.<br/>희망하시는 경우에만 태아보험 보장 점검도 함께 안내드립니다.</p>
            <div className="heroMiniCards">
              {featureCards.map(([text, Icon]) => <div className="miniCard" key={text}><Icon size={31}/><strong>{text}</strong></div>)}
            </div>
            <div className="heroActions"><a href="#apply" className="primaryBtn">1분 무료 선물 신청하기 <ChevronRight size={18}/></a><a href="#faq" className="secondaryBtn">궁금한 내용 먼저 보기 <ChevronDown size={18}/></a></div>
          </div>
          <div className="heroVisual">
            <div className="lightBeam" />
            <img src="/images/hero-mom.svg" alt="임산부 이미지" />
            <div className="reviewCard"><Heart size={28}/><span>지금까지</span><strong>27,843명</strong><p>예비맘이 신청했어요!</p><div className="stars"><Star/><Star/><Star/><Star/><Star/></div><b>4.9 / 5.0</b></div>
          </div>
        </section>

        <section className="faq" id="faq">
          <h2>예비맘들이 가장 많이 궁금해하는 질문</h2>
          <div className="faqGrid">{faqCards.map(([text, Icon]) => <article className="faqCard" key={text}><Icon size={34}/><h3>{text}</h3><button>자세히 보기 <ChevronRight size={14}/></button></article>)}</div>
        </section>

        <section className="contentGrid" id="check">
          <article className="caseCard" id="case">
            <img src="/images/baby-care.svg" alt="신생아 케어 이미지" />
            <div className="caseText"><h2>신생아중환자실 입원, 생각보다 비용이 큽니다</h2><p>태아보험은 단순히 선물보다 아이 상황에 맞는 입원비 보장이 충분한지 확인하는 것이 중요합니다.</p><div className="stats"><div><span>평균 입원 기간</span><strong>10.2일</strong><small>상황별 차이 발생</small></div><div><span>1일 병원 비용</span><strong>120~200만원</strong><small>상급병실/검사 기준</small></div><div><span>10일 입원 시</span><strong>2,000만원</strong><small>이상 발생 가능</small></div></div><em>* 병원 및 아이 상태에 따라 비용과 기간은 달라질 수 있습니다.</em></div>
          </article>

          <aside className="applyBox" id="apply"><p>1분이면 충분해요!</p><h2>무료 선물 신청하기</h2><form><label>이름<input placeholder="예) 김사랑" /></label><label>연락처<input placeholder="예) 010-1234-5678" /></label><label>임신 주차<input placeholder="예) 12주차" /></label><label>출산 예정일<input placeholder="예) 2026년 10월 15일" /></label><label>거주지역<input placeholder="예) 경기 파주시" /></label><label>태아보험 가입 여부<select defaultValue=""><option value="" disabled>선택해 주세요</option><option>가입 전</option><option>가입 완료</option><option>상담 중</option></select></label><button type="button">무료 선물 신청하기 <ChevronRight size={18}/></button></form><small><LockKeyhole size={14}/> 입력하신 정보는 상담 목적 외에는 사용되지 않습니다.</small></aside>
        </section>

        <section className="self" id="self">
          <div><p className="sectionLabel">태아보험 자가진단</p><h2>3가지 질문으로 현재 준비 상태를 간단히 확인해보세요.</h2><div className="steps"><span><CalendarDays/>Q1<br/><b>현재 임신 몇 주차인가요?</b></span><i>→</i><span><ShieldCheck/>Q2<br/><b>태아보험 가입하셨나요?</b></span><i>→</i><span><Heart/>Q3<br/><b>30세 만기인지 알고 계신가요?</b></span></div></div><div className="clipboard"><ClipboardCheck size={70}/><strong>진단 후 전문가의<br/>무료 점검을 받아보세요!</strong><a href="#apply">자가 점검 신청하기 <ChevronRight size={17}/></a></div>
        </section>

        <section className="why"><h2>왜 마미온일까요?</h2><div className="whyPill"><div><Users/>산모 중심<br/>맞춤 상담</div><div><FileCheck2/>가입 전/후<br/>모두 점검 가능</div><div><BadgeCheck/>불필요한 보험<br/>정리까지 안내</div><div><HandHeart/>출산 후 관리까지<br/>지속 지원</div></div><p>보험 상품은 산모님의 건강상태, 임신 주차, 보험사 인수 기준에 따라 가입 가능 여부와 조건이 달라질 수 있습니다.</p></section>
      </main>

      <footer className="footer"><div className="brand foot"><div className="brandIcon"><Baby size={25}/></div><div><strong>마미온</strong><span>by JN Partners</span></div></div><div className="footLinks"><a>회사소개</a><a>개인정보처리방침</a><a>이용약관</a><p>상호: JN Partners ㅣ 대표: 최준 ㅣ 사업자등록번호: 123-45-67890<br/>주소: 서울특별시 강남구 테헤란로 000 ㅣ 문의: 010-0000-0000<br/>© 2026 JN Partners. All rights reserved.</p></div><a className="kakao" href="#apply"><MessageCircleHeart/>궁금한 점이 있으신가요?<br/><strong>카카오톡 채널 상담</strong></a></footer>
    </div>
  )
}

export default App
