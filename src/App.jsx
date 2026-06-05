import React, { useState } from 'react'
import { CalendarDays, Gift, Heart, ShieldCheck, MapPin, Baby, CheckCircle2, MessageCircle, ChevronRight, Star, ClipboardCheck, Phone, Home, Sparkles } from 'lucide-react'

const faq = [
  ['임신축하선물은 정말 무료인가요?', '네, 신청부터 선물 전달까지 무료로 진행됩니다.'],
  ['보험 가입을 꼭 해야 하나요?', '아니요. 선물 신청과 점검은 별도이며 가입 강요는 없습니다.'],
  ['이미 태아보험 가입했는데 신청 가능할까요?', '가능합니다. 가입한 내용이 충분한지 확인받을 수 있습니다.'],
  ['어떤 선물을 받을 수 있나요?', '시기와 지역에 따라 구성은 달라질 수 있으며, 담당자가 안내드립니다.'],
  ['상담은 어디서 진행되나요?', '카페, 병원 인근, 자택 인근 등 산모님 편한 장소로 조율합니다.'],
]

const benefits = [
  ['100% 무료 신청', Gift],
  ['산모 중심 일정 조율', CalendarDays],
  ['가입 강요 없음', ShieldCheck],
  ['필요한 보장만 점검', Heart],
]

function App() {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#top" aria-label="마미온 홈">
          <div className="logoMark"><Baby size={26}/></div>
          <div><b>마미온</b><span>임신축하선물 by JN Partners</span></div>
        </a>
        <nav>
          <a href="#gift">선물 안내</a><a href="#check">보험 점검</a><a href="#faq">궁금한 질문</a><a href="#form">신청하기</a>
        </nav>
        <a className="topCta" href="#form">무료 신청</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">임신을 진심으로 축하드립니다</p>
            <h1>예비맘을 위한<br/><strong>임신축하선물</strong><br/>무료로 신청하세요.</h1>
            <p className="lead">간단히 신청하면 지역 담당자가 일정을 조율해 선물을 전달드리고, 원하시는 경우 태아보험 점검까지 함께 도와드립니다.</p>
            <div className="heroCards">
              {benefits.map(([t, Icon]) => <div className="miniCard" key={t}><Icon size={27}/><span>{t}</span></div>)}
            </div>
            <div className="heroActions"><a className="primary" href="#form">1분 무료 신청하기 <ChevronRight size={18}/></a><a className="secondary" href="#gift">선물 과정 보기</a></div>
          </div>
          <div className="heroVisual">
            <img src="/images/hero-mom.svg" alt="임산부 이미지" />
            <div className="reviewCard"><Heart size={24}/><p>지금까지</p><b>27,843명</b><span>예비맘이 신청했어요</span><div>{Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor"/> )}</div><small>4.9 / 5.0</small></div>
          </div>
        </section>

        <section id="gift" className="section">
          <h2>신청은 이렇게 진행돼요</h2>
          <div className="processGrid">
            {[['신청서 작성', ClipboardCheck], ['담당자 일정 조율', Phone], ['편한 장소에서 선물 전달', MapPin], ['희망 시 보험 점검', ShieldCheck]].map(([t, Icon], i) => <article className="process" key={t}><Icon size={34}/><b>STEP {i+1}</b><h3>{t}</h3><p>산모님 상황에 맞춰 부담 없이 진행됩니다.</p></article>)}
          </div>
        </section>

        <section id="check" className="splitSection">
          <div className="infoBox">
            <img src="/images/baby-care.svg" alt="아기 케어 이미지" />
            <div><p className="eyebrow">보험 점검은 선택입니다</p><h2>태아보험은 가입보다<br/>가입 후 관리가 중요합니다.</h2><p>30세 만기, 100세 만기, 입원비, 수술비, 산모특약 등 산모님이 준비한 내용이 현재 상황에 맞는지 확인해드립니다.</p><div className="statGrid"><span><b>입원비</b>핵심 점검</span><span><b>만기</b>30세/100세 비교</span><span><b>관리</b>불필요 특약 정리</span></div></div>
          </div>
          <FormCard onSubmit={onSubmit} submitted={submitted}/>
        </section>

        <section className="selfCheck">
          <div><Sparkles size={28}/><h2>간단 자가진단</h2><p>아래 중 하나라도 해당된다면 점검을 받아보시는 것이 좋습니다.</p></div>
          <div className="checkItems"><span>30세 만기인지 잘 모른다</span><span>입원비 구성이 부족한지 궁금하다</span><span>이미 가입했지만 설명을 충분히 못 들었다</span></div>
        </section>

        <section id="faq" className="section">
          <h2>엄마들이 가장 많이 궁금해하는 질문</h2>
          <div className="faqGrid">{faq.map(([q,a]) => <article className="faq" key={q}><Heart size={24}/><h3>{q}</h3><p>{a}</p><a href="#form">자세히 보기</a></article>)}</div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand"><div className="logoMark"><Baby size={24}/></div><div><b>마미온</b><span>임신축하선물 by JN Partners</span></div></div>
        <p>보험 상품은 산모님의 건강상태, 임신 주차, 보험사 인수 기준에 따라 가입 가능 여부와 조건이 달라질 수 있습니다.</p>
        <p>상호: JN Partners ㅣ 대표: 최준 ㅣ 사업자등록번호: 123-45-67890 ㅣ 문의: 010-0000-0000</p>
      </footer>
      <a className="kakao" href="#form"><MessageCircle size={20}/> 카카오톡 상담</a>
    </div>
  )
}

function FormCard({ onSubmit, submitted }) {
  return <aside id="form" className="formCard"><p>1분이면 충분해요!</p><h2>무료 신청하기</h2>{submitted ? <div className="done"><CheckCircle2 size={44}/><b>신청이 완료되었습니다.</b><span>담당자가 확인 후 연락드릴게요.</span></div> : <form onSubmit={onSubmit}><input required placeholder="이름"/><input required placeholder="연락처"/><input placeholder="임신 주차 예) 12주차"/><input placeholder="출산 예정일 예) 2026년 10월 15일"/><input placeholder="거주지역 예) 파주시 / 일산"/><select defaultValue=""><option value="" disabled>상담 희망 장소</option><option>카페</option><option>병원 인근</option><option>자택 인근</option></select><select defaultValue=""><option value="" disabled>태아보험 가입 여부</option><option>가입</option><option>미가입</option><option>상담 예정</option></select><button>무료 신청하기 <ChevronRight size={18}/></button><small>입력하신 정보는 일정 조율 및 상담 목적으로만 사용됩니다.</small></form>}</aside>
}

export default App
