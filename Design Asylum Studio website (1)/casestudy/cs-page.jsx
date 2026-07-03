/* Sevenloop — Branding case study (image-forward template)
   Header + metadata sidebar · tall full-bleed visual stack · slim footer */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* Sevenloop brand mark — orange circle with a four-leaf clover */
  function CloverMark({ size = 132 }) {
    const orange = '#ef6c2e';
    const leaf = (cx, cy) => <circle cx={cx} cy={cy} r="15" fill="#fff" />;
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="an orange circle with a four leaf clover in the center">
        <circle cx="60" cy="60" r="60" fill={orange} />
        <g transform="translate(60 58)">
          {leaf(0, -17)}
          {leaf(17, 0)}
          {leaf(0, 17)}
          {leaf(-17, 0)}
          <rect x="-2.4" y="6" width="4.8" height="26" rx="2.4" fill="#fff" transform="rotate(38 0 10)" />
        </g>
      </svg>
    );
  }

  /* a full-width branding figure (placeholder visual) */
  function Figure({ idx, caption, ratio, bg, glow, word, wordColor }) {
    return (
      <figure className="cs-figure sl-reveal" style={{ margin: 0, aspectRatio: ratio, background: bg }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: glow }} />
        {word && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 'clamp(34px,6vw,96px)', color: wordColor }}>{word}</span>
          </div>
        )}
        <span className="cs-idx">{String(idx).padStart(2, '0')}</span>
        <span className="cs-cap">{caption}</span>
      </figure>
    );
  }

  function MetaRow({ label, children }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 22, paddingBottom: 22, borderTop: '1px solid var(--color-fog)' }}>
        <span className="cs-meta-label">{label}</span>
        {children || <span className="cs-empty-rule" aria-hidden />}
      </div>
    );
  }

  const FIGURES = [
    { caption: 'Sevenloop logo lockup', ratio: '16 / 9', bg: 'var(--color-obsidian-ink)', glow: 'radial-gradient(90% 130% at 50% 40%, rgba(239,108,46,0.32), transparent 60%)', word: 'Sevenloop', wordColor: 'rgba(255,255,255,0.20)' },
    { caption: 'Brand identity — logo system / colour / type', ratio: '16 / 10', bg: 'var(--color-deep-teal)', glow: 'radial-gradient(90% 130% at 18% 20%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(90% 130% at 86% 88%, rgba(81,111,234,0.46), transparent 52%)' },
    { caption: 'Project brochure spreads', ratio: '16 / 9', bg: 'var(--color-block-maroon)', glow: 'radial-gradient(80% 120% at 80% 18%, rgba(255,194,64,0.26), transparent 55%)' },
    { caption: 'Brand applications / collateral', ratio: '4 / 3', bg: 'var(--color-block-iris)', glow: 'radial-gradient(90% 120% at 22% 84%, rgba(255,255,255,0.20), transparent 55%)' },
    { caption: 'Brochure detail / mockups', ratio: '16 / 10', bg: 'var(--color-block-ink)', glow: 'radial-gradient(90% 130% at 62% 30%, rgba(150,235,235,0.22), transparent 58%), radial-gradient(80% 120% at 12% 90%, rgba(239,108,46,0.28), transparent 55%)' },
  ];

  function CaseStudyPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />

        <main className="case-study_section" style={{ paddingTop: 150 }}>
          {/* SECTION 1 — header + metadata */}
          <header className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 'clamp(48px, 6vw, 110px)', alignItems: 'start' }}>
            <div className="flex flex-col gap-3">
              <Eyebrow>Case study</Eyebrow>
              <h1 className="case-study-projects_h1" style={{ margin: '24px 0 0', maxWidth: 720, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(42px,5.2vw,74px)', color: INK }}>
                Sevenloop &mdash; Branding and project brochure design
              </h1>
              <div style={{ marginTop: 56 }}><CloverMark /></div>
            </div>

            {/* metadata sidebar (sticky) */}
            <aside style={{ position: 'sticky', top: 116 }}>
              <MetaRow label="Client">
                <span className="cs-tag tag">Sevenloop | Branding</span>
              </MetaRow>
              <MetaRow label="Funding">
                <span style={{ fontFamily: S, fontSize: 20, color: INK }}>Seed Funding</span>
              </MetaRow>
              <MetaRow label="Lead Investors">
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span className="cs-investor" aria-label="Matrix Partners logo">Matrix Partners</span>
                  <span className="cs-investor" aria-label="Better logo">Better</span>
                </div>
              </MetaRow>
              <MetaRow label="Industry" />
              <MetaRow label="Headquarters" />
              <MetaRow label="Target Audience" />
            </aside>
          </header>

          {/* SECTION 2 — spacer + full-bleed visual stack */}
          <div className="spacer-huge" style={{ height: 'var(--cs-stack-gap)' }} />

          <div className="da-wrap" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cs-stack-gap)' }}>
            {FIGURES.map((f, i) => <Figure key={i} idx={i + 1} {...f} />)}
          </div>
        </main>

        {/* slim footer — deliberately sparse */}
        <footer style={{ marginTop: 'var(--cs-stack-gap)', borderTop: '1px solid var(--color-fog)' }}>
          <div className="da-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, padding: '40px 0' }}>
            <a href="Sevenloop — Client Hub.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12, color: INK }}>
              <span aria-hidden>&larr;</span> Back to Sevenloop hub
            </a>
            <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
              <a className="da-mail" href="mailto:hello@designasylum.in" style={{ fontFamily: S, fontSize: 17, color: INK, textDecoration: 'none' }}>hello@designasylum.in</a>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: ASH }}>&copy; Design Asylum 2026</span>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }

  Object.assign(window, { CaseStudyPage });
})();
