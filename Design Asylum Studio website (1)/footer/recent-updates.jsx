/* Recent Updates (/recent-updates) — dated changelog feed */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Recent Updates' }];

  const CURRENT = [
    ['01', ['Ongoing'], 'Web Design for Turno, a battery intelligence startup', 'Positioning, Messaging, 3D, Brand Refresh \u2014 it\u2019s progressing really well. Turno, a Stellaris-funded company.'],
    ['02', ['Partnership', 'Ongoing'], 'Web Design for an Australian CPaaS brand', 'Website design and Webflow development in partnership with Focus Lab.'],
    ['03', ['Ongoing'], '4 Ad films for Zuora', 'A set of four ad films for the subscription-software platform, in production now.'],
    ['04', ['Ongoing'], 'Branding for a Nuclear Energy startup', 'Brand strategy and identity for an early-stage nuclear energy company.'],
    ['05', ['Ongoing'], 'Website Project with a Defense Startup', 'Messaging and website design for a defense-technology startup.'],
    ['06', ['New'], 'Venture Studio Logo Design', 'Identity work for a venture studio backing early-stage founders.'],
    ['07', ['Ongoing'], 'ReBranding for a M&A Firm', 'A full rebrand for a mergers-and-acquisitions advisory firm.'],
    ['08', ['Ongoing'], 'Messaging and Web Development for a leading IT Product Brand', 'Repositioning and a Webflow build for an established IT product company.'],
  ];

  const ARCHIVE = [
    'Industry Page Launch \u2014 Cybersecurity Sector',
    'Industry Page Launch \u2014 Energy Sector',
    'Four ad films for the subscription software platform, Zuora.',
    '3D Works Page \u2014 Now Live',
    "An AI Report landing page for one of India\u2019s oldest VC firms, Z47.",
    'Strategy, messaging, website, and film for the battery intelligence company, Turno.',
    'Teaser Film \u2014 Armory Defence Tech Website Launch',
    'Brand Identity and Website for a Legal Tech Platform',
    'Website for Defence Startup \u2014 Armory',
  ];

  function Pill({ children, fill }) {
    return <span className={'fb-chip' + (fill ? ' is-fill' : '')} style={{ fontSize: 10, padding: '7px 12px' }}>{children}</span>;
  }

  function RecentUpdatesPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <main className="da-wrap" style={{ paddingTop: 150, paddingBottom: 'var(--section-pad-y)' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            {/* article header */}
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginBottom: 24 }}>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: ASH }}>Updated May 2026</span>
              <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-iris-voltage)' }}>By Mejo Kuriachan</span>
            </div>
            <h1 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.02, fontSize: 'clamp(36px,4.4vw,72px)', color: INK }}>
              Ongoing Branding and Website Projects at Design Asylum
            </h1>
            <p style={{ margin: '24px 0 0', fontFamily: S, fontSize: 'clamp(19px,1.6vw,23px)', lineHeight: 1.55, color: GRAPHITE }}>
              Latest projects and milestones &mdash; brand strategy, naming, web, motion, and film for B2B companies. You can see Design Asylum&rsquo;s currently active client engagements here.
            </p>

            {/* featured highlight */}
            <div className="sl-reveal" style={{ marginTop: 48, border: '1px solid var(--color-obsidian-ink)', padding: '40px 40px 44px', background: 'var(--color-paper-off)' }}>
              <Pill fill>Q1 2026 Highlight</Pill>
              <h2 style={{ margin: '20px 0 14px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.1, fontSize: 'clamp(26px,2.6vw,38px)', color: INK }}>
                Brand Refresh and Web Development for Cybersecurity Brand
              </h2>
              <p style={{ margin: 0, fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.6, color: GRAPHITE }}>
                Under the leadership of Ekta and Sanjana, Design Asylum revamped the brand and website for SISA, a leading cybersecurity brand.
              </p>
              <a href="#" style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK, textDecoration: 'none' }}>Know more <span aria-hidden>&rarr;</span></a>
            </div>

            {/* current projects */}
            <div style={{ marginTop: 'var(--section-pad-y)' }}>
              <h2 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'clamp(28px,3vw,46px)', color: INK }}>Current Projects and Updates from Design Asylum</h2>
              <p style={{ margin: '14px 0 32px', fontFamily: S, fontSize: 18, color: ASH }}>What we&rsquo;ve shipped, launched, and built this quarter.</p>
              <div>
                {CURRENT.map(([num, tags, title, desc]) => (
                  <div key={num} className="cl-item">
                    <span className="cl-num">{num}</span>
                    <div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                        {tags.map((t) => <Pill key={t}>{t}</Pill>)}
                      </div>
                      <h2 style={{ margin: '0 0 10px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.15, fontSize: 'clamp(22px,2vw,30px)', color: INK }}>{title}</h2>
                      <p style={{ margin: 0, fontFamily: S, fontSize: 17, lineHeight: 1.55, color: GRAPHITE }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* all updates archive */}
            <div style={{ marginTop: 'var(--section-pad-y)' }}>
              <h2 style={{ margin: '0 0 24px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'clamp(28px,3vw,46px)', color: INK }}>All Updates</h2>
              <div>
                {ARCHIVE.map((t) => (
                  <a key={t} className="cl-archive" href="#">
                    <span aria-hidden style={{ color: 'var(--color-iris-voltage)', fontFamily: D, fontWeight: 400 }}>&rarr;</span>
                    <span style={{ fontFamily: S, fontSize: 'clamp(17px,1.5vw,20px)', lineHeight: 1.4, color: INK }}>{t}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<RecentUpdatesPage />);
  }
  mount();
})();
