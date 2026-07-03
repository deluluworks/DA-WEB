/* Branding Agency service page — hero, two-column layout, scroll-spy ToC, mount */
(function () {
  const { useState, useEffect } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* ---- Hero ---- */
  function ServiceHero() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={[{ label: 'Home', href: '#' }, { label: 'Services', href: '#' }, { label: 'Branding Agency' }]} />
        <h1 style={{ margin: '28px 0 0', maxWidth: 1100, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(46px,6.4vw,104px)', color: INK }}>
          Branding Agency
        </h1>
        <p style={{ margin: '30px 0 0', maxWidth: 880, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.55, color: GRAPHITE }}>
          A branding agency should answer one question first: what do you want a buyer, an investor, or a hire to believe about you before they meet you. Most agencies skip the question and go straight to logo exploration. Design Asylum starts where every B2B brand actually has to start &mdash; with diagnosis, positioning, and the words on the page &mdash; and only then builds the identity.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 36 }}>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: INK, color: 'var(--color-paper-white)', padding: '16px 28px', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13 }}>
            Book a strategy call <span aria-hidden>&rarr;</span>
          </a>
          <a href="#svc-04" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: 'none', color: INK, padding: '16px 28px', border: '1px solid var(--color-obsidian-ink)', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13 }}>
            See our work <span aria-hidden>&darr;</span>
          </a>
        </div>
      </header>
    );
  }

  /* ---- Sticky ToC with scroll-spy ---- */
  function TableOfContents() {
    const [active, setActive] = useState('svc-01');
    useEffect(() => {
      const secs = window.SVC_TOC.map(([id]) => document.getElementById(id)).filter(Boolean);
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
          {window.SVC_TOC.map(([id, label]) => (
            <a key={id} href={'#' + id} className={'bl-toc-link' + (active === id ? ' is-active' : '')}>{label}</a>
          ))}
        </nav>
      </aside>
    );
  }

  function ServicePage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <ServiceHero />
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(48px,5vw,96px)', alignItems: 'start', marginTop: 'clamp(56px,6vw,96px)' }}>
          <TableOfContents />
          <article className="bl-body">
            <SvcBody />
          </article>
        </div>
        <SvcPortfolio />
        <SvcFAQ />
        <SvcExperts />
        <SvcRelated />
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Services', href: '#' }, { label: 'Branding Agency' }]} />
      </React.Fragment>
    );
  }

  function mountSvc() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow &&
      window.SvcBody && window.SvcPortfolio && window.SvcFAQ && window.SvcExperts && window.SvcRelated && window.SVC_TOC;
    if (!ready) { return setTimeout(mountSvc, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<ServicePage />);
  }
  mountSvc();
})();
