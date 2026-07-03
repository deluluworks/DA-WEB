/* Sevenloop — Print collateral showcase (leanest template)
   Navbar · title + brochure stack · AI chip row · global footer */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const ASH = 'var(--color-ash)';

  function Spread({ idx, caption, ratio, bg, glow, word, wordColor }) {
    return (
      <figure className="pr-fig sl-reveal" style={{ margin: 0, aspectRatio: ratio, background: bg }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: glow }} />
        {word && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 'clamp(34px,6vw,104px)', color: wordColor }}>{word}</span>
          </div>
        )}
        <span className="pr-idx">{String(idx).padStart(2, '0')}</span>
        <span className="pr-cap">{caption}</span>
      </figure>
    );
  }

  const SPREADS = [
    { caption: 'Sevenloop brochure \u2014 cover', ratio: '16 / 10', bg: 'var(--color-obsidian-ink)', word: 'Sevenloop', wordColor: 'rgba(255,255,255,0.2)', glow: 'radial-gradient(90% 130% at 50% 38%, rgba(239,108,46,0.34), transparent 58%)' },
    { caption: 'Inside spread 1 \u2014 intro / positioning', ratio: '2 / 1', bg: 'var(--color-deep-teal)', glow: 'radial-gradient(80% 140% at 16% 20%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(80% 140% at 86% 86%, rgba(81,111,234,0.44), transparent 52%)' },
    { caption: 'Inside spread 2 \u2014 capabilities', ratio: '2 / 1', bg: 'var(--color-block-maroon)', glow: 'radial-gradient(80% 130% at 80% 22%, rgba(255,194,64,0.26), transparent 55%)' },
    { caption: 'Inside spread 3 \u2014 process / quality', ratio: '2 / 1', bg: 'var(--color-block-iris)', glow: 'radial-gradient(90% 130% at 22% 84%, rgba(255,255,255,0.20), transparent 55%)' },
    { caption: 'Inside spread 4 \u2014 contact / back cover', ratio: '16 / 10', bg: 'var(--color-block-ink)', glow: 'radial-gradient(90% 130% at 62% 30%, rgba(150,235,235,0.20), transparent 58%), radial-gradient(80% 120% at 12% 90%, rgba(239,108,46,0.26), transparent 55%)' },
  ];

  function PrintPage() {
    window.useReveal();
    const ai = ['ChatGPT', 'Google AI', 'Claude', 'Perplexity'];
    return (
      <React.Fragment>
        <SLNav />

        <section className="section_common" style={{ paddingTop: 150 }}>
          {/* SECTION 2 — title + brochure stack */}
          <div className="da-wrap">
            <Breadcrumb trail={[{ label: 'Home', href: '#' }, { label: 'Print Design', href: '#' }, { label: 'Sevenloop Brochure' }]} />
            <h1 style={{ margin: '28px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.92, fontSize: 'clamp(64px,11vw,168px)', color: INK }}>Sevenloop Brochure</h1>
          </div>

          <div className="da-wrap" style={{ marginTop: 'clamp(56px,7vw,120px)', display: 'flex', flexDirection: 'column', gap: 'var(--pr-stack-gap)' }}>
            {SPREADS.map((s, i) => <Spread key={i} idx={i + 1} {...s} />)}
          </div>
        </section>

        {/* SECTION 3 — AI summary chip row */}
        <section className="da-wrap" style={{ marginTop: 'var(--pr-stack-gap)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap', padding: '30px 0', borderTop: '1px solid var(--color-fog)', borderBottom: '1px solid var(--color-fog)' }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: ASH }}>Ask AI for a summary of Design Asylum</span>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {ai.map((a) => <a key={a} className="pr-aichip" href="#"><span aria-hidden style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />{a}</a>)}
            </div>
          </div>
        </section>

        {/* SECTION 4 — global footer */}
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Print Design', href: '#' }, { label: 'Sevenloop Brochure' }]} />
      </React.Fragment>
    );
  }

  Object.assign(window, { PrintPage });
})();
