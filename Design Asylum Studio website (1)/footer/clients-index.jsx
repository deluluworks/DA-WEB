/* Clients index (/clients) — navbar, H1, client tile grid, footer */
(function () {
  const D = 'var(--font-display)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  const CLIENTS = [
    'Sevenloop', 'Ximkart', 'Revind Ai', 'Fortuna Cysec', 'Swiffy Labs', 'Tunnel', 'SimpliContract', 'Aavenir',
    'Good Food Movement', 'i3systems', "Founder's Cupid", 'Compport', 'IVY Homes', 'Progcap', 'Phronetic', 'OneLern',
    'Adnaut', 'TLH', 'Alkemiz', 'Lumora Security', 'Expent', 'Xflow', 'Entropik', 'Cloudphysician',
    'Nimble Edge', '5X', 'Mili', 'Relanto', 'Rewild Farms', 'TurboTech', 'GenRobotics', 'Ajax Engineering',
    'Lakshmigraha', 'Ayr Energy', 'Armory', 'Botim', 'SISA', 'Turno', 'Zuora', 'Hand In Hand India',
    'Transitry', 'Aspi & CIS', 'Phantom', 'Lumora',
  ];

  function ClientsIndexPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <header className="da-wrap" style={{ paddingTop: 150 }}>
          <div style={{ marginBottom: 24 }}><Eyebrow>Clients</Eyebrow></div>
          <h1 style={{ margin: 0, maxWidth: 1180, fontFamily: D, fontWeight: 800, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(40px,5vw,84px)', color: INK }}>
            Worked with companies from a diverse set of industries
          </h1>
        </header>
        <section className="da-wrap" style={{ paddingTop: 'clamp(48px,5vw,80px)', paddingBottom: 'var(--section-pad-y)' }}>
          <div className="ci-grid sl-reveal">
            {CLIENTS.map((c) => (
              <a key={c} className="ci-tile" href="#">
                <span className="ci-tile-name">{c}</span>
                <span className="ci-tile-tag"><span aria-hidden style={{ width: 5, height: 5, borderRadius: 999, background: 'currentColor' }} />Projects</span>
              </a>
            ))}
          </div>
        </section>
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Clients' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal && window.Eyebrow;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<ClientsIndexPage />);
  }
  mount();
})();
