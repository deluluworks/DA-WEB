/* Location (Ahmedabad) page — ToC + primitives + long-form body with structured blocks */
(function () {
  const TOC = [
    ['loc-01', 'Why Ahmedabad B2B brands need a branding partner that understands the local market'],
    ['loc-02', 'What goes wrong with most Ahmedabad agency engagements'],
    ['loc-03', 'How we work with Ahmedabad B2B founders'],
    ['loc-04', 'Named clients and work'],
    ['loc-05', 'Best for'],
    ['loc-06', 'What is included'],
    ['loc-07', 'Engagement model'],
    ['loc-08', 'Bridging legacy industry and modern tech in one brand'],
    ['loc-09', 'Ready to transform your Ahmedabad brand?'],
  ];

  function P({ children, lead }) { return <p className={lead ? 'bl-lead' : ''}>{children}</p>; }
  function Sub({ children }) { return <div className="bl-sub">{children}</div>; }
  function UL({ items }) { return <ul className="bl-ul">{items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>; }
  function Sec({ id, title, children }) {
    return <section id={id} className="bl-sec" data-toc={id}><h2 className="bl-h2">{title}</h2>{children}</section>;
  }
  function Info({ label, children }) {
    return <div className="loc-info"><div className="loc-info-label">{label}</div>{children}</div>;
  }

  function LocBody() {
    return (
      <React.Fragment>
        <div className="bl-eyebrow">Ahmedabad — B2B Brand &amp; Web Design</div>

        <P lead>Ahmedabad&rsquo;s economy has three layers &mdash; a deep manufacturing base, a fast-growing B2B and product-tech base, and the GIFT City fintech build-out. Each one needs a different kind of brand, but they share a buyer who has been around for a while and is hard to impress.</P>

        <Sec id="loc-01" title="Why Ahmedabad B2B brands need a branding partner that understands the local market">
          <P>Ahmedabad founders are pragmatic. They have built real businesses with real revenue, often in categories where the buyer values substance over polish. A branding partner who does not understand that walks in with a generic &lsquo;startup&rsquo; aesthetic and immediately loses the room. The work here has to respect the operator&rsquo;s instinct while still moving the brand somewhere more ambitious.</P>
          <P>That is the gap we fill: a B2B studio that takes Ahmedabad&rsquo;s industrial seriousness as a starting point, not a problem to design away.</P>
        </Sec>

        <Sec id="loc-02" title="What goes wrong with most Ahmedabad agency engagements">
          <P>Across the founders we talk to, the same four patterns come up again and again:</P>
          <Sub>Manufacturing-style websites</Sub>
          <P>Sites built like a product catalogue &mdash; specs, certifications, and a contact form &mdash; with no story and no point of view. They prove you exist; they do not make anyone want to work with you.</P>
          <Sub>No positioning depth</Sub>
          <P>The agency jumps to visuals before anyone has decided who the brand is for or what it stands against. The result looks fine and says nothing.</P>
          <Sub>Weak copywriting</Sub>
          <P>Words treated as filler around the design rather than the load-bearing part of the brand. In B2B, the copy is the product demo &mdash; weak words mean a weak pitch.</P>
          <Sub>Vendor mentality</Sub>
          <P>An agency that waits for instructions instead of bringing a strategy. You end up art-directing your own brand, which is exactly what you hired out.</P>
        </Sec>

        <Sec id="loc-03" title="How we work with Ahmedabad B2B founders">
          <P>We work with Ahmedabad founders on positioning-led brand and Webflow builds. Same timezone, full working-day overlap, and four to six weeks for standard scope. We start with a diagnosis of where the brand actually stands, agree a sharp position, write the copy, and only then design the identity and build the site &mdash; one team carrying the thread from strategy to launch.</P>
        </Sec>

        <Sec id="loc-04" title="Named clients and work">
          <P>Our industrial and manufacturing work is directly relevant to Ahmedabad&rsquo;s base. We built the brand and messaging for <strong>Ximkart</strong>, a custom-manufacturing sourcing platform, and the full brand and website for <strong>Sevenloop</strong>, an end-to-end custom manufacturing solutions provider &mdash; both projects that sit exactly at the intersection of old-world manufacturing and modern engineering that defines much of Ahmedabad&rsquo;s growth.</P>
        </Sec>

        <Sec id="loc-05" title="Best for">
          <Info label="Best for">
            <UL items={[
              'Ahmedabad manufacturers ready to look as modern as their engineering already is.',
              'B2B and product-tech founders who need positioning and copy, not just a redesign.',
              'GIFT City fintech teams building an enterprise-credible brand from day one.',
            ]} />
          </Info>
        </Sec>

        <Sec id="loc-06" title="What is included">
          <Info label="What is included">
            <P>Brand diagnosis and positioning, messaging and website copywriting, visual identity, and a Webflow build &mdash; plus the collateral (deck, one-pager) that the sales team actually uses. Everything is delivered by the same core team, so the strategy carries all the way to the live page.</P>
          </Info>
        </Sec>

        <Sec id="loc-07" title="Engagement model">
          <Info label="Engagement model">
            <P>A fixed-scope engagement quoted against a clear outcome, typically four to six weeks for standard scope, with full working-day overlap and a single point of contact. No open-ended retainers and no surprise change-orders mid-build.</P>
          </Info>
        </Sec>

        <Sec id="loc-08" title="Bridging legacy industry and modern tech in one brand">
          <P>Ahmedabad&rsquo;s real branding challenge is range. A single brand often has to speak to a fifty-year-old manufacturing buyer and a venture-backed product team in the same week. The GIFT City fintech build-out sharpens this further &mdash; institutions there need a brand that signals regulatory seriousness and modern capability at once.</P>
          <P>That is the work we are built for: holding industrial credibility and contemporary ambition in one coherent brand, so you do not have to choose between looking trustworthy and looking current.</P>
        </Sec>
      </React.Fragment>
    );
  }

  Object.assign(window, { LOC_TOC: TOC, LocBody });
})();
