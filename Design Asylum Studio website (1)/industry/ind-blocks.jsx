/* Industry (Manufacturing) page — portfolio grid · FAQ · experts · related blogs */
(function () {
  const { useState, useRef } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const GLOWS = [
    'radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)',
    'radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.40), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.40), transparent 54%)',
  ];
  const BGS = ['var(--color-obsidian-ink)', 'var(--color-deep-teal)', '#241a1c', '#10212a'];

  /* ---- PORTFOLIO ---- */
  const PROJECTS = [
    ['Ximkart', 'Brand and messaging for Ximkart, a custom-manufacturing sourcing platform for Indian factories.'],
    ['TurboTech', 'Brand and website design for TurboTech, a precision engineering and automotive turbocharger solutions company.'],
    ['GenRobotics', 'Branding for GenRobotics, a robotics company building machines for hazardous industrial and sanitation work.'],
    ['Sevenloop', 'Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider.'],
    ['Ajax Engineering', 'Brand and web design for Ajax Engineering, a manufacturer of self-loading concrete machinery.'],
    ['Revind Ai', 'Branding for Revind Ai, an AI platform for metals, manufacturing, and industrial procurement.'],
    ['Lakshmigraha', 'Brand identity for Lakshmigraha, a heritage gold and jewellery manufacturing business.'],
    ['Ayr Energy', 'Brand and website design for Ayr Energy, an industrial energy and clean-power solutions company.'],
  ];
  const TABS = ['Solution', 'Service', 'Industry'];

  function ProjectCard({ name, desc, i }) {
    const feat = name === 'Sevenloop';
    return (
      <a className={'svc-card' + (feat ? ' is-feat' : '')} href="#">
        <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
          <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
          {feat && <span className="svc-card-tag">Featured project</span>}
          <span className="svc-card-link">Visit website <span aria-hidden>&#8599;</span></span>
        </div>
        <div className="svc-card-body">
          <h3 className="svc-card-name">{name}</h3>
          <p className="svc-card-desc">{desc}</p>
        </div>
      </a>
    );
  }

  function IndPortfolio() {
    const [tab, setTab] = useState('Industry');
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 36 }}>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Design Projects in Manufacturing Industry</h2>
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
      q: 'How does digital branding help manufacturing companies attract new clients?',
      a: [{ p: 'Digital branding gives a manufacturing company a way to be chosen before the sales conversation begins. A clear position, confident messaging, and a website that loads credibility in seconds mean a procurement head shortlists you on capability rather than dismissing you on appearance. In a category where buyers compare suppliers in private and at speed, branding is what turns a search result into a serious enquiry.' }],
    },
    {
      q: 'Why manufacturing brands need good design to attract better clients and talent?',
      a: [
        { p: 'Good design is not a finish coat &mdash; it is the difference between being treated as a commodity vendor and being trusted as a strategic partner. Here is what strong design actually does for an industrial brand:' },
        { ul: [
          'Makes complex capability legible to a non-technical buyer in seconds.',
          'Signals reliability &mdash; a precise brand implies a precise factory.',
          'Wins the shortlist when two suppliers are otherwise equal.',
          'Justifies a price premium instead of forcing a race to the bottom.',
          'Shortens the sales cycle by answering trust questions up front.',
          'Attracts better talent who want to work for a brand they respect.',
          'Travels across formats &mdash; site, deck, brochure, and film.',
          'Builds recall so you are remembered when the order is finally placed.',
          'Makes the company look as modern as its engineering already is.',
          'Gives the sales team a brand they are proud to put in front of clients.',
        ] },
        { sub: 'Conclusion' },
        { p: 'Manufacturing brands that invest in design do not just look better &mdash; they sell better, hire better, and command more. The factory earns the capability; the brand makes sure the right people believe it.' },
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

  function IndFAQ() {
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
    ['Partner | Brand Strategist', 'Mejo Kuriachan', 'Mejo puts the \u2018Everything\u2019 in brand, flow, video and motion \u2014 an engineer first, strategist and design manager next.'],
    ['Lead Designer', 'Sanjana', 'With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design.'],
    ['Lead Strategist', 'Sijeesh VB', 'Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences.'],
    ['Lead Brand Designer | Illustrator', 'Tanmaya Rao', 'A b2b brand designer, she has worked wonders for many SaaS and B2B companies with her vision and expert skills.'],
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

  function IndExperts() {
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', background: 'var(--color-paper-off)' }}>
        <div className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', marginTop: 'calc(-1 * var(--section-pad-y))' }}>
          <div style={{ marginBottom: 44 }}>
            <Eyebrow>The roster</Eyebrow>
            <h2 style={{ margin: '18px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>
              Manufacturing <span style={{ color: 'var(--color-iris-voltage)' }}>Design Experts</span>
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
    ['Brand Design for B2B: Scope, Process, and 2026 Examples', 'var(--color-block-iris)'],
    ['Best B2B Website Agency in Bangalore for 2026', 'var(--color-block-maroon)'],
    ['B2B Website Agency FAQs: Timelines, Pricing, Process', 'var(--color-block-teal)'],
    ['How to Choose a Web Design Agency in India (2026)', 'var(--color-block-iris)'],
    ['What Is Rebranding? A B2B Founder\u2019s 2026 Guide', 'var(--color-block-maroon)'],
  ];

  function IndRelated() {
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

  Object.assign(window, { IndPortfolio, IndFAQ, IndExperts, IndRelated });
})();
