/* Sevenloop client hub — Section 3 (Editorial) + Section 4 (Transformation / Before-After) */
(function () {
  const { useState, useRef, useCallback } = React;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  /* ============ SECTION 3 — HOW DESIGN ASYLUM HELPED SEVENLOOP ============ */
  function SLEditorial() {
    const paras = [
      'Sevenloop is actually the third branding project Design Asylum did in this ecosystem \u2014 and the biggest of the three. The first was Ximkart (Sevenloop\u2019s sourcing platform), the second was Revind.ai, and Sevenloop itself is the parent brand. That history matters because it means Design Asylum didn\u2019t come to this project cold; they understood the business, the market, and the founder\u2019s vision intimately.',
      'Sharan, Sevenloop\u2019s founder, is a long-standing partner who keeps coming back \u2014 and who has since referred Design Asylum to their investors Z47 (previously Matrix Partners India), a project currently in progress. That referral chain tells you something about the quality of the relationship.',
      'The branding challenge was positioning a company at a fascinating intersection: old-world metal manufacturing meets AI-driven engineering. Sevenloop uses artificial intelligence to power custom manufacturing across aerospace, automotive, mining, and industrial machinery, operating with 150+ manufacturing partners across India, the US, Germany, Italy, the Netherlands, and the UK. The brand needed to speak to procurement heads and innovation officers with equal authority.',
      'Design Asylum delivered a comprehensive brand strategy \u2014 logo, visual identity, website at sevenloop.com built on Webflow, a project brochure for enterprise sales conversations, and a brand video. Something Sharan particularly valued was the team continuity: Tanmaya, who had designed the Ximkart logo and brand under Ekta\u2019s design leadership, returned for the Sevenloop project alongside Mejo, who had crafted the original Ximkart messaging. When Sharan came back years later for the Sevenloop brand, having the same core team meant the strategic context, brand essence, and mission understanding carried forward seamlessly. Tanmaya\u2019s deep expertise in the manufacturing, metals, and mechanical space \u2014 built across Ximkart, Revind, Sevenloop, and other industrial clients \u2014 made the design direction sharper and more informed from day one.',
      'That team continuity paid off especially on the brand video. Because Tanmaya, Ekta, and Mejo already understood Sevenloop\u2019s brand essence and mission deeply, the brand film came out as a true expression of the brand \u2014 not just another explainer video or generic brand film, but something that captured the manufacturing story with conviction and purpose. This is a pattern clients consistently appreciate about Design Asylum: the same people who build the brand are the ones who extend it across new formats and touchpoints, so the strategic thread never gets lost.',
      'The relationship continues to grow \u2014 after the initial website and branding, Sevenloop came back for a homepage revamp and the brand video. Building the Sevenloop brand isn\u2019t a one-off project; it\u2019s an ongoing collaboration. That\u2019s the model Design Asylum works best in: deep partnerships where each engagement builds on the last, and the brand strategy evolves alongside the business.',
    ];
    return (
      <section style={{ paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-off)' }}>
        <div className="da-wrap" style={{ display: 'grid', gridTemplateColumns: '34fr 66fr', gap: 72, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 116 }}>
            <Eyebrow>The partnership</Eyebrow>
            <h2 style={{ margin: '22px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.02, fontSize: 'clamp(34px,3.8vw,58px)', color: INK }}>How Design Asylum helped Sevenloop</h2>
          </div>
          <div className="sl-reveal" style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 30 }}>
            {paras.map((p, i) => (
              <p key={i} style={{ margin: 0, fontFamily: S, fontSize: 'clamp(18px,1.5vw,21px)', lineHeight: 1.65, color: i === 0 ? INK : GRAPHITE }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ============ SECTION 4 — TRANSFORMATION / BEFORE-AFTER ============ */
  function BeforeAfter() {
    const [pos, setPos] = useState(52);
    const wrapRef = useRef(null);
    const dragRef = useRef(false);

    const update = useCallback((clientX) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      let p = ((clientX - r.left) / r.width) * 100;
      p = Math.max(2, Math.min(98, p));
      setPos(p);
    }, []);

    const onDown = (e) => {
      dragRef.current = true;
      update(e.clientX);
      const move = (ev) => { if (dragRef.current) update(ev.clientX); };
      const up = () => {
        dragRef.current = false;
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    };

    return (
      <div ref={wrapRef} className="sl-ba" onPointerDown={onDown} role="slider" aria-valuenow={Math.round(pos)} aria-valuemin={0} aria-valuemax={100} aria-label="Before and after website comparison" tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4)); if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4)); }}>
        {/* AFTER (base) */}
        <div className="sl-ba-layer" style={{ background: 'var(--color-deep-teal)' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 130% at 80% 20%, rgba(255,194,64,0.40), transparent 52%), radial-gradient(90% 130% at 15% 90%, rgba(81,111,234,0.46), transparent 52%)' }} />
          <span style={{ position: 'relative', fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: 'clamp(28px,4vw,60px)', color: 'rgba(255,255,255,0.24)' }}>New site</span>
        </div>
        {/* BEFORE (clipped to left) */}
        <div className="sl-ba-layer" style={{ background: '#e7e6e1', clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: 'clamp(28px,4vw,60px)', color: 'rgba(24,31,31,0.18)' }}>Old site</span>
        </div>
        {/* tags */}
        <span className="sl-ba-tag" style={{ left: 18 }}>Before</span>
        <span className="sl-ba-tag" style={{ right: 18 }}>After</span>
        {/* handle */}
        <div className="sl-ba-handle" style={{ left: `${pos}%` }} />
        <div className="sl-ba-knob" style={{ left: `${pos}%`, top: '50%' }}>
          <span aria-hidden>&#8249;</span><span aria-hidden>&#8250;</span>
        </div>
      </div>
    );
  }

  function SLTransformation() {
    return (
      <section id="before-after" style={{ scrollMarginTop: 110, paddingTop: 'var(--section-pad-y)', paddingBottom: 'var(--section-pad-y)', background: 'var(--color-paper-white)' }}>
        <div className="da-wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 36 }}>
            <div>
              <Eyebrow>Before / after</Eyebrow>
              <h2 style={{ margin: '20px 0 0', fontFamily: D, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.0, fontSize: 'var(--text-section)', color: INK }}>Transformation</h2>
            </div>
            <p style={{ margin: 0, maxWidth: 420, fontFamily: S, fontSize: 18, lineHeight: 1.5, color: GRAPHITE }}>
              Drag to compare the old Sevenloop site against the Webflow rebuild.
            </p>
          </div>
          <div className="sl-reveal">
            <BeforeAfter />
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { SLEditorial, SLTransformation });
})();
