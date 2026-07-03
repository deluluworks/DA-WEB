/* Location (Ahmedabad) page — hero, Q&A callout, marquee, ToC, CTA band, mount */
(function () {
  const { useState, useEffect } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Locations', href: '#' }, { label: 'Ahmedabad Web Design Agency' }];

  function LocHero() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={CRUMB} />
        <h1 style={{ margin: '28px 0 0', maxWidth: 1160, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(42px,5.6vw,92px)', color: INK }}>
          Best Web Design &amp; Branding Agency in Ahmedabad
        </h1>
        <p style={{ margin: '30px 0 0', maxWidth: 880, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.55, color: GRAPHITE }}>
          Ahmedabad&rsquo;s economy has three layers &mdash; a deep manufacturing base, a fast-growing B2B and product-tech base, and the GIFT City fintech build-out. Each one needs a different kind of brand, but they share a buyer who has been around for a while and is hard to impress.
        </p>
      </header>
    );
  }

  function QACallout() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'clamp(56px,6vw,96px)' }}>
        <div className="svc-callout sl-reveal">
          <div className="svc-callout-tag"><span aria-hidden style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />Question</div>
          <h2 className="svc-callout-q">What does an Ahmedabad founder gain from a Bangalore B2B studio?</h2>
          <p className="svc-callout-a">
            We work with Ahmedabad founders on positioning-led brand and Webflow builds. Same timezone, full working-day overlap, four to six weeks for standard scope. We are comfortable across modern SaaS and traditional manufacturing &mdash; and we know the difference.
          </p>
        </div>
      </section>
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
    const [active, setActive] = useState('loc-01');
    useEffect(() => {
      const secs = window.LOC_TOC.map(([id]) => document.getElementById(id)).filter(Boolean);
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
          {window.LOC_TOC.map(([id, label]) => (
            <a key={id} href={'#' + id} className={'bl-toc-link' + (active === id ? ' is-active' : '')}>{label}</a>
          ))}
        </nav>
      </aside>
    );
  }

  function CTABand() {
    return (
      <section id="loc-09" className="svc-cta-band">
        <div className="da-wrap svc-cta-inner">
          <div>
            <p className="svc-cta-lead">Book a 30-minute diagnosis call &mdash; no pitch, just a clear read on where your brand stands.</p>
            <h2 className="svc-cta-h">Ready to transform your Ahmedabad brand?</h2>
          </div>
          <a className="svc-cta-btn" href="#contact">Talk to a design expert <span aria-hidden>&rarr;</span></a>
        </div>
      </section>
    );
  }

  function LocationPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <LocHero />
        <LocPortfolio />
        <QACallout />
        <MarqueeStrip label="Our Clients in Ahmedabad" />
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(48px,5vw,96px)', alignItems: 'start', marginTop: 'clamp(56px,6vw,96px)' }}>
          <TableOfContents />
          <article className="bl-body"><LocBody /></article>
        </div>
        <CTABand />
        <LocFAQ />
        <LocRelated />
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountLoc() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal &&
      window.LocBody && window.LocPortfolio && window.LocFAQ && window.LocRelated && window.LOC_TOC;
    if (!ready) { return setTimeout(mountLoc, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<LocationPage />);
  }
  mountLoc();
})();
