/* Design Asylum homepage — Nav · Hero · Client logo marquee · Featured work */
import { useState } from 'react';

const DISPLAY = 'var(--font-display)';
const SERIF   = 'var(--font-serif)';
const INK     = 'var(--color-obsidian-ink)';
const GRAPHITE = 'var(--color-graphite)';

/* ============ SECTION 1 - NAV ============ */
export function DANav() {
  const { PillNav } = window.DesignAsylumDesignSystem_594314;
  const [active, setActive] = useState('work');
  return (
    <PillNav
      brand="Design Asylum"
      activeId={active}
      onSelect={setActive}
      items={[
        { id: 'work',    label: 'Work' },
        { id: 'studio',  label: 'Studio' },
        { id: 'thinking',label: 'Thinking' },
        { id: 'clients', label: 'Clients' },
        { id: 'team',    label: 'Team' },
        { id: 'call',    label: 'Book a call', group: 'right' },
      ]}
    />
  );
}

/* ============ SECTION 2 - HERO ============ */
export function DAHero() {
  const { Button } = window.DesignAsylumDesignSystem_594314;
  const ul = { backgroundImage: 'linear-gradient(var(--color-obsidian-ink), var(--color-obsidian-ink))', backgroundSize: '100% 4px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 92%' };
  const edge = 'max(var(--da-gutter), calc((100vw - var(--page-max-width)) / 2 + var(--da-gutter)))';
  return (
    <header className="da-hero-header" style={{ position: 'relative', overflow: 'hidden', paddingTop: 168, paddingLeft: edge, paddingRight: edge, paddingBottom: 104 }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '-8% -20% auto -20%', height: 620, background: 'var(--gradient-solar-bloom)', opacity: 0.42, filter: 'blur(10px)', pointerEvents: 'none' }} />
      <div className="da-hero-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0, 560px) minmax(0, 1fr)', gap: 'clamp(40px, 5vw, 88px)', alignItems: 'stretch' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }}>
          <h1 className="da-rise" style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.08, fontSize: 'clamp(46px, 5.2vw, 76px)', color: INK }}>
            <span style={ul}>Strategic rebranding</span><br />
            &amp; <span style={ul}>digital build</span><br />
            for brands with nerve
          </h1>
          <p className="da-rise" style={{ margin: '40px 0 0', maxWidth: 470, fontFamily: SERIF, fontSize: 20, lineHeight: 1.6, color: GRAPHITE, animationDelay: '.12s' }}>
            Brand work that&rsquo;s more than a logo, <em style={{ color: INK }}>the kind that shifts how investors, talent and markets read your business.</em> That shift is the whole game.
          </p>
          <div className="da-rise" style={{ display: 'flex', gap: 14, marginTop: 42, animationDelay: '.22s' }}>
            <Button variant="primary" size="lg" iconRight={<span aria-hidden>&rarr;</span>}>Start a project</Button>
            <Button variant="secondary" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Don&rsquo;t click this</Button>
          </div>
        </div>
        <div className="da-hero-film" style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(440px, 56vh, 660px)', background: 'var(--color-deep-teal)' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(130% 95% at 82% 8%, rgba(255,194,64,0.6), transparent 56%), radial-gradient(130% 115% at 8% 102%, rgba(81,111,234,0.55), transparent 58%)' }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 120% at 50% 45%, transparent 55%, rgba(13,18,18,0.5) 100%)' }} />
          <span style={{ position: 'absolute', left: 24, top: 24, display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
            <span aria-hidden style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--color-solar-bloom)' }} />
            Client film
          </span>
          <button aria-label="Play film" className="da-hero-play" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 92, height: 92, borderRadius: 999, border: '1.5px solid rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="da-hero-play-tri" aria-hidden style={{ color: '#fff', fontSize: 24, marginLeft: 5, lineHeight: 1, transition: 'color .3s ease' }}>&#9654;</span>
          </button>
          <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24 }}>
            <span style={{ fontFamily: SERIF, fontSize: 'clamp(20px, 1.9vw, 28px)', lineHeight: 1.35, color: 'var(--color-solar-bloom)' }}>&ldquo;And that&rsquo;s when the room went quiet.&rdquo;</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============ SECTION 3 - TRUSTED BY / CLIENT LOGO MARQUEE ============ */
function Laurel({ flip }) {
  const leaf = 'M0 0 C 3.4 -4.5, 3.4 -12.5, 0 -16.5 C -3.4 -12.5, -3.4 -4.5, 0 0 Z';
  const leaves = [
    [28, 15, -122], [22, 25, -110], [17.5, 35, -98], [15, 46, -88],
    [17.5, 57, -76], [22, 67, -64], [28, 77, -52],
  ];
  return (
    <svg width="50" height="92" viewBox="0 0 50 92" fill="none" aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : 'none', color: INK, opacity: 0.85, flex: '0 0 auto' }}>
      <path d="M34 8 C 12 27, 12 65, 34 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="currentColor">
        {leaves.map(([x, y, rot], i) => (
          <path key={i} d={leaf} transform={`translate(${x} ${y}) rotate(${rot})`} />
        ))}
      </g>
    </svg>
  );
}

export function DALogoWall() {
  const clients = [
    'Northwind', 'Tessellate', 'Halcyon', 'Meridian', 'Cobalt', 'Ambervale', 'Forge', 'Quorum', 'Z-Axis',
    'Hinterland', 'Foundry', 'Stellar', 'Brightline', 'Vantage', 'Granite', 'Solace', 'Verdant', 'Skylark',
  ];
  const loop = [...clients, ...clients];
  return (
    <section style={{ background: 'var(--color-paper-white)', paddingTop: 84, paddingBottom: 88, borderTop: '1px solid var(--color-fog)', borderBottom: '1px solid var(--color-fog)', overflow: 'hidden' }}>
      <div className="da-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, marginBottom: 56 }}>
        <Laurel />
        <p style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 400, fontSize: 'clamp(21px, 2.4vw, 30px)', lineHeight: 1.22, textAlign: 'center', color: INK, maxWidth: 560 }}>
          Trusted by companies that value design
        </p>
        <Laurel flip />
      </div>
      <div className="da-marquee-wrap" aria-label="Client logos">
        <div className="da-marquee-track">
          {loop.map((name, i) => (
            <span key={i} className="da-marquee-logo" aria-hidden={i >= clients.length ? 'true' : undefined}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 4 - FEATURED WORK ============ */
function ProjectPanel({ name, desc, statValue, statCaption, cover, wordColor, cta, first }) {
  return (
    <article style={{ borderTop: first ? 'none' : '1px solid var(--color-fog)', background: 'var(--color-paper-white)' }}>
      <div className="da-wrap" style={{ width: '100%', paddingTop: 44, paddingBottom: 160 }}>
        <div className="da-feat-grid" style={{ display: 'grid', gridTemplateColumns: '38fr 62fr', gap: 56, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
            <h2 style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, fontSize: 'clamp(38px,4vw,60px)', color: INK }}>{name}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
              <p style={{ margin: 0, maxWidth: 430, fontFamily: SERIF, fontSize: 'clamp(21px,2vw,27px)', lineHeight: 1.4, color: INK }}>{desc}</p>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span aria-hidden style={{ width: 38, height: 38, flex: '0 0 auto', borderRadius: 999, background: INK, color: 'var(--color-paper-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>&uarr;</span>
                  <span style={{ fontFamily: DISPLAY, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, fontSize: 'clamp(36px,4vw,56px)', color: INK }}>{statValue}</span>
                </div>
                <p style={{ margin: '14px 0 0', maxWidth: 340, fontFamily: SERIF, fontSize: 18, lineHeight: 1.4, color: GRAPHITE }}>{statCaption}</p>
              </div>
            </div>
          </div>
          <div className="da-feat-cover" style={{ position: 'relative', borderRadius: 0, overflow: 'hidden', background: cover, width: '100%', aspectRatio: '16 / 9' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: 'clamp(40px,5vw,68px)', color: wordColor }}>{name}</span>
            </div>
            <span className="da-cardcta" style={{ position: 'absolute', right: 18, bottom: 18, display: 'inline-flex', alignItems: 'center', gap: 8, border: `1.5px solid ${wordColor}`, color: wordColor, padding: '12px 20px', borderRadius: 999, fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 11, whiteSpace: 'nowrap' }}>
              {cta} <span className="da-cardcta-arrow" aria-hidden>&rarr;</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function DAFeatured() {
  const { ArrowLink } = window.DesignAsylumDesignSystem_594314;
  const projects = [
    { name: 'Northwind', cover: 'var(--color-deep-teal)',    wordColor: 'var(--color-solar-bloom)',   cta: 'Visit website',    desc: 'A heritage law firm, repositioned with teeth. New name, new voice, a brand that argues its own case.',                    statValue: '41%',  statCaption: 'Rise in inbound briefs in the year after relaunch' },
    { name: 'Foundry',   cover: 'var(--color-block-maroon)', wordColor: 'var(--color-paper-white)',   cta: 'View case study',  desc: 'Strategic identity for an AI manufacturing platform that needed to look as advanced as it actually is.',                statValue: '3×', statCaption: 'Pipeline value within two quarters of launch' },
    { name: 'Vantage',   cover: 'var(--color-block-ink)',    wordColor: 'var(--color-solar-bloom)',   cta: 'View case study',  desc: 'A rebrand for an adtech consultancy, rebuilt to read as sharp on screen as the work behind it.',                       statValue: '2.4×', statCaption: 'Qualified demo requests, quarter on quarter' },
    { name: 'Lumen',     cover: 'var(--color-block-solar)',  wordColor: 'var(--color-obsidian-ink)',  cta: 'View project',     desc: 'Branding for a cybersecurity brand built for fast-growing businesses that refuse to look generic.',                    statValue: '67%',  statCaption: 'Brand recall in category testing' },
  ];
  return (
    <section id="work" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 0, background: 'var(--color-paper-white)' }}>
      <div className="da-wrap" style={{ textAlign: 'center', paddingBottom: 8 }}>
        <h2 style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 400, fontSize: 'var(--text-section)', lineHeight: 1.0, letterSpacing: '-0.02em', color: INK }}>Featured Projects</h2>
        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center' }}>
          <ArrowLink href="#" style={{ whiteSpace: 'nowrap' }}>Field notes, April 2026</ArrowLink>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        {projects.map((p, i) => <ProjectPanel key={p.name} first={i === 0} {...p} />)}
      </div>
    </section>
  );
}
