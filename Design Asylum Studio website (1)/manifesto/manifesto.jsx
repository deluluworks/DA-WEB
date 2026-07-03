/* Manifesto (/manifesto) — single editorial long-read.
   Also serves the footer "Our terms" link. H1 is the verbatim CMS mislabel. */
(function () {
  const PARAS = [
    { cls: 'mf-lead', t: 'We are Design Asylum, and we\u2019re not here to play it safe. Safe never built something remarkable.' },

    { t: 'Safe is the slow death of every brand that ever had a real idea and then sanded it down until nobody could object and nobody could be moved. We started this studio because we were tired of watching genuinely interesting companies \u2014 companies solving hard, important, expensive problems \u2014 show up to the market looking like everyone else, sounding like everyone else, quietly apologising for taking up space. That is the one thing we refuse to do, and the one thing we refuse to let our clients do.' },

    { t: 'So we push. Not for the sake of noise, but because the brief is almost never the real problem \u2014 the real problem is usually hiding underneath it, and you only find it if you\u2019re willing to walk past the comfortable answer. We push past the first idea, the obvious palette, the template that would have been perfectly fine. Fine is not why anyone hires us. We are here to make work the right people remember, repeat, and reach for the chequebook over.' },

    { t: 'Most agencies sell you safety dressed up as strategy. They\u2019ll tell you what tested well, what the category already does, what won\u2019t get anyone in the room fired. We think that is the most expensive advice in the world \u2014 because a brand built to avoid losing will never be built to win. Winning needs a point of view, and a point of view, by definition, is something not everyone will agree with.' },

    { cls: 'mf-emph', t: 'Difference is not our garnish. It is our method.' },

    { t: 'We are strategists, designers, copywriters, developers and motion artists, and we sit in the same room and argue about the same problem from five directions at once. A strategist who can\u2019t write loses the argument to a writer who can\u2019t design; a developer who only thinks in components misses the story a motion artist can see in a single frame. None of this works as a relay race \u2014 strategy handing to design handing to build, each pass quietly diluting the last. We work as one team, on one problem, accountable to one outcome, so the idea that survives the first conversation is the same idea that ships.' },

    { cls: 'mf-emph', t: 'We take ownership. Period.' },

    { t: 'We don\u2019t hide behind process when something slips, and we don\u2019t disappear when the work gets hard. When we falter, we communicate, we adapt, and we fix it \u2014 because accountability is the foundation of trust, and trust is the only currency that compounds. A brand is a promise. An agency that can\u2019t keep its own has no business making yours.' },

    { t: 'Risk, to us, is not the thing to be managed away \u2014 risk is the opportunity wearing a disguise. Every brand we\u2019re proud of started with a decision that felt slightly too bold in the room and obviously right twelve months later. We would rather make that decision with you than watch a competitor make it first. The cost of looking like everyone else is invisible right up until the day it isn\u2019t, and by then it is usually too late to be early.' },

    { t: 'And we are never finished learning. The tools change, the channels change, the way a buyer decides changes \u2014 so we change with them, upskilling relentlessly, staying uncomfortable on purpose, because the studio that stops learning simply starts repeating itself, and repetition is only safe wearing a fresh coat of paint.' },

    { t: 'This is the work: to reimagine what a B2B brand is allowed to be, to disrupt a category that has been beige for far too long, and to give serious companies a way to be taken seriously without ever being boring. We are Design Asylum. We exist to design B2B businesses their right to win \u2014 and we intend to keep earning it, brief after brief, in plain sight.' },
  ];

  function ManifestoPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />
        <main>
          <header className="da-wrap" style={{ paddingTop: 160 }}>
            <div className="mf-wrap">
              <h1 className="mf-h1 sl-reveal">*Terms and Conditions</h1>
            </div>
          </header>

          <section className="da-wrap" style={{ paddingTop: 'clamp(44px,4.6vw,72px)', paddingBottom: 'var(--section-pad-y)' }}>
            <div className="mf-wrap mf-body">
              {PARAS.map((p, i) => (
                <p key={i} className={'sl-reveal ' + (p.cls || 'mf-p')}>{p.t}</p>
              ))}
            </div>
          </section>
        </main>
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'Manifesto' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<ManifestoPage />);
  }
  mount();
})();
