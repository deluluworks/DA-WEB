/* Sevenloop blog — header, two-column layout, scroll-spy ToC, mount */
(function () {
  const { useState, useEffect, useRef } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* ---- Article header ---- */
  function ArticleHeader() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={[{ label: 'Home', href: '#' }, { label: 'Blog', href: '#' }, { label: 'Sevenloop Brand Website Redesign' }]} />
        <h1 style={{ margin: '28px 0 0', maxWidth: 1040, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.02, fontSize: 'clamp(40px,5vw,76px)', color: INK }}>
          Sevenloop Rebrand &amp; Webflow Site: A 5-Month Case Study
        </h1>
        <p style={{ margin: '28px 0 0', maxWidth: 780, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.5, color: GRAPHITE }}>
          How Sevenloop went from B2B product company to enterprise-ready brand in 5 months &mdash; repositioning, identity, Webflow build, and the conversations it opened.
        </p>
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', marginTop: 32 }}>
          {[['Author', 'Tanmaya Rao'], ['Last updated', 'June 14, 2026']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, color: ASH }}>{k}</span>
              <span style={{ fontFamily: S, fontSize: 17, color: INK }}>{v}</span>
            </div>
          ))}
        </div>
        <div className="sl-reveal" style={{ marginTop: 48, position: 'relative', overflow: 'hidden', width: '100%', aspectRatio: '21 / 9', background: 'var(--color-obsidian-ink)' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 130% at 20% 22%, rgba(239,108,46,0.34), transparent 52%), radial-gradient(80% 130% at 84% 84%, rgba(81,111,234,0.46), transparent 52%), radial-gradient(60% 100% at 62% 32%, rgba(150,235,235,0.18), transparent 56%)' }} />
          <span style={{ position: 'absolute', left: 24, bottom: 22, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Sevenloop rebrand hero</span>
        </div>
      </header>
    );
  }

  /* ---- Sticky ToC with scroll-spy + AI chips ---- */
  function TableOfContents() {
    const [active, setActive] = useState('sec-01');
    useEffect(() => {
      const secs = window.BL_TOC.map(([id]) => document.getElementById(id)).filter(Boolean);
      if (!secs.length) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
      secs.forEach((s) => io.observe(s));
      return () => io.disconnect();
    }, []);

    const ai = [['ChatGPT', 'G'], ['Google AI', 'G'], ['Claude', 'C'], ['Perplexity', 'P']];
    return (
      <aside className="bl-toc">
        <div className="bl-toc-h">Table of content</div>
        <nav>
          {window.BL_TOC.map(([id, label]) => (
            <a key={id} href={'#' + id} className={'bl-toc-link' + (active === id ? ' is-active' : '')}>{label}</a>
          ))}
        </nav>
        <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--color-fog)' }}>
          <div className="bl-toc-h" style={{ marginBottom: 14 }}>Read summaried version with</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {ai.map(([name]) => (
              <a key={name} className="bl-aichip" href="#"><span aria-hidden style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />{name}</a>
            ))}
          </div>
        </div>
      </aside>
    );
  }

  /* ---- Page ---- */
  function BlogPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <ArticleHeader />
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'clamp(48px,5vw,96px)', alignItems: 'start', marginTop: 'clamp(56px,6vw,96px)' }}>
          <TableOfContents />
          <article className="bl-body">
            <BlogBodyA />
            <BlogBodyB />
          </article>
        </div>
        <BlogFAQ />
        <BlogAuthor />
        <BlogSolutions />
        <BlogRelated />
        <SLFooter />
      </React.Fragment>
    );
  }

  function mountBlog() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal &&
      window.BlogBodyA && window.BlogBodyB && window.BlogFAQ && window.BlogAuthor && window.BlogSolutions && window.BlogRelated && window.BL_TOC;
    if (!ready) { return setTimeout(mountBlog, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<BlogPage />);
  }
  mountBlog();
})();
