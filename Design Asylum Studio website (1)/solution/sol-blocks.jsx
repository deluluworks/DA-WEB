/* Solution (AI SaaS Website) page — portfolio · FAQ · experts · related blogs */
(function () {
  const { useState, useRef } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  const GLOWS = [
    'radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)',
    'radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.40), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.40), transparent 54%)',
  ];
  const BGS = ['var(--color-obsidian-ink)', 'var(--color-deep-teal)', '#241a1c', '#10212a'];

  /* ---- PORTFOLIO ---- */
  const PROJECTS = [
    ['SimpliContract', 'Brand and website design for SimpliContract, an AI-powered enterprise contract lifecycle management platform.'],
    ['Entropik', 'Website design for Entropik, an AI-driven user-research and emotion-AI platform.'],
    ['Adnaut', 'Branding and web design for Adnaut, an AI-assisted B2B advertising and demand platform.'],
    ['Nimble Edge', 'Website design for Nimble Edge, an on-device AI and edge-inference platform.'],
    ['Cloudphysician', 'Brand and website design for Cloudphysician, an AI-enabled remote critical-care platform.'],
    ['5X', 'Website design for 5X, an AI-powered managed data platform for modern teams.'],
    ['Aavenir', 'Web design for Aavenir, an AI source-to-pay and workflow automation suite.'],
    ['ASPI & CIS Tech Diplomacy', 'Brand and report design for a tech-diplomacy initiative spanning AI policy and security.'],
    ['Mili', 'Website design for Mili, an AI knowledge and copilot platform for financial services.'],
  ];
  const TABS = ['Solution', 'Service', 'Industry'];

  function ProjectCard({ name, desc, i }) {
    return (
      <a className="svc-card" href="#">
        <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
          <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
          <span className="svc-card-link">Visit website <span aria-hidden>&#8599;</span></span>
        </div>
        <div className="svc-card-body">
          <h3 className="svc-card-name">{name}</h3>
          <p className="svc-card-desc">{desc}</p>
        </div>
      </a>
    );
  }

  function SolPortfolio() {
    const [tab, setTab] = useState('Solution');
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 36 }}>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>AI SaaS Websites</h2>
          <div className="svc-tabs" role="tablist">
            {TABS.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} className={'svc-tab' + (tab === t ? ' is-active' : '')} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="svc-grid sl-reveal">
          {PROJECTS.map((p, i) => <ProjectCard key={p[0]} name={p[0]} desc={p[1]} i={i} />)}
        </div>
      </section>
    );
  }

  /* ---- FAQ ---- */
  const FAQ = [
    {
      q: 'What should a pre-launch AI startup prioritise on an 8-week website timeline?',
      a: [
        { p: 'With eight weeks and no time to waste, sequence the work so the highest-leverage decisions happen first. A realistic split:' },
        { ul: [
          '<strong>Weeks 1&ndash;2 — Positioning &amp; message.</strong> Nail the one-line outcome, the primary audience, and the proof you can credibly show. Everything downstream depends on this.',
          '<strong>Weeks 3&ndash;5 — Design &amp; build the core path.</strong> Homepage, one deep product page, and a demo/contact flow. Resist the urge to ship ten pages no one will read.',
          '<strong>Weeks 6&ndash;7 — Proof &amp; polish.</strong> Add the demo or product video, trust signals, and motion that makes the product feel real.',
          '<strong>Week 8 — Launch &amp; instrument.</strong> Ship, add analytics, and set up the first iteration loop against real visitor behaviour.',
        ] },
        { p: 'The mistake to avoid is spreading thin. A pre-launch site that converts one audience on one outcome beats a sprawling site that explains everything and persuades no one.' },
      ],
    },
  ];

  function FaqItem({ item, open, onToggle }) {
    const ref = useRef(null);
    return (
      <div className={'bl-faq-item' + (open ? ' is-open' : '')}>
        <button className="bl-faq-q" aria-expanded={open} onClick={onToggle}>
          <span>{item.q}</span><span className="bl-faq-icon" aria-hidden />
        </button>
        <div className="bl-faq-a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 4 : 0 }}>
          <div className="bl-faq-a-inner" ref={ref}>
            {item.a.map((blk, i) => {
              if (blk.sub) return <div className="bl-sub" key={i}>{blk.sub}</div>;
              if (blk.ul) return <ul className="bl-ul" key={i}>{blk.ul.map((li, j) => <li key={j} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>;
              return <p key={i} dangerouslySetInnerHTML={{ __html: blk.p }} />;
            })}
          </div>
        </div>
      </div>
    );
  }

  function SolFAQ() {
    const [open, setOpen] = useState(0);
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>FAQs</h2>
        <div>{FAQ.map((item, i) => <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}</div>
      </section>
    );
  }

  /* ---- EXPERTS ---- */
  const EXPERTS = [
    ['Associate Designer', 'Harishma D', 'Harishma is an Associate Designer at Design Asylum, helping businesses discover the value of great design and build strong partnerships.'],
    ['Content Strategist', 'Swathi Mohan', 'Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard.'],
    ['Partner | Brand Strategist', 'Mejo Kuriachan', 'Mejo puts the \u2018Everything\u2019 in brand, flow, video and motion \u2014 an engineer first, strategist and design manager next.'],
    ['Lead Designer | Content Strategist', 'Athira Krishnan', 'Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.'],
    ['Lead Designer', 'Sanjana', 'With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design.'],
  ];

  function ExpertCard({ role, name, bio }) {
    return (
      <article className="svc-team-card">
        <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-iris-voltage)' }}>{role}</span>
        <h3 style={{ margin: '16px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.0, fontSize: 'clamp(22px,1.7vw,28px)', color: INK }}>{name}</h3>
        <p style={{ margin: '14px 0 0', fontFamily: S, fontSize: 15, lineHeight: 1.5, color: GRAPHITE, flex: '1 1 auto' }}>{bio}</p>
        <a href="#" style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK, textDecoration: 'none' }}>
          Read more <span className="svc-readmore-arrow" aria-hidden>&rarr;</span>
        </a>
      </article>
    );
  }

  function SolExperts() {
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', background: 'var(--color-paper-off)' }}>
        <div className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', marginTop: 'calc(-1 * var(--section-pad-y))' }}>
          <div style={{ marginBottom: 44 }}>
            <Eyebrow>The roster</Eyebrow>
            <h2 style={{ margin: '18px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>
              AI SaaS Website Design <span style={{ color: 'var(--color-iris-voltage)' }}>Experts</span>
            </h2>
          </div>
          <div className="svc-team-grid sl-reveal">
            {EXPERTS.map((m) => <ExpertCard key={m[1]} role={m[0]} name={m[1]} bio={m[2]} />)}
          </div>
        </div>
      </section>
    );
  }

  /* ---- RELATED ---- */
  const RELATED = [
    ['Will AI Replace Designers? An Honest 2026 Take', 'var(--color-block-iris)'],
    ['B2b SaaS Web Design Agency', 'var(--color-block-maroon)'],
    ['Ultimate B2B SaaS Website Guide', 'var(--color-block-teal)'],
  ];

  function SolRelated() {
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>Related blogs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {RELATED.map(([title, bg]) => (
            <a key={title} className="svc-related" href="#">
              <div style={{ width: '100%', aspectRatio: '16/9', background: bg, position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 78% 22%, rgba(255,255,255,0.18), transparent 55%)' }} />
              </div>
              <h3 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.18, fontSize: 'clamp(20px,1.6vw,25px)', color: INK }}>{title}</h3>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK }}>Read blog <span aria-hidden>&rarr;</span></span>
            </a>
          ))}
        </div>
      </section>
    );
  }

  Object.assign(window, { SolPortfolio, SolFAQ, SolExperts, SolRelated });
})();
