/* Design Asylum homepage — Why us · Industries · Testimonials */
import { Eyebrow } from './shared';

/* ============ SECTION 9 - WHY US ============ */
function MazeGraphic() {
  const accents = { '4': 'var(--color-iris-voltage)', '11': 'var(--color-solar-bloom)', '18': 'var(--color-deep-teal)', '27': 'var(--color-iris-voltage)' };
  const cells = Array.from({ length: 36 });
  return (
    <div style={{ borderRadius: 'var(--radius-cards)', overflow: 'hidden', background: 'var(--color-paper-white)', border: '1px solid var(--color-fog)', padding: 28 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0, border: '1px solid var(--color-obsidian-ink)' }}>
        {cells.map((_, i) => (
          <div key={i} style={{ aspectRatio: '1 / 1', borderRight: '1px solid var(--color-fog)', borderBottom: '1px solid var(--color-fog)', background: accents[i] || 'transparent' }} />
        ))}
      </div>
      <p style={{ margin: '24px 4px 4px', fontFamily: 'var(--font-serif)', fontStyle: 'normal', fontSize: 22, lineHeight: 1.3, color: 'var(--color-obsidian-ink)' }}>Say goodbye to dead ends in design.</p>
    </div>
  );
}

export function DAWhyUs() {
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const points = [
    'A strategy-led studio with real depth in deeptech, fintech and enterprise SaaS. Known for a structured process that helps technical companies pin down positioning, identity and digital experience.',
    'A proven track record of helping startups raise on the back of sharper brand positioning, not just a prettier logo.',
    'Brand strategy and identity for B2B teams that need clarity fast. We work as a consultant, not a vendor, finding the underlying problem, not just filling the brief.',
  ];
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
      <div className="da-wrap">
        <Eyebrow>Our brand promise, we take ownership. Period.</Eyebrow>
        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: '40fr 60fr', gap: 72, alignItems: 'start' }}>
          <MazeGraphic />
          <div>
            {points.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 28, padding: '32px 0', borderTop: '1px solid var(--color-fog)', borderBottom: i === points.length - 1 ? '1px solid var(--color-fog)' : 'none' }}>
                <span style={{ fontFamily: D, fontWeight: 400, fontSize: 40, lineHeight: 1, color: 'var(--color-obsidian-ink)' }}>0{i + 1}</span>
                <p style={{ margin: 0, fontFamily: S, fontSize: 19, lineHeight: 1.5, color: 'var(--color-graphite)' }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 10 - INDUSTRIES ============ */
function IndustryRow({ name, desc, services, ctas, onDark }) {
  const { Tag } = window.DesignAsylumDesignSystem_594314;
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const nameColor = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  const descColor = onDark ? 'rgba(255,255,255,0.72)' : 'var(--color-graphite)';
  const border    = onDark ? '1px solid rgba(255,255,255,0.16)' : '1px solid var(--color-fog)';
  const ctaColor  = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  const tagStyle  = onDark ? { color: 'var(--color-paper-white)', borderColor: 'rgba(255,255,255,0.32)' } : undefined;
  return (
    <div className={onDark ? 'da-row da-row-dark' : 'da-row'} style={{ display: 'grid', gridTemplateColumns: '15% 50% 35%', gap: 32, alignItems: 'center', padding: '34px 16px', borderTop: border }}>
      <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', fontSize: 22, color: nameColor }}>{name}</span>
      <div>
        <p style={{ margin: 0, fontFamily: S, fontSize: 18, lineHeight: 1.5, color: descColor }}>{desc}</p>
        <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {services.map((s) => <Tag key={s} style={tagStyle}>{s}</Tag>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
        {ctas.map((c) => (
          <a key={c} href="#work" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11, color: ctaColor, textDecoration: 'none', borderBottom: `1px solid ${ctaColor}`, paddingBottom: 3, whiteSpace: 'nowrap' }}>
            {c} <span aria-hidden>&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function DAIndustries() {
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-deep-teal)', color: 'var(--color-paper-white)' }}>
      <div className="da-wrap">
        <h2 style={{ margin: 0, textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-section)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--color-paper-white)', maxWidth: 760, marginInline: 'auto' }}>Worked with companies from a stubbornly diverse set of industries</h2>
        <div style={{ marginTop: 56 }}>
          <IndustryRow onDark name="Cloudphys" desc="Visual branding and website design for an AI-powered platform that sharpens critical-care monitoring." services={['Website strategy', 'Website design', 'Explainer film', 'Webflow build']} ctas={['View website']} />
          <IndustryRow onDark name="Lumen"     desc="Branding and website design for a cybersecurity outfit built for growing businesses."                    services={['Webflow build', 'Website design', 'Logo design', 'Landing pages']}    ctas={['View website']} />
          <IndustryRow onDark name="Vantage"   desc="Rebrand and website design for a technology-led digital media and adtech consultancy."                    services={['Brand identity', 'Brand refresh', 'Logo design', 'Lottie animation']}   ctas={['View case study', 'View website']} />
          <IndustryRow onDark name="Foundry"   desc="Brand identity and website design for an end-to-end custom manufacturing platform."                       services={['Website design', 'Webflow build', 'Brand identity', 'Lottie animation']} ctas={['View case study', 'View website']} />
        </div>
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.16)', paddingTop: 56 }}>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: 'var(--color-paper-white)', color: 'var(--color-obsidian-ink)', padding: '20px 38px', borderRadius: 999, fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 15, whiteSpace: 'nowrap' }}>
            Book a brand strategy session <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION 11 - TESTIMONIALS ============ */
function TestimonialCard({ name, title, quote, highlight, cover, initials, onDark }) {
  const { Avatar } = window.DesignAsylumDesignSystem_594314;
  const D = 'var(--font-display)', S = 'var(--font-serif)';
  const parts      = highlight ? quote.split(highlight) : [quote];
  const nameColor  = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  const titleColor = onDark ? 'rgba(255,255,255,0.6)' : 'var(--color-ash)';
  const quoteColor = onDark ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)';
  return (
    <article>
      <div style={{ position: 'relative', borderRadius: 'var(--radius-cards)', overflow: 'hidden', aspectRatio: '4 / 3', background: cover }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 90% at 70% 20%, rgba(255,255,255,0.12), transparent 60%)' }} />
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 64, height: 64, borderRadius: 999, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20 }} aria-hidden>&#9654;</span>
      </div>
      <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar name={initials} size={46} />
        <div>
          <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', fontSize: 17, color: nameColor }}>{name}</div>
          <div style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10, color: titleColor }}>{title}</div>
        </div>
      </div>
      <p style={{ margin: '18px 0 0', fontFamily: S, fontStyle: 'normal', fontSize: 19, lineHeight: 1.45, color: quoteColor }}>
        &ldquo;{parts[0]}{highlight && <span style={{ borderBottom: '3px solid var(--color-iris-voltage)', fontStyle: 'normal', fontWeight: 600 }}>{highlight}</span>}{parts[1]}&rdquo;
      </p>
    </article>
  );
}

export function DATestimonials() {
  const D = 'var(--font-display)';
  return (
    <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-deep-teal)', color: 'var(--color-paper-white)' }}>
      <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '30fr 70fr', gap: 64, alignItems: 'start' }}>
        <h2 style={{ margin: 0, position: 'sticky', top: 120, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, fontSize: 'clamp(30px,3.2vw,46px)', color: 'var(--color-paper-white)' }}>Client words, backing the brand-strategy results</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <TestimonialCard onDark name="Dr. Mallesh B." initials="Mallesh B" title="Co-founder, i3systems"          cover="var(--color-block-iris)"   quote="It was a genuinely successful branding project, and, more to the point, fun to work with the team." />
          <TestimonialCard onDark name="Sharan Urubail" initials="Sharan U"  title="CEO & co-founder, Ximkart"      cover="var(--color-block-maroon)" quote="From concept to final branding the whole thing was glitch-free. Conversations with our own clients are so much easier now." highlight="glitch-free" />
        </div>
      </div>
    </section>
  );
}
