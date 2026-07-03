/* Website Audit (Hackuity) — header, metadata, annotated audit visual, mount */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Website Audit', href: '#' }, { label: 'Cyber Security Company Hackuity' }];

  /* one stacked section of the audited site, with an annotation pin + note */
  function ShotRow({ h, bg, glow, label, pin, note, noteSide }) {
    return (
      <div className="audit-shot-row" style={{ height: h, background: bg }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: glow }} />
        <span style={{ position: 'absolute', left: 28, top: 22, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{label}</span>
        {pin && (
          <React.Fragment>
            <span className="audit-pin" style={{ top: pin.top, left: noteSide === 'left' ? 'auto' : pin.x, right: noteSide === 'left' ? pin.x : 'auto' }}>{pin.n}</span>
            <div className="audit-note" style={{ top: note.top, left: noteSide === 'left' ? 28 : 'auto', right: noteSide === 'left' ? 'auto' : 28 }}>
              <div className="audit-note-k">{note.k}</div>
              <p className="audit-note-p">{note.p}</p>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }

  function AuditPage() {
    window.useReveal();
    const rows = [
      {
        h: 460, bg: 'var(--color-obsidian-ink)',
        glow: 'radial-gradient(70% 120% at 22% 30%, rgba(81,111,234,0.40), transparent 56%), radial-gradient(70% 120% at 86% 20%, rgba(150,235,235,0.22), transparent 56%)',
        label: 'Hero — Hackuity.io',
        pin: { n: '1', top: 150, x: 360 }, noteSide: 'right',
        note: { top: 120, k: 'Messaging — strong', p: 'The hero leads with a single, crisp value statement instead of feature soup. A non-technical buyer understands the offer in one read.' },
      },
      {
        h: 420, bg: 'var(--color-deep-teal)',
        glow: 'radial-gradient(70% 120% at 78% 36%, rgba(255,194,64,0.26), transparent 56%)',
        label: 'Capabilities band',
        pin: { n: '2', top: 130, x: 320 }, noteSide: 'left',
        note: { top: 100, k: 'Visual design — minimal', p: 'Generous whitespace and a restrained palette let the product screenshots carry the page. Nothing competes with the proof.' },
      },
      {
        h: 400, bg: '#16202a',
        glow: 'radial-gradient(70% 120% at 30% 40%, rgba(81,111,234,0.34), transparent 56%)',
        label: 'Social proof / logos',
        pin: { n: '3', top: 120, x: 340 }, noteSide: 'right',
        note: { top: 92, k: 'Opportunity', p: 'Customer logos are present but quiet. Pulling one outcome metric forward here would convert trust into momentum.' },
      },
      {
        h: 380, bg: 'var(--color-obsidian-ink)',
        glow: 'radial-gradient(70% 120% at 70% 30%, rgba(150,235,235,0.20), transparent 56%)',
        label: 'Footer / CTA',
        pin: { n: '4', top: 120, x: 320 }, noteSide: 'left',
        note: { top: 92, k: 'CTA — clear', p: 'A single, confident call to action closes the page. No competing buttons, no ambiguity about the next step.' },
      },
    ];

    return (
      <React.Fragment>
        <SLNav />

        <section className="da-wrap" style={{ paddingTop: 150, paddingBottom: 'var(--section-pad-y)' }}>
          <Breadcrumb trail={CRUMB} />

          <div className="audit-heading-wrap" style={{ marginTop: 28 }}>
            <span style={{ display: 'inline-block', marginBottom: 22 }}><Eyebrow>Website audit</Eyebrow></span>
            <h1 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(40px,4.8vw,82px)', color: INK }}>
              Hackuity.io &mdash; clear messaging, augmented by visual design
            </h1>
            <p style={{ margin: '26px 0 0', maxWidth: 820, fontFamily: S, fontSize: 'clamp(19px,1.7vw,24px)', lineHeight: 1.55, color: GRAPHITE }}>
              A relatively young organization, Hackuity brings clarity, crispness in messaging augmented by visual design that is minimal.
            </p>
          </div>

          <div className="audit-content-wrap">
            <div>
              <div className="audit-meta-k">Website</div>
              <div className="audit-meta-v">hackuity.io</div>
            </div>
            <div>
              <div className="audit-meta-k">Audited by</div>
              <div className="author-wrap">
                <div className="author-avatar">
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(100% 100% at 30% 25%, rgba(255,194,64,0.5), transparent 60%)' }} />
                  <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: D, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.9)' }}>EM</span>
                </div>
                <div className="audit-meta-v">Ekta Manchanda</div>
              </div>
            </div>
            <div>
              <div className="audit-meta-k">Audited on</div>
              <div className="audit-meta-v">October 10, 2024</div>
            </div>
          </div>

          <p className="audit-description-wrap" style={{ margin: '36px 0 0', maxWidth: 760, fontFamily: S, fontSize: 17, lineHeight: 1.6, color: ASH }}>
            A page-by-page read of the homepage &mdash; where the messaging and visual design already earn trust, and the few places a sharper proof point would convert it into momentum.
          </p>
        </section>

        {/* annotated audit visual */}
        <div className="da-wrap">
          <div className="audit-hero-img sl-reveal">
            <div className="audit-shot">
              {rows.map((r, i) => <ShotRow key={i} {...r} />)}
            </div>
          </div>
          <p style={{ margin: '18px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: ASH }}>
            Annotated website audit &mdash; Hackuity.io homepage with messaging &amp; visual-design critique callouts
          </p>
        </div>

        <div style={{ height: 'var(--section-pad-y)' }} />
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mountAudit() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal && window.Eyebrow;
    if (!ready) { return setTimeout(mountAudit, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<AuditPage />);
  }
  mountAudit();
})();
