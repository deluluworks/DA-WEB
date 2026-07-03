/* OneLern written case study — sections */
(function () {
  const { useState } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CHAPTERS = [
    ['ch-positioning', 'Positioning'],
    ['ch-colour', 'Colour'],
    ['ch-illustrations', 'Illustrations'],
    ['ch-iconography', 'Iconography'],
    ['ch-website', 'Website Design'],
  ];

  /* ---- SECTION 2 — Header ---- */
  function CSHeader() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={[{ label: 'Home', href: '#' }, { label: 'Case Studies', href: '#' }, { label: 'Edtech Web Design OneLern' }]} />
        <h1 style={{ margin: '28px 0 0', maxWidth: 1160, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(42px,5.6vw,92px)', color: INK }}>
          Strategically upgrading an Ed-Tech brand&rsquo;s website
        </h1>
        <p style={{ margin: '26px 0 0', maxWidth: 760, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.5, color: GRAPHITE }}>
          Renewed Brand Messaging, Positioning, Illustrations &amp; Web Design
        </p>

        <div className="cs-meta" style={{ marginTop: 40 }}>
          {[['Client', 'OneLern'], ['Headquarters', 'Hyderabad, India'], ['Target Audience', 'Schools']].map(([k, v]) => (
            <div key={k}>
              <div className="cs-meta-k">{k}</div>
              <div className="cs-meta-v">{v}</div>
            </div>
          ))}
        </div>

        <div className="cs-tabs" style={{ marginTop: 36 }}>
          {CHAPTERS.map(([id, label]) => <a key={id} className="cs-tab" href={'#' + id}>{label}</a>)}
        </div>

        <div className="sl-reveal" style={{ marginTop: 48, position: 'relative', overflow: 'hidden', width: '100%', aspectRatio: '21 / 9', background: INK }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 130% at 20% 22%, rgba(255,194,64,0.34), transparent 52%), radial-gradient(80% 130% at 84% 84%, rgba(81,111,234,0.46), transparent 52%), radial-gradient(60% 100% at 62% 32%, rgba(150,235,235,0.20), transparent 56%)' }} />
          <span style={{ position: 'absolute', left: 24, bottom: 22, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>OneLern brand hero</span>
        </div>
      </header>
    );
  }

  /* ---- SECTION 3 — Overview ---- */
  function CSOverview() {
    return (
      <section id="ch-positioning" className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'clamp(40px,5vw,96px)', alignItems: 'start' }}>
          <Eyebrow>Overview</Eyebrow>
          <div style={{ maxWidth: 860 }}>
            <h2 style={{ margin: '0 0 28px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, fontSize: 'var(--text-section)', color: INK }}>Accessible digital transformation</h2>
            <p style={{ margin: '0 0 22px', fontFamily: S, fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.6, color: GRAPHITE }}>
              OneLern revolutionises education by reimagining textbooks and fostering personalised learning. Through cutting-edge technology, smart content, in-class and after-class solutions, OneLern enriches global learning experiences.
            </p>
            <p style={{ margin: 0, fontFamily: S, fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.6, color: GRAPHITE }}>
              The core thought revolved around creating a strategy that communicated the benefits of digital transformation to all stakeholder groups.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ---- SECTION 4 — Brand attributes ---- */
  function CSAttributes() {
    const [seg, setSeg] = useState(0);
    const segs = ['Layout & Stucture', 'Stategy & Messaging', 'Visual Design'];
    return (
      <section id="ch-colour" className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11, color: ASH, marginBottom: 28 }}>ONelern stands for</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 40 }}>
          <span className="cs-attr">Friendly</span>
          <span className="cs-attr cs-attr-iris">Transformative</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: INK, color: 'var(--color-paper-white)', padding: '16px 28px', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13 }}>
            Visit website <span aria-hidden>&#8599;</span>
          </a>
          <div className="cs-seg" role="tablist">
            {segs.map((s, i) => (
              <button key={s} role="tab" aria-selected={seg === i} className={seg === i ? 'is-active' : ''} onClick={() => setSeg(i)}>{s}</button>
            ))}
          </div>
        </div>
        <div className="sl-reveal" style={{ marginTop: 36, position: 'relative', overflow: 'hidden', width: '100%', aspectRatio: '16/7', background: 'var(--color-deep-teal)' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: ['radial-gradient(70% 120% at 24% 30%, rgba(255,194,64,0.34), transparent 56%)', 'radial-gradient(70% 120% at 70% 30%, rgba(81,111,234,0.46), transparent 56%)', 'radial-gradient(70% 120% at 50% 40%, rgba(150,235,235,0.34), transparent 56%)'][seg] }} />
          <span style={{ position: 'absolute', left: 24, bottom: 20, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{segs[seg]}</span>
        </div>
      </section>
    );
  }

  /* ---- SECTION 5 — Before / After ---- */
  function CSBeforeAfter() {
    return (
      <section id="ch-illustrations" className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>Before &amp; After</h2>
        <div className="cs-ba sl-reveal">
          {[['Before', '#3a3f3f', 'grayscale(1)'], ['After', 'var(--color-deep-teal)', 'none']].map(([tag, bg, f]) => (
            <div key={tag} className="cs-ba-cell" style={{ background: bg }}>
              <div aria-hidden style={{ position: 'absolute', inset: 0, filter: f, background: tag === 'After' ? 'radial-gradient(80% 120% at 26% 28%, rgba(255,194,64,0.30), transparent 56%), radial-gradient(80% 120% at 80% 82%, rgba(81,111,234,0.40), transparent 54%)' : 'radial-gradient(80% 120% at 30% 30%, rgba(255,255,255,0.10), transparent 60%)' }} />
              <span className="cs-ba-tag" style={tag === 'Before' ? { background: 'var(--color-ash)' } : null}>{tag}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ---- SECTION 6 — Why the new brand ---- */
  function CSWhy() {
    const cards = [
      ['01', 'Clear Value Proposition', 'We needed to craft a strategy to drive our stakeholder specific value propositions.'],
      ['02', 'Strong Online Presence', 'A strong online presence was required to engage the top brass of management in schools.'],
      ['03', 'Onboarding Platform', 'We needed a platform where all stakeholders could access demos and be digitally onboarded.'],
      ['04', 'Showcase Expertise', 'We needed to showcase our expertise and our capability to transform schools with digital infrastructure.'],
    ];
    return (
      <section id="ch-iconography" className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ marginBottom: 44 }}>
          <Eyebrow>Why the new brand</Eyebrow>
        </div>
        <div className="cs-why-grid sl-reveal">
          {cards.map(([n, t, b]) => (
            <article key={n} className="cs-why-card">
              <div className="cs-why-num">{n}</div>
              <h3 className="cs-why-h">{t}</h3>
              <p className="cs-why-p">{b}</p>
            </article>
          ))}
        </div>
        <p style={{ margin: '40px 0 0', maxWidth: 820, fontFamily: S, fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: 1.45, color: INK }}>
          OneLern now has a strong website that effectively communicates with each of its stakeholder groups.
        </p>
      </section>
    );
  }

  /* ---- SECTION 7 — Deliverable tags ---- */
  function CSDeliverables() {
    return (
      <section id="ch-website" className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div className="cs-deliv">
          {['Brand Strategy', 'Website Design', 'Lottie Animations'].map((t) => <span key={t}>{t}</span>)}
        </div>
      </section>
    );
  }

  /* ---- SECTION 8 — Testimonial #1 ---- */
  function CSQuote1() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <blockquote className="cs-quote sl-reveal">
          <p>&ldquo;Design Asylum understood our vision and helped us translate it into messaging and design. It became easier for our sales team to understand and communicate about the brand post the rebranding exercise.&rdquo;</p>
          <cite><b>TC Ashok</b> &mdash; Founder, OneLern</cite>
        </blockquote>
      </section>
    );
  }

  /* ---- SECTION 9 + 10 — Process + Testimonial #2 ---- */
  function CSProcess() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'clamp(40px,5vw,96px)', alignItems: 'start' }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, fontSize: 'var(--text-section)', color: INK }}>Backed by Process</h2>
          </div>
          <div style={{ maxWidth: 860 }}>
            <p style={{ margin: '0 0 22px', fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.66, color: GRAPHITE }}>
              We started by delving deep into the brief &mdash; understanding OneLern&rsquo;s stakeholders, the realities of school decision-making, and the gap between the product&rsquo;s ambition and how it was being perceived.
            </p>
            <p style={{ margin: '0 0 22px', fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.66, color: GRAPHITE }}>
              Our deep research process helped us create a brand identity that spoke to each audience in its own language &mdash; the same rigour we brought to Ximkart&rsquo;s customers &mdash; translating a complex offer into a clear, confident story.
            </p>
            <p style={{ margin: 0, fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.66, color: GRAPHITE }}>
              Collaboration lies at the core of our approach. We worked closely with the OneLern team at every stage, testing messaging and design against real stakeholder reactions rather than designing in isolation.
            </p>
            <p style={{ margin: '34px 0 0', maxWidth: 760, fontFamily: S, fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: 1.45, color: INK }}>
              The unique illustration style developed by the team along with the content strategy and positioning has established OneLern as a trustworthy digital partner to schools.
            </p>
            <div style={{ marginTop: 28, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, color: ASH }}>
              <span style={{ color: INK }}>Akhilesh J</span> &mdash; Project Lead
            </div>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { CSHeader, CSOverview, CSAttributes, CSBeforeAfter, CSWhy, CSDeliverables, CSQuote1, CSProcess });
})();
