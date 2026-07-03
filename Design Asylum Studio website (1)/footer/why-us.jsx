/* Why Us (/why-us) — alt marketing navbar + prose sales letter */
(function () {
  const { useState } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const ASH = 'var(--color-ash)';

  /* alt marketing navbar */
  function AltNav() {
    const { PillNav } = window.DesignAsylumDesignSystem_594314;
    const [active, setActive] = useState('fit');
    return (
      <PillNav
        brand="Design Asylum"
        activeId={active}
        onSelect={setActive}
        items={[
          { id: 'work', label: 'Our work' },
          { id: 'fit', label: 'The right fit' },
          { id: 'team', label: 'The team' },
          { id: 'do', label: 'What we do' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'intro', label: 'Book an intro', group: 'right' },
        ]}
      />
    );
  }

  function WhyUsPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <AltNav />
        <main className="da-wrap" style={{ paddingTop: 150, paddingBottom: 'var(--section-pad-y)' }}>
          <div className="pr-col">
            <h1 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.04, fontSize: 'clamp(34px,3.8vw,60px)', color: INK }}>
              If you&rsquo;re reading this, you are on the hunt for a team who can help you get a B2B website.
            </h1>

            <div style={{ marginTop: 44 }}>
              <p className="pr-strong">right now, you&rsquo;re probably comparing us against 3 other agencies. and while you do, you&rsquo;re quietly checking a long list of things:</p>
              <ul className="pr-ul">
                {['what process they follow', 'what solutions they provide', "the kind of clients they've worked with", 'what it would be like working with them', 'what the leadership is like', 'past projects', 'will they run away in the middle of the project', 'testimonials', 'pricing', 'even location'].map((t) => <li key={t}>{t}</li>)}
              </ul>
              <p>you want to make sure you pick the best option. it&rsquo;s a big decision, a real investment, and you don&rsquo;t want to lose your sleep over this.</p>
              <p className="pr-strong">here&rsquo;s the thing &mdash; this is similar to the journey your potential customer will also go through when they land on your website. they&rsquo;re evaluating, comparing, deciding. the website is where that decision gets made or lost.</p>
            </div>

            <p className="pr-promise">We create websites that don&rsquo;t confuse the visitors. That&rsquo;s our promise.</p>

            <p className="pr-strong">the hard truth is, most websites are:</p>
            <ul className="pr-ul">
              {['made without thinking about your brand positioning', 'difficult to navigate and understand', 'loaded with generic, meaningless content', 'overloaded with technical jargon', 'confusing and unclear in their messaging', 'lacking essential information', 'overwhelming with too much content!!!'].map((t) => <li key={t}>{t}</li>)}
            </ul>

            <p>you might have given this a shot with your busy internal team already &mdash; and it half-worked, or stalled, or shipped something nobody&rsquo;s proud of. that&rsquo;s not a knock on your team. building a website that actually sells is a different job from running the business, and it needs people who do only this.</p>
            <p>that&rsquo;s where we come in. we start with positioning and messaging &mdash; the words and the strategy &mdash; and only then design and build. so the site doesn&rsquo;t just look good; it says the right thing to the right buyer, in the right order.</p>

            <blockquote className="pr-quote">
              <p>&ldquo;You understood our business, products and the industry we operate in better than some of my internal teams.&rdquo;</p>
              <cite>A founder we worked with</cite>
            </blockquote>

            <div style={{ margin: '12px 0 44px' }}>
              <button className="fb-play" type="button">Watch 10:55 min testimonial video <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span></button>
            </div>

            <blockquote className="pr-quote">
              <p>&ldquo;They actually understood the product, what is getting built out, and turned it into a story our customers immediately got.&rdquo;</p>
              <cite>Another client, post-launch</cite>
            </blockquote>

            <p className="pr-strong">and once the brand and website are right, we can take it further &mdash; SEO, link building, performance marketing, film and motion &mdash; the whole way a B2B company shows up and gets remembered.</p>

            <p style={{ marginTop: 40 }}>so that&rsquo;s us &amp; our take on B2B websites in a nutshell. reach out to us, and let&rsquo;s get to know you too!</p>
          </div>

          {/* closing CTA */}
          <div className="pr-col" style={{ marginTop: 64, textAlign: 'center' }}>
            <p style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.02em', lineHeight: 1.05, fontSize: 'clamp(32px,4vw,64px)', color: INK }}>We design your right to win. Say Hi!</p>
            <p style={{ margin: '18px 0 32px', fontFamily: S, fontSize: 'clamp(18px,1.6vw,22px)', color: ASH }}>Let&rsquo;s get that website communication effective.</p>
            <a href="Contact - Book a Call.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', background: INK, color: 'var(--color-paper-white)', padding: '18px 34px', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 14 }}>
              Book an intro <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </main>
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Why Us' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && ns.PillNav && window.ReactDOM && window.SLFooter && window.useReveal;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<WhyUsPage />);
  }
  mount();
})();
