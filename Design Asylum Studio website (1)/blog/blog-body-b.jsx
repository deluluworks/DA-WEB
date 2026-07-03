/* Sevenloop blog — article body, sections 12-21 + project info / contact / CTA / meta */
(function () {
  const { P, Sub, UL, Pull, Block, Timeline, Fig, Sec } = window;
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';
  const ASH = 'var(--color-ash)';

  function BlogBodyB() {
    return (
      <React.Fragment>
        <Sec id="sec-12" title="Brand Collaterals: Beyond the Website">
          <P>A brand has to survive contact with the real world &mdash; a pitch room, a printed brochure, a trade-show booth. We extended the system across the touchpoints that close enterprise deals.</P>
          <Sub>Print</Sub>
          <P>A project brochure built for the hand-off moment of a sales conversation &mdash; capabilities, sectors, and proof, designed to be left behind and remembered.</P>
          <Sub>Pitch deck</Sub>
          <P>An investor- and buyer-ready deck that carries the same language and identity as the site, so the story never resets between channels.</P>
          <Sub>Marketing</Sub>
          <P>Templates and components that let the team produce on-brand material without a designer in the loop for every asset.</P>
        </Sec>

        <Sec id="sec-13" title="Animation & Motion Design">
          <P>Motion is where the manufacturing story comes alive &mdash; loops closing, parts assembling, precision made visible. The brand film and on-site motion were built by the same team that designed the identity, so the strategic thread held from static to moving image. The result reads as a true expression of the brand, not a generic explainer.</P>
          <Fig caption="Brand film &amp; on-site motion" bg="var(--color-block-ink)" glow="radial-gradient(90% 130% at 60% 30%, rgba(150,235,235,0.22), transparent 58%), radial-gradient(80% 120% at 12% 90%, rgba(239,108,46,0.26), transparent 55%)" />
        </Sec>

        <Sec id="sec-14" title="The Project Team: Expertise Across Disciplines">
          <P>Sevenloop was delivered by a cross-functional team, many of whom had already worked on Ximkart and Revind &mdash; so the strategic context carried forward from day one.</P>
          <Sub>Design leadership</Sub>
          <UL items={['<strong>Ekta Manchanda</strong> &mdash; Co-Founder, Principal Designer', '<strong>Tanmaya Rao</strong> &mdash; Lead Brand Designer, Illustrator']} />
          <Sub>Content & strategy</Sub>
          <UL items={['<strong>Mejo Kuriachan</strong> &mdash; Partner, Brand Strategist', '<strong>Athira Krishnan</strong> &mdash; Lead Designer, Content Strategist']} />
          <Sub>Development</Sub>
          <UL items={['<strong>Saurabh Chakradhari</strong> &mdash; Head of Webflow', '<strong>Burhan Upad</strong> &mdash; Webflow Developer']} />
          <Sub>Motion & 3D</Sub>
          <UL items={['<strong>Tejus Yakhob</strong> &mdash; Creative Director, Films', '<strong>Yugankita Aich</strong> &mdash; Associate Editor, Films']} />
          <Sub>Project management</Sub>
          <UL items={['<strong>Arpan Sen</strong> &mdash; Chief of Staff, Project Manager', '<strong>Akshay A D</strong> &mdash; Project Manager']} />
        </Sec>

        <Sec id="sec-15" title="The Process: From Research to Launch">
          <P>Five months, five phases &mdash; each with a clear exit before the next began.</P>
          <Timeline rows={[
            ['Weeks 1\u20133', '<strong>Discovery</strong> &mdash; interviews, sales-call analysis, competitive audit, positioning brief.'],
            ['Weeks 4\u20136', '<strong>Strategy</strong> &mdash; manifesto, messaging hierarchy, naming and language system.'],
            ['Weeks 7\u201311', '<strong>Identity</strong> &mdash; logo, color, type, illustration and icon system.'],
            ['Weeks 12\u201318', '<strong>Build</strong> &mdash; Webflow design and development, content, responsive QA.'],
            ['Weeks 19\u201320', '<strong>Launch</strong> &mdash; collateral, brand film, hand-off, and go-live.'],
          ]} />
        </Sec>

        <Sec id="sec-16" title="Comprehensive Service Delivery">
          <P>One team, one accountable scope &mdash; brand and build under the same roof.</P>
          <UL items={[
            '<strong>Brand strategy</strong> &mdash; positioning, manifesto, messaging, naming.',
            '<strong>Visual identity</strong> &mdash; logo, color, type, illustration, iconography.',
            '<strong>Website</strong> &mdash; UX, design, and Webflow development.',
            '<strong>Collateral</strong> &mdash; brochure, pitch deck, marketing templates.',
            '<strong>Motion</strong> &mdash; brand film and on-site animation.',
          ]} />
        </Sec>

        <Sec id="sec-17" title="The Results: Measurable Impact">
          <P>The clearest result is qualitative and came straight from the founder: client conversations got easier. Beyond that, the brand now does work it couldn&rsquo;t before &mdash; opening enterprise doors, supporting fundraising, and giving the sales team a credible first impression to lead with.</P>
          <Block head="What changed">
            <UL items={[
              'A site that reads as enterprise-ready to procurement and investors alike.',
              'A structured quote flow that starts every sales conversation with context.',
              'A coherent brand system that extends cleanly to print, deck, and film.',
            ]} />
          </Block>
        </Sec>

        <Sec id="sec-18" title="Key Takeaways: Lessons from the Sevenloop Transformation">
          <UL items={[
            '<strong>01 &mdash; Find the true story, don&rsquo;t invent one.</strong> The strongest positioning was already inside the business.',
            '<strong>02 &mdash; One organizing idea beats ten features.</strong> &ldquo;Precision&rdquo; aligned language, identity, and structure.',
            '<strong>03 &mdash; Brand and build belong together.</strong> One team kept the thread from strategy to Webflow to film.',
            '<strong>04 &mdash; Design for the buyer&rsquo;s questions.</strong> Architecture should mirror how the decision actually gets made.',
            '<strong>05 &mdash; Continuity compounds.</strong> A returning team starts the next project miles ahead.',
          ]} />
        </Sec>

        <Sec id="sec-19" title="Looking Forward: Building on Success">
          <P>The relationship didn&rsquo;t end at launch. Sevenloop returned for a homepage revamp and the brand film, and the founder referred us to their investors for a new engagement &mdash; the model we work best in: deep partnerships where each project builds on the last.</P>
        </Sec>

        <Sec id="sec-20" title="Why This Matters: The Bigger Picture">
          <P>Indian manufacturing is at an inflection point, and the companies that win global trust will be the ones that can communicate as precisely as they engineer. Sevenloop is a small proof of a larger thesis: world-class capability deserves world-class brand, and the gap between the two is where deals are won or lost.</P>
        </Sec>

        <Sec id="sec-21" title="Final Thoughts">
          <P>A rebrand is only as good as the conversations it changes. By that measure, Sevenloop worked &mdash; the brand now carries the credibility, and the team gets to spend its time on the work. That is the whole job.</P>

          {/* project information */}
          <div className="bl-block" style={{ marginTop: 44 }}>
            <div className="bl-block-head">Project information</div>
            <Timeline rows={[
              ['Client', 'Sevenloop'],
              ['Industry', 'Manufacturing Solutions'],
              ['Timeline', '5 Months'],
              ['Agency', 'Design Asylum'],
            ]} />
          </div>

          {/* contact */}
          <div className="bl-block">
            <div className="bl-block-head">Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: S, fontSize: 17, color: GRAPHITE }}>
              <a className="da-mail" href="mailto:hello@designasylum.in" style={{ color: INK, textDecoration: 'none' }}>hello@designasylum.in</a>
              <a className="da-mail" href="tel:+918547807934" style={{ color: INK, textDecoration: 'none' }}>+91 85478 07934</a>
              <a className="da-mail" href="#" style={{ color: INK, textDecoration: 'none' }}>www.designasylum.in</a>
            </div>
          </div>

          {/* closing CTA */}
          <p style={{ fontFamily: S, fontSize: 'clamp(22px,2.2vw,30px)', lineHeight: 1.4, color: INK, margin: '36px 0 0' }}>
            Want to transform your brand and digital presence? Let&rsquo;s talk about creating something exceptional together.
          </p>

          {/* article footer meta */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--color-fog)' }}>
            {[['Written on', 'October 3, 2025'], ['Reviewed by', 'Athira Krishnan']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: D, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, color: ASH }}>{k}</span>
                <span style={{ fontFamily: S, fontSize: 16, color: INK }}>{v}</span>
              </div>
            ))}
          </div>
        </Sec>
      </React.Fragment>
    );
  }

  Object.assign(window, { BlogBodyB });
})();
