/* Contact / Book a Call (/contact-us) — hero, contact + video, Calendly embed, promise, footer */
(function () {
  const { useState } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  const CRUMB = [{ label: 'Home', href: '#' }, { label: 'Contact Us' }];
  /* configurable token — no real booking URL hardcoded */
  const CALENDLY_URL = '{{CALENDLY_URL}}';

  function ContactPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <main className="da-wrap" style={{ paddingTop: 150 }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <Breadcrumb trail={CRUMB} />
            <h1 style={{ margin: '28px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(44px,5.6vw,92px)', color: INK }}>
              Talk to us for your branding
            </h1>

            {/* contact details + brand video */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, marginTop: 36 }}>
              <a className="da-mail" href="mailto:hello@designasylum.in" style={{ fontFamily: S, fontSize: 'clamp(20px,1.8vw,26px)', color: INK, textDecoration: 'none' }}>
                hello@designasylum.in <span className="da-mail-arrow" aria-hidden>&#8599;</span>
              </a>
              <button className="fb-play" type="button">Play video <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span></button>
            </div>

            {/* Calendly embed placeholder */}
            <div className="sl-reveal" style={{ marginTop: 48 }}>
              <div className="calendly-inline-widget" data-url={CALENDLY_URL}>
                <span style={{ fontFamily: S, fontSize: 18, color: ASH }}>Oops!, Calendly is loading, please wait...</span>
              </div>
              <p style={{ margin: '14px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: ASH }}>
                Booking handled by Calendly &mdash; configure the embed URL to go live
              </p>
            </div>

            {/* brand-promise line */}
            <p style={{ margin: '64px 0 0', fontFamily: S, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.32, fontSize: 'clamp(24px,2.6vw,36px)', color: INK }}>
              We exist to design B2B businesses their right to win &amp; communicate with clarity, personality, and a point of view, making the right people want to remember &amp; associate.
            </p>
          </div>
          <div style={{ height: 'var(--section-pad-y)' }} />
        </main>
        <SLFooter trail={CRUMB} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.Breadcrumb && window.useReveal;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage />);
  }
  mount();
})();
