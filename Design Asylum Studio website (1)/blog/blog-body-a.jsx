/* Sevenloop blog — article body, sections 1-11 */
(function () {
  const { P, Sub, UL, Pull, Block, Timeline, Fig, Sec } = window;

  function BlogBodyA() {
    return (
      <React.Fragment>
        {/* lead-in summary (above first H2) */}
        <P lead>The Sevenloop brand and website redesign transformed a respected precision-manufacturing business into an enterprise-ready brand &mdash; repositioning the company, rebuilding its identity, and shipping a Webflow site in five months. What follows is the full story: the brief, the strategy, the build, and the conversations it opened.</P>

        <Sec id="sec-01" title="Transforming Precision Manufacturing: The Complete Sevenloop Brand & Website Redesign">
          <P>Sevenloop builds precision-engineered components for the sectors that can least afford failure &mdash; defense, mining, metro, and automotive. The engineering was world-class; the brand was not yet telling that story. Our remit was to close the gap between how good the work was and how good it looked from the outside.</P>
          <P>The timing mattered. With roughly <strong>$8 million in Series A interest on the table &mdash; about &#8377;184 Crores</strong> &mdash; Sevenloop needed a brand and a digital presence that could stand in front of global buyers and institutional investors without apology. This was not a cosmetic refresh; it was infrastructure for the next stage of the company.</P>
          <Fig caption="Sevenloop rebrand &mdash; before / after overview" bg="var(--color-obsidian-ink)" glow="radial-gradient(90% 130% at 30% 30%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(81,111,234,0.40), transparent 54%)" />
        </Sec>

        <Sec id="sec-02" title="The Voice of Success">
          <P>The clearest measure of a rebrand is what changes in the room after it ships &mdash; how sales conversations start, how quickly trust is established, how little has to be explained.</P>
          <Pull cite="Sharan Urubail, CEO & Co-Founder, Sevenloop">&ldquo;Our entire experience, from design concept to the final product was glitch-free. Conversations with our clients have become so much more easier now.&rdquo;</Pull>
          <P>That ease is the point. When the brand carries the credibility, the team gets to spend its time on the work instead of the introduction.</P>
        </Sec>

        <Sec id="sec-03" title="Understanding Sevenloop: The Client Profile">
          <Sub>Company overview</Sub>
          <P>Sevenloop is a Bengaluru-based custom metal manufacturing platform that owns the full supply-chain stack &mdash; from raw-material sourcing across 20+ countries through factory technology to execution &mdash; serving global clients including Komatsu, Hydac, and Jindal.</P>
          <Sub>The financial backing</Sub>
          <P>Sevenloop is backed by a strong syndicate of institutional investors who underwrite its growth across sourcing, technology, and manufacturing capacity.</P>
          <UL items={['<strong>Z47</strong> (previously Matrix Partners India)', '<strong>Multiply Ventures</strong>', '<strong>Alteria Capital</strong>']} />
          <Sub>Our relationship</Sub>
          <Timeline rows={[
            ['2022', 'First engagement &mdash; branding and messaging for Ximkart, the sourcing platform.'],
            ['2024', 'Return engagement &mdash; the full Sevenloop parent brand and website.'],
            ['Current', 'Ongoing collaboration &mdash; homepage revamp, brand film, and an investor-referred project in progress.'],
          ]} />
        </Sec>

        <Sec id="sec-04" title="The Challenge: Excellence That Wasn't Translating">
          <P>Sevenloop&rsquo;s capabilities were ahead of its communication. Three gaps stood out.</P>
          <Sub>Problem 01 &mdash; Positioning</Sub>
          <P>A company sitting at the intersection of old-world metal manufacturing and AI-driven engineering had no single, sharp way to say so. Buyers met the depth only after a long conversation, not before it.</P>
          <Sub>Problem 02 &mdash; Credibility at first glance</Sub>
          <P>The old site read like a product company, not an enterprise partner. For procurement heads and innovation officers vetting a vendor, first impressions were doing the company a disservice.</P>
          <Sub>Problem 03 &mdash; A fragmented story</Sub>
          <P>Sourcing, technology, and execution were three strong stories told separately. There was no spine connecting them into one platform narrative.</P>
          <Block head="The bottom line">
            <P>Great engineering was losing deals it should have won &mdash; not on capability, but on how the capability was presented.</P>
          </Block>
        </Sec>

        <Sec id="sec-05" title="Our Strategic Approach: Discovering the Core">
          <Sub>Discovery process</Sub>
          <P>We started inside the business &mdash; founder interviews, sales-call transcripts, buyer objections, and a hard look at the competitive set across India, the US, and Europe. The brief wasn&rsquo;t to invent a story; it was to find the true one and make it legible.</P>
          <Sub>Strategic insight &mdash; precision</Sub>
          <P>Precision turned out to be the through-line: precise sourcing, precise tolerances, precise delivery. It became the organizing idea for the language, the identity, and the way the site is structured &mdash; one word the whole company could stand behind.</P>
        </Sec>

        <Sec id="sec-06" title="The Brand Manifesto: Articulating Vision">
          <P>Before a logo or a layout, we wrote the brand down &mdash; a manifesto the team could use as a compass for every decision that followed.</P>
          <Pull>&ldquo;We don&rsquo;t make India the alternative to anywhere. We make India the source &mdash; precision built loop by loop, from the raw material to the finished part.&rdquo;</Pull>
          <P>It reframed Sevenloop from a vendor competing on price to a platform competing on reliability and control of the stack &mdash; a position the rest of the work could build on.</P>
        </Sec>

        <Sec id="sec-07" title="Logo Redesign: Symbolizing Partnership">
          <Sub>Out with the old</Sub>
          <P>The previous mark was generic &mdash; readable, but interchangeable with a hundred other industrial logos. It carried none of the platform story.</P>
          <Sub>In with the new: interlocking loops</Sub>
          <P>The new identity is built on interlocking loops &mdash; the supply chain closing on itself, partnership designed in. It scales from a favicon to a factory sign, reads in a single ink, and finally looks like the company behind it.</P>
          <Fig caption="Logo system &mdash; construction, lockups, and applications" bg="var(--color-block-maroon)" glow="radial-gradient(80% 120% at 78% 20%, rgba(255,194,64,0.26), transparent 55%)" />
        </Sec>

        <Sec id="sec-08" title="Website Transformation: Making Manufacturing Easy">
          <P>The site was rebuilt on Webflow with one job: make a complex manufacturing platform feel simple to buy from. Three differentiators carry the experience.</P>
          <Sub>Core differentiator 01 &mdash; Own the whole stack</Sub>
          <P>Sourcing, factory technology, and execution presented as one continuous capability, not three services to assemble.</P>
          <Sub>Core differentiator 02 &mdash; Built for the buyer</Sub>
          <P>Every page answers a procurement question &mdash; tolerances, sectors, certifications, lead times &mdash; in the order a buyer actually asks them.</P>
          <Sub>Core differentiator 03 &mdash; A clear path to quote</Sub>
          <P>A prominent <strong>Get a Quote</strong> flow turns interest into a structured brief, so the sales team starts every conversation with context already in hand.</P>
        </Sec>

        <Sec id="sec-09" title="Website Architecture: Comprehensive Page Structure">
          <P>The information architecture maps to how enterprise buyers evaluate a manufacturing partner.</P>
          <UL items={[
            '<strong>Homepage</strong> &mdash; the platform story in one scroll: positioning, proof, and a path to quote.',
            '<strong>Capabilities</strong> &mdash; processes, materials, and tolerances, organized for fast scanning.',
            '<strong>Solutions</strong> &mdash; outcomes framed by buyer problem, not by internal department.',
            '<strong>Industries</strong> &mdash; defense, mining, metro, and automotive, each with relevant proof.',
            '<strong>Resources</strong> &mdash; the depth that supports a considered B2B decision.',
            '<strong>Contact &amp; Quote flow</strong> &mdash; a structured brief that feeds straight into sales.',
          ]} />
        </Sec>

        <Sec id="sec-10" title="Visual Identity: Custom Illustrations & Icons">
          <P>Rather than stock imagery, we built a custom system of illustrations and icons drawn from real manufacturing geometry &mdash; loops, tolerances, and machined forms. It gives every page a consistent, ownable texture and explains technical ideas without a wall of text.</P>
          <Fig caption="Custom icon &amp; illustration system" bg="var(--color-deep-teal)" />
        </Sec>

        <Sec id="sec-11" title="Responsive Design: Excellence Across All Devices">
          <P>Buyers move between a phone on the factory floor and a desktop in a procurement review. The site holds up across both.</P>
          <Sub>Mobile</Sub>
          <P>Quote flow and key capabilities are reachable in a thumb&rsquo;s reach, with no loss of detail.</P>
          <Sub>Tablet</Sub>
          <P>Two-column layouts keep dense technical content scannable in review settings.</P>
          <Sub>Desktop</Sub>
          <P>The full platform narrative gets room to breathe, with generous type and deliberate pacing.</P>
        </Sec>
      </React.Fragment>
    );
  }

  Object.assign(window, { BlogBodyA });
})();
