/* Branding Agency service page — PROJECTS marquee + filter tabs + portfolio grid */
(function () {
  const { useState } = React;
  const D = 'var(--font-display)';
  const INK = 'var(--color-obsidian-ink)';

  /* gradient visual palettes (cycled) */
  const GLOWS = [
    'radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)',
    'radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)',
    'radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.40), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.40), transparent 54%)',
  ];
  const BGS = ['var(--color-obsidian-ink)', 'var(--color-deep-teal)', '#241a1c', '#10212a'];

  const PROJECTS = [
    ['Fortuna Cysec', 'Brand strategy and website design for Fortuna Cysec, an AI-driven managed security services provider.'],
    ['Lakshmigraha', 'Brand identity for Lakshmigraha, a heritage gold and jewellery manufacturing business.'],
    ['Swiffy Labs', 'Branding and web design for Swiffy Labs, a product engineering and automation studio.'],
    ['Tunnel', 'Visual identity and messaging for Tunnel, a developer-tooling and infrastructure platform.'],
    ['SimpliContract', 'Brand and website design for SimpliContract, an enterprise contract lifecycle management platform.'],
    ['Good Food Movement — Akshaykalpa', 'Brand storytelling for Akshaykalpa, an organic dairy and good-food movement.'],
    ['i3systems', 'Branding for i3systems, an AI document-intelligence company for insurance and banking.'],
    ['Fortuna Identity', 'Identity system for Fortuna Identity, a digital identity and verification platform.'],
    ["Founder's Cupid", "Brand and web design for Founder's Cupid, a co-founder matching platform for startups."],
    ['ASPI & CIS Tech Diplomacy', 'Brand and report design for a tech-diplomacy initiative spanning policy and security.'],
    ['Compport', 'Branding and website for Compport, a compensation management SaaS platform.'],
    ['IVY Homes', 'Brand identity and website for IVY Homes, an instant home-buying real-estate platform.'],
    ['Ximkart', 'Brand and messaging for Ximkart, a custom-manufacturing sourcing platform for Indian factories.'],
    ['Progcap', 'Branding and web design for Progcap, an embedded-finance platform for retail supply chains.'],
    ['Phronetic', 'Identity and website for Phronetic, a spatial-computing and AR product company.'],
    ['OneLern', 'Brand and web design for OneLern, a K-12 learning and school-operations platform.'],
    ['Sevenloop', 'Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider.'],
    ['Adnaut', 'Branding for Adnaut, a B2B advertising and demand-generation platform.'],
    ['TLH', 'Brand identity for TLH, an industrial logistics and heavy-haulage operator.'],
    ['Alkemiz', 'Branding and web design for Alkemiz, a specialty chemicals and materials company.'],
    ['Lumora Security', 'Brand strategy and identity for Lumora Security, an enterprise cybersecurity provider.'],
    ['Expent', 'Branding and website for Expent, a procurement and spend-management platform.'],
    ['Xflow', 'Brand and web design for Xflow, a cross-border payments and treasury platform.'],
  ];

  const TABS = ['Solution', 'Service', 'Industry', 'Branding Projects'];

  function ProjectCard({ name, desc, i }) {
    const feat = name === 'Sevenloop';
    return (
      <a className={'svc-card' + (feat ? ' is-feat' : '')} href="#">
        <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
          <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
          {feat && <span className="svc-card-tag">Featured project</span>}
          <span className="svc-card-link">Visit website <span aria-hidden>&#8599;</span></span>
        </div>
        <div className="svc-card-body">
          <h3 className="svc-card-name">{name}</h3>
          <p className="svc-card-desc">{desc}</p>
        </div>
      </a>
    );
  }

  function SvcPortfolio() {
    const [tab, setTab] = useState('Branding Projects');
    /* PROJECTS marquee — repeated for seamless loop */
    const strip = Array.from({ length: 8 }, (_, i) => i);
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)' }}>
        {/* marquee strip */}
        <div className="svc-marquee" style={{ marginBottom: 'clamp(48px,5vw,80px)' }}>
          <div className="svc-marquee-track">
            {[...strip, ...strip].map((n, i) => (
              <span className="svc-marquee-item" key={i}><span>Projects</span><em aria-hidden>&#10022;</em></span>
            ))}
          </div>
        </div>

        <div className="da-wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 36 }}>
            <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Clients we did Branding for</h2>
            <div className="svc-tabs" role="tablist">
              {TABS.map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} className={'svc-tab' + (tab === t ? ' is-active' : '')} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
          </div>

          <div className="svc-grid sl-reveal">
            {PROJECTS.map((p, i) => <ProjectCard key={p[0]} name={p[0]} desc={p[1]} i={i} />)}
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { SvcPortfolio });
})();
