/* Industry (Manufacturing) page — hero, marquee, ToC, CTA band, layout, mount */
(function () {
  const { useState, useEffect } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Industries', href: '#' }, { label: 'Manufacturing' }];

  function IndHero() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={CRUMB} />
        <h1 style={{ margin: '28px 0 0', maxWidth: 1180, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(40px,5.2vw,84px)', color: INK }}>
          Design Agency for Manufacturing Firms &mdash; Branding, Website
        </h1>
        <p style={{ margin: '30px 0 0', maxWidth: 860, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.55, color: GRAPHITE }}>
          A design agency for manufacturing firms builds branding and websites that highlight industrial expertise, driving online visibility and client engagement.
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

  function TableOfContents() {
    const [active, setActive] = useState('ind-01');
    useEffect(() => {
      const secs = window.IND_TOC.map(([id]) => document.getElementById(id)).filter(Boolean);
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
          {window.IND_TOC.map(([id, label]) => (
            <a key={id} href={'#' + id} className={'bl-toc-link' + (active === id ? ' is-active' : '')}>{label}</a>
          ))}
        </nav>
      </aside>
    );
  }

  function CTABand() {
    return (
      <section id="ind-03" className="svc-cta-band">
        <div className="da-wrap svc-cta-inner">
          <h2 className="svc-cta-h">Design your right to win.</h2>
          <a className="svc-cta-btn" href="#contact">Book a strategy call with Design Asylum <span aria-hidden>&rarr;</span></a>
        </div>
      </section>
    );
  }

  function IndustryPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <IndHero />
        <MarqueeStrip label="Clients from Manufacturing Industry" />
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(48px,5vw,96px)', alignItems: 'start', marginTop: 'clamp(56px,6vw,96px)' }}>
          <TableOfContents />
          <article className="bl-body"><IndBody /></article>
        </div>
        <CTABand />
        <IndPortfolio />
        <IndFAQ />
        <IndExperts />
        <IndRelated />
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountInd() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow &&
      window.IndBody && window.IndPortfolio && window.IndFAQ && window.IndExperts && window.IndRelated && window.IND_TOC;
    if (!ready) { return setTimeout(mountInd, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<IndustryPage />);
  }
  mountInd();
})();
