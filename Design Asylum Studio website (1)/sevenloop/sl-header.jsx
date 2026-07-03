/* Sevenloop client hub — Section 1 (Client Header) + Section 2 (Overview / Deliverables) */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* media placeholder tile */
  function MediaTile({ label, cover, wordColor = 'rgba(255,255,255,0.5)', ratio = '16 / 9', word, play, big }) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', background: cover, aspectRatio: ratio, width: '100%' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 80% 8%, rgba(255,194,64,0.30), transparent 55%), radial-gradient(120% 110% at 8% 100%, rgba(81,111,234,0.34), transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          {word
            ? <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: big ? 'clamp(36px,5vw,72px)' : 'clamp(22px,3vw,40px)', color: wordColor }}>{word}</span>
            : <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12, color: wordColor, textAlign: 'center' }}>{label}</span>}
        </div>
        {play && (
          <span style={{ position: 'absolute', right: 16, bottom: 16, display: 'inline-flex', alignItems: 'center', gap: 9, border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#fff', padding: '11px 20px', borderRadius: 999, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 12 }}>
            Play video <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span>
          </span>
        )}
        {!word && <span style={{ position: 'absolute', left: 16, bottom: 14, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>{label}</span>}
      </div>
    );
  }

  /* deliverable block wrapper */
  function Deliverable({ id, num, title, children }) {
    return (
      <section id={id} className="sl-reveal" style={{ scrollMarginTop: 110, paddingTop: 64 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 28 }}>
          <span style={{ fontFamily: D, fontWeight: 400, fontSize: 14, color: ASH, letterSpacing: '0.04em' }}>{num}</span>
          <h3 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.02, fontSize: 'clamp(26px,2.8vw,40px)', color: INK }}>{title}</h3>
        </div>
        {children}
      </section>
    );
  }

  /* ============ SECTION 1 — CLIENT HEADER ============ */
  function SLHeader() {
    const industries = [
      'Design Agency for Manufacturing Firms \u2013 Branding, Website',
      'Design Agency for Startups',
      'Design Agency for Technology Businesses',
      'Aviation Design Agency',
      'Chemical Industry \u2013 Design Strategy Consultants',
    ];
    return (
      <header style={{ position: 'relative', overflow: 'hidden', paddingTop: 150 }}>
        <div aria-hidden style={{ position: 'absolute', inset: '-6% -20% auto -20%', height: 520, background: 'var(--gradient-solar-bloom)', opacity: 0.34, filter: 'blur(12px)', pointerEvents: 'none' }} />
        <div className="da-wrap" style={{ position: 'relative' }}>
          <Breadcrumb trail={[{ label: 'Home', href: '#' }, { label: 'Clients', href: '#' }, { label: 'Sevenloop' }]} />
          <h1 style={{ margin: '28px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 0.9, fontSize: 'clamp(72px,15vw,220px)', color: INK }}>Sevenloop</h1>

          {/* industry row */}
          <div style={{ marginTop: 40, maxWidth: 920 }}>
            <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, color: ASH, marginRight: 10 }}>Industry :</span>
            <span style={{ fontFamily: S, fontSize: 'clamp(17px,1.6vw,21px)', lineHeight: 1.7, color: GRAPHITE }}>
              {industries.map((ind, i) => (
                <React.Fragment key={ind}>
                  <a className="sl-ind-link" href="#">{ind}</a>{i < industries.length - 1 ? ', ' : ''}
                </React.Fragment>
              ))}
            </span>
          </div>

          {/* hero visual */}
          <div className="sl-reveal" style={{ marginTop: 56, position: 'relative', overflow: 'hidden', background: 'var(--color-deep-teal)', aspectRatio: '16 / 7', width: '100%' }}>
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 130% at 18% 18%, rgba(255,194,64,0.42), transparent 52%), radial-gradient(90% 130% at 85% 85%, rgba(81,111,234,0.46), transparent 52%), radial-gradient(60% 100% at 60% 30%, rgba(150,235,235,0.26), transparent 56%)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 'clamp(40px,7vw,108px)', color: 'rgba(255,255,255,0.18)' }}>Sevenloop</span>
            </div>
            <span style={{ position: 'absolute', left: 22, bottom: 20, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Sevenloop brand hero</span>
          </div>
        </div>
      </header>
    );
  }

  /* ============ SECTION 2 — SERVICE PROVIDED / OVERVIEW ============ */
  function SLOverview() {
    const { Button } = window.DesignAsylumDesignSystem_594314;
    const jump = [
      ['About client', '#about'],
      ['Logo design', '#logo-design'],
      ['Website design and development', '#website'],
      ['Project brochure', '#brochure'],
      ['Brand video', '#brand-video'],
      ['Behind the scenes', '#behind'],
      ['Case study', '#case-study'],
      ['Before after website design', '#before-after'],
    ];
    const arrow = <span aria-hidden>&rarr;</span>;
    const playIcon = <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span>;
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-white)' }}>
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '32fr 68fr', gap: 72, alignItems: 'start' }}>
          {/* left — jump nav */}
          <div className="sl-jump">
            <Eyebrow>Service provided</Eyebrow>
            <nav style={{ marginTop: 22 }} aria-label="On this page">
              {jump.map(([label, href]) => (
                <a key={href} className="sl-jump-link" href={href}>
                  <span>{label}</span>
                  <span className="sl-jump-arrow" aria-hidden>&rarr;</span>
                </a>
              ))}
            </nav>
          </div>

          {/* right — content */}
          <div>
            {/* about client */}
            <div id="about" style={{ scrollMarginTop: 110 }}>
              <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'clamp(34px,3.6vw,54px)', color: INK }}>About client</h2>
              <p style={{ margin: '32px 0 0', maxWidth: 760, fontFamily: S, fontSize: 'clamp(20px,1.8vw,25px)', lineHeight: 1.55, color: INK }}>
                Sevenloop is a Bengaluru-based custom metal manufacturing platform that owns the full supply chain stack &mdash; from raw materials sourcing across 20+ countries through factory technology to execution. Founded by Sharan Urubail (ex-Tata Motors, ex-Udaan) and backed by Z47 at the seed stage, Sevenloop produces precision-engineered components for defense, mining, metro, and automotive sectors, serving global clients including Komatsu, Hydac, and Jindal. Their Ximkart platform builds reliability and pricing power for Indian factories, positioning India not as a China alternative but as a global manufacturing leader.
              </p>
              {/* action buttons */}
              <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                <Button variant="primary" size="lg" iconRight={arrow}>Visit website</Button>
                <Button variant="secondary" size="lg" iconRight={arrow}>Visit link</Button>
                <Button variant="ghost" size="lg" iconRight={playIcon}>Play video</Button>
                <Button variant="ghost" size="lg" iconRight={playIcon}>Play video</Button>
                <Button variant="secondary" size="lg" iconRight={arrow}>View case study</Button>
              </div>
            </div>

            {/* deliverables */}
            <Deliverable id="logo-design" num="01" title="Logo design">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                <MediaTile label="Primary lockup" cover="var(--color-block-ink)" word="Sevenloop" wordColor="var(--color-solar-bloom)" ratio="4 / 3" />
                <MediaTile label="Monogram" cover="var(--color-block-iris)" word={'S\u00B7L'} wordColor="var(--color-paper-white)" ratio="4 / 3" />
                <MediaTile label="On solar" cover="var(--color-block-solar)" word="Sevenloop" wordColor="var(--color-obsidian-ink)" ratio="4 / 3" />
              </div>
            </Deliverable>

            <Deliverable id="website" num="02" title="Website design and development">
              <MediaTile label={'sevenloop.com \u2014 Webflow build'} cover="var(--color-deep-teal)" word="sevenloop.com" wordColor="rgba(255,255,255,0.22)" ratio="16 / 9" />
              <p style={{ margin: '20px 0 0', maxWidth: 620, fontFamily: S, fontSize: 18, lineHeight: 1.55, color: GRAPHITE }}>
                A precision-engineered marketing site built on Webflow &mdash; capabilities, solutions and an enterprise-ready quote flow, all reading as advanced as the manufacturing behind them.
              </p>
            </Deliverable>

            <Deliverable id="brochure" num="03" title="Project brochure">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                <MediaTile label={'Cover \u2014 positioning'} cover="var(--color-block-maroon)" ratio="3 / 4" />
                <MediaTile label="Capabilities spread" cover="var(--color-block-ink)" ratio="3 / 4" />
              </div>
            </Deliverable>

            <Deliverable id="brand-video" num="04" title="Brand video">
              <MediaTile label="The Sevenloop brand film" cover="var(--color-obsidian-ink)" word="Brand film" wordColor="rgba(255,255,255,0.18)" ratio="16 / 9" play />
            </Deliverable>

            <Deliverable id="behind" num="05" title="Behind the scenes">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                <MediaTile label="On the factory floor" cover="var(--color-block-iris)" ratio="1 / 1" />
                <MediaTile label="The shoot" cover="var(--color-block-maroon)" ratio="1 / 1" />
                <MediaTile label="The team" cover="var(--color-deep-teal)" ratio="1 / 1" />
              </div>
            </Deliverable>

            <Deliverable id="case-study" num="06" title="Case study">
              <div style={{ background: 'var(--color-paper-off)', border: '1px solid var(--color-fog)', padding: '40px 44px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
                <p style={{ margin: 0, maxWidth: 540, fontFamily: S, fontSize: 21, lineHeight: 1.45, color: INK }}>
                  Read the full 5-month story &mdash; repositioning, identity, the Webflow build, and the conversations it opened.
                </p>
                <a href="#" style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: INK, color: 'var(--color-paper-white)', padding: '16px 28px', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>
                  View case study <span aria-hidden>&rarr;</span>
                </a>
              </div>
            </Deliverable>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { SLHeader, SLOverview });
})();
