/* Why Design Asylum (/why-everything-design) — alt nav, multi-section conversion landing */
(function () {
  const { useState } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  function AltNav() {
    const { PillNav } = window.DesignAsylumDesignSystem_594314;
    const [active, setActive] = useState('work');
    return (
      <PillNav brand="Design Asylum" activeId={active} onSelect={setActive}
        items={[
          { id: 'work', label: 'Our work' },
          { id: 'fit', label: 'The right fit' },
          { id: 'team', label: 'The team' },
          { id: 'do', label: 'What we do' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'intro', label: 'Book an intro', group: 'right' },
        ]} />
    );
  }

  function SectionHead({ children, max }) {
    return <h2 style={{ margin: 0, maxWidth: max || 1000, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.04, fontSize: 'var(--text-section)', color: INK }}>{children}</h2>;
  }

  const GLOWS = [
    'radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)',
    'radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)',
  ];
  const BGS = ['var(--color-obsidian-ink)', 'var(--color-deep-teal)', '#241a1c'];

  /* ---- hero ---- */
  function Hero() {
    return (
      <header className="da-wrap" style={{ paddingTop: 150 }}>
        <p style={{ margin: 0, maxWidth: 720, fontFamily: S, fontSize: 'clamp(18px,1.6vw,22px)', lineHeight: 1.5, color: GRAPHITE }}>
          No matter how complex your product is, from copywriting to web development, we can help you all the way in 10 to 14 weeks.
        </p>
        <p style={{ margin: '18px 0 0', display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 12, color: 'var(--color-iris-voltage)' }}>
          Why you should consider us for your project? <span style={{ color: ASH }}>Click to read &mdash;</span>
        </p>
        <h1 style={{ margin: '28px 0 0', maxWidth: 1240, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(40px,5.2vw,88px)', color: INK }}>
          We make B2B websites that communicate<br />your value proposition<br />in the most compelling way
        </h1>
      </header>
    );
  }

  /* ---- showreel ---- */
  function Showreel() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div className="sl-reveal" style={{ position: 'relative', overflow: 'hidden', width: '100%', aspectRatio: '21/9', background: INK }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 130% at 20% 22%, rgba(239,108,46,0.30), transparent 52%), radial-gradient(80% 130% at 84% 84%, rgba(81,111,234,0.44), transparent 52%)' }} />
          <span style={{ position: 'absolute', left: 24, top: 22, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Showreel</span>
          <button className="fb-play" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(255,255,255,0.92)', borderColor: 'transparent' }} type="button">Play showreel <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span></button>
        </div>
      </section>
    );
  }

  /* ---- testimonials band ---- */
  function Testimonials() {
    const chips = ['Series A | $2.4M', 'Deep Tech | $3.3M', 'Cybersecurity | Global', 'Insur-Tech | $3.97M'];
    return (
      <section style={{ background: 'var(--color-paper-off)', marginTop: 'var(--section-pad-y)' }}>
        <div className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
          <SectionHead max={760}>How we are different, in our client&rsquo;s words</SectionHead>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
            {chips.map((c) => <span key={c} className="fb-chip">{c}</span>)}
          </div>
          <blockquote className="pr-quote" style={{ marginTop: 44, borderColor: INK }}>
            <p>&ldquo;Our entire experience, from design concept to the final product was glitch-free. Conversations with our clients have become so much more easier now.&rdquo;</p>
            <cite>Sharan Urubail &mdash; CEO &amp; Co-Founder</cite>
          </blockquote>
          <button className="fb-play" type="button">Watch testimonial <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span></button>
        </div>
      </section>
    );
  }

  /* ---- featured projects ---- */
  const PROJECTS = [
    ['Ximkart', ['Brand Identity', 'Website Design', 'Website Development'], 'Ximkart was able to communicate the value proposition to prospects via website clearly and was able to bring down the sales effort.'],
    ['Botim', ['Brand Strategy', 'Website Design'], 'A new website to position Botim as a super app for the EMEA region — payments, calls, and services under one confident brand.'],
    ['Sevenloop', ['Brand Identity', 'Website Design', 'Brand Film'], 'A deep-tech manufacturing platform repositioned from product company to enterprise-ready brand in five months.'],
    ['Fortuna Cysec', ['Brand Strategy', 'Website Design'], 'Brand and site for a global, AI-driven managed security services provider — credibility built for an enterprise buyer.'],
    ['SimpliContract', ['Messaging', 'Website Design'], 'Enterprise contract lifecycle management, made legible — a site that leads with the source-to-pay outcome.'],
    ['Entropik', ['Website Design', 'Motion'], 'An emotion-AI research platform given a site that makes cutting-edge technology feel accessible and trustworthy.'],
  ];

  function FeaturedProjects() {
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 36 }}>
          <SectionHead>Featured projects</SectionHead>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, color: ASH }}>6 of 6</span>
        </div>
        <div className="svc-grid sl-reveal">
          {PROJECTS.map(([name, tags, blurb], i) => (
            <a key={name} className="svc-card" href="#">
              <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
                <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
                <span className="svc-card-link">Read case study <span aria-hidden>&rarr;</span></span>
              </div>
              <div className="svc-card-body">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {tags.map((t) => <span key={t} style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 9, color: 'var(--color-iris-voltage)', border: '1px solid var(--color-fog)', padding: '5px 8px' }}>{t}</span>)}
                </div>
                <h3 className="svc-card-name">{name}</h3>
                <p className="svc-card-desc">{blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  /* ---- fit / not-fit ---- */
  function Fit() {
    const yes = ['require on time delivery (this means you can go live quicker and start selling sooner)', "if you're looking for a team that understands branding and how to take it forward on the website", 'follow universal good work ethics; hire thoughtfully, let them do their job and not micro-manage'];
    const no = ['are an early stage startup and think branding is expensive', 'need everything done in 3 weeks, but need 1 week to provide feedback', "haven't prioritized website for your business and hence tight on budget"];
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          <div className="fb-fit sl-reveal">
            <h2 style={{ margin: '0 0 24px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.01em', fontSize: 'clamp(26px,2.4vw,36px)', color: INK }}>We&rsquo;re the right fit if you...</h2>
            <ul className="pr-ul" style={{ margin: 0 }}>{yes.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="fb-fit is-no sl-reveal">
            <h2 style={{ margin: '0 0 24px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.01em', fontSize: 'clamp(26px,2.4vw,36px)', color: 'var(--color-paper-white)' }}>We&rsquo;re the not right fit if you...</h2>
            <ul className="pr-ul" style={{ margin: 0 }}>
              {no.map((t) => <li key={t} style={{ color: 'rgba(255,255,255,0.82)' }}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  /* ---- team strip ---- */
  function TeamStrip() {
    const team = ['Ekta', 'Mejo', 'Sanjana', 'Tanmaya', 'Athira', 'Akhilesh', 'Arpan', 'Swathi'];
    return (
      <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <SectionHead max={820}>The team that&rsquo;s making B2B interesting</SectionHead>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
          {team.map((n) => (
            <a key={n} className="auth-tag" href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 12, color: INK, border: '1px solid var(--color-fog)', padding: '11px 18px', textDecoration: 'none' }}>
              <span aria-hidden style={{ width: 24, height: 24, borderRadius: 999, background: 'var(--color-deep-teal)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 400 }}>{n[0]}</span>
              Meet {n}
            </a>
          ))}
        </div>
      </section>
    );
  }

  /* ---- closing CTAs ---- */
  function Closing() {
    return (
      <React.Fragment>
        <section className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)' }}>
          <SectionHead max={900}>Communicate this on your website &mdash; the one belief you want every buyer to leave with.</SectionHead>
        </section>
        <section style={{ background: INK, marginTop: 'var(--section-pad-y)' }}>
          <div className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0, maxWidth: 720, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, fontSize: 'var(--text-section)', color: 'var(--color-paper-white)' }}>Want a no-brainer offer?</h2>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="Why Us.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: 'none', color: 'var(--color-paper-white)', padding: '18px 30px', border: '1px solid rgba(255,255,255,0.5)', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13 }}>See the offer</a>
              <a href="Contact - Book a Call.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', background: 'var(--color-paper-white)', color: INK, padding: '18px 30px', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 13 }}>Book an intro <span aria-hidden>&rarr;</span></a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  function WhyDAPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <AltNav />
        <Hero />
        <Showreel />
        <Testimonials />
        <FeaturedProjects />
        <Fit />
        <TeamStrip />
        <Closing />
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Why Design Asylum' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && ns.PillNav && window.ReactDOM && window.SLFooter && window.useReveal;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<WhyDAPage />);
  }
  mount();
})();
