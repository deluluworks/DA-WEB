/* Pricing (/pricing) — utility table page
   Breadcrumb + H1 · intro · 8-row INR/USD/Timeline table · footnote · promise · footer */
(function () {
  const D = window.SL_DISPLAY, S = window.SL_SERIF, INK = window.SL_INK;

  /* 8 rows, verbatim figures. Service / INR / USD / Timeline */
  const ROWS = [
    ['Brand Design + Website \u2014 Early Stage', '\u20B99L \u2013 18L', '$10,000 \u2013 $20,000', '8 \u2013 10 Weeks'],
    ['Strategic Branding + Website \u2014 Growth Stage / Funded', '\u20B925L \u2013 55L', '$28,000 \u2013 $60,000', '10 \u2013 20 Weeks'],
    ['Brand Design \u2014 Mainly Visual & Motion', '\u20B95L \u2013 12L', '$6,000 \u2013 $14,000', '3 \u2013 8 Weeks'],
    ['Strategic Branding', '\u20B914L \u2013 45L', '$15,000 \u2013 $48,000', '8 \u2013 16 Weeks'],
    ['Website \u2014 Early Stage', '\u20B96L \u2013 15L', '$8,000 \u2013 $18,000', '4 \u2013 6 Weeks'],
    ['Growth / Funded Startup Website', '\u20B912L \u2013 25L', '$15,000 \u2013 $30,000', '8 \u2013 12 Weeks'],
    ['Corporate Website (Multiple Solutions)', '\u20B920L \u2013 70L', '$24,000 \u2013 $75,000', '12 \u2013 20 Weeks'],
    ['Explainer Video', '\u20B94L \u2013 10L', '$5,000 \u2013 $11,000', '3 \u2013 5 Weeks'],
  ];

  function PricingTable() {
    return (
      <div className="pr-tablewrap sl-reveal">
        <table className="pr-table">
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '24%' }} />
            <col style={{ width: '16%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">INR</th>
              <th scope="col">USD</th>
              <th scope="col">Timeline</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([svc, inr, usd, time]) => (
              <tr key={svc}>
                <td>
                  <span className="pr-svc">
                    <span className="pr-svc-arrow" aria-hidden>&rarr;</span>
                    <span>{svc}</span>
                  </span>
                </td>
                <td><span className="pr-inr">{inr}</span></td>
                <td><span className="pr-usd">{usd}</span></td>
                <td><span className="pr-time">{time}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function PricingPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <main>
          <header className="da-wrap" style={{ paddingTop: 150 }}>
            <div className="pr-wrap">
              <div className="sl-reveal" style={{ marginBottom: 26 }}>
                <Breadcrumb trail={[{ label: 'Home', href: '#' }, { label: 'Pricing' }]} />
              </div>
              <h1 className="pr-h1 sl-reveal">Pricing</h1>
            </div>
          </header>

          <section className="da-wrap" style={{ paddingTop: 'clamp(40px,4.4vw,64px)', paddingBottom: 'var(--section-pad-y)' }}>
            <div className="pr-wrap">
              <p className="pr-intro sl-reveal">
                This table is to give you sense of the budget you should keep in mind for our team.
                Based on the task at hand, number of products/ services you have, stage of your brand,
                team required based on the requirements, detailing required on the brand &amp; website,
                timelines &mdash; pricing and model of engagement (fixed price, retianer, hourly or a
                combiantion) will be determined. We also do bring in consultants based on the requirements.
              </p>

              <PricingTable />

              <p className="pr-footnote sl-reveal">
                *A website project when copy is in place vs its not is not the same. A brand design
                project for a legacy brand vs a startup is the not the same. Execution cost of 3D,
                Animations vs static is not same.
              </p>

              <div className="pr-promise-band sl-reveal">
                <p className="pr-promise">
                  We exist to design B2B businesses their right to win &amp; communicate with clarity,
                  personality, and a point of view, making the right people want to remember &amp; associate.
                </p>
              </div>
            </div>
          </section>
        </main>
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Pricing' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal && window.Breadcrumb;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<PricingPage />);
  }
  mount();
})();
