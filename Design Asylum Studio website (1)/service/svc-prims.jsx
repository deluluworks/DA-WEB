/* Branding Agency service page — ToC data + text primitives */
(function () {
  /* 9 resource-guide sections — id + ToC label */
  const TOC = [
    ['svc-01', 'Everything You Need to Know About Choosing a B2B Branding Agency in India'],
    ['svc-02', 'The Definitive Guide to B2B Branding Agencies'],
    ['svc-03', "The 2026 Buyer's Guide"],
    ['svc-04', 'Top 10 B2B Branding Agencies in India — The Strategic Guide'],
    ['svc-05', 'Best B2B Branding Agency Based on Your Needs'],
    ['svc-06', 'How to Identify a B2B Branding Agency That Actually Delivers'],
    ['svc-07', '20 Critical Factors Every Decision-Maker Must Know'],
    ['svc-08', 'The Ultimate Guide to Selecting B2B Branding Agencies in India'],
    ['svc-09', 'How to Use These Resources'],
  ];

  function P({ children, lead }) {
    return <p className={lead ? 'bl-lead' : ''}>{children}</p>;
  }
  function Sub({ children }) { return <div className="bl-sub">{children}</div>; }
  function UL({ items }) {
    return <ul className="bl-ul">{items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>;
  }
  function Block({ head, children }) {
    return (
      <div className="bl-block">
        {head && <p className="bl-block-head">{head}</p>}
        {children}
      </div>
    );
  }

  /* a section wrapper with id + heading */
  function Sec({ id, title, sub, children }) {
    return (
      <section id={id} className="bl-sec" data-toc={id}>
        <h2 className="bl-h2">{title}</h2>
        {sub && <Sub>{sub}</Sub>}
        {children}
      </section>
    );
  }

  Object.assign(window, { SVC_TOC: TOC, SvcP: P, SvcSub: Sub, SvcUL: UL, SvcBlock: Block, SvcSec: Sec });
})();
