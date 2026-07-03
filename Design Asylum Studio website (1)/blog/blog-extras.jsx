/* Sevenloop blog — FAQ accordion · author bio · solutions row · related posts */
(function () {
  const { useState } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* ---- FAQ ---- */
  const FAQ = [
    {
      q: 'How much does a B2B website design project typically cost?',
      a: ['It depends on scope &mdash; a focused redesign sits in one range, a full brand-plus-Webflow build like Sevenloop sits in another. The honest answer is that cost tracks complexity: number of templates, depth of strategy, custom illustration, motion, and collateral. We scope every project against the outcome you need, then quote a fixed engagement so there are no surprises mid-build.'],
    },
    {
      q: 'Can a B2B branding agency help with website design?',
      sub: 'Do B2B branding agencies also handle website design?',
      a: ['Yes &mdash; and the best ones treat them as one job. Brand without a site is a guideline no one sees; a site without brand is a template. We run strategy, identity, copy, and Webflow build under a single team so the thinking carries all the way from positioning to the live page.'],
    },
    {
      q: 'Can one agency handle branding and Webflow development?',
      a: ['That&rsquo;s exactly how we&rsquo;re set up. The same team that writes the manifesto and designs the identity builds the Webflow site and the motion that goes with it. On Sevenloop, that continuity is why the strategic thread never got lost between strategy, design, build, and film.'],
    },
  ];

  function FaqItem({ item, open, onToggle }) {
    const ref = React.useRef(null);
    return (
      <div className={'bl-faq-item' + (open ? ' is-open' : '')}>
        <button className="bl-faq-q" aria-expanded={open} onClick={onToggle}>
          <span>{item.q}</span>
          <span className="bl-faq-icon" aria-hidden />
        </button>
        <div className="bl-faq-a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 4 : 0 }}>
          <div className="bl-faq-a-inner" ref={ref}>
            {item.sub && <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: ASH, marginBottom: 14 }}>{item.sub}</div>}
            {item.a.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
        </div>
      </div>
    );
  }

  function BlogFAQ() {
    const [open, setOpen] = useState(0);
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>Frequently asked questions</h2>
        <div>
          {FAQ.map((item, i) => (
            <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </section>
    );
  }

  /* ---- author bio ---- */
  function BlogAuthor() {
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 36, alignItems: 'center', border: '1px solid var(--color-fog)', padding: 40 }}>
          <div style={{ width: 140, height: 140, background: 'var(--color-deep-teal)', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(100% 100% at 30% 25%, rgba(255,194,64,0.4), transparent 60%)' }} />
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: D, fontWeight: 400, fontSize: 40, color: 'rgba(255,255,255,0.85)' }}>AK</span>
          </div>
          <div>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-iris-voltage)' }}>Lead Designer | Content Strategist</span>
            <h3 style={{ margin: '12px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', fontSize: 'clamp(26px,2.4vw,36px)', color: INK }}>Athira Krishnan</h3>
            <p style={{ margin: '14px 0 0', maxWidth: 620, fontFamily: S, fontSize: 18, lineHeight: 1.55, color: GRAPHITE }}>
              Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ---- solutions row ---- */
  function BlogSolutions() {
    const items = ['Website Redesign Services', 'Website Redesign', 'B2B SaaS Website Redesign Agency', 'Website Revamp for B2B SaaS', 'Website Redesign for Series A Startup'];
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 28px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>Solutions we offer</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {items.map((it) => (
            <a key={it} className="bl-soln" href="#">{it} <span aria-hidden>&#8599;</span></a>
          ))}
        </div>
      </section>
    );
  }

  /* ---- related posts ---- */
  function BlogRelated() {
    const posts = [
      { title: 'Employer Branding and Talent Acquisition: A Strategic Guide for B2B Tech', author: 'Mejo Kuriachan', updated: 'June 16, 2026', reviewer: 'Mejo Kuriachan', bg: 'var(--color-block-iris)' },
      { title: 'Messaging Is Decision-Making: The 7-Step Process Before Copy and Design', author: 'Mejo Kuriachan', updated: 'June 12, 2026', reviewer: 'Ekta Manchanda', bg: 'var(--color-block-maroon)' },
    ];
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>More blogs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {posts.map((p) => (
            <a key={p.title} className="bl-related" href="#">
              <div style={{ width: '100%', aspectRatio: '16/9', background: p.bg, position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 78% 22%, rgba(255,255,255,0.18), transparent 55%)' }} />
              </div>
              <h3 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.01em', lineHeight: 1.18, fontSize: 'clamp(22px,1.9vw,28px)', color: INK }}>{p.title}</h3>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginTop: 4 }}>
                {[['Author', p.author], ['Updated', p.updated], ['Reviewed by', p.reviewer]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, color: ASH }}>{k}</span>
                    <span style={{ fontFamily: S, fontSize: 15, color: GRAPHITE }}>{v}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  Object.assign(window, { BlogFAQ, BlogAuthor, BlogSolutions, BlogRelated });
})();
