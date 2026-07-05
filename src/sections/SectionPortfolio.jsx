/* Design Asylum homepage — Showreel · Portfolio · Pain points · Retention stats */

/* ============ SECTION 5 - SHOWREEL + TEASER ============ */
export function DAShowreel() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)' }}>
      <div className="da-wrap">
        <div style={{ position: 'relative', borderRadius: 'var(--radius-cards)', overflow: 'hidden', aspectRatio: '16 / 8', background: 'var(--color-obsidian-ink)' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 120% at 15% 20%, rgba(255,194,64,0.45), transparent 50%), radial-gradient(80% 120% at 85% 80%, rgba(81,111,234,0.5), transparent 50%), radial-gradient(60% 90% at 60% 30%, rgba(150,235,235,0.3), transparent 55%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 'clamp(40px,7vw,104px)', color: 'rgba(255,255,255,0.16)' }}>Showreel 2026</span>
          </div>
          <span style={{ position: 'absolute', left: 22, bottom: 20, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Showreel 2026</span>
          <button style={{ position: 'absolute', right: 18, bottom: 18, display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#fff', padding: '12px 22px', borderRadius: 999, cursor: 'pointer', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 12 }}>
            Play video <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span>
          </button>
        </div>
      </div>
      <div className="da-wrap" style={{ marginTop: 24 }}>
        <div className="da-showreel-teaser" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-cards)', background: 'var(--color-solar-bloom)', padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11, color: 'rgba(24,31,31,0.62)' }}>The long version</span>
            <p style={{ margin: '14px 0 0', fontFamily: S, fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.3, color: 'var(--color-obsidian-ink)' }}>
              We wrote four thousand words on how that film actually got made. The brief, the dead ends, the bit we&rsquo;d never do again. Worth a read.
            </p>
          </div>
          <a href="#" style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: 'var(--color-obsidian-ink)', color: 'var(--color-paper-white)', padding: '16px 28px', borderRadius: 999, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>
            Read the breakdown <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 6 - STICKY PORTFOLIO ============ */
function PortfolioCard({ name, cover, wordColor, service, meta }) {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  return (
    <article>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-cards)', overflow: 'hidden', aspectRatio: '16 / 10', background: cover }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: 'clamp(28px,4vw,52px)', color: wordColor }}>{name}</span>
        </div>
        <span style={{ position: 'absolute', right: 16, bottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, border: `1.5px solid ${wordColor}`, color: wordColor, padding: '10px 16px', borderRadius: 999, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 11, whiteSpace: 'nowrap' }}>
          Visit website <span aria-hidden>&rarr;</span>
        </span>
      </div>
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', fontSize: 19, color: 'var(--color-obsidian-ink)' }}>{name}</span>
        <span style={{ fontFamily: S, fontSize: 16, color: 'var(--color-graphite)' }}>{service}</span>
        {meta && <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10, color: 'var(--color-ash)' }}>{meta}</span>}
      </div>
    </article>
  );
}

export function DAPortfolio() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const cards = [
    { name: 'Botim',   cover: 'var(--color-deep-teal)',    wordColor: 'var(--color-solar-bloom)',  service: 'Web design & Webflow development', meta: 'Fintech' },
    { name: 'Ximkart', cover: 'var(--color-block-iris)',   wordColor: 'var(--color-paper-white)',  service: 'Branding',                        meta: 'Series A' },
    { name: 'Stellar', cover: 'var(--color-block-maroon)', wordColor: 'var(--color-paper-white)',  service: 'Website design',                  meta: 'Venture capital' },
    { name: 'Relanto', cover: 'var(--color-block-ink)',    wordColor: 'var(--color-solar-bloom)',  service: 'Website design & build',          meta: 'IT services' },
    { name: 'Verdant', cover: 'var(--color-block-solar)',  wordColor: 'var(--color-obsidian-ink)', service: 'Brand identity',                  meta: 'Multimedia portal' },
  ];
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="da-wrap da-portfolio-grid" style={{ display: 'grid', gridTemplateColumns: '35fr 65fr', gap: 80, alignItems: 'start' }}>
        <div className="da-portfolio-sticky" style={{ position: 'sticky', top: 120, alignSelf: 'start' }}>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'clamp(34px,3.6vw,52px)', color: 'var(--color-obsidian-ink)' }}>Design Asylum&rsquo;s strategic branding projects</h2>
          <p style={{ margin: '24px 0 0', fontFamily: S, fontSize: 18, lineHeight: 1.5, color: 'var(--color-graphite)' }}>A brand &amp; digital studio with a low tolerance for boring.</p>
          <p style={{ margin: '24px 0 0', maxWidth: 360, fontFamily: S, fontSize: 17, lineHeight: 1.55, color: 'var(--color-graphite)' }}>
            The value of branding isn&rsquo;t how a thing looks or sounds. It&rsquo;s the story, confidence and clarity you unearth in the process, the part that makes your:
          </p>
          <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['audience say &ldquo;yes, this&rdquo;', 'team want to be part of it', 'investors reach for the chequebook'].map((t, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'baseline', fontFamily: S, fontSize: 17, color: 'var(--color-obsidian-ink)' }}>
                <span style={{ width: 7, height: 7, flex: '0 0 auto', borderRadius: 999, background: 'var(--color-iris-voltage)', transform: 'translateY(-2px)' }} />
                <span dangerouslySetInnerHTML={{ __html: t }} />
              </li>
            ))}
          </ul>
          <a href="#work" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: 'var(--color-obsidian-ink)', color: 'var(--color-paper-white)', padding: '16px 28px', borderRadius: 999, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>
            See more work <span aria-hidden>&rarr;</span>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {cards.map((c) => <PortfolioCard key={c.name} {...c} />)}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 7 - PAIN POINTS ============ */
function QuoteCard({ quote, who, resolution, client }) {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  return (
    <article style={{ position: 'relative', background: 'var(--color-paper-white)', border: '1px solid var(--color-fog)', borderRadius: 'var(--radius-cards)', padding: '36px 36px 32px', paddingLeft: 40 }}>
      <span style={{ position: 'absolute', left: 0, top: 36, bottom: 32, width: 3, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />
      <p style={{ margin: 0, fontFamily: S, fontStyle: 'normal', fontSize: 22, lineHeight: 1.4, color: 'var(--color-obsidian-ink)' }}>&ldquo;{quote}&rdquo;</p>
      {/* TC-025: removed leading comma; label is company type only since no person name available */}
      <p style={{ margin: '16px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'var(--color-ash)' }}>{who}</p>
      <hr className="da-rule" style={{ margin: '26px 0' }} />
      <p style={{ margin: 0, fontFamily: S, fontSize: 16, lineHeight: 1.55, color: 'var(--color-graphite)' }}>
        Design Asylum worked with <strong style={{ color: 'var(--color-obsidian-ink)', fontWeight: 600 }}>{client}</strong> {resolution}
      </p>
      <a href="#work" style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'var(--color-obsidian-ink)', textDecoration: 'none', borderBottom: '1px solid var(--color-obsidian-ink)', paddingBottom: 3, whiteSpace: 'nowrap' }}>
        See the outcome <span aria-hidden>&rarr;</span>
      </a>
    </article>
  );
}

export function DAPainPoints() {
  const D = 'var(--font-display)';
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="da-wrap da-painpoints-grid" style={{ display: 'grid', gridTemplateColumns: '32fr 68fr', gap: 64, alignItems: 'start' }}>
        <h2 style={{ margin: 0, position: 'sticky', top: 120, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, fontSize: 'clamp(30px,3.2vw,46px)', color: 'var(--color-obsidian-ink)' }}>Does any of this sound familiar?</h2>
        <div className="da-painpoints-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <QuoteCard quote="We need a brand and a website that say what we actually do, simply, to the people who matter." who="Cross-border trade platform" client="Ximkart" resolution="on a brand refresh, a new visual identity, and a Webflow site that finally reads clearly." />
          <QuoteCard quote="We can&rsquo;t convey what the brand stands for, and it&rsquo;s costing us the talent we want." who="Cyber-security company" client="Fortuna" resolution="to drag the brand up to the pace of the industry while keeping the depth that attracts better people." />
          <QuoteCard quote="We&rsquo;re struggling to find a team we can actually work in sync with." who="B2B fintech brand" client="Progcap" resolution="to understand their position in the market and build materials that hold their values without flinching." />
          <QuoteCard quote="The last agency walked out mid-build. Can you get us live on time?" who="Craft beer brand" client="Geist" resolution="to rescue the build and ship a site where people can find the nearest stockist in two taps." />
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 8 - RETENTION STATS ============ */
export function DAStats() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const rows = [
    ['Tredence',       '4 and counting'],
    ['Fortuna Group',  '5 branding projects & counting'],
    ['Progcap',        '18+ and... we lost count, honestly'],
    ['Grundr',         '4 and counting'],
    ['DWIH',           'Retainer, 4 years running'],
    ['Manupatra',      '9 and counting'],
    ['Vertical Loop',  '5 and counting'],
    ['Noise',          '5 and counting'],
  ];
  return (
    <section style={{ background: 'var(--color-obsidian-ink)', color: 'var(--color-paper-white)', paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="da-wrap da-stats-grid" style={{ display: 'grid', gridTemplateColumns: '38fr 62fr', gap: 72, alignItems: 'start' }}>
        <div>
          <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 0.98, fontSize: 'clamp(40px,4.6vw,72px)', color: 'var(--color-paper-white)' }}>8 in 10 clients<br />come back<br />for more.</h2>
          <p style={{ margin: '24px 0 0', maxWidth: 360, fontFamily: S, fontSize: 19, lineHeight: 1.5, color: 'rgba(255,255,255,0.62)' }}>Once people work with us, they tend to keep working with us. The number we&rsquo;re quietly proud of.</p>
          <div style={{ marginTop: 40, display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontFamily: D, fontWeight: 400, fontSize: 44, color: 'var(--color-solar-bloom)' }}>4.3/5</span>
            <span style={{ fontFamily: S, fontSize: 16, color: 'rgba(255,255,255,0.62)' }}>Glassdoor rating</span>
          </div>
        </div>
        <div>
          {rows.map(([name, count], i) => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, padding: '22px 0', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.16)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.16)' }}>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', fontSize: 24, color: 'var(--color-paper-white)' }}>{name}</span>
              <span style={{ fontFamily: S, fontStyle: 'normal', fontSize: 18, color: 'rgba(255,255,255,0.6)', textAlign: 'right' }}>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
