/* Sevenloop blog — primitives + ToC data */
(function () {
  const D = 'var(--font-display)';
  const INK = 'var(--color-obsidian-ink)';

  /* 21 sections — id + ToC label */
  const TOC = [
    ['sec-01', 'Transforming Precision Manufacturing: The Complete Sevenloop Brand & Website Redesign'],
    ['sec-02', 'The Voice of Success'],
    ['sec-03', 'Understanding Sevenloop: The Client Profile'],
    ['sec-04', "The Challenge: Excellence That Wasn't Translating"],
    ['sec-05', 'Our Strategic Approach: Discovering the Core'],
    ['sec-06', 'The Brand Manifesto: Articulating Vision'],
    ['sec-07', 'Logo Redesign: Symbolizing Partnership'],
    ['sec-08', 'Website Transformation: Making Manufacturing Easy'],
    ['sec-09', 'Website Architecture: Comprehensive Page Structure'],
    ['sec-10', 'Visual Identity: Custom Illustrations & Icons'],
    ['sec-11', 'Responsive Design: Excellence Across All Devices'],
    ['sec-12', 'Brand Collaterals: Beyond the Website'],
    ['sec-13', 'Animation & Motion Design'],
    ['sec-14', 'The Project Team: Expertise Across Disciplines'],
    ['sec-15', 'The Process: From Research to Launch'],
    ['sec-16', 'Comprehensive Service Delivery'],
    ['sec-17', 'The Results: Measurable Impact'],
    ['sec-18', 'Key Takeaways: Lessons from the Sevenloop Transformation'],
    ['sec-19', 'Looking Forward: Building on Success'],
    ['sec-20', 'Why This Matters: The Bigger Picture'],
    ['sec-21', 'Final Thoughts'],
  ];

  /* --- text primitives --- */
  function P({ children, lead }) {
    return <p className={lead ? 'bl-lead' : ''}>{children}</p>;
  }
  function Sub({ children }) { return <div className="bl-sub">{children}</div>; }
  function UL({ items }) {
    return <ul className="bl-ul">{items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>;
  }
  function Pull({ children, cite }) {
    return (
      <blockquote className="bl-pull">
        <p>{children}</p>
        {cite && <cite>{cite}</cite>}
      </blockquote>
    );
  }
  function Block({ head, children }) {
    return (
      <div className="bl-block">
        {head && <div className="bl-block-head">{head}</div>}
        {children}
      </div>
    );
  }
  function Timeline({ rows }) {
    return <dl className="bl-time">{rows.map((r, i) => <React.Fragment key={i}><dt>{r[0]}</dt><dd dangerouslySetInnerHTML={{ __html: r[1] }} /></React.Fragment>)}</dl>;
  }
  function Fig({ caption, bg, glow }) {
    return (
      <div className="bl-fig" style={{ background: bg || 'var(--color-deep-teal)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: glow || 'radial-gradient(90% 130% at 22% 20%, rgba(255,194,64,0.34), transparent 54%), radial-gradient(90% 130% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)' }} />
        <span>{caption}</span>
      </div>
    );
  }

  /* a section wrapper with id + heading */
  function Sec({ id, title, children }) {
    return (
      <section id={id} className="bl-sec" data-toc={id}>
        <h2 className="bl-h2">{title}</h2>
        {children}
      </section>
    );
  }

  Object.assign(window, { BL_TOC: TOC, P, Sub, UL, Pull, Block, Timeline, Fig, Sec });
})();
