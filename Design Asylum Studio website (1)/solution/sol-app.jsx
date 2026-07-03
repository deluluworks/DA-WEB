/* Solution (AI SaaS Website) page — hero, marquee, Q&A callout, ToC, CTA, mount */
(function () {
  const { useState, useEffect } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Solutions', href: '#' }, { label: 'AI SaaS Website Design Agency' }];

  function SolHero() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={CRUMB} />
        <h1 style={{ margin: '28px 0 0', maxWidth: 1140, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(42px,5.6vw,92px)', color: INK }}>
          AI SaaS Product Website Design Agency
        </h1>
        <p style={{ margin: '30px 0 0', maxWidth: 880, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.55, color: GRAPHITE }}>
          An AI SaaS product website design agency builds conversion-focused digital experiences that make complex AI capabilities accessible, helping prospects quickly grasp your product&rsquo;s value and move toward a buying decision.
        </p>
      </header>
    );
  }

  function MarqueeStrip({ label }) {
    const strip = Array.from({ length: 8 }, (_, i) => i);
    return (
      <section className="da-wrap" style={{ paddingTop: 'clamp(48px,5vw,80px)' }}>
        <div className="svc-marquee-label">{label}</div>
        <div className="svc-marquee">
          <div className="svc-marquee-track">
            {[...strip, ...strip].map((n, i) => (
              <span className="svc-marquee-item" key={i}><span>Projects</span><em aria-hidden>&#10022;</em></span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function QACallout() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'clamp(48px,5vw,80px)' }}>
        <div className="svc-callout sl-reveal">
          <div className="svc-callout-tag"><span aria-hidden style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />Question</div>
          <h2 className="svc-callout-q">How should AI SaaS companies approach website design differently?</h2>
          <p className="svc-callout-a">
            By leading with the outcome, not the technology. AI is complex and often misunderstood &mdash; your website needs to translate technical capabilities into business value your buyers immediately grasp. That means clear use cases, compelling demos, and messaging that focuses on what your AI does for the customer rather than how it works under the hood. Design Asylum builds AI SaaS websites that make cutting-edge technology feel accessible, trustworthy, and essential.
          </p>
        </div>
      </section>
    );
  }

  function TableOfContents() {
    const [active, setActive] = useState('sol-01');
    useEffect(() => {
      const secs = window.SOL_TOC.map(([id]) => document.getElementById(id)).filter(Boolean);
      if (!secs.length) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
      secs.forEach((s) => io.observe(s));
      return () => io.disconnect();
    }, []);
    return (
      <aside className="bl-toc">
        <div className="bl-toc-h">Table of content</div>
        <nav>
          {window.SOL_TOC.map(([id, label]) => (
            <a key={id} href={'#' + id} className={'bl-toc-link' + (active === id ? ' is-active' : '')}>{label}</a>
          ))}
        </nav>
      </aside>
    );
  }

  function CTABand() {
    return (
      <section id="sol-03" className="svc-cta-band">
        <div className="da-wrap svc-cta-inner">
          <h2 className="svc-cta-h">Get your website for an AI SaaS product.</h2>
          <a className="svc-cta-btn" href="#contact">Connect with an AI SaaS product website expert at Design Asylum <span aria-hidden>&rarr;</span></a>
        </div>
      </section>
    );
  }

  function SolutionPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <SolHero />
        <MarqueeStrip label="AI SaaS Website Clients" />
        <QACallout />
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(48px,5vw,96px)', alignItems: 'start', marginTop: 'clamp(56px,6vw,96px)' }}>
          <TableOfContents />
          <article className="bl-body"><SolBody /></article>
        </div>
        <CTABand />
        <SolPortfolio />
        <SolFAQ />
        <SolExperts />
        <SolRelated />
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountSol() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow &&
      window.SolBody && window.SolPortfolio && window.SolFAQ && window.SolExperts && window.SolRelated && window.SOL_TOC;
    if (!ready) { return setTimeout(mountSol, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<SolutionPage />);
  }
  mountSol();
})();
