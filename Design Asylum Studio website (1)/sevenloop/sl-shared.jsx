/* Sevenloop client hub — shared bits
   Constants · Eyebrow · Breadcrumb · useReveal · Nav · Footer */
const { useState, useEffect, useRef } = React;

const DISPLAY = 'var(--font-display)';
const SERIF = 'var(--font-serif)';
const INK = 'var(--color-obsidian-ink)';
const GRAPHITE = 'var(--color-graphite)';
const ASH = 'var(--color-ash)';

/* reveal-up on scroll — adds .is-in when element enters viewport */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sl-reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function Eyebrow({ children, color = GRAPHITE, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-iris-voltage)', flex: '0 0 auto' }} />
      <span style={{ fontFamily: DISPLAY, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11, color }}>{children}</span>
    </span>
  );
}

/* Breadcrumb — HOME › CLIENTS › SEVENLOOP */
function Breadcrumb({ trail, onDark }) {
  const dim = onDark ? 'rgba(255,255,255,0.5)' : ASH;
  const cur = onDark ? 'var(--color-paper-white)' : INK;
  const sep = onDark ? 'rgba(255,255,255,0.28)' : 'var(--color-fog)';
  return (
    <nav className="sl-crumb" aria-label="Breadcrumb" style={{ color: dim }}>
      {trail.map((item, i) => {
        const last = i === trail.length - 1;
        return (
          <React.Fragment key={item.label}>
            {last
              ? <span className="sl-crumb-cur" style={{ color: cur }}>{item.label}</span>
              : <a href={item.href || '#'} style={{ color: dim }}>{item.label}</a>}
            {!last && <span className="sl-crumb-sep" style={{ color: sep }} aria-hidden>&rsaquo;</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/* ============ NAV ============ */
function SLNav() {
  const { PillNav } = window.DesignAsylumDesignSystem_594314;
  const [active, setActive] = useState('clients');
  return (
    <PillNav
      brand="Design Asylum"
      activeId={active}
      onSelect={setActive}
      items={[
        { id: 'work', label: 'Work' },
        { id: 'studio', label: 'Studio' },
        { id: 'thinking', label: 'Thinking' },
        { id: 'clients', label: 'Clients' },
        { id: 'team', label: 'Team' },
        { id: 'call', label: 'Book a call', group: 'right' },
      ]}
    />
  );
}

/* ============ FOOTER (dark / obsidian) ============ */
function SLFooter({ trail }) {
  const D = DISPLAY, S = SERIF;
  const crumb = trail || [{ label: 'Home', href: '#' }, { label: 'Clients', href: '#' }, { label: 'Sevenloop' }];
  const cols = {
    PROJECTS: ['B2B website design', 'Website projects', '3D projects'],
    RESOURCES: ['Blog', 'Website audit', 'Print design agency', 'Clients', 'Case study', 'Agency reviews', 'Team', 'Comics'],
    COMPANY: ['Our terms', 'FAQs', 'No-brainer offer', 'Why Design Asylum', 'Recent updates', 'Contact', 'Book a call'],
  };
  const ai = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'];
  const line = (t) => ({ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'rgba(255,255,255,0.55)' });
  return (
    <footer style={{ background: INK, color: 'var(--color-paper-white)', paddingTop: 96 }}>
      <div className="da-wrap">
        {/* tagline + breadcrumb echo */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start', paddingBottom: 72 }}>
          <p style={{ margin: 0, maxWidth: 760, fontFamily: S, fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.32, color: 'var(--color-paper-white)' }}>
            We exist to design B2B businesses their right to win &amp; communicate with clarity, personality, and a point of view, making the right people want to remember &amp; associate.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
            <Breadcrumb onDark trail={crumb} />
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: 'var(--color-paper-white)', color: INK, padding: '16px 28px', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, whiteSpace: 'nowrap' }}>
              Start a project <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>

        {/* link columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr) 1.2fr', gap: 40, paddingTop: 56, borderTop: '1px solid rgba(255,255,255,0.16)' }}>
          {Object.entries(cols).map(([head, items]) => (
            <div key={head}>
              <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, color: 'rgba(255,255,255,0.42)', marginBottom: 18 }}>{head}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((it) => (
                  <li key={it}><a href="#" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 12, color: 'rgba(255,255,255,0.74)', textDecoration: 'none' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, color: 'rgba(255,255,255,0.42)', marginBottom: 18 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a className="da-mail" href="tel:+918547807934" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, color: 'var(--color-paper-white)' }}>Call: +91 85478 07934</a>
              <a className="da-mail" href="mailto:hello@designasylum.in" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, color: 'var(--color-paper-white)' }}>
                <span>hello@designasylum.in</span><span className="da-mail-arrow" aria-hidden>&#8599;</span>
              </a>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13, color: 'rgba(255,255,255,0.74)' }}>Bengaluru, Karnataka, India</span>
            </div>
            <div style={{ display: 'flex', gap: 18, marginTop: 22 }}>
              {['LinkedIn', 'Instagram', 'YouTube'].map((s) => (
                <a key={s} href="#" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: 'var(--color-paper-white)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: 2 }}>{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* AI summary row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', padding: '28px 0', marginTop: 56, borderTop: '1px solid rgba(255,255,255,0.16)', borderBottom: '1px solid rgba(255,255,255,0.16)' }}>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>Ask AI for a summary of Design Asylum</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {ai.map((a) => (
              <a key={a} href="#" style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11, color: 'var(--color-paper-white)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.28)', padding: '9px 16px' }}>{a}</a>
            ))}
          </div>
        </div>
      </div>

      {/* massive wordmark */}
      <div style={{ padding: '40px 24px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.04em', lineHeight: 0.78 }}>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.03em', fontSize: 'clamp(56px, 11.4vw, 182px)', color: 'var(--color-paper-white)' }}>designasylum</span>
          <span aria-hidden style={{ fontSize: 'clamp(26px,5vw,82px)', color: 'var(--color-iris-voltage)', transform: 'translateY(-0.18em)' }}>&#10022;</span>
        </div>
      </div>

      <div className="da-wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, padding: '32px 0 40px' }}>
        {['\u00A9 Design Asylum 2026', 'Built in-house by Asylum Build', 'Last updated 14 June 2026'].map((t) => (
          <span key={t} style={line(t)}>{t}</span>
        ))}
      </div>
    </footer>
  );
}

Object.assign(window, { useReveal, Eyebrow, Breadcrumb, SLNav, SLFooter, SL_DISPLAY: DISPLAY, SL_SERIF: SERIF, SL_INK: INK, SL_GRAPHITE: GRAPHITE, SL_ASH: ASH });
