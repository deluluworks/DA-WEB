/* Industry (Manufacturing) page — ToC data + primitives + long-form narrative body */
(function () {
  const D = 'var(--font-display)';

  const TOC = [
    ['ind-01', 'When Your Manufacturing Website Costs You $2M Orders'],
    ['ind-02', 'Leading Agencies for Manufacturing Website Design'],
    ['ind-03', 'Design your right to win'],
  ];

  function P({ children, lead }) { return <p className={lead ? 'bl-lead' : ''}>{children}</p>; }
  function Sub({ children }) { return <div className="bl-sub">{children}</div>; }
  function UL({ items }) { return <ul className="bl-ul">{items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>; }
  function Sec({ id, title, children }) {
    return <section id={id} className="bl-sec" data-toc={id}><h2 className="bl-h2">{title}</h2>{children}</section>;
  }

  const AGENCIES = [
    ['Duck.Design', 'Subscription-model design studio offering unlimited requests for product and marketing teams.'],
    ['DBS Interactive', 'Full-service digital agency with a strong base in manufacturing and industrial web builds.'],
    ['Invoidea', 'Web design and development shop serving industrial and B2B clients at volume.'],
    ['Lform Design', 'New-Jersey studio specialising in B2B and manufacturing website design.'],
    ['Orbit Media', 'Chicago agency known for content-led, conversion-focused B2B websites.'],
    ['Digital Silk', 'Brand-and-growth agency building enterprise sites for industrial manufacturers.'],
    ['WebFX', 'Performance-marketing agency with a large manufacturing web and SEO practice.'],
    ['Bop Design', 'B2B-only branding and web design firm focused on industrial and tech sectors.'],
    ['Blend', 'B2B brand and demand agency working across complex manufacturing categories.'],
  ];

  function IndBody() {
    return (
      <React.Fragment>
        <div className="bl-eyebrow">Manufacturing Design Experts</div>

        <P lead>A design agency for manufacturing firms builds branding and websites that highlight industrial expertise, driving online visibility and client engagement &mdash; turning decades of engineering credibility into something a buyer can feel in the first ten seconds.</P>

        <P>A design agency for manufacturing firms focuses on creating branding and digital experiences that make industrial capability legible to the people who buy it &mdash; procurement heads, plant managers, and innovation officers who decide on six- and seven-figure orders. The work is rarely about looking modern for its own sake; it is about closing the gap between how good the manufacturing is and how good it looks from the outside.</P>
        <P>In the competitive manufacturing industry, good design is essential rather than decorative. When two suppliers can both do the job, the one that communicates with clarity, confidence, and a point of view wins the shortlist &mdash; and very often the order.</P>

        <Sec id="ind-01" title="When Your Manufacturing Website Costs You $2M Orders">
          <P>Picture a procurement head with a $2M order to place. They have three suppliers, all technically capable. They open the first website on their phone between meetings. Within seconds, the site has either earned a conversation or lost one &mdash; and most manufacturing websites lose it before a single specification is read.</P>

          <Sub>The hospitality principle</Sub>
          <P>Think about how a great hotel makes you feel before you have unpacked. The lighting, the welcome, the quiet confidence that you are in capable hands &mdash; none of it is the product, and all of it shapes whether you trust the product. A manufacturing brand works the same way. The feeling a buyer gets on the homepage is the brief; the specifications are the proof that follows.</P>

          <Sub>Fluorescent lights and plastic chairs</Sub>
          <P>Most industrial websites are the digital equivalent of a waiting room with fluorescent lights and plastic chairs: functional, honest, and completely forgettable. Grey gradients, stock photos of gears, a wall of certifications, and a contact form. It says &ldquo;we exist&rdquo; when it needs to say &ldquo;you are in the right place.&rdquo;</P>

          <Sub>What can be changed?</Sub>
          <P>Almost everything that matters is within reach: a sharp position that names who you are best for, copy that speaks to the buyer&rsquo;s risk rather than your machinery, photography that shows the work with intent, and a structure that moves a serious buyer from interest to a quote without friction. None of it requires inventing new capabilities &mdash; only translating the ones you already have.</P>

          <Sub>The feeling is non-negotiable</Sub>
          <P>You can argue about layout and palette, but the feeling is non-negotiable. A buyer placing a large, high-consequence order needs to feel that you are the safe, capable, obvious choice. Every design decision either builds that feeling or leaks it. The agencies worth hiring treat that feeling as the deliverable.</P>
        </Sec>

        <Sec id="ind-02" title="Leading Agencies for Manufacturing Website Design">
          <P>If you are building a shortlist, several agencies do credible work in the manufacturing and industrial space. A representative set, with what each is known for:</P>
          {AGENCIES.map(([n, d]) => (
            <React.Fragment key={n}>
              <Sub>{n}</Sub>
              <P>{d}</P>
            </React.Fragment>
          ))}

          <Sub>Cerrion: branding &amp; website analysis</Sub>
          <P>Take an AI-for-manufacturing company like Cerrion as a worked example. The technology &mdash; computer vision that watches production lines and flags faults before they cascade &mdash; is genuinely advanced, but the first job of the brand is to make that value obvious to a plant manager in one line, not three paragraphs of model architecture.</P>
          <P>A strong site would lead with the outcome (less downtime, fewer defects), prove it with a concrete before/after, and only then open the hood for the technical buyer who wants depth. The mistake most analyses surface is the same one: the homepage explains how the AI works before it establishes why anyone on the factory floor should care.</P>
          <P>Design Asylum specialises in B2B branding and websites that bridge exactly this gap &mdash; old-world manufacturing meeting modern, AI-driven engineering &mdash; making complex industrial capability feel trustworthy, premium, and easy to buy.</P>
        </Sec>
      </React.Fragment>
    );
  }

  Object.assign(window, { IND_TOC: TOC, IndBody });
})();
