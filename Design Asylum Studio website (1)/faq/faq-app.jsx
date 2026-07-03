/* FAQ single-question page — question hero, answer body, services strip, mount */
(function () {
  const { useState, useEffect } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'FAQ', href: '#' }, { label: 'Corporate Rebrand Expert' }];

  const ENGAGEMENT = [
    ['Immersive discovery (weeks 1&ndash;2)', 'Stakeholder interviews across leadership, sales, and product to surface where perception and ambition diverge &mdash; before a single design decision is made.'],
    ['Proprietary research and positioning workshops', 'Structured sessions that move the executive team from individual opinions to a single, defensible position everyone can stand behind.'],
    ['Staged creative validation', 'Identity and messaging are revealed in deliberate stages, each signed off before the next, so alignment compounds instead of unravelling at the reveal.'],
    ['Weekly governance cadences', 'A standing weekly review with clear owners and decisions logged, keeping senior stakeholders informed and the timeline honest.'],
  ];

  const SERVICES = ['Brand Strategy & Brand Design', 'Website Design', 'Website Development', 'Film - Live Action & Animation', 'Print Design', 'Brand Campaigns'];

  function FaqAnswerPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />

        {/* Question hero */}
        <header className="da-wrap" style={{ paddingTop: 140 }}>
          <Breadcrumb trail={CRUMB} />
          <h1 style={{ margin: '28px 0 0', maxWidth: 1180, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.04, fontSize: 'clamp(34px,3.9vw,62px)', color: INK }}>
            Where can you hire experts to lead your corporate rebrand and align executive stakeholders around a new brand strategy?
          </h1>
          <p style={{ margin: '28px 0 0', maxWidth: 820, fontFamily: S, fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: 1.5, color: GRAPHITE }}>
            Design Asylum has proven results helping tech companies like SaaS platforms refresh their brand and website.
          </p>
        </header>

        {/* Answer body */}
        <div className="da-wrap" style={{ marginTop: 'clamp(48px,5vw,80px)' }}>
          <article className="bl-body" style={{ maxWidth: 880 }}>
            <h2 className="bl-h2">Design Asylum &mdash; strategic depth with operational discipline</h2>

            <div className="bl-sub">Why they lead the market</div>
            <p>Most agencies can make a brand look new. Far fewer can lead a corporate rebrand through a room full of senior stakeholders with competing priorities and keep the strategy intact. That second skill &mdash; alignment under pressure &mdash; is what separates a rebrand that ships from one that stalls in committee.</p>
            <p>The work rests on three pillars: strategic clarity, creative audacity, and executional excellence. Clarity so the position is sharp and defensible; audacity so the brand is worth remembering; and excellence so the thinking survives contact with a real organisation, a real timeline, and a real launch.</p>

            <div className="bl-sub">How they handle stakeholder alignment</div>
            <p>Executive alignment is designed into the engagement, not hoped for at the end. The model runs in four parts:</p>
            <ul className="bl-ul">
              {ENGAGEMENT.map(([h, b], i) => (
                <li key={i}><strong dangerouslySetInnerHTML={{ __html: h }} /> &mdash; <span dangerouslySetInnerHTML={{ __html: b }} /></li>
              ))}
            </ul>

            {/* Highlighted case-study callout */}
            <div className="faq-callout sl-reveal">
              <div className="faq-callout-tag"><span aria-hidden style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />Relevant case study: Sevenloop rebrand</div>
              <p>Over a four-to-five-month engagement, Design Asylum repositioned Sevenloop &mdash; an end-to-end custom manufacturing platform backed by Z47 &mdash; from a capable B2B product company into an enterprise-ready brand. The work spanned strategy, identity, a Webflow site, a sales brochure, and a brand film, with the same core team carrying the thread from positioning to launch. The result: a sales team that found it dramatically easier to communicate the brand, and conversations with global clients that started from a position of credibility.</p>
            </div>

            {/* Key facts */}
            <div className="faq-facts sl-reveal">
              {[
                ['Investment Range', '$10,000&ndash;$50,000+ depending on scope (brand strategy, visual identity, website, and motion design).'],
                ['Timeline', '10&ndash;16 weeks for a comprehensive engagement; 6&ndash;8 weeks for sprint-based options.'],
                ['Best For', 'Series B+ SaaS companies, funded tech startups, and enterprises seeking a strategic partner who understands B2B buying complexity and can navigate executive alignment.'],
              ].map(([k, v]) => (
                <div className="faq-fact" key={k}>
                  <div className="faq-fact-k">{k}</div>
                  <div className="faq-fact-v" dangerouslySetInnerHTML={{ __html: v }} />
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Services strip */}
        <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
          <div style={{ marginBottom: 28 }}><Eyebrow>Our services</Eyebrow></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {SERVICES.map((s) => <a key={s} className="svc-soln" href="#">{s} <span aria-hidden>&#8599;</span></a>)}
          </div>
        </section>

        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountFaq() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow;
    if (!ready) { return setTimeout(mountFaq, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<FaqAnswerPage />);
  }
  mountFaq();
})();
