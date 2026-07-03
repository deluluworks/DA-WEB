/* Branding Agency service page — FAQ accordion · Experts grid · Related blogs */
(function () {
  const { useState, useRef } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* ============ FAQ ============ */
  const FAQ = [
    {
      q: 'What is B2B branding and why does it matter?',
      a: [{ p: 'B2B branding is the deliberate construction of belief &mdash; the positioning, narrative, and identity that decide what a buyer, an investor, or a hire thinks about you before they ever speak to your team. In long, committee-driven sales cycles, that pre-belief is what gets you shortlisted, shortens the conversation, and lets you command a premium. A weak brand forces your salespeople to explain who you are on every call; a strong one does that work before the call begins.' }],
    },
    {
      q: 'What should you look for when hiring a branding agency?',
      a: [{ p: 'Look for evidence of strategy, not just a gallery of logos. The agencies that deliver lead with diagnosis and positioning, write their clients&rsquo; copy, keep one core team on a project from kickoff to launch, and have genuine depth in your sector. The clearest signal of all is repeat clients &mdash; companies that came back for a second and third engagement because the first one worked.' }],
    },
    {
      q: "How to evaluate a branding agency's portfolio?",
      a: [{ p: 'Read the case studies, don&rsquo;t just look at them. A portfolio that only shows finished artwork tells you the agency can make things look good; a portfolio that explains the problem, the strategic decision, and the result tells you the agency can think. Ask what the brief was, what changed for the business, and whether the client came back. Beautiful work attached to no story is a warning, not a credential.' }],
    },
    {
      q: 'Questions to ask a branding agency?',
      a: [
        { p: 'Ask the questions that surface how they actually work: How do you diagnose our current positioning? Who writes the copy? Which people will be on our project, and do they stay for the whole engagement? How do you extend the brand across the website, deck, and film? Can we talk to a repeat client?' },
        { sub: 'Bringing your A-team' },
        { p: 'The single most important question is about continuity: will the senior people in the pitch be the ones doing the work, or will the project be handed to a junior team after you sign? At Design Asylum the same core team that builds the strategy designs the identity and ships the site &mdash; which is why the strategic thread never gets lost between phases. Insist on that continuity from any agency you hire.' },
      ],
    },
    {
      q: 'How much does a B2B branding agency charge?',
      a: [
        { p: 'Pricing tracks scope, depth of strategy, and the number of touchpoints the brand extends across. As a rough guide for the Indian market:' },
        { ul: [
          '<strong>Positioning &amp; messaging</strong> — roughly &#8377;4&ndash;10 lakh ($5K&ndash;$12K): diagnosis, positioning, and core narrative.',
          '<strong>Brand identity build</strong> — roughly &#8377;8&ndash;20 lakh ($10K&ndash;$25K): strategy plus logo, type, colour, and a full identity system.',
          '<strong>Brand + website + collateral</strong> — roughly &#8377;18&ndash;40 lakh+ ($22K&ndash;$50K+): the complete engagement, including a Webflow build, deck, and film.',
        ] },
        { p: 'We scope every project against the outcome you need and quote a fixed engagement, so the number is clear before any work begins.' },
      ],
    },
    {
      q: 'What is brand identity and why does it matter?',
      a: [{ p: 'Brand identity is the visible, repeatable system &mdash; logo, typography, colour, motion, imagery, and the rules that hold them together &mdash; that makes your strategy recognisable everywhere it appears. It matters because consistency is credibility: a buyer who meets the same confident, coherent brand on your site, your deck, and your LinkedIn trusts you faster. Identity is not decoration; it is the carrier that lets the positioning travel.' }],
    },
  ];

  function FaqItem({ item, open, onToggle }) {
    const ref = useRef(null);
    return (
      <div className={'bl-faq-item' + (open ? ' is-open' : '')}>
        <button className="bl-faq-q" aria-expanded={open} onClick={onToggle}>
          <span>{item.q}</span>
          <span className="bl-faq-icon" aria-hidden />
        </button>
        <div className="bl-faq-a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 4 : 0 }}>
          <div className="bl-faq-a-inner" ref={ref}>
            {item.a.map((blk, i) => {
              if (blk.sub) return <div className="bl-sub" key={i}>{blk.sub}</div>;
              if (blk.ul) return <ul className="bl-ul" key={i}>{blk.ul.map((li, j) => <li key={j} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>;
              return <p key={i} dangerouslySetInnerHTML={{ __html: blk.p }} />;
            })}
          </div>
        </div>
      </div>
    );
  }

  function SvcFAQ() {
    const [open, setOpen] = useState(0);
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>FAQs</h2>
        <div>
          {FAQ.map((item, i) => (
            <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </section>
    );
  }

  /* ============ EXPERTS GRID ============ */
  const EXPERTS = [
    ['Lead Designer', 'Akhilesh J', 'Akhilesh, a graphic designer, is passionate about creating captivating designs that inspire and resonate with people.'],
    ['Lead Designer | Content Strategist', 'Athira Krishnan', 'Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.'],
    ['Co-Founder | Principal Designer', 'Ekta Manchanda', 'Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces.'],
    ['Partner | Brand Strategist', 'Mejo Kuriachan', 'Mejo puts the \u2018Everything\u2019 in brand, flow, video and motion \u2014 an engineer first, strategist and design manager next.'],
    ['Senior Brand Designer', 'Neha Bhatnagar', 'Neha helps you level up brands with designs that not only look great but truly capture the essence of the business.'],
    ['Lead Designer', 'Sanjana', 'With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design.'],
    ['Lead Strategist', 'Sijeesh VB', 'Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences.'],
    ['Content Strategist', 'Swathi Mohan', 'Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard.'],
  ];

  function ExpertCard({ role, name, bio }) {
    return (
      <article className="svc-team-card">
        <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11, color: 'var(--color-iris-voltage)' }}>{role}</span>
        <h3 style={{ margin: '16px 0 0', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.0, fontSize: 'clamp(22px,1.7vw,28px)', color: INK }}>{name}</h3>
        <p style={{ margin: '14px 0 0', fontFamily: S, fontSize: 15, lineHeight: 1.5, color: GRAPHITE, flex: '1 1 auto' }}>{bio}</p>
        <a href="#" style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK, textDecoration: 'none' }}>
          Read more <span className="svc-readmore-arrow" aria-hidden>&rarr;</span>
        </a>
      </article>
    );
  }

  function SvcExperts() {
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', background: 'var(--color-paper-off)' }}>
        <div className="da-wrap" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', marginTop: 'calc(-1 * var(--section-pad-y))' }}>
          <div style={{ marginBottom: 44 }}>
            <Eyebrow>The roster</Eyebrow>
            <h2 style={{ margin: '18px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>
              Branding <span style={{ color: 'var(--color-iris-voltage)' }}>Experts</span>
            </h2>
          </div>
          <div className="svc-team-grid sl-reveal">
            {EXPERTS.map((m) => <ExpertCard key={m[1]} role={m[0]} name={m[1]} bio={m[2]} />)}
          </div>
        </div>
      </section>
    );
  }

  /* ============ RELATED BLOGS ============ */
  const RELATED = [
    ['Top 10 Branding Agencies in Bangalore (2026 Shortlist)', 'var(--color-block-iris)'],
    ['Top B2B Visual Identity Design Agencies in 2026', 'var(--color-block-maroon)'],
    ['Fortuna Cysec: Cybersecurity Branding Case Study', 'var(--color-block-teal)'],
    ['Branding agency for Y Combinator companies', 'var(--color-block-iris)'],
    ['Swiffy Labs Branding and Web Design', 'var(--color-block-maroon)'],
    ['Branding Process', 'var(--color-block-teal)'],
  ];

  function SvcRelated() {
    return (
      <section className="da-wrap sl-reveal" style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)' }}>
        <h2 style={{ margin: '0 0 36px', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', fontSize: 'var(--text-section)', color: INK }}>Related blogs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {RELATED.map(([title, bg]) => (
            <a key={title} className="svc-related" href="#">
              <div style={{ width: '100%', aspectRatio: '16/9', background: bg, position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 78% 22%, rgba(255,255,255,0.18), transparent 55%)' }} />
              </div>
              <h3 style={{ margin: 0, fontFamily: D, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.18, fontSize: 'clamp(20px,1.6vw,25px)', color: INK }}>{title}</h3>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK }}>Read blog <span aria-hidden>&rarr;</span></span>
            </a>
          ))}
        </div>
      </section>
    );
  }

  Object.assign(window, { SvcFAQ, SvcExperts, SvcRelated });
})();
