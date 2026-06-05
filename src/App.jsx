const faqCards = [
  ['🎁', '임신축하선물은\n정말 무료인가요?'],
  ['📅', '태아보험은\n언제 점검해야 하나요?'],
  ['🛡️', '이미 가입했는데\n봐주실 수 있나요?'],
  ['🏥', '입원비 보장은\n충분한가요?'],
  ['💬', '상담만 받아도\n괜찮나요?'],
]

const benefits = [
  ['👩‍🍼', '산모 중심\n맞춤 안내'],
  ['🎁', '임신축하선물\n무료 신청'],
  ['📋', '가입 전/후\n모두 점검'],
  ['🧹', '불필요한 보장\n정리 안내'],
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="마미온 홈">
          <span className="logo-mark">♡</span>
          <span><strong>마미온</strong><small>Mamion Gift Care</small></span>
        </a>
        <nav>
          <a href="#gift">임신축하선물</a>
          <a href="#check">점검 포인트</a>
          <a href="#faq">궁금한 질문</a>
          <a href="#apply">신청하기</a>
        </nav>
        <a href="#apply" className="header-cta">무료 신청</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">임신을 진심으로 축하드립니다</p>
          <h1>예비맘을 위한<br /><span>임신축하선물,</span><br />무료로 신청하세요</h1>
          <p className="lead">간단한 정보 입력 후 담당자가 일정 조율을 도와드려요. 선물 전달과 함께 원하시는 경우 태아보험 점검도 무료로 받아보실 수 있습니다.</p>
          <div className="hero-badges">
            <div>🎁<b>무료 선물</b><small>신청 가능</small></div>
            <div>📍<b>지역 담당자</b><small>일정 조율</small></div>
            <div>🛡️<b>가입 강요</b><small>절대 없음</small></div>
            <div>💬<b>희망 시</b><small>보험 점검</small></div>
          </div>
          <div className="hero-actions">
            <a className="primary-btn" href="#apply">1분 무료 신청하기 <span>›</span></a>
            <a className="secondary-btn" href="#faq">궁금한 내용 먼저 보기⌄</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/hero-mom.svg" alt="임신축하선물을 기다리는 예비맘 일러스트" />
          <div className="rating-card">
            <div className="heart">♡</div>
            <small>지금까지</small>
            <strong>27,843명</strong>
            <span>예비맘이 신청했어요!</span>
            <p>★★★★★</p>
            <em>4.9 / 5.0</em>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <h2>엄마들이 가장 많이 궁금해하는 질문</h2>
        <div className="faq-grid">
          {faqCards.map(([icon, title]) => <article className="faq-card" key={title}><i>{icon}</i><h3>{title}</h3><button>자세히 보기 ›</button></article>)}
        </div>
      </section>

      <section id="check" className="content-grid">
        <article className="nicu-card">
          <img src="/images/baby-care.svg" alt="신생아 케어 일러스트" />
          <div className="nicu-copy">
            <h2>선물만 받고 끝나는 게 아니라,<br />필요한 부분까지 가볍게 확인해드려요.</h2>
            <p>태아보험은 가입 전보다 가입 후 점검이 더 중요할 수 있습니다. 입원비, 수술비, 만기 구조 등 산모님의 상황에 맞게 필요한 부분만 확인해보세요.</p>
            <div className="stats">
              <div><small>평균 상담 시간</small><b>20분</b><span>핵심만 간단히</span></div>
              <div><small>신청 비용</small><b>0원</b><span>무료 신청</span></div>
              <div><small>가입 강요</small><b>없음</b><span>희망 시 안내</span></div>
            </div>
          </div>
        </article>

        <aside id="apply" className="apply-card">
          <p>1분이면 충분해요!</p>
          <h2>무료 신청하기 ♡</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label><span>이름</span><input placeholder="예) 김사랑" /></label>
            <label><span>연락처</span><input placeholder="예) 010-1234-5678" /></label>
            <label><span>임신 주차</span><input placeholder="예) 12주차" /></label>
            <label><span>출산 예정일</span><input placeholder="예) 2026년 10월 15일" /></label>
            <label><span>거주지역</span><input placeholder="예) 경기 파주시" /></label>
            <label><span>태아보험 가입 여부</span><select defaultValue=""><option value="" disabled>선택해 주세요</option><option>가입 전</option><option>이미 가입</option><option>상담만 희망</option></select></label>
            <button className="primary-btn" type="submit">무료 신청하기 <span>›</span></button>
            <small className="form-note">입력하신 정보는 상담 및 선물 안내 목적으로만 사용됩니다.</small>
          </form>
        </aside>
      </section>

      <section id="gift" className="diagnosis">
        <div>
          <p className="eyebrow">마미온 신청 절차</p>
          <h2>간단히 신청하고, 편하게 받아보세요</h2>
          <p>신청 후 담당자가 연락드려 일정과 장소를 조율합니다.</p>
        </div>
        <div className="steps">
          <span>신청</span><b>→</b><span>일정 조율</span><b>→</b><span>선물 전달</span><b>→</b><span>희망 시 점검</span>
        </div>
        <a href="#apply" className="primary-btn">지금 신청하기 <span>›</span></a>
      </section>

      <section className="why-section">
        <h2>왜 마미온일까요?</h2>
        <div className="benefit-row">
          {benefits.map(([icon, text]) => <div key={text}><i>{icon}</i><strong>{text}</strong></div>)}
        </div>
      </section>

      <footer>
        <div className="logo"><span className="logo-mark">♡</span><span><strong>마미온</strong><small>Mamion Gift Care</small></span></div>
        <p>회사소개 ㅣ 개인정보처리방침 ㅣ 이용약관</p>
        <p>상호: JN Partners ㅣ 대표: 최준 ㅣ 문의: 010-0000-0000</p>
        <a className="kakao" href="#apply">카카오톡 채널 상담 ›</a>
      </footer>
    </main>
  )
}

export default App
