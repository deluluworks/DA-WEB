/* Aavenir client hub — hero, meta block, narrative, team, service strip, mount */
(function () {
  const { Button } = window.DesignAsylumDesignSystem_594314 || {};
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Clients', href: '#' }, { label: 'Aavenir' }];

  /* ---- Section 1: hero ---- */
  function AavHeader() {
    return (
      <header style={{ position: 'relative', overflow: 'hidden', paddingTop: 150 }}>
        <div aria-hidden style={{ position: 'absolute', inset: '-6% -20% auto -20%', height: 520, background: 'var(--gradient-solar-bloom)', opacity: 0.34, filter: 'blur(12px)', pointerEvents: 'none' }} />
        <div className="da-wrap" style={{ position: 'relative' }}>
          <Breadcrumb trail={CRUMB} />
          <h1 style={{ margin: '28px 0 0', fontFamily: D, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.9, fontSize: 'clamp(72px,15vw,220px)', color: INK }}>Aavenir</h1>
          <div className="sl-reveal" style={{ marginTop: 56, position: 'relative', overflow: 'hidden', background: 'var(--color-deep-teal)', aspectRatio: '16 / 7', width: '100%' }}>
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 130% at 18% 18%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(90% 130% at 85% 85%, rgba(81,111,234,0.46), transparent 52%), radial-gradient(60% 100% at 60% 30%, rgba(150,235,235,0.24), transparent 56%)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: D, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 'clamp(40px,7vw,108px)', color: 'rgba(255,255,255,0.18)' }}>Aavenir</span>
            </div>
            <span style={{ position: 'absolute', left: 22, bottom: 20, fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Aavenir brand hero</span>
          </div>
        </div>
      </header>
    );
  }

  /* ---- Section 2: two-column meta block ---- */
  function AavMeta() {
    const arrow = <span aria-hidden>&rarr;</span>;
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '32fr 68fr', gap: 72, alignItems: 'start' }}>
          <div className="sl-jump">
            <Eyebrow>Service provided</Eyebrow>
            <p style={{ margin: '22px 0 0', fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: 18, color: INK }}>Website Design</p>
          </div>
          <div>
            <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'clamp(34px,3.6vw,54px)', color: INK }}>About client</h2>
            <p style={{ margin: '32px 0 0', maxWidth: 760, fontFamily: S, fontSize: 'clamp(20px,1.8vw,25px)', lineHeight: 1.55, color: INK }}>
              Aavenir is an AI-powered contract lifecycle management platform built on ServiceNow, helping enterprises automate source-to-pay workflows with products spanning contracts, obligations, RFPs, vendor onboarding, and invoicing.
            </p>
            <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {Button
                ? <Button variant="primary" size="lg" iconRight={arrow}>Visit website</Button>
                : <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: INK, color: 'var(--color-paper-white)', padding: '16px 28px', fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13 }}>Visit website {arrow}</a>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Section 4: narrative ---- */
  function AavNarrative() {
    const paras = [
      'Aavenir came to Design Asylum not for a new logo, but for clarity. The brand mark already worked; what did not was the story. A five-product suite had grown faster than the language describing it, and prospects struggled to understand where one product ended and the next began.',
      'So the work started with messaging, not design. We rearchitected the narrative across the full suite \u2014 Contractflow, Obligationflow, RFPflow, Onboardingflow, and Invoiceflow \u2014 giving each product a sharp, single-sentence job while keeping the parent story coherent. The result reads as one platform with five doors, not five tools sharing a logo.',
      'With the messaging settled, we redesigned aavenir.com around it. The new site leads with the source-to-pay outcome an enterprise buyer is actually shopping for, then lets each product page prove its specific value \u2014 built on ServiceNow, framed for the procurement and legal teams who sign off.',
      'Throughout, we worked closely with Reza and the CMO\u2019s office, testing language against how Aavenir\u2019s own sales team pitched in the room. That collaboration is why the copy landed: it was validated against real conversations, not written in isolation.',
      'The outcome is a brand that finally matches the sophistication of the product \u2014 a clearer story, a sharper website, and a sales team equipped to explain a five-product platform without losing the thread.',
    ];
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', background: 'var(--color-paper-off)' }}>
        <div className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', marginTop: 'calc(-1 * var(--section-pad-y))', display: 'grid', gridTemplateColumns: '32fr 68fr', gap: 72, alignItems: 'start' }}>
          <div>
            <Eyebrow>The work</Eyebrow>
          </div>
          <div style={{ maxWidth: 820 }}>
            <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, fontSize: 'var(--text-section)', color: INK }}>How Design Asylum helped Aavenir</h2>
            {paras.map((p, i) => (
              <p key={i} style={{ margin: '0 0 24px', fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.66, color: GRAPHITE }}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Section 5: project team ---- */
  const TEAM = [
    ['Chief of Staff | Project Manager', 'Arpan Sen', 'Arpan handles management at Design Asylum, ensuring that everything, well\u2026flows smoothly.'],
    ['Partner | Brand Strategist', 'Mejo Kuriachan', 'Mejo puts the \u2018Everything\u2019 in brand, flow, video and motion \u2014 an engineer first, strategist and design manager next.'],
    ['Lead Designer | Content Strategist', 'Athira Krishnan', 'Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.'],
    ['Content Strategist', 'Swathi Mohan', 'Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard.'],
  ];

  function TeamCard({ role, name, bio }) {
    return (
      <article className="sl-team-card" style={{ border: '1px solid var(--color-fog)', padding: '32px 30px 28px', background: 'var(--color-paper-white)', display: 'flex', flexDirection: 'column', minHeight: 280 }}>
        <span style={{ fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-iris-voltage)' }}>{role}</span>
        <h3 style={{ margin: '16px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.0, fontSize: 'clamp(24px,2vw,30px)', color: INK }}>{name}</h3>
        <p style={{ margin: '16px 0 0', fontFamily: S, fontSize: 16, lineHeight: 1.5, color: GRAPHITE, flex: '1 1 auto' }}>{bio}</p>
        <a href="#" className="sl-readmore" style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK, textDecoration: 'none' }}>
          Read more <span className="sl-readmore-arrow" aria-hidden>&rarr;</span>
        </a>
      </article>
    );
  }

  function AavTeam() {
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div className="da-wrap">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow>The people</Eyebrow>
            <h2 style={{ margin: '20px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Project team</h2>
          </div>
          <div className="sl-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {TEAM.map((m) => <TeamCard key={m[1]} role={m[0]} name={m[1]} bio={m[2]} />)}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Section 6: service provided strip ---- */
  function AavServiceStrip() {
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
        <div className="da-wrap">
          <Eyebrow>Service provided</Eyebrow>
          <a href="#" style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, borderTop: '1px solid var(--color-obsidian-ink)', borderBottom: '1px solid var(--color-obsidian-ink)', padding: '32px 0', textDecoration: 'none' }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', fontSize: 'clamp(28px,3vw,46px)', color: INK }}>Website Copywriting</span>
            <span style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12, color: INK }}>Visit service <span aria-hidden>&#8599;</span></span>
          </a>
        </div>
      </section>
    );
  }

  function AavenirPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <AavHeader />
        <AavMeta />
        <AavNarrative />
        <AavTeam />
        <AavServiceStrip />
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountAav() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow;
    if (!ready) { return setTimeout(mountAav, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<AavenirPage />);
  }
  mountAav();
})();
