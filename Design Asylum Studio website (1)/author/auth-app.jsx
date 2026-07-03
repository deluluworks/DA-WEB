/* Author bio (Tanmaya Rao) — profile header, about bio, key-clients marquee, mount */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Authors', href: '#' }, { label: 'Tanmaya Rao' }];

  /* ---- Profile header ---- */
  function AuthHeader() {
    return (
      <header className="da-wrap" style={{ paddingTop: 140 }}>
        <Breadcrumb trail={CRUMB} />
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 'clamp(40px,5vw,80px)', alignItems: 'center', marginTop: 36 }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--color-deep-teal)' }}>
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 90% at 35% 25%, rgba(255,194,64,0.40), transparent 60%), radial-gradient(80% 100% at 80% 88%, rgba(81,111,234,0.46), transparent 56%)' }} />
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: D, fontWeight: 800, fontSize: 88, color: 'rgba(255,255,255,0.85)' }}>TR</span>
          </div>
          <div>
            <span style={{ fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, color: 'var(--color-iris-voltage)' }}>Lead Brand Designer | Illustrator</span>
            <h1 style={{ margin: '16px 0 0', fontFamily: D, fontWeight: 800, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 0.98, fontSize: 'clamp(48px,6vw,104px)', color: INK }}>Tanmaya Rao</h1>
          </div>
        </div>
      </header>
    );
  }

  /* ---- About bio ---- */
  function AuthAbout() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'clamp(40px,5vw,96px)', alignItems: 'start' }}>
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 style={{ margin: '20px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Tanmaya Rao</h2>
          </div>
          <div style={{ maxWidth: 820 }}>
            <p style={{ margin: '0 0 22px', fontFamily: S, fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.62, color: GRAPHITE }}>
              Tanmaya Rao is the Lead Brand Designer &amp; Illustrator at Design Asylum, celebrated for her mastery of illustration and her ability to give B2B brands a distinct, human personality. Across Ximkart, Revind, Sevenloop, and a long line of industrial and SaaS clients, she has built a deep fluency in the manufacturing, metals, and mechanical space that makes her design direction sharper and more informed from day one.
            </p>
            <p style={{ margin: '0 0 22px', fontFamily: S, fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.62, color: GRAPHITE }}>
              Her work pairs strategic thinking with craft &mdash; custom illustration systems, iconography, and visual identities that hold up across a website, a brochure, and a brand film. Clients return to her precisely because the strategic context carries forward; she is often the through-line that keeps a brand coherent as it grows.
            </p>
            <p style={{ margin: 0, fontFamily: S, fontSize: 'clamp(19px,1.6vw,22px)', lineHeight: 1.62, color: GRAPHITE }}>
              The result is a body of work that makes brands memorable to the right audiences &mdash; with clarity, personality, and taste.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Key-clients marquee ---- */
  function AuthClients() {
    const strip = Array.from({ length: 8 }, (_, i) => i);
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div className="svc-marquee-label">Tanmaya Rao&rsquo;s key clients</div>
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

  function AuthorPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <AuthHeader />
        <AuthAbout />
        <AuthServiceTags />
        <AuthClients />
        <AuthProjects />
        <AuthBlogs />
        <AuthSolutionExpertise />
        <AuthIndustryExpertise />
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountAuth() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow &&
      window.AuthServiceTags && window.AuthProjects && window.AuthBlogs && window.AuthSolutionExpertise && window.AuthIndustryExpertise;
    if (!ready) { return setTimeout(mountAuth, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<AuthorPage />);
  }
  mountAuth();
})();
