/* Solution (AI SaaS Website) page — ToC + primitives + long-form teardown body */
(function () {
  const TOC = [
    ['sol-01', 'Top AI SaaS Product Websites: What Sets Them Apart in Web Design and User Experience'],
    ['sol-02', 'The Distorted Role of Marketing in VC-Backed SaaS: Why Customer-First is the Key to Success'],
    ['sol-03', 'Get your Website for AI SaaS Product'],
  ];

  function P({ children, lead }) { return <p className={lead ? 'bl-lead' : ''}>{children}</p>; }
  function Sub({ children }) { return <div className="bl-sub">{children}</div>; }
  function UL({ items }) { return <ul className="bl-ul">{items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>; }
  function Sec({ id, title, children }) {
    return <section id={id} className="bl-sec" data-toc={id}><h2 className="bl-h2">{title}</h2>{children}</section>;
  }

  const SITES = [
    ['01 — 11x.ai', 'Leads with a single, confident promise — digital workers that sell — and lets motion do the explaining. The hero shows the product working before it describes it.'],
    ['02 — Jasper.ai', 'Anchors everything in business outcomes for marketing teams, not model specs. Social proof and use-case tiles carry the weight a feature list usually would.'],
    ['03 — HeyGen', 'Sells the magic instantly: an avatar video plays in the hero, so the value is felt in two seconds. The copy stays short because the demo does the talking.'],
    ['04 — Synthesia.io', 'Enterprise-grade trust signals — logos, security, compliance — sit alongside an immediate product preview, balancing wonder with credibility.'],
    ['05 — Copy.ai', 'Organises around jobs-to-be-done (sales, marketing, ops) rather than the underlying LLM, making a horizontal tool feel specific to each buyer.'],
    ['06 — Riverside.fm', 'A creator-tool brand that wins on clarity and polish; the homepage is a guided tour from record to publish with zero jargon.'],
    ['07 — Cohere.com', 'Speaks fluently to two audiences at once — developers and enterprise buyers — with parallel paths that never dilute either message.'],
    ['08 — Together.ai', 'Developer-first and unapologetic about it: benchmarks, pricing, and docs are front and centre because that is what its buyer trusts.'],
    ['09 — Scale.com', 'Projects scale and seriousness through restraint — heavy whitespace, marquee logos, and outcome-led headlines aimed at large organisations.'],
    ['10 — Gentrace', 'A newer entrant that earns attention by naming a sharp problem (testing and evaluating LLM apps) and owning it cleanly, without over-claiming.'],
  ];

  function SolBody() {
    return (
      <React.Fragment>
        <div className="bl-eyebrow">AI SaaS Website Design Experts</div>

        <P lead>Design Asylum&rsquo;s website agency consistently works with US-based AI SaaS product companies on their website design &mdash; SimpliContract, Cloudphysician, Mili, Entropik, Vecton, and Nimble Edge are a few among them.</P>

        <Sec id="sol-01" title="Top AI SaaS Product Websites: What Sets Them Apart in Web Design and User Experience">
          <P>The best AI SaaS websites share one instinct: they lead with the outcome and treat the technology as proof, not pitch. Before studying the field, it helps to be clear on why the website carries so much weight in this category.</P>

          <Sub>The importance of a high-impact AI SaaS website</Sub>
          <P>For an AI product, the website is often the first and hardest test of whether the value lands. The buyer is curious but sceptical, the category is noisy, and the technology is easy to misunderstand. A high-impact site does a specific job:</P>
          <UL items={[
            'Translates a complex capability into a business outcome in one line.',
            'Shows the product working &mdash; demo, video, or interactive &mdash; before explaining it.',
            'Builds trust fast with proof, security, and recognisable customers.',
            'Gives both the buyer and the builder a clear path to act.',
          ]} />

          <P>With that lens, here is what the leading AI SaaS sites get right:</P>
          {SITES.map(([n, d]) => (
            <React.Fragment key={n}>
              <Sub>{n}</Sub>
              <P>{d}</P>
            </React.Fragment>
          ))}

          <Sub>Actionable recommendations for your AI SaaS website</Sub>
          <UL items={[
            'Open with the outcome your AI delivers, stated in your buyer&rsquo;s language.',
            'Put the product on screen early &mdash; show, then tell.',
            'Pick a primary audience per page; do not make developers and execs share one message.',
            'Earn trust with concrete proof, not adjectives.',
            'Make the next step obvious, whether that is a demo, a trial, or a quote.',
          ]} />
        </Sec>

        <Sec id="sol-02" title="The Distorted Role of Marketing in VC-Backed SaaS: Why Customer-First is the Key to Success">
          <Sub>The problem with &lsquo;AI-first&rsquo; thinking</Sub>
          <P>Plenty of well-funded AI companies market the model instead of the customer. &lsquo;AI-first&rsquo; becomes a flex &mdash; parameter counts, architecture diagrams, benchmark tables &mdash; aimed at other engineers rather than the buyer who controls the budget. It impresses a narrow crowd and loses the rest.</P>

          <Sub>Why marketing should be customer-first</Sub>
          <P>The buyer does not care how the model works; they care what changes for them. Customer-first marketing starts from the job to be done, the risk being removed, and the outcome being bought &mdash; and uses the technology only as evidence that the outcome is real.</P>

          <Sub>The risk of misaligned messaging</Sub>
          <P>When the message is built for the lab and not the buyer, the cost is quiet but expensive: longer sales cycles, weaker conversion, and a brand that the market files under &lsquo;clever but unclear.&rsquo; The product may be excellent and still struggle to be chosen.</P>

          <Sub>Moving forward: a customer-first approach</Sub>
          <P>The fix is not to hide the technology &mdash; it is to sequence it. Lead with the outcome, prove it with a demo, reassure with trust, and reserve the technical depth for the page and the buyer who actually wants it. The same capability, framed for the customer, simply converts better.</P>

          <Sub>Final thoughts</Sub>
          <P>The AI companies that win the website are rarely the ones with the most impressive model on the homepage. They are the ones that make a complex technology feel accessible, trustworthy, and essential &mdash; which is exactly the brief Design Asylum builds against.</P>
        </Sec>
      </React.Fragment>
    );
  }

  Object.assign(window, { SOL_TOC: TOC, SolBody });
})();
