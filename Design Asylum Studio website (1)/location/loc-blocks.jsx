/* Location (Ahmedabad) page — city portfolio grid · FAQ · related blogs (no experts) */
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

  /* ---- PORTFOLIO (sits high, right after hero) ---- */
  const PROJECTS = [
    ['Rewild Farms', 'Brand and website design for Rewild Farms, an ecological farming initiative restoring biodiversity through regenerative agriculture.'],
    ['Cloudphysician', 'Brand and website design for Cloudphysician, an AI-enabled remote critical-care platform.'],
    ['Entropik', 'Website design for Entropik, an AI-driven user-research and emotion-AI platform.'],
    ['Relanto', 'Brand and web design for Relanto, a data, AI, and automation advisory and solutions partner.'],
  ];
  const TABS = ['Solution', 'Service', 'Industry', 'Location'];

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

  function LocPortfolio() {
    const [tab, setTab] = useState('Location');
    return (
      <section className="da-wrap" style={{ paddingTop: 'clamp(56px,6vw,96px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 36 }}>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Design Projects for Ahmedabad Brands</h2>
          <div className="svc-tabs" role="tablist">
            {TABS.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} className={'svc-tab' + (tab === t ? ' is-active' : '')} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="svc-grid sl-reveal" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p[0]} name={p[0]} desc={p[1]} i={i} />)}
        </div>
      </section>
    );
  }

  /* ---- FAQ ---- */
  const FAQ = [
    {
      q: 'How does B2B web design differ from B2C?',
      a: [{ p: 'B2B web design serves a rational buyer in a long, multi-person decision &mdash; the job is clarity and credibility, not impulse. Instead of optimising for an instant emotional purchase, a B2B site has to explain a complex offer, earn trust with proof, and give different stakeholders (the user, the budget-holder, the technical evaluator) what each of them needs. The aesthetics matter, but they serve the argument rather than replace it.' }],
    },
    {
      q: 'What makes a boutique agency better than a large agency for B2B web design?',
      a: [{ p: 'Continuity and seniority. At a boutique studio the people who pitch are the people who do the work, and the same small team carries your project from strategy to launch &mdash; so the strategic thread never gets lost in a handoff. Large agencies often sell senior talent and deliver with a rotating junior bench. For B2B, where the brand lives or dies on sharp positioning and writing, that continuity is the difference.' }],
    },
    {
      q: 'How to choose the right web design agency?',
      a: [{ p: 'Look for evidence of strategy, not just a gallery of visuals. Read their case studies for the thinking, ask who will actually be on your project, read their copy, and talk to a repeat client. The agency that asks the sharpest questions about your business &mdash; rather than the one with the slickest deck &mdash; is almost always the right one.' }],
    },
    {
      q: 'How much does a B2B website redesign cost in India and the US?',
      a: [
        { p: 'Cost tracks scope and depth of strategy. As a rough guide:' },
        { ul: [
          '<strong>Focused redesign</strong> — &#8377;6&ndash;15 lakh ($8K&ndash;$18K): restructure, copy refresh, and a Webflow rebuild of an existing brand.',
          '<strong>Brand + website</strong> — &#8377;15&ndash;35 lakh ($18K&ndash;$42K): positioning, identity, messaging, and a full site.',
          '<strong>Enterprise / multi-template</strong> — &#8377;35 lakh+ ($42K+): large site architecture, custom illustration, and motion.',
        ] },
        { p: 'US engagements sit at the higher end of these bands; we quote a fixed scope against the outcome you need either way.' },
      ],
    },
    {
      q: 'How long does a B2B website redesign take?',
      a: [
        { p: 'A typical end-to-end redesign runs roughly 15&ndash;20 weeks, phased like this:' },
        { ul: [
          '<strong>Weeks 1&ndash;4 — Strategy.</strong> Diagnosis, positioning, messaging, and sitemap.',
          '<strong>Weeks 5&ndash;14 — Design &amp; build.</strong> Identity, page design, copy, and the Webflow build.',
          '<strong>Weeks 15&ndash;20 — Polish &amp; launch.</strong> Motion, QA, content load, and go-live.',
        ] },
        { p: 'Focused, single-template projects compress to four to six weeks; large multi-template sites run longer.' },
      ],
    },
    {
      q: 'What should a high-quality B2B website include in design, messaging, and UX?',
      a: [{ p: 'A sharp position stated in the buyer&rsquo;s language above the fold; messaging that leads with outcomes and proves them with evidence; a structure that guides each stakeholder to what they need; credibility signals (clients, results, security) placed where doubt arises; and a clear, low-friction path to the next step &mdash; demo, quote, or call. Design holds it all together and signals reliability, but the argument is what converts.' }],
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

  function LocFAQ() {
    const [open, setOpen] = useState(0);
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>FAQs</h2>
        <div>{FAQ.map((item, i) => <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}</div>
      </section>
    );
  }

  /* ---- RELATED ---- */
  const RELATED = [
    ['Top B2B Branding Agencies in India (2026)', 'var(--color-block-iris)'],
    ['Best Webflow Agencies in India 2026: Ranked and Reviewed', 'var(--color-block-maroon)'],
    ['Better B2B Branding Starts With a Point of View', 'var(--color-block-teal)'],
    ['B2B Positioning Is a Courage Problem, Not Creative', 'var(--color-block-iris)'],
    ['Working With a Webflow Agency: 7-Step Process (2026)', 'var(--color-block-maroon)'],
    ['8 Steps to Build a B2B Brand Strategy (2026)', 'var(--color-block-teal)'],
  ];

  function LocRelated() {
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

  Object.assign(window, { LocPortfolio, LocFAQ, LocRelated });
})();
