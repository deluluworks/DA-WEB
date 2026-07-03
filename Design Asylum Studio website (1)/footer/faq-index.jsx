/* FAQ Index (/faq) — master accordion of all questions, each linking to its /faq/{slug} page */
(function () {
  const { useState, useRef } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  /* Representative cross-cluster set (the live index holds ~100; structure is identical). */
  const FAQ = [
    ['How should a defense-tech startup approach branding for procurement and investors?', 'defense-tech-startup-branding-procurement-investors', 'Lead with credibility and clarity. Procurement officers need proof of capability and compliance; investors need a story about the market. A defense-tech brand has to carry both audiences without diluting either — so we separate the messaging into parallel paths that share one confident identity.'],
    ['What does branding look like for an aerospace and defense manufacturer?', 'aerospace-defense-manufacturer-branding', 'Restraint and seriousness. The brand has to read as precise as the engineering — heavy whitespace, disciplined type, and proof-led messaging that respects a technical, risk-averse buyer.'],
    ['How do you brand a legal or compliance professional-services firm?', 'legal-compliance-professional-services-branding', 'Trust is the entire product. The work is to make a firm feel authoritative and current at once — a brand that signals rigor to a cautious buyer while still looking like it belongs in 2026.'],
    ['What makes a good B2B explainer-video agency?', 'b2b-explainer-video-agency', 'One that starts with the message, not the motion. The script and the strategic point come first; the animation exists to make a complex value proposition land in ninety seconds.'],
    ['How should a fintech company approach explainer videos?', 'fintech-explainer-video', 'Lead with the outcome and the trust signal. Fintech buyers are evaluating risk as much as product, so the video has to feel as secure and credible as it is clear.'],
    ['What should a cybersecurity explainer video communicate?', 'cybersecurity-explainer-video', 'The threat, the relief, and the proof — fast. A cybersecurity buyer needs to feel the risk you remove before they care how you remove it.'],
    ['How do you make an explainer video for a proptech platform?', 'proptech-explainer-video', 'Show the workflow it replaces. Proptech often digitises a messy, manual process, so the video earns its keep by making the before-and-after obvious.'],
    ['What does an energy-sector explainer video need?', 'energy-sector-explainer-video', 'Scale and seriousness. Energy buyers think in decades and megawatts — the film has to match that ambition while keeping the value plain.'],
    ['When does a B2B company need 3D design or animation?', 'b2b-3d-design-animation', 'When the product is invisible or complex — hardware, infrastructure, molecules, or software with no obvious physical form. 3D makes the intangible tangible and memorable.'],
    ['How do you handle branding for a multilingual or global audience?', 'multilingual-global-branding', 'Design the system to flex. A global brand needs a visual and verbal identity that survives translation — tested across languages so the meaning, not just the words, carries.'],
    ['How much does a B2B branding project cost?', 'b2b-branding-cost', 'It tracks scope and depth of strategy. A focused positioning engagement, a full identity build, and a brand-plus-website-plus-film project sit in three different ranges — we scope each against the outcome and quote a fixed engagement.'],
    ['How long does a B2B website redesign take?', 'b2b-website-redesign-timeline', 'Typically 10–16 weeks end to end for a comprehensive build, or 6–8 weeks for a focused, single-template sprint.'],
    ['What is the difference between branding and a brand refresh?', 'branding-vs-brand-refresh', 'A refresh sharpens what already works — messaging, type, and a few touchpoints — without throwing out hard-won recognition. Full branding rebuilds the position and identity from the strategy up.'],
    ['How do you write messaging for a deep-tech company?', 'deep-tech-messaging', 'Translate, do not simplify. The job is to make a genuinely advanced capability legible to a buyer without losing the depth the technical evaluator is checking for.'],
    ['What should a SaaS rebrand prioritise?', 'saas-rebrand-priorities', 'Positioning before pixels. Most SaaS rebrands fail because they restyle without resolving who the product is for and what it stands against — fix that first.'],
    ['How do you brand a venture-capital or investment firm?', 'venture-capital-firm-branding', 'Signal judgment and access. A VC brand sells trust to founders and LPs alike — it has to feel discerning, confident, and unmistakably itself.'],
    ['What makes a strong manufacturing website?', 'manufacturing-website', 'A site that makes industrial capability feel premium and easy to buy — leading with the outcome a procurement head wants, then proving it with the specs.'],
    ['How do you approach branding for a climate-tech startup?', 'climate-tech-startup-branding', 'Pair urgency with rigor. Climate-tech brands win by being credible and commercial, not just idealistic — the science has to feel investable.'],
    ['What does a healthcare-tech brand need to get right?', 'healthcare-tech-branding', 'Trust, clarity, and humanity. The brand has to reassure a risk-averse buyer while staying warm enough for the people the product ultimately serves.'],
    ['How do you design a brochure for enterprise sales?', 'enterprise-sales-brochure', 'Build it for the room it lives in. An enterprise brochure is a sales tool — it has to open a conversation and survive being forwarded to a committee.'],
    ['When should a startup invest in a brand film?', 'startup-brand-film', 'When the story is bigger than the homepage can hold. A brand film earns its cost by making people feel the mission, not just read it.'],
    ['How do you choose between a freelancer, a boutique, and a large agency?', 'freelancer-boutique-large-agency', 'Match the partner to the stakes. Boutiques give you senior continuity from strategy to launch; large agencies give scale but often a junior bench; freelancers give speed on a narrow slice.'],
    ['What is B2B brand positioning, really?', 'b2b-brand-positioning', 'The single belief you want a buyer to hold before they meet you. Positioning is a courage problem more than a creative one — it means choosing who you are best for, and who you are not.'],
    ['How do you measure the impact of a rebrand?', 'measure-rebrand-impact', 'Watch what changes in the sales room — how conversations start, how fast trust is established, and how little has to be explained. That is the real scoreboard.'],
  ];

  function FaqItem({ q, slug, a, open, onToggle }) {
    const ref = useRef(null);
    return (
      <div className={'bl-faq-item' + (open ? ' is-open' : '')}>
        <h2 style={{ margin: 0 }}>
          <button className="bl-faq-q" aria-expanded={open} onClick={onToggle}>
            <span>{q}</span><span className="bl-faq-icon" aria-hidden />
          </button>
        </h2>
        <div className="bl-faq-a" style={{ maxHeight: open && ref.current ? ref.current.scrollHeight + 4 : 0 }}>
          <div className="bl-faq-a-inner" ref={ref}>
            <p>{a}</p>
            <a href={'#/faq/' + slug} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 11, color: INK, textDecoration: 'none' }}>
              Read the full answer <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function FaqIndexPage() {
    window.useReveal();
    const [open, setOpen] = useState(-1);
    return (
      <React.Fragment>
        <SLNav />
        <header className="da-wrap" style={{ paddingTop: 150 }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ marginBottom: 24 }}><Eyebrow>Frequently asked</Eyebrow></div>
            <h1 style={{ margin: 0, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(48px,6vw,104px)', color: INK }}>FAQs</h1>
            <p style={{ margin: '24px 0 0', fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.55, color: ASH }}>
              Every question we get about B2B branding, web design, video and motion &mdash; each one also lives on its own page.
            </p>
          </div>
        </header>
        <section className="da-wrap" style={{ paddingTop: 'clamp(48px,5vw,72px)', paddingBottom: 'var(--section-pad-y)' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            {FAQ.map((f, i) => (
              <FaqItem key={f[1]} q={f[0]} slug={f[1]} a={f[2]} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </section>
        <SLFooter trail={[{ label: 'Home', href: '#' }, { label: 'FAQ' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ns = window.DesignAsylumDesignSystem_594314;
    const ready = ns && window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal && window.Eyebrow;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<FaqIndexPage />);
  }
  mount();
})();
