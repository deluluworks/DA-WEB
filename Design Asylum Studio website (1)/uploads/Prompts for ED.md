# Client Hub Page

\# PROMPT 1 of 6 — \`/clients/sevenloop\` (Client Hub Page)

Paste everything below into your AI website designer agent.

\---

\#\# ROLE & GOAL  
Build a single, self-contained \`.html\` file that reproduces the Everything Design "Sevenloop" client case-study page as closely as possible — exact content, exact section order, exact layout.

\#\# TECH STACK (mandatory — no deviations)  
Produce \*\*one build-less \`.html\` file\*\* that runs straight in the browser. No bundler, no package manager, no build tooling, no backend.

\- \*\*React 18.3.1\*\* — UMD build loaded from unpkg CDN (\`react\` \+ \`react-dom\`). The entire page renders into a single \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* — loaded from CDN; all JSX is written inline in a \`\<script type="text/babel"\>\` block and transpiled in the browser.  
\- \*\*Design Asylum Studio v3 design system\*\* — load its compiled bundle \`\_ds\_bundle.js\` (components exposed on \`window.DesignAsylumDesignSystem\_594314\`), plus its \`styles.css\` and design tokens. Use its components/tokens for typography, spacing, color, buttons, and layout primitives wherever possible.  
\- \*\*Custom CSS overrides\*\* — a single \`\<style\>\` block for page-specific tweaks: squared-off card corners, a widened content column, the logo/service marquee, FAQ-style accordions, and hover/reveal interactions.  
\- \*\*Fonts\*\* — \`Blinker\` (display sans) for headings/UI and \`Fraunces\` (serif) for editorial/long-form body, loaded via \`@font-face\` from CDN through the design system's font tokens.

If the design-system bundle isn't reachable at runtime, fall back to plain semantic HTML \+ the custom \`\<style\>\` block, but keep the same class names and structure.

\#\# PAGE META  
\- \`\<title\>\`: \`Sevenloop | Everything Design Client Work\`  
\- URL slug: \`/clients/sevenloop\`

\#\# GLOBAL LAYOUT WRAPPERS (reuse on every section)  
Each section uses this nesting (matches the source):  
\`\<section class="..."\>\` → \`\<div class="padding-global"\>\` → \`\<div class="container-large"\>\` → content. Use a single centered content column (wider than default). Background colors alternate using design-system tokens: \`background-color-white\` and \`background-color-old-lace\` (a warm off-white/cream).

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Client Header (\`section.client\_header\`)  
Top-of-page hero. Layout: left-aligned title block over a wide container.  
\- \*\*H1:\*\* \`Sevenloop\`  
\- \*\*Breadcrumb\*\* (small caps, with \`›\` separators): \`HOME › CLIENTS › SEVENLOOP\`  
\- \*\*Industry row\*\* — label \`Industry :\` followed by a comma-separated list of linked tags: \`Design Agency for Manufacturing Firms \- Branding, Website\`, \`Design Agency for Startups\`, \`Design Agency for Technology Businesses\`, \`Aviation Design Agency\`, \`Chemical Industry \- Design Strategy Consultants\`  
\- Large hero image/visual area for the brand (placeholder block labeled "Sevenloop brand hero").

\#\#\# SECTION 2 — Service Provided / Overview (\`section.background-color-white no\_mg\_top\`)  
A two-part section: a left vertical nav/jump-list and a right content area.  
\- \*\*Left column — "Service Provided" jump nav\*\* (sticky on desktop), list items: \`About Client\`, \`Logo Design\`, \`Website Design and Development\`, \`Project Brochure\`, \`Brand Video\`, \`Behind the scenes\`, \`Case Study\`, \`Before After Website Design\`.  
\- \*\*Right column — About Client copy\*\* (Fraunces serif, wide column). Use this exact paragraph:  
  \> Sevenloop is a Bengaluru-based custom metal manufacturing platform that owns the full supply chain stack — from raw materials sourcing across 20+ countries through factory technology to execution. Founded by Sharan Urubail (ex-Tata Motors, ex-Udaan) and backed by Z47 at the seed stage, Sevenloop produces precision-engineered components for defense, mining, metro, and automotive sectors, serving global clients including Komatsu, Hydac, and Jindal. Their Ximkart platform builds reliability and pricing power for Indian factories, positioning India not as a China alternative but as a global manufacturing leader.  
\- \*\*Action buttons / link row\*\* (design-system buttons): \`Visit Website\`, \`Visit Link\`, \`Play Video\`, \`Play Video\`, \`View Case Study\`.  
\- These map to the deliverable blocks below (Logo Design, Website Design and Development, Project Brochure, Brand Video, Behind the scenes) — render each as its own sub-section with a heading \+ image grid placeholder, in that order.

\#\#\# SECTION 3 — "How Everything Design Helped Sevenloop" (editorial long-form)  
Wide single-column editorial block, Fraunces serif body. \*\*H2:\*\* \`How Everything Design Helped Sevenloop\`. Reproduce these paragraphs exactly, in order:

1\. \> Sevenloop is actually the third branding project Everything Design did in this ecosystem — and the biggest of the three. The first was Ximkart (Sevenloop's sourcing platform), the second was Revind.ai, and Sevenloop itself is the parent brand. That history matters because it means Everything Design didn't come to this project cold; they understood the business, the market, and the founder's vision intimately.  
2\. \> Sharan, Sevenloop's founder, is a long-standing partner who keeps coming back — and who has since referred Everything Design to their investors Z47 (previously Matrix Partners India), a project currently in progress. That referral chain tells you something about the quality of the relationship.  
3\. \> The branding challenge was positioning a company at a fascinating intersection: old-world metal manufacturing meets AI-driven engineering. Sevenloop uses artificial intelligence to power custom manufacturing across aerospace, automotive, mining, and industrial machinery, operating with 150+ manufacturing partners across India, the US, Germany, Italy, the Netherlands, and the UK. The brand needed to speak to procurement heads and innovation officers with equal authority.  
4\. \> Everything Design delivered a comprehensive brand strategy — logo, visual identity, website at sevenloop.com built on Webflow, a project brochure for enterprise sales conversations, and a brand video. Something Sharan particularly valued was the team continuity: Tanmaya, who had designed the Ximkart logo and brand under Ekta's design leadership, returned for the Sevenloop project alongside Mejo, who had crafted the original Ximkart messaging. When Sharan came back years later for the Sevenloop brand, having the same core team meant the strategic context, brand essence, and mission understanding carried forward seamlessly. Tanmaya's deep expertise in the manufacturing, metals, and mechanical space — built across Ximkart, Revind, Sevenloop, and other industrial clients — made the design direction sharper and more informed from day one.  
5\. \> That team continuity paid off especially on the brand video. Because Tanmaya, Ekta, and Mejo already understood Sevenloop's brand essence and mission deeply, the brand film came out as a true expression of the brand — not just another explainer video or generic brand film, but something that captured the manufacturing story with conviction and purpose. This is a pattern clients consistently appreciate about Everything Design: the same people who build the brand are the ones who extend it across new formats and touchpoints, so the strategic thread never gets lost.  
6\. \> The relationship continues to grow — after the initial website and branding, Sevenloop came back for a homepage revamp and the brand video. Building the Sevenloop brand isn't a one-off project; it's an ongoing collaboration. That's the model Everything Design works best in: deep partnerships where each engagement builds on the last, and the brand strategy evolves alongside the business.

\#\#\# SECTION 4 — Transformation / Before-After (\`section\_common background-color-old-lace\`)  
\- \*\*H2/label:\*\* \`Transfrmation\` \*(note: reproduce this exact spelling as on the source — it is misspelled live).\*  
\- A \*\*Before / After\*\* comparison block: two labeled states \`Before\` and \`After\` (use a slider or side-by-side image comparison of the website redesign). Squared-off card corners.

\#\#\# SECTION 5 — Project Team grid  
\- \*\*H2:\*\* \`Project Team\`  
\- Responsive card grid (squared corners, hover-reveal). Each card: role (eyebrow), name (H3), one-line bio, and a \`Read More\` link. Render all members in this order:

| Role | Name | Bio |  
|---|---|---|  
| Creative Director \\| Films | \*\*Tejus Yakhob\*\* | Tejus Yakhob is a writer and filmmaker with 11+ years of experience, specializing in storytelling and visual media. |  
| Lead Designer \\| Content Strategist | \*\*Athira Krishnan\*\* | Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites. |  
| Lead Brand Designer \\| Illustrator | \*\*Tanmaya Rao\*\* | A b2b brand designer, she has worked wonders for many SaaS and B2B companies with her vision and expert skills. |  
| Co-Founder \\| Principal Designer | \*\*Ekta Manchanda\*\* | Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces. |  
| Head of Webflow Department | \*\*Saurabh Chakradhari\*\* | Your go-to for technical queries, with engineering expertise, analytical thinking, and clear communication. |  
| Chief of Staff \\| Project Manager | \*\*Arpan Sen\*\* | Arpan handles management at Everything Design, ensuring that everything, well...flows smoothly. |  
| Content Strategist | \*\*Swathi Mohan\*\* | Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard. |  
| Associate Editor \\| Films | \*\*Yugankita Aich\*\* | Yugankita brings ideas to life through seamless editing, storytelling, and high-quality visuals with a creative touch. |  
| Partner \\| Brand Strategist | \*\*Mejo Kuriachan\*\* | Mejo puts the 'Everything' in 'Everything Design, Flow, Video and Motion'—an engineer first, strategist and design manager next. |  
| Junior Designer | \*\*Kashish Gulati\*\* | Kashish Gulati is a junior designer at Everything Design, specializing in branding, web design, and typography. |  
| Webflow Developer | \*\*Burhan Upad\*\* | Burhan is a Webflow developer who crafts visually appealing websites, utilizing GSAP for dynamic, interactive animations. |  
| Associate Designer | \*\*Harishma D\*\* | Harishma is an Associate Designer at Everything Design, helping businesses discover the value of great design and build strong partnerships. |  
| Project Manager | \*\*Akshay A D\*\* | Akshay, a disciplined Project Manager, excels at seamless project execution, making him invaluable to the team. |

\#\#\# SECTION 6 — Service Provided (Marquee / link grid)  
\- \*\*H2:\*\* \`Service Provided\`  
\- A \*\*horizontally scrolling marquee\*\* (or wrapping tag grid) of service chips, each with a \`Visit Service\` link. Use squared corners and a continuous loop animation on desktop. Items in this exact order:

\`Web Design Agency\`, \`Branding Agency\`, \`Web Development Agency\`, \`Website Copywriting Agency\`, \`Logo Design Agency\`, \`Webflow Agency\`, \`Animated Explainer Video\`, \`Website Redesign\`, \`Rebranding Agency\`, \`Landing Page Design\`, \`Lottie Animation Agency\`, \`Brand Strategy Agency\`, \`Brand Strategy Consultancy\`, \`Illustration Agency\`, \`Ad Agency for B2B\`, \`Brochure Design Agency\`, \`B2B Messaging Agency\`, \`Animation Video Agency\`, \`Brand Positioning Agency\`, \`Product Messaging Agency\`, \`Product Launch Video Agency\`, \`B2B Film Agency\`, \`Launch Video Agency\`, \`Website Redesign Services\`, \`B2B Branding Agency\`, \`B2B Web Design Agency\`, \`Website Copywriting\`, \`B2b Video Marketing Agency\`, \`Brand Refresh Agency\`.

\#\#\# SECTION 7 — Footer (\`footer\`)  
Full-width footer, dark/brand background.  
\- \*\*Tagline:\*\* \`We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\`  
\- \*\*Breadcrumb echo:\*\* \`HOME › CLIENTS › SEVENLOOP\`  
\- \*\*Link columns:\*\* \`PROJECTS\` (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \`RESOURCES\` (BLOG, …), plus the standard nav. Reproduce the column headers in caps as shown.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Squared-off (0px radius) card corners throughout. Widened \`container-large\` content column. Service row implemented as an infinite logo/text marquee. Team cards and service chips have hover/reveal states. Any FAQ-style content uses an accordion. Sticky left jump-nav in Section 2 on desktop; collapses above content on mobile. Smooth-scroll anchor jumps from the jump-nav to each deliverable sub-section.

\#\# RESPONSIVE  
Desktop: multi-column (sticky nav \+ content; multi-col team/service grids). Tablet: 2-col grids. Mobile: single column, marquee still animates, jump-nav becomes horizontal scroll or stacks.

\---

# Branding Case Study

\# PROMPT 2 of 4 — \`/casestudy/sevenloop-branding-brochure\` (Branding Case Study)

This page is a deliberately minimal, \*\*image-forward visual case study\*\* — very different from the content-heavy client hub. It's a project title \+ a metadata sidebar, followed by a large vertical stack of full-bleed branding visuals. Paste below into your agent.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "Sevenloop — Branding" visual case study page. Exact content, exact section order, exact layout. This is an image-led showcase: minimal text, maximum visual real estate.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD build from unpkg CDN; whole page renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; all JSX inline in \`\<script type="text/babel"\>\`, transpiled in-browser. No build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — load \`\_ds\_bundle.js\` (components on \`window.DesignAsylumDesignSystem\_594314\`) \+ its \`styles.css\` \+ design tokens. Use its primitives for type, spacing, color, layout.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared-off corners, widened content column, image-stack spacing, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans, used for the project title \+ metadata labels) and \`Fraunces\` (serif, for any long-form text), via \`@font-face\` from CDN through the design-system font tokens.  
\- Fallback: if the bundle is unreachable, render plain semantic HTML using the same class names.

\#\# PAGE META  
\- \`\<title\>\`: \`Sevenloop | Branding\`  
\- \`\<meta name="description"\>\`: \`Sevenloop — Branding and project brochure design\`  
\- \`og:description\`: same as above.  
\- URL slug: \`/casestudy/sevenloop-branding-brochure\`

\#\# OVERALL LAYOUT  
One root wrapper: \`\<div class="case-study\_section"\>\`. Inside it, two children in this order:  
1\. A header/info block: \`\<div class="flex flex-col gap-3"\>\` (title \+ metadata sidebar).  
2\. A spacer: \`\<div class="spacer-huge"\>\` followed by the stacked full-bleed visuals.

The page is a single centered, \*\*narrow-to-wide column\*\*: the header info is constrained; the brand visuals run full container width, stacked vertically with generous gaps. No marquee, no team grid, no footer link-walls like page 1 — this template is intentionally sparse.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Project header \+ metadata block (\`.flex.flex-col.gap-3\`)  
Vertical stack:

\- \*\*H1\*\* (\`class="case-study-projects\_h1"\`, Blinker, large): \`Sevenloop — Branding and project brochure design\`  
\- \*\*Brand mark image:\*\* an orange circle with a four-leaf-clover in the center (SVG). Alt text: \`an orange circle with a four leaf clover in the center\`. Use a placeholder orange circular logo with a clover glyph.  
\- \*\*Metadata rows\*\* — each row is a small label (\`class="projects\_tag-title"\`, uppercase eyebrow style) followed by its value. Render in this exact order:

| Label (\`projects\_tag-title\`) | Value |  
|---|---|  
| \*\*Client\*\* | \`Sevenloop \\| Branding\` (rendered as a pill, \`class="tag"\`) |  
| \*\*Funding\*\* | \`Seed Funding\` |  
| \*\*Lead Investors\*\* | Two investor logo images side by side — a \*\*Matrix Partners\*\* logo (\`matrix-partners-logo.svg\`) and a \*\*"Better"\*\* logo (\`Better Logo.svg\`). Use placeholder logo blocks with those alt labels. |  
| \*\*Industry\*\* | \*(label present; leave value empty/placeholder — matches the live page, which renders the label without a filled value)\* |  
| \*\*Headquarters\*\* | \*(label present; value empty/placeholder)\* |  
| \*\*Target Audience\*\* | \*(label present; value empty/placeholder)\* |

Layout note: labels are small caps eyebrows; values sit directly beneath each label (stacked), in the left/top info column. The "Client" value is a rounded-but-squared pill (\`.tag\`).

\#\#\# SECTION 2 — Spacer \+ full-bleed brand visual stack (\`.spacer-huge\` → image stack)  
After a large vertical spacer, render a \*\*vertical stack of full-width branding showcase images\*\* (the visual case study itself). Use large placeholder image blocks (squared corners, full container width, big gaps between them), in this order:

1\. \*\*Sevenloop logo\*\* — primary logo lockup (\`Sevenloop Logo.avif\`, 16:9 / 1600×900). Placeholder: "Sevenloop logo lockup".  
2\. \*\*Brand visual 1\*\* — full-bleed branding board (placeholder: "Brand identity — logo system / color / type").  
3\. \*\*Brand visual 2\*\* — placeholder: "Project brochure spreads".  
4\. \*\*Brand visual 3\*\* — placeholder: "Brand applications / collateral".  
5\. \*\*Brand visual 4\*\* — placeholder: "Brochure detail / mockups".

(There are \~8 image slots total on the live page including the logo and investor marks; render at least 4–5 large stacked brand visuals as the core content area, each full container width with vertical rhythm between them.)

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Squared-off (0 radius) corners on all image cards and the \`.tag\` pill. Generous vertical spacing (\`spacer-huge\`) between the header block and the visual stack, and between each stacked visual. Subtle fade/slide-in reveal on each image as it scrolls into view. Images are lazy-loaded. Centered content column, wider than the design-system default for the visual stack.

\#\# RESPONSIVE  
Desktop: constrained header info column, full-width stacked visuals below. Tablet/mobile: everything single-column; investor logos wrap; images scale to 100% width; metadata labels/values stay stacked. Maintain large vertical gaps on all breakpoints.

\#\# KEY DIFFERENCE FROM PAGE 1 (so the agent doesn't over-build)  
This is NOT the client hub. Do \*\*not\*\* add the long editorial copy, the team grid, the service marquee, the breadcrumb nav, or the big footer. Keep it minimal: title \+ metadata sidebar \+ a tall stack of brand imagery. That sparseness is the design.

# Long-form Blog / Article

\# PROMPT 3 of 4 — \`/blog/sevenloop-brand-website-redesign\` (Long-form Blog / Article)

This is the long-form editorial template: a classic article layout with a sticky table of contents, an "AI summary" widget, author/reviewer meta, an FAQ accordion, related-posts, and the global footer. Paste below into your agent.

A note on copy: the article body is very long. The prompt gives you the exact heading skeleton (so structure is identical) plus the verbatim hero copy, the client pull-quote, and all CTAs/meta. For body paragraphs under each heading, I've marked them as "reproduce full body copy from source" — when you run this, paste the corresponding paragraph(s) from the scraped text under each heading so the agent fills them in verbatim. (I'm keeping the prompt itself from re-dumping the entire copyrighted article in one block.)

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design blog article "Sevenloop Rebrand & Webflow Site: A 5-Month Case Study." Exact content, exact section order, exact layout. This is a long-form article template with a two-column reading layout (sticky ToC \+ article body), followed by FAQ, related posts, and footer.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use its components for type scale, buttons, accordions, cards.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content/article column, FAQ accordion, sticky ToC, hover/reveal, AI-summary chip row.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — H1/UI/nav) \+ \`Fraunces\` (serif — article body / long-form reading), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Sevenloop Rebrand & Webflow Site: A 5-Month Case Study\`  
\- URL slug: \`/blog/sevenloop-brand-website-redesign\`

\#\# OVERALL LAYOUT  
Article template, two-column on desktop: \*\*left \= sticky Table of Contents\*\*, \*\*right \= article body\*\* (wide reading column, Fraunces serif). Above the two columns sits the article header. Below the body sit the FAQ accordion, author bio, related solutions/blogs, and the global footer.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Article Header  
\- \*\*Breadcrumb\*\* (caps, \`›\` separators): \`HOME › BLOG › SEVENLOOP BRAND WEBSITE REDESIGN\`  
\- \*\*H1:\*\* \`Sevenloop Rebrand & Webflow Site: A 5-Month Case Study\`  
\- \*\*Dek/standfirst\*\* (one line): \`How Sevenloop went from B2B product company to enterprise-ready brand in 5 months — repositioning, identity, Webflow build, and the conversations it opened.\`  
\- \*\*Meta row:\*\* \`Author\` → \*\*Tanmaya Rao\*\*; \`Last updated\` → \*\*June 14, 2026\*\*.  
\- Large hero image placeholder ("Sevenloop rebrand hero").

\#\#\# SECTION 2 — Table of Contents (left sticky column) \+ "AI summary" widget  
\- \*\*Heading:\*\* \`Table of Content\`  
\- Anchor-link list (smooth-scroll to each H2 below), in this exact order: Transforming Precision Manufacturing: The Complete Sevenloop Brand & Website Redesign · The Voice of Success · Understanding Sevenloop: The Client Profile · The Challenge: Excellence That Wasn't Translating · Our Strategic Approach: Discovering the Core · The Brand Manifesto: Articulating Vision · Logo Redesign: Symbolizing Partnership · Website Transformation: Making Manufacturing Easy · Website Architecture: Comprehensive Page Structure · Visual Identity: Custom Illustrations & Icons · Responsive Design: Excellence Across All Devices · Brand Collaterals: Beyond the Website · Animation & Motion Design · The Project Team: Expertise Across Disciplines · The Process: From Research to Launch · Comprehensive Service Delivery · The Results: Measurable Impact · Key Takeaways: Lessons from the Sevenloop Transformation · Looking Forward: Building on Success · Why This Matters: The Bigger Picture · Final Thoughts  
\- \*\*"Read summaried version with" chip row\*\* — a row of squared chips/buttons labeled: \`ChatGPT\`, \`Google AI\`, \`Claude\`, \`Perplexity\`. (These open an AI summary of the page.)

\#\#\# SECTION 3 — Article Body (right column, Fraunces serif, wide column)  
Render each heading below in order, with the source body copy underneath each. Lead-in summary paragraph appears first (above the first H2): \*\[reproduce the one-paragraph summary that begins "The Sevenloop brand and website redesign transformed…" verbatim from source\]\*.

H2 sequence (each followed by its full body copy from source, including sub-headings, bullet lists, and the noted special elements):

1\. \*\*Transforming Precision Manufacturing: The Complete Sevenloop Brand & Website Redesign\*\* — with italic subtitle line, then body incl. the "$8 million in Series A / ₹184 Crores" framing.  
2\. \*\*The Voice of Success\*\* — contains a \*\*pull-quote block\*\* (large, styled): \*"Our entire experience, from design concept to the final product was glitch-free. Conversations with our clients have become so much more easier now."\* — attributed to \*\*Sharan Urubail, CEO & Co-Founder, Sevenloop\*\*.  
3\. \*\*Understanding Sevenloop: The Client Profile\*\* — sub-blocks "Company Overview", "The Financial Backing" (investors: Z47, Multiply Ventures, Alteria Capital), "Our Relationship" (timeline: 2022 / 2024 / Current Project).  
4\. \*\*The Challenge: Excellence That Wasn't Translating\*\* — Problem \#1 / \#2 / \#3 \+ "The Bottom Line".  
5\. \*\*Our Strategic Approach: Discovering the Core\*\* — Discovery Process, Strategic Insight (Precision).  
6\. \*\*The Brand Manifesto: Articulating Vision\*\* — with manifesto pull-quote.  
7\. \*\*Logo Redesign: Symbolizing Partnership\*\* — "Out with the Old" / "In with the New: Interlocking Rings".  
8\. \*\*Website Transformation: Making Manufacturing Easy\*\* — three "Core Differentiator" blocks \+ "Get a Quote" CTA note.  
9\. \*\*Website Architecture: Comprehensive Page Structure\*\* — Homepage, Capabilities, Solutions, Industries, Resources, Contact & Quote Flow sub-blocks.  
10\. \*\*Visual Identity: Custom Illustrations & Icons\*\*  
11\. \*\*Responsive Design: Excellence Across All Devices\*\* — Mobile / Tablet / Desktop sub-blocks.  
12\. \*\*Brand Collaterals: Beyond the Website\*\* — Print, Pitch Deck, Marketing.  
13\. \*\*Animation & Motion Design\*\*  
14\. \*\*The Project Team: Expertise Across Disciplines\*\* — render as grouped name/role lists (Design Leadership, Content & Strategy, Development, Motion & 3D, Project Management) exactly as in source.  
15\. \*\*The Process: From Research to Launch\*\* — Phases 1–5 with week ranges and bullet tasks.  
16\. \*\*Comprehensive Service Delivery\*\* — grouped deliverable lists.  
17\. \*\*The Results: Measurable Impact\*\*  
18\. \*\*Key Takeaways: Lessons from the Sevenloop Transformation\*\* — numbered 1–5.  
19\. \*\*Looking Forward: Building on Success\*\*  
20\. \*\*Why This Matters: The Bigger Picture\*\*  
21\. \*\*Final Thoughts\*\*

Then a \*\*Project Information\*\* block (Client: Sevenloop · Industry: Manufacturing Solutions · Project Timeline: 5 Months · Design Agency: Everything Design), a \*\*Contact\*\* block (Email: hello@everything.design · Phone: \+91 8547807934 · Website: www.everything.design), and a closing CTA line: \*"Want to transform your brand and digital presence? Let's talk about creating something exceptional together."\*

Footer meta of the article: \`Written on: October 3, 2025\` · \`Reviewed by: Athira Krishnan\`.

\#\#\# SECTION 4 — FAQ Accordion  
\- \*\*Heading:\*\* \`Frequently Asked Questions\`  
\- Accordion items (click to expand; squared corners; one open at a time). Questions in order, each with its full answer body from source:  
  1\. \*\*How much does a B2B website design project typically cost?\*\*  
  2\. \*\*Can a B2B branding agency help with website design?\*\* (sub-titled "Do B2B branding agencies also handle website design?")  
  3\. \*\*Can one agency handle branding and Webflow development?\*\*

\#\#\# SECTION 5 — Author bio card  
\- \*\*Athira Krishnan\*\* — \`Lead Designer | Content Strategist\` — bio: \*Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites.\*

\#\#\# SECTION 6 — "Solutions we offer" link row  
Squared chips/links: \`Website Redesign Services\`, \`Website Redesign\`, \`Website Redesign Services\`, \`B2B SaaS Website Redesign Agency\`, \`Website Revamp for B2b SaaS\`, \`Website Redesign for Series A Startup\`.

\#\#\# SECTION 7 — "More Blogs" related-posts cards  
Two cards, each: title, Author, Updated on, Reviewed by.  
1\. \*\*Employer Branding and Talent Acquisition: A Strategic Guide for B2B Tech\*\* — Author Mejo Kuriachan · Updated June 16, 2026 · Reviewed by Mejo Kuriachan.  
2\. \*\*Messaging Is Decision-Making: The 7-Step Process Before Copy and Design\*\* — Author Mejo Kuriachan · Updated June 12, 2026 · Reviewed by Ekta Manchanda.

\#\#\# SECTION 8 — Global Footer  
Tagline: \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\* Breadcrumb echo \`HOME › BLOG › SEVENLOOP BRAND WEBSITE REDESIGN\`. Caps link columns: \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL). Contact: \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`. "ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN" line. Copyright: \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: JUNE 14, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Sticky left ToC that highlights the active section on scroll (scroll-spy); smooth-scroll anchor jumps. FAQ accordion (squared corners, expand/collapse, chevron rotate). AI-summary chips with hover state. Pull-quotes styled large (Fraunces, oversized, left border or quotation mark). Reveal-on-scroll for images and section blocks. Wide article reading column, comfortable line-length.

\#\# RESPONSIVE  
Desktop: two columns (sticky ToC left \~25–30%, article right). Tablet: ToC collapses to a top dropdown/accordion above the article. Mobile: single column, ToC becomes a collapsible "Table of Content" toggle, FAQ and related cards stack, footer columns stack.

\#\# KEY DIFFERENCE FROM PAGES 1 & 2  
This is an article/editorial template — sticky ToC \+ long serif body \+ FAQ accordion \+ related posts. Do NOT use the client-hub team grid or the case-study image-stack layout. The defining feature here is the readable two-column long-form layout with scroll-spy ToC.

\---

# Print Collateral Showcase

\# PROMPT 4 of 4 — \`/print-design-agency/sevenloop-brochure\` (Print Collateral Showcase)

This is the \*\*simplest\*\* of the four templates: a navbar, a single title, a stack of brochure visuals, and the footer. It's a clean print-portfolio showcase page. Paste below into your agent.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "Sevenloop Brochure" print-collateral showcase page. Exact content, exact section order, exact layout. This is a minimal, image-forward portfolio page: navbar → title → stacked brochure visuals → footer.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use its navbar, container, and layout primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, image-stack spacing, hover/reveal, sticky navbar.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — H1, nav) \+ \`Fraunces\` (serif — any supporting text), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Sevenloop Brochure \- Everything Design\`  
\- \`\<meta name="description"\>\`: \`Sevenloop Brochure project showcase as a print collateral\`  
\- URL slug: \`/print-design-agency/sevenloop-brochure\`

\#\# OVERALL LAYOUT  
Top-to-bottom, single centered column: sticky navbar, a \`section\_common\` containing the page title \+ a vertical stack of full-width brochure visuals, then the global footer. No table of contents, no team grid, no FAQ, no metadata sidebar — this is the leanest template in the set.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (\`.navbar.w-nav\`, sticky)  
\- \*\*Everything Design logo\*\* (left) — image, alt \`logo of "Everythingdesign"\`.  
\- \*\*Primary nav links\*\* (caps): \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`.  
\- \*\*Right side:\*\* a \`BOOK A CALL\` button \+ phone \`+91 8547807934\`.  
\- Sub-brand logos appear in the nav/menu mega-panel: \*\*Everything Flow\*\* (Webflow agency), \*\*Everything Motion\*\*, \*\*Everything Film\*\* — render as small logo marks (alt text as given).

\#\#\# SECTION 2 — Title \+ Brochure Showcase (\`section.section\_common\`)  
\- \*\*Breadcrumb\*\* (caps, \`›\` separators): \`HOME › PRINT DESIGN › SEVENLOOP BROCHURE\`  
\- \*\*H1\*\* (Blinker, large): \`Sevenloop Brochure\`  
\- \*\*Brochure visual stack\*\* — a vertical stack of \*\*full-width brochure page/spread images\*\* (squared corners, generous vertical gaps, lazy-loaded, fade/slide reveal on scroll). Use large placeholder image blocks in this order:  
  1\. "Sevenloop brochure — cover"  
  2\. "Brochure — inside spread 1 (intro / positioning)"  
  3\. "Brochure — inside spread 2 (capabilities)"  
  4\. "Brochure — inside spread 3 (process / quality)"  
  5\. "Brochure — inside spread 4 (contact / back cover)"  
    
  (The live page renders the brochure as a sequence of full-bleed page visuals; render at least 4–6 stacked spreads as the core content.)

\#\#\# SECTION 3 — "ASK AI FOR A SUMMARY" / AI chips (if present in footer area)  
A small row referencing AI summary tools (e.g., a \`ChatGPT\` chip was present in assets) — render as an optional chip row labeled \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`, consistent with the footer line below.

\#\#\# SECTION 4 — Global Footer  
Identical to the site-wide footer used on the other pages:  
\- \*\*Tagline:\*\* \`We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\`  
\- \*\*Breadcrumb echo:\*\* \`HOME › PRINT DESIGN › SEVENLOOP BROCHURE\`  
\- \*\*Link columns (caps):\*\*  
  \- \*\*PROJECTS:\*\* \`B2B WEBSITE DESIGN\`, \`WEBSITE PROJECTS\`, \`3D PROJECTS\`  
  \- \*\*RESOURCES:\*\* \`BLOG\`, \`WEBSITE AUDIT\`, \`PRINT DESIGN AGENCY\`, \`CLIENTS\`, \`CASE STUDY\`, \`AGENCY REVIEWS\`, \`TEAM\`, \`COMICS\`  
  \- \*\*COMPANY:\*\* \`OUR TERMS\`, \`FAQs\`, \`NO-BRAINER OFFER\`, \`WHY EVERYTHING.DESIGN\`, \`RECENT UPDATES\`, \`CONTACT\`, \`BOOK A CALL\`  
\- \*\*Contact block:\*\* \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`  
\- \*\*AI summary line:\*\* \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`  
\- \*\*Copyright row:\*\* \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: DECEMBER 3, 2024\`

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Sticky navbar that condenses on scroll. Squared (0 radius) corners on all brochure image cards. Large vertical rhythm between stacked visuals. Fade/slide-in reveal on each brochure image as it enters the viewport. Lazy-loaded images. Centered content column, wider than design-system default for the visual stack. Hover states on nav links and footer links.

\#\# RESPONSIVE  
Desktop: full-width stacked brochure visuals, full navbar. Tablet/mobile: navbar collapses to a hamburger menu; brochure images scale to 100% width and keep vertical spacing; footer columns stack vertically.

\#\# KEY DIFFERENCE FROM THE OTHER PAGES  
This is the leanest template: navbar \+ title \+ a tall stack of brochure imagery \+ footer. Do NOT add the editorial copy, ToC, FAQ, team grid, service marquee, or metadata sidebar from the other pages. The defining feature is a clean, image-only print-portfolio showcase.

# \# BONUS PROMPT

\# BONUS PROMPT — Redirect/alias stubs for the two \`/project/...\` URLs

These two URLs are not separate designs — on the live site they both \*\*301 → \`/clients/sevenloop\`\*\*. To make your build map all six paths faithfully, create lightweight redirect stubs (not full pages). Paste below into your agent.

\---

\#\# ROLE & GOAL  
Create two minimal redirect stub files so these alias URLs resolve to the existing client hub page (Prompt 1), exactly as the live site does. No unique layout — these exist purely as SEO alias/redirect paths.

\#\# URLs to alias  
\- \`/project/sevenloop\` → redirect to \`/clients/sevenloop\`  
\- \`/project/sevenloop-explainer-film\` → redirect to \`/clients/sevenloop\`

\#\# Preferred implementation (server-level — best for SEO)  
Use a \*\*301 permanent redirect\*\* at the host/router level so link equity passes through:

\`\`\`  
\# Netlify \_redirects (or equivalent)  
/project/sevenloop                 /clients/sevenloop   301  
/project/sevenloop-explainer-film  /clients/sevenloop   301  
\`\`\`

For other hosts, use the equivalent 301 rule (Webflow page settings "301 redirect", Vercel \`vercel.json\` \`redirects\` with \`"permanent": true\`, Apache \`.htaccess\` \`Redirect 301\`, or Nginx \`return 301\`).

\#\# Fallback implementation (if you can only ship static \`.html\` files)  
Each stub is a build-less file matching the rest of the stack (React 18.3.1 UMD \+ Babel Standalone 7.29.0, no build step), but its only job is to redirect immediately and signal canonical:

\`\`\`html  
\<\!doctype html\>  
\<html lang="en"\>  
\<head\>  
  \<meta charset="utf-8"\>  
  \<title\>Sevenloop | Everything Design Client Work\</title\>  
  \<\!-- Pass SEO equity to the real page \--\>  
  \<link rel="canonical" href="https://www.everything.design/clients/sevenloop"\>  
  \<meta http-equiv="refresh" content="0; url=/clients/sevenloop"\>  
  \<script\>window.location.replace('/clients/sevenloop');\</script\>  
\</head\>  
\<body\>  
  \<p\>Redirecting to \<a href="/clients/sevenloop"\>Sevenloop\</a\>…\</p\>  
\</body\>  
\</html\>  
\`\`\`

Create this file twice — once for each alias path. Keep the \`\<title\>\` identical to the client hub (\`Sevenloop | Everything Design Client Work\`) and always set the \`rel="canonical"\` to \`/clients/sevenloop\` so search engines consolidate the pages, mirroring the live site's behavior.

\#\# Note  
Server-level 301 is strongly preferred over the meta-refresh fallback, because 301 cleanly passes ranking signals to the hub page — which is the whole point of these alias URLs in Everything Design's internal-linking strategy.

\---

# Service Page

\# NEW BATCH — PROMPT 1 of 10 — Service Page (\`/service/branding-agency\`)

This is the high-value commercial template (48 pages). It's a long SEO landing page: hero → sticky ToC → resource-guide content blocks → projects/portfolio grid → big FAQ accordion → experts grid → related blogs → footer. Paste below into your agent.

A note on copy: like the blog template, the body is very long. The prompt gives the exact section skeleton, hero copy, all headings, the portfolio list, the FAQ question list, and the experts roster verbatim. Under each long content block I've marked "reproduce full body copy from source" — paste the matching scraped paragraphs there so the agent fills them in exactly.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "Branding Agency" service page. Exact content, exact section order, exact layout. This is a long-form SEO service landing page with a sticky ToC, stacked content blocks, a portfolio grid, a large FAQ accordion, and an experts roster.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use its navbar, container, button, card, and accordion primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, sticky ToC, FAQ accordion, portfolio/marquee, experts grid, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — H1/H2/nav/UI) \+ \`Fraunces\` (serif — long-form body), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Branding Agency\`  
\- URL slug: \`/service/branding-agency\`

\#\# OVERALL LAYOUT  
Top-to-bottom: sticky navbar → hero → two-column body (sticky left ToC \+ right long-form content) → portfolio grid → FAQ accordion → experts grid → related blogs → footer. Same global navbar and footer as the other site pages.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo (left); caps nav links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right side \`BOOK A CALL\` button \+ phone \`+91 8547807934\`.

\#\#\# SECTION 2 — Hero  
\- \*\*Breadcrumb:\*\* \`HOME › SERVICES › BRANDING AGENCY\`  
\- \*\*H1:\*\* \`Branding Agency\`  
\- \*\*Hero intro paragraph\*\* (verbatim): \*A branding agency should answer one question first: what do you want a buyer, an investor, or a hire to believe about you before they meet you. Most agencies skip the question and go straight to logo exploration. Everything Design starts where every B2B brand actually has to start — with diagnosis, positioning, and the words on the page — and only then builds the identity.\*

\#\#\# SECTION 3 — Table of Contents (sticky left column)  
\- \*\*Heading:\*\* \`Table of Content\`  
\- Anchor list (smooth-scroll), in this order: Everything You Need to Know About Choosing a B2B Branding Agency in India · The Definitive Guide to B2B Branding Agencies · The 2026 Buyer's Guide · Top 10 B2B Branding Agencies in India — The Strategic Guide · Best B2B Branding Agency Based on Your Needs · How to Identify a B2B Branding Agency That Actually Delivers · 20 Critical Factors Every Decision-Maker Must Know · The Ultimate Guide to Selecting B2B Branding Agencies in India · How to Use These Resources

\#\#\# SECTION 4 — Long-form content body (right column, Fraunces serif)  
Eyebrow: \`BRANDING AGENCY EXPERTS\`. Then render each ToC heading as an H2 with its full body copy from source, in the same order. Lead block: \*\*Everything You Need to Know About Choosing a B2B Branding Agency in India\*\* with sub-line \*"Your complete reading guide — 7 in-depth resources…"\* then \*\[reproduce full body copy from source\]\*. Continue through each of the 9 headings (Definitive Guide, 2026 Buyer's Guide, Top 10, Needs-based, How to Identify, 20 Critical Factors, Ultimate Guide, How to Use These Resources) — each with its verbatim paragraphs from the scraped text.

Include the inline callout block: \*\*How much does a B2B branding agency cost and how long does a brand build take?\*\* with its answer paragraph (verbatim).

\#\#\# SECTION 5 — "Clients we did Branding for" — Portfolio grid  
\- \*\*Heading:\*\* \`Clients we did Branding for\`  
\- A filter/tab row with labels: \`Solution\`, \`Service\`, \`Industry\`, \`Branding Projects\` (and a repeating \`PROJECTS\` marquee strip above).  
\- \*\*Portfolio card grid\*\* — each card: a \`Visit Website\` (or \`View Website\`) link, client name (H3), and one-line descriptor. Squared corners, hover-reveal. Render all in this exact order:

Fortuna Cysec · Lakshmigraha · Swiffy Labs · Tunnel · SimpliContract · Good Food Movement \- Akshaykalpa · i3systems · Fortuna Identity · Founder's Cupid · ASPI & CIS Tech Diplomacy · Compport · IVY homes · Ximkart · Progcap · Phronetic · OneLern · \*\*Sevenloop\*\* · Adnaut · TLH · Alkemiz · Lumora Security · Expent · Xflow

(Use each card's exact descriptor from source — e.g., Sevenloop: \*"Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider"\*; Fortuna Cysec: \*"Brand strategy and website design for Fortuna Cysec, an AI-driven managed security services provider…"\*; etc. Paste the matching one-liner under each name.)

\#\#\# SECTION 6 — FAQs (large accordion)  
\- \*\*Heading:\*\* \`FAQs\`  
\- Accordion items (squared corners, expand/collapse), each with full answer body from source, in this order:  
  1\. \*\*What is B2B branding and why does it matter?\*\*  
  2\. \*\*What should you look for when hiring a branding agency?\*\*  
  3\. \*\*How to evaluate a branding agency's portfolio?\*\*  
  4\. \*\*Questions to ask a branding agency?\*\* (long multi-part answer incl. "Bringing Your A-Team" sub-section)  
  5\. \*\*How much does a B2B branding agency charge?\*\* (with pricing-tier breakdown in ₹/$ ranges)  
  6\. \*\*What is brand identity and why does it matter?\*\*

\#\#\# SECTION 7 — Experts grid ("Branding Experts")  
\- \*\*Heading:\*\* \`Branding Experts\` (eyebrow style: "Branding" / "Experts")  
\- Team card grid (role eyebrow, name H3, one-line bio, \`Read More\` link), in this order:

| Role | Name | Bio |  
|---|---|---|  
| Lead Designer | \*\*Akhilesh J\*\* | Akhilesh, a graphic designer, is passionate about creating captivating designs that inspire and resonate with people. |  
| Lead Designer \\| Content Strategist | \*\*Athira Krishnan\*\* | Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites. |  
| Co-Founder \\| Principal Designer | \*\*Ekta Manchanda\*\* | Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces. |  
| Partner \\| Brand Strategist | \*\*Mejo Kuriachan\*\* | Mejo puts the 'Everything' in 'Everything Design, Flow, Video and Motion'—an engineer first, strategist and design manager next. |  
| Senior Brand Designer | \*\*Neha Bhatnagar\*\* | Neha helps you level up brands with designs that not only look great but truly capture the essence of the business. |  
| Lead Designer | \*\*Sanjana\*\* | With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design. |  
| Lead Strategist | \*\*Sijeesh VB\*\* | Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences. |  
| Content Strategist | \*\*Swathi Mohan\*\* | Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard. |

\#\#\# SECTION 8 — Related Blogs  
\- \*\*Heading:\*\* \`Related Blogs\`  
\- Cards with \`Read Blog\` links, in order: \`Top 10 Branding Agencies in Bangalore (2026 Shortlist)\` · \`Top B2B Visual Identity Design Agencies in 2026\` · \`Fortuna Cysec: Cybersecurity Branding Case Study\` · \`Branding agency for Y Combinator companies\` · \`Swiffy Labs Branding and Web Design\` · \`Branding Process\`.

\#\#\# SECTION 9 — Global Footer  
Identical to the site-wide footer: tagline \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\*; breadcrumb echo \`HOME › SERVICES › BRANDING AGENCY\`; caps link columns \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL); contact \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`; \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`; copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: JUNE 14, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Sticky scroll-spy ToC (highlights active section). FAQ accordion (one open at a time, chevron rotate, squared corners). Portfolio filter tabs (Solution / Service / Industry / Branding Projects) \+ repeating \`PROJECTS\` marquee strip. Reveal-on-scroll for cards and content blocks. Wide serif reading column. Hover states on portfolio cards, experts cards, nav, and footer links.

\#\# RESPONSIVE  
Desktop: two-column (sticky ToC \~25–30% \+ content), multi-col portfolio/experts grids. Tablet: ToC becomes a top dropdown; grids 2-col. Mobile: single column, ToC collapses to a toggle, portfolio/experts/blogs stack, footer columns stack, marquee still animates.

\#\# KEY DIFFERENCE FROM OTHER TEMPLATES  
This is a commercial SEO service landing page. Distinct features vs. the client hub / blog: the portfolio filter tabs \+ portfolio grid, the very large multi-question FAQ accordion, and the service-specific "Experts" roster (different people than a single project team). Keep the sticky ToC \+ long serif body like the blog, but the portfolio grid \+ FAQ \+ experts roster are what define this template.

# Industry Page

\# NEW BATCH — PROMPT 2 of 10 — Industry Page (\`/industry/manufacturing\`)

This is the vertical-targeted commercial template (26 pages). Structurally it's a close cousin of the Service template, but built around an industry narrative with a strong storytelling hero, a CTA band, and industry-specific portfolio \+ experts. Paste below.

Copy note: same convention as before — exact skeleton, hero copy, all headings, the portfolio list with descriptors, FAQ questions, and experts roster verbatim; long body blocks marked "reproduce full body copy from source" — paste matching scraped paragraphs there.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "Design Agency for Manufacturing Firms" industry page. Exact content, exact section order, exact layout. This is a long-form, vertical-targeted SEO landing page: hero → portfolio strip → sticky ToC \+ long-form body (with a narrative case story) → CTA band → industry portfolio grid → FAQ accordion → experts grid → related blogs → footer.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, button, card, accordion primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, sticky ToC, FAQ accordion, portfolio marquee/grid, CTA band, experts grid, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — H1/H2/nav/UI) \+ \`Fraunces\` (serif — long-form body and the narrative story), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Industrial Design Agency for Manufacturers\`  
\- URL slug: \`/industry/manufacturing\`

\#\# OVERALL LAYOUT  
Top-to-bottom: sticky navbar → hero → "Clients from Manufacturing Industry" marquee strip → two-column body (sticky left ToC \+ right long-form content incl. the $2M narrative) → CTA band → industry portfolio grid → FAQ accordion → experts grid → related blogs → footer. Same global navbar/footer as other pages.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Hero  
\- \*\*Breadcrumb:\*\* \`HOME › INDUSTRIES › MANUFACTURING\`  
\- \*\*H1:\*\* \`Design Agency for Manufacturing Firms \- Branding, Website\`  
\- \*\*Hero intro (verbatim):\*\* \*A design agency for manufacturing firms builds branding and websites that highlight industrial expertise, driving online visibility and client engagement.\*

\#\#\# SECTION 3 — "Clients from Manufacturing Industry" marquee strip  
A horizontal logo/\`PROJECTS\` marquee (continuous loop) labeled \*\*Clients from Manufacturing Industry\*\*.

\#\#\# SECTION 4 — Table of Contents (sticky left column)  
\- \*\*Heading:\*\* \`Table of Content\`  
\- Anchor list: \`When Your Manufacturing Website Costs You $2M Orders\` · \`Leading Agencies for Manufacturing Website Design\` · \`Design your right to win\`

\#\#\# SECTION 5 — Long-form content body (right column, Fraunces serif)  
Render in order with full body copy from source:  
\- Intro block (two paragraphs beginning \*"A design agency for manufacturing firms focuses on creating branding…"\* and \*"In the competitive manufacturing industry, good design is essential…"\*) — verbatim.  
\- \*\*H2: When Your Manufacturing Website Costs You $2M Orders\*\* — the narrative story with its sub-headings rendered as sub-blocks: "The Hospitality Principle", "Fluorescent Lights and Plastic Chairs", "What can be changed?", "The Feeling is Non-Negotiable". Reproduce body verbatim (note: keep the source's exact wording, including its original typos like "hospitaltiy" and "soemthing" — reproduce as-is to match the live page).  
\- \*\*H2: Leading Agencies for Manufacturing Website Design\*\* — an intro line then a list of agencies, each \`Name: description\` (Duck.Design, DBS Interactive, Invoidea, Lform Design, Orbit Media, Digital Silk, WebFX, Bop Design, Blend) — verbatim. Followed by the "Cerrion: Branding & Website Analysis" sub-block (three analysis paragraphs) and the closing "Specializes in B2B branding…" paragraph.

\#\#\# SECTION 6 — CTA band ("Design your right to win")  
A full-width highlighted band:  
\- \*\*Heading:\*\* \`Design your right to win\`  
\- \*\*Button:\*\* \`BOOK A STRATEGY CALL WITH EVERYTHING DESIGN\`

\#\#\# SECTION 7 — Industry portfolio grid  
\- Filter tabs: \`Solution\`, \`Service\`, \`Industry\`  
\- \*\*Heading:\*\* \`Design Projects in Manufacturing Industry\`  
\- Portfolio cards (\`Visit Website\`/\`View Website\` link, name H3, one-line descriptor; squared corners, hover-reveal), in this exact order with their descriptors verbatim:

Ximkart · TurboTech · GenRobotics · \*\*Sevenloop\*\* · Ajax Engineering · Revind Ai · Lakshmigraha · Ayr Energy

(e.g., Sevenloop: \*"Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider"\*; TurboTech: \*"Brand and website design for TurboTech, a precision engineering and automotive turbocharger solutions company"\* — paste each card's exact one-liner.)

\#\#\# SECTION 8 — FAQs (accordion)  
\- \*\*Heading:\*\* \`FAQs\`  
\- Items (squared corners, expand/collapse), each with full answer body from source:  
  1\. \*\*How does digital branding help manufacturing companies attract new clients?\*\*  
  2\. \*\*Why manufacturing brands need good design to attract better clients and talent?\*\* (long answer with numbered points 1–10 \+ Conclusion)

\#\#\# SECTION 9 — Experts grid ("Manufacturing Design Experts")  
\- \*\*Heading:\*\* \`Manufacturing Design Experts\` (eyebrow: "Manufacturing" / "Design Experts")  
\- Team cards (role eyebrow, name H3, bio, \`Read More\`), in order:

| Role | Name | Bio |  
|---|---|---|  
| Partner \\| Brand Strategist | \*\*Mejo Kuriachan\*\* | Mejo puts the 'Everything' in 'Everything Design, Flow, Video and Motion'—an engineer first, strategist and design manager next. |  
| Lead Designer | \*\*Sanjana\*\* | With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design. |  
| Lead Strategist | \*\*Sijeesh VB\*\* | Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences. |  
| Lead Brand Designer \\| Illustrator | \*\*Tanmaya Rao\*\* | A b2b brand designer, she has worked wonders for many SaaS and B2B companies with her vision and expert skills. |

\#\#\# SECTION 10 — Related Blogs  
\- \*\*Heading:\*\* \`Related Blogs\`  
\- Cards with \`Read Blog\`, in order: \`Brand Design for B2B: Scope, Process, and 2026 Examples\` · \`Best B2B Website Agency in Bangalore for 2026\` · \`B2B Website Agency FAQs: Timelines, Pricing, Process\` · \`How to Choose a Web Design Agency in India (2026)\` · \`What Is Rebranding? A B2B Founder's 2026 Guide\`.

\#\#\# SECTION 11 — Global Footer  
Identical site-wide footer: tagline \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\*; breadcrumb echo \`HOME › INDUSTRIES › MANUFACTURING\`; caps columns \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL); contact \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`; \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`; copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: JUNE 14, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Sticky scroll-spy ToC. FAQ accordion (one open at a time, chevron rotate, squared corners). Client marquee strip (infinite loop). Highlighted CTA band with prominent button. Portfolio filter tabs (Solution / Service / Industry). Reveal-on-scroll for cards, story sub-blocks, and content. Wide serif reading column. Hover states on cards, nav, footer.

\#\# RESPONSIVE  
Desktop: two-column (sticky ToC \+ content), multi-col portfolio/experts grids, full-width CTA band. Tablet: ToC → top dropdown; grids 2-col. Mobile: single column, ToC toggle, CTA band stacks, portfolio/experts/blogs stack, marquee animates, footer columns stack.

\#\# KEY DIFFERENCE FROM THE SERVICE TEMPLATE  
Very similar shell, but defined by: (a) the storytelling hero/narrative body (the "$2M order" hospitality story) rather than a resource-guide list, (b) the dedicated \*\*CTA band\*\* ("Design your right to win"), and (c) industry-scoped portfolio \+ experts. Keep the sticky ToC \+ FAQ \+ experts \+ related-blogs pattern shared with the Service page, but the narrative case-story body and CTA band are the distinguishing elements.

\---

# Solution Page

\# NEW BATCH — PROMPT 3 of 10 — Solution Page (\`/solution/ai-saas-website-design-agency\`)

The use-case/offer-targeted template (61 pages). Same shell as Service/Industry, built around a specific solution. Paste below.

Copy note: same convention — exact skeleton, hero, all headings, portfolio list w/ descriptors, FAQ \+ experts verbatim; long body blocks marked "reproduce full body copy from source."

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "AI SaaS Product Website Design Agency" solution page. Exact content, exact section order, exact layout. Long-form solution-targeted SEO landing page: hero → clients marquee → inline Q\&A callout → sticky ToC \+ long-form body → CTA band → portfolio grid → FAQ → experts grid → related blogs → footer.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, button, card, accordion primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, sticky ToC, FAQ accordion, marquee/grid, CTA band, experts grid, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans) \+ \`Fraunces\` (serif body), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`AI SaaS Product Website Design Agency\`  
\- URL slug: \`/solution/ai-saas-website-design-agency\`

\#\# OVERALL LAYOUT  
Sticky navbar → hero → "AI SaaS Website Clients" marquee → inline Q\&A callout → two-column body (sticky ToC \+ long content) → CTA band → portfolio grid → FAQ → experts grid → related blogs → footer. Same global navbar/footer.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Hero  
\- \*\*Breadcrumb:\*\* \`HOME › SOLUTIONS › AI SAAS WEBSITE DESIGN AGENCY\`  
\- \*\*H1:\*\* \`AI SaaS Product Website Design Agency\`  
\- \*\*Hero intro (verbatim):\*\* \*An AI SaaS product website design agency builds conversion-focused digital experiences that make complex AI capabilities accessible, helping prospects quickly grasp your product's value and move toward a buying decision.\*

\#\#\# SECTION 3 — "AI SaaS Website Clients" marquee strip  
Horizontal \`PROJECTS\` logo marquee labeled \*\*AI SaaS Website Clients\*\* (continuous loop).

\#\#\# SECTION 4 — Inline Q\&A callout  
Styled callout block:  
\- \*\*Q (heading):\*\* \`How should AI SaaS companies approach website design differently?\`  
\- \*\*A (verbatim):\*\* \*By leading with the outcome, not the technology. AI is complex and often misunderstood — your website needs to translate technical capabilities into business value your buyers immediately grasp. That means clear use cases, compelling demos, and messaging that focuses on what your AI does for the customer rather than how it works under the hood. Everything Design builds AI SaaS websites that make cutting-edge technology feel accessible, trustworthy, and essential.\*

\#\#\# SECTION 5 — Table of Contents (sticky left column)  
\- \*\*Heading:\*\* \`Table of Content\`  
\- Anchor list: \`Top AI SaaS Product Websites: What Sets Them Apart in Web Design and User Experience\` · \`The Distorted Role of Marketing in VC-Backed SaaS: Why Customer-First is the Key to Success\` · \`Get your Website for AI SaaS Product\`

\#\#\# SECTION 6 — Long-form content body (right column, Fraunces serif)  
Render in order with full body copy from source:  
\- Lead paragraph (verbatim): \*Everything Design Website Agency consistently work with US based AI SaaS Product Companies for their Website Design. Simpli Contract, Cloudphysician, Mili, Entropik, Vecton, Nimble Edge are few among them.\*  
\- \*\*H2: Top AI SaaS Product Websites: What Sets Them Apart…\*\* — intro, "The Importance of a High-Impact AI SaaS Website" sub-block with bullet list, then numbered website breakdowns 1–10 (11x.ai, Jasper.ai, HeyGen, Synthesia.io, Copy.ai, Riverside.fm, Cohere.com, Together.ai, Scale.com, Gentrace) each as a sub-heading \+ paragraphs, then "Actionable Recommendations for Your AI SaaS Website" bullet list — all verbatim.  
\- \*\*H2: The Distorted Role of Marketing in VC-Backed SaaS…\*\* — with sub-blocks "The Problem with 'AI-First' Thinking", "Why Marketing Should Be Customer-First…", "The Risk of Misaligned Messaging", "Moving Forward: A Customer-First Approach", "Final Thoughts" — verbatim.

\#\#\# SECTION 7 — CTA band ("Get your Website for AI SaaS Product")  
Full-width highlighted band:  
\- \*\*Heading:\*\* \`Get your Website for AI SaaS Product\`  
\- \*\*Button:\*\* \`CONNECT WITH AI SAAS PRODUCT WEBSITE EXPERT AT EVERYTHING DESIGN\`

\#\#\# SECTION 8 — Portfolio grid  
\- Filter tabs: \`Solution\`, \`Service\`, \`Industry\`  
\- \*\*Heading:\*\* \`AI SaaS Websites\`  
\- Cards (\`Visit Website\` link, name H3, one-line descriptor; squared corners, hover-reveal), in this exact order with verbatim descriptors:

SimpliContract · Entropik · Adnaut · Nimble Edge · Cloudphysician · 5X · Aavenir · ASPI & CIS Tech Diplomacy · Mili

(Paste each card's exact one-liner from source.)

\#\#\# SECTION 9 — FAQs (accordion)  
\- \*\*Heading:\*\* \`FAQs\`  
\- Item (squared corners, expand/collapse), with full answer from source:  
  1\. \*\*What should a pre-launch AI startup prioritise on an 8-week website timeline?\*\*

\#\#\# SECTION 10 — Experts grid ("AI SaaS Website Design Experts")  
\- \*\*Heading:\*\* \`AI SaaS Website Design Experts\` (eyebrow: "AI SaaS Website Design" / "Experts")  
\- Team cards (role eyebrow, name H3, bio, \`Read More\`), in order:

| Role | Name | Bio |  
|---|---|---|  
| Associate Designer | \*\*Harishma D\*\* | Harishma is an Associate Designer at Everything Design, helping businesses discover the value of great design and build strong partnerships. |  
| Content Strategist | \*\*Swathi Mohan\*\* | Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard. |  
| Partner \\| Brand Strategist | \*\*Mejo Kuriachan\*\* | Mejo puts the 'Everything' in 'Everything Design, Flow, Video and Motion'—an engineer first, strategist and design manager next. |  
| Lead Designer \\| Content Strategist | \*\*Athira Krishnan\*\* | Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites. |  
| Lead Designer | \*\*Sanjana\*\* | With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design. |

\#\#\# SECTION 11 — Related Blogs  
\- \*\*Heading:\*\* \`Related Blogs\`  
\- Cards with \`Read Blog\`, in order: \`Will AI Replace Designers? An Honest 2026 Take\` · \`B2b SaaS Web Design Agency\` · \`Ultimate B2B SaaS Website Guide\`.

\#\#\# SECTION 12 — Global Footer  
Identical site-wide footer (tagline, breadcrumb echo \`HOME › SOLUTIONS › AI SAAS WEBSITE DESIGN AGENCY\`, the three caps columns PROJECTS / RESOURCES / COMPANY, contact block, AI-summary line, copyright). Note this page's \`LAST UPDATED ON: JUNE 13, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Sticky scroll-spy ToC. FAQ accordion. Clients marquee (infinite loop). Highlighted CTA band. Portfolio filter tabs (Solution / Service / Industry). Reveal-on-scroll for cards and content blocks. Inline Q\&A callout styled distinctly (boxed/tinted). Wide serif reading column. Hover states throughout.

\#\# RESPONSIVE  
Desktop: two-column (sticky ToC \+ content), multi-col grids, full-width CTA band. Tablet: ToC → top dropdown; grids 2-col. Mobile: single column, ToC toggle, CTA stacks, grids stack, marquee animates, footer columns stack.

\#\# KEY DIFFERENCE FROM SERVICE & INDUSTRY TEMPLATES  
Same shared shell (sticky ToC \+ long body \+ CTA band \+ portfolio \+ FAQ \+ experts \+ related blogs). The distinguishing features here: the \*\*inline Q\&A callout\*\* between hero and ToC, and a body built as a "teardown/listicle" (numbered analysis of 10 external AI SaaS sites) plus an opinion essay — rather than a resource-guide list (Service) or a single narrative story (Industry). Portfolio \+ experts are solution-scoped.

# Location Page

\# NEW BATCH — PROMPT 4 of 10 — Location Page (\`/location/ahmedabad-web-design-agency\`)

The local-SEO programmatic template (61 pages, one per city). Same shell family, but with a few notable differences: the portfolio grid sits high (right after the hero), there's a structured "Best for / What's included / Engagement model" block, and there's \*\*no Experts grid\*\*. Paste below.

Copy note: same convention — exact skeleton, hero, all headings, portfolio descriptors, FAQ verbatim; long body blocks marked "reproduce full body copy from source."

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "Best Web Design & Branding Agency in Ahmedabad" location page. Exact content, exact section order, exact layout. Local-SEO landing page: hero → city portfolio grid → inline Q\&A callout → clients marquee → sticky ToC \+ long-form body (with structured "Best for / included / engagement" blocks) → CTA band → FAQ → related blogs → footer. (No experts grid on this template.)

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, button, card, accordion primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, sticky ToC, FAQ accordion, marquee/grid, CTA band, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans) \+ \`Fraunces\` (serif body), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Web Design & Branding Agency in Ahmedabad\`  
\- URL slug: \`/location/ahmedabad-web-design-agency\`

\#\# OVERALL LAYOUT  
Sticky navbar → hero → city portfolio grid → inline Q\&A callout → "Our Clients in \[City\]" marquee → two-column body (sticky ToC \+ long content with structured blocks) → CTA band → FAQ → related blogs → footer. Same global navbar/footer.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Hero  
\- \*\*Breadcrumb:\*\* \`HOME › LOCATIONS › AHMEDABAD WEB DESIGN AGENCY\`  
\- \*\*H1:\*\* \`Best Web Design & Branding Agency in Ahmedabad\`  
\- \*\*Hero intro (verbatim):\*\* \*Ahmedabad's economy has three layers — a deep manufacturing base, a fast-growing B2B and product-tech base, and the GIFT City fintech build-out. Each one needs a different kind of brand, but they share a buyer who has been around for a while and is hard to impress.\*

\#\#\# SECTION 3 — City portfolio grid (placed high, right after hero)  
\- Filter tabs: \`Solution\`, \`Service\`, \`Industry\`, \`Location\`  
\- \*\*Heading:\*\* \`Design Projects for Ahmedabad Brands\`  
\- Cards (\`Visit Website\` link, name H3, one-line descriptor; squared corners, hover-reveal), in this exact order with verbatim descriptors:

Rewild Farms · Cloudphysician · Entropik · Relanto

(Paste each card's exact one-liner, e.g. Rewild Farms: \*"Brand and website design for Rewild Farms, an ecological farming initiative restoring biodiversity through regenerative agriculture"\*.)

\#\#\# SECTION 4 — Inline Q\&A callout  
\- \*\*Q (heading):\*\* \`What does an Ahmedabad founder gain from a Bangalore B2B studio?\`  
\- \*\*A (verbatim):\*\* \*We work with Ahmedabad founders on positioning-led brand and Webflow builds. Same timezone, full working-day overlap, four to six weeks for standard scope. We are comfortable across modern SaaS and traditional manufacturing — and we know the difference.\*

\#\#\# SECTION 5 — "Our Clients in Ahmedabad" marquee strip  
Horizontal \`PROJECTS\` logo marquee labeled \*\*Our Clients in Ahmedabad\*\* (continuous loop).

\#\#\# SECTION 6 — Table of Contents (sticky left column)  
\- \*\*Heading:\*\* \`Table of Content\`  
\- Anchor list: \`Why Ahmedabad B2B brands need a branding partner that understands the local market\` · \`What goes wrong with most Ahmedabad agency engagements\` · \`How we work with Ahmedabad B2B founders\` · \`Named clients and work\` · \`Best for\` · \`What is included\` · \`Engagement model\` · \`Bridging legacy industry and modern tech in one brand\` · \`Ready to transform your Ahmedabad brand?\`

\#\#\# SECTION 7 — Long-form content body (right column, Fraunces serif)  
Render each heading as H2 with full body copy from source, in order:  
1\. \*\*Why Ahmedabad B2B brands need a branding partner that understands the local market\*\* — verbatim paragraphs.  
2\. \*\*What goes wrong with most Ahmedabad agency engagements\*\* — "Four patterns" with the four named items (Manufacturing-style websites / No positioning depth / Weak copywriting / Vendor mentality), verbatim.  
3\. \*\*How we work with Ahmedabad B2B founders\*\* — verbatim.  
4\. \*\*Named clients and work\*\* — verbatim (note: references \*\*Sevenloop\*\* and Ximkart as Ahmedabad-relevant references).  
5\. \*\*Best for\*\* — a bulleted list block (three "Best for…" bullets), verbatim.  
6\. \*\*What is included\*\* — verbatim paragraph.  
7\. \*\*Engagement model\*\* — verbatim paragraph.  
8\. \*\*Bridging legacy industry and modern tech in one brand\*\* — verbatim, incl. the GIFT City fintech paragraph.

Render "Best for / What is included / Engagement model" as a visually distinct \*\*structured info block\*\* (e.g., bordered cards or a definition-list style), since they're short labeled blocks rather than flowing prose.

\#\#\# SECTION 8 — CTA band ("Ready to transform your Ahmedabad brand?")  
Full-width highlighted band:  
\- \*\*Heading:\*\* \`Ready to transform your Ahmedabad brand?\`  
\- \*\*Button:\*\* \`TALK TO A DESIGN EXPERT\`  
(Include the lead-in line about booking a "30-minute diagnosis call" from source above/near the band.)

\#\#\# SECTION 9 — FAQs (accordion)  
\- \*\*Heading:\*\* \`FAQs\`  
\- Items (squared corners, expand/collapse), each with full answer body from source, in order:  
  1\. \*\*How does B2B web design differ from B2C?\*\*  
  2\. \*\*What makes a boutique agency better than a large agency for B2B web design?\*\*  
  3\. \*\*How to choose the right web design agency?\*\*  
  4\. \*\*How much does a B2B website redesign cost in India and the US?\*\* (with the scope/price breakdowns)  
  5\. \*\*How long does a B2B website redesign take?\*\* (with Weeks 1–4 / 5–14 / 15–20 phases)  
  6\. \*\*What should a high-quality B2B website include in design, messaging, and UX?\*\*

\#\#\# SECTION 10 — Related Blogs  
\- \*\*Heading:\*\* \`Related Blogs\`  
\- Cards with \`Read Blog\`, in order: \`Top B2B Branding Agencies in India (2026)\` · \`Best Webflow Agencies in India 2026: Ranked and Reviewed\` · \`Better B2B Branding Starts With a Point of View\` · \`B2B Positioning Is a Courage Problem, Not Creative\` · \`Working With a Webflow Agency: 7-Step Process (2026)\` · \`8 Steps to Build a B2B Brand Strategy (2026)\`.

\#\#\# SECTION 11 — Global Footer  
Identical site-wide footer (tagline, breadcrumb echo \`HOME › LOCATIONS › AHMEDABAD WEB DESIGN AGENCY\`, the three caps columns PROJECTS / RESOURCES / COMPANY, contact block, AI-summary line, copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: JUNE 14, 2026\`).

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Sticky scroll-spy ToC. FAQ accordion. Clients marquee (infinite loop). Highlighted CTA band. Portfolio filter tabs (Solution / Service / Industry / Location — note the extra "Location" tab vs. other templates). Inline Q\&A callout styled distinctly. "Best for / What's included / Engagement model" as bordered/structured info blocks. Reveal-on-scroll. Wide serif reading column. Hover states throughout.

\#\# RESPONSIVE  
Desktop: two-column (sticky ToC \+ content), multi-col portfolio grid, full-width CTA band. Tablet: ToC → top dropdown; grid 2-col. Mobile: single column, ToC toggle, CTA stacks, grid stacks, marquee animates, footer columns stack.

\#\# KEY DIFFERENCES FROM SERVICE / INDUSTRY / SOLUTION  
(1) \*\*No Experts grid\*\* — this template omits the team roster entirely. (2) The \*\*portfolio grid sits high\*\*, immediately after the hero (before the body), not near the end. (3) Adds a \*\*"Location" filter tab\*\*. (4) Body includes short \*\*structured labeled blocks\*\* ("Best for / What is included / Engagement model") rather than only flowing prose. Everything else (sticky ToC, CTA band, FAQ, related blogs, navbar/footer) matches the shared shell.

# Written Case Study

\# NEW BATCH — PROMPT 5 of 10 — Written Case Study (\`/case-study/edtech-web-design-onelern\`)

This is the narrative case-study template (15 pages) — distinct from the sparse, image-led \`/casestudy/\` template you built earlier. It's a structured story: header \+ metadata \+ chapter tabs → overview → brand attributes → before/after → numbered "why" reasons → deliverable tags → testimonial quotes → process. Paste below.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design "OneLern" written case study. Exact content, exact section order, exact layout. This is a structured narrative case study with a metadata header, chapter/anchor tabs, overview, brand-attribute callouts, a before/after comparison, numbered rationale cards, deliverable tags, client/team testimonial quotes, and a process section.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, card, tabs, button primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, chapter tab strip, before/after comparison, numbered rationale cards, big pull-quotes, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — headings/eyebrows/UI) \+ \`Fraunces\` (serif — overview/process body and pull-quotes), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Boosting OneLern's Website Brand Engagement | Case Study | Everything Design Agency\`  
\- URL slug: \`/case-study/edtech-web-design-onelern\`

\#\# OVERALL LAYOUT  
Sticky navbar → case-study header (title \+ subtitle \+ metadata \+ chapter tabs) → overview → brand attributes → before/after → "Why the new brand" rationale → deliverable tags → testimonial \#1 → process section → testimonial \#2 → footer. Same global navbar/footer. Editorial, image-rich but with structured text blocks (unlike the pure image stack of \`/casestudy/\`).

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Case Study Header  
\- \*\*H1:\*\* \`Strategically upgrading an Ed-Tech brand's website\`  
\- \*\*Subtitle:\*\* \`Renewed Brand Messaging, Positioning, Illustrations & Web Design\`  
\- \*\*Metadata row\*\* (label/value pairs, eyebrow labels): \`Client\` → \*\*ONELERN\*\* · \`Headquarters\` → \*\*HYDERABAD, INDIA\*\* · \`Target Audience\` → \*\*SCHOOLS\*\*  
\- \*\*Chapter tab strip / anchor nav\*\* (caps chips, each may render duplicated label as in source): \`POSITIONING\`, \`COLOUR\`, \`ILLUSTRATIONS\`, \`ICONOGRAPHY\`, \`WEBSITE DESIGN\`. (Smooth-scroll anchors to the corresponding sections.)  
\- Large hero/brand visual placeholder for OneLern.

\#\#\# SECTION 3 — Overview  
\- \*\*Eyebrow:\*\* \`OVERVIEW\`  
\- \*\*Heading:\*\* \`Accessible digital transformation\`  
\- \*\*Body (verbatim):\*\* \*OneLern revolutionises education by reimagining textbooks and fostering personalised learning. Through cutting-edge technology, smart content, in-class and after-class solutions, OneLern enriches global learning experiences.\* … and \*The core thought revolved around creating a strategy that communicated the benefits of digital transformation to all stakeholder groups.\*

\#\#\# SECTION 4 — Brand Attributes  
\- \*\*Label:\*\* \`ONelern stands for\`  
\- Two large attribute callouts (big display type): \*\*FRIENDLY\*\* and \*\*TRANSFORMATIVE\*\*.  
\- A \`Visit Website\` button.  
\- A secondary tab/segment strip: \`Layout & Stucture\`, \`Stategy & Messaging\`, \`Visual Design\` (reproduce the source's exact spellings, including "Stucture" and "Stategy").

\#\#\# SECTION 5 — Before / After  
\- Labels \*\*BEFORE\*\* and \*\*AFTER\*\* with a side-by-side or slider image comparison of the website. Squared corners.

\#\#\# SECTION 6 — "Why the new brand" — numbered rationale cards  
\- \*\*Eyebrow/heading:\*\* \`WHY THE NEW BRAND\`  
\- Four numbered cards (01–04), each with a title and a one-line body:  
  1\. \*\*01 — Clear Value Proposition:\*\* \*We needed to craft a strategy to drive our stakeholder specific value propositions.\*  
  2\. \*\*02 — Strong Online Presence:\*\* \*A strong online presence was required to engage the top brass of management in schools.\*  
  3\. \*\*03 — Onboarding Platform:\*\* \*We needed a platform where all stakeholders could access demos and be digitally onboarded.\*  
  4\. \*\*04 — Showcase Expertise:\*\* \*We needed to showcase our expertise and our capability to transform schools with digital infrastructure.\*  
\- Closing line below the cards (verbatim): \*OneLern now has a strong website that effectively communicates with each of its stakeholder groups.\*

\#\#\# SECTION 7 — Deliverable tags  
A row of caps tags/pills: \`BRAND STRATEGY\`, \`WEBSITE DESIGN\`, \`LOTTIE ANIMATIONS\`. (Squared corners.)

\#\#\# SECTION 8 — Client Testimonial \#1 (pull-quote)  
Large pull-quote block (Fraunces, oversized):  
\- \*\*Quote (verbatim):\*\* \*Everything.Design understood our vision and helped us translate it into messaging and design. It became easier for our sales team to understand and communicate about the brand post the rebranding exercise.\*  
\- \*\*Attribution:\*\* \`TC ASHOK\` — \`FOUNDER, ONELERN\`

\#\#\# SECTION 9 — Process section ("Backed by Process")  
\- \*\*Heading:\*\* \`Backed by Process\`  
\- \*\*Body (verbatim, in order):\*\* the three process paragraphs beginning \*"We started by delving deep into the brief…"\*, \*"Our deep research process helped us create a brand identity…"\* (note: source mentions "Ximkart's customers" here — reproduce as-is), and \*"Collaboration lies at the core of our approach…"\*.  
\- Closing line (verbatim): \*The unique illustration style developed by the team along with the content strategy and positioning has established OneLern as trustworthy digital partner to schools.\*

\#\#\# SECTION 10 — Team Testimonial \#2 (attribution)  
\- \*\*Attribution:\*\* \`AKHILESH J\` — \`PROJECT LEAD\` (associated with the closing process line above; render as a smaller quote/attribution block).

\#\#\# SECTION 11 — Global Footer  
Identical site-wide footer: tagline \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\*; breadcrumb echo \`HOME › CASE STUDIES › EDTECH WEB DESIGN ONELERN\`; caps columns \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL); contact \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`; \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`; copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: MAR 10, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Chapter tab strip with smooth-scroll anchors (Positioning / Colour / Illustrations / Iconography / Website Design). Secondary segment strip (Layout & Structure / Strategy & Messaging / Visual Design) that swaps the displayed visuals. Before/After comparison (slider or side-by-side). Numbered rationale cards (squared corners, hover-reveal). Oversized Fraunces pull-quotes with attribution. Reveal-on-scroll for sections and images. Image-rich layout with full-width visual breaks between text blocks.

\#\# RESPONSIVE  
Desktop: metadata row inline, multi-column rationale cards, side-by-side before/after. Tablet: 2-col rationale cards, tabs wrap. Mobile: single column, metadata stacks, tabs become horizontal scroll, before/after stacks vertically, pull-quotes full-width, footer columns stack.

\#\# KEY DIFFERENCE FROM THE \`/casestudy/\` (image-led) TEMPLATE  
This \`/case-study/\` (with hyphen) template is \*\*narrative and structured\*\* — it has a metadata header, chapter tabs, an overview, numbered rationale cards, deliverable tags, and two attributed testimonial pull-quotes plus a process write-up. The earlier \`/casestudy/\` (no hyphen) template was a sparse vertical image stack with only a metadata sidebar. Do not conflate them — this one is text-and-structure-rich.

\---

That's prompt 5 (written Case Study). Reply \*\*"next"\*\* for \*\*\#6, the FAQ single-question page\*\* (\`/faq/corporate-rebrand-expert\`) — the largest programmatic family (517 pages).

# FAQ Single-Question Page

\# NEW BATCH — PROMPT 6 of 10 — FAQ Single-Question Page (\`/faq/corporate-rebrand-expert\`)

The largest programmatic family (517 pages). Each is a focused single-question answer page — the leanest content template: question as H1, a structured answer body, a services strip, and the footer. Paste below.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design FAQ answer page. Exact content, exact section order, exact layout. This is a focused single-question SEO page: the question as the H1, a structured long-answer body (with sub-headings, bullet blocks, and a highlighted case-study \+ key-facts block), a services strip, and the footer.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, card, button primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, highlighted callout/case-study block, key-facts list, services strip, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — H1/sub-heads/UI) \+ \`Fraunces\` (serif — answer body), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Where can you hire experts to lead your corporate rebrand and align executive stakeholders around a new brand strategy?\`  
\- URL slug: \`/faq/corporate-rebrand-expert\`

\#\# OVERALL LAYOUT  
Sticky navbar → question hero (H1) → single-column answer body (wide serif column with sub-blocks) → services strip → footer. Same global navbar/footer. No sticky ToC, no portfolio grid, no experts roster — this is a lean answer page.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Question Hero  
\- \*\*H1 (the question, verbatim):\*\* \`Where can you hire experts to lead your corporate rebrand and align executive stakeholders around a new brand strategy?\`  
\- \*\*Lead answer line (verbatim):\*\* \*Everything Design has proven results helping tech companies like SaaS platforms refresh their brand and website.\*

\#\#\# SECTION 3 — Answer Body (single wide column, Fraunces serif)  
Render in order with full body copy from source:  
\- \*\*Sub-heading:\*\* \`Everything Design – Strategic Depth with Operational Discipline\`  
\- \*\*Sub-block:\*\* \`Why They Lead the Market\` — two paragraphs (verbatim), incl. the "three pillars: strategic clarity, creative audacity, and executional excellence" line.  
\- \*\*Sub-block:\*\* \`How They Handle Stakeholder Alignment\` — intro line \+ a 4-item bulleted "engagement model" list, each bold-lead \+ description (verbatim):  
  \- \*\*Immersive discovery (weeks 1–2):\*\* …  
  \- \*\*Proprietary research and positioning workshops:\*\* …  
  \- \*\*Staged creative validation:\*\* …  
  \- \*\*Weekly governance cadences:\*\* …  
\- \*\*Highlighted case-study callout block:\*\* \`Relevant Case Study: Sevenloop Rebrand\` — the full paragraph about the 4–5 month Sevenloop engagement (verbatim). Style as a tinted/bordered callout box (squared corners).  
\- \*\*Key-facts block\*\* (render as a labeled definition-list / stat strip):  
  \- \*\*Investment Range:\*\* \`$10,000–$50,000+ depending on scope (brand strategy, visual identity, website, and motion design)\`  
  \- \*\*Timeline:\*\* \`10–16 weeks for comprehensive engagement; 6–8 weeks for sprint-based options\`  
  \- \*\*Best For:\*\* \`Series B+ SaaS companies, funded tech startups, and enterprises seeking a strategic partner who understands B2B buying complexity and can navigate executive alignment\`

\#\#\# SECTION 4 — Services strip ("OUR SERVICES")  
\- \*\*Eyebrow:\*\* \`OUR SERVICES\`  
\- A row/grid of service chips or links (squared corners), in this order: \`Brand Strategy & Brand Design\` · \`Website Design\` · \`Website Development\` · \`Film \- Live Action & Animation\` · \`Print Design\` · \`Brand Campaigns\`.

\#\#\# SECTION 5 — Global Footer  
Identical site-wide footer: tagline \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\*; breadcrumb echo \`HOME › FAQ › CORPORATE REBRAND EXPERT\`; caps columns \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL); contact \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`; \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`; copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: MAY 31, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Minimal interactions — this is a content/answer page. Highlighted case-study callout (tinted box, squared corners). Key-facts rendered as a clean labeled list/strip. Services chips with hover state. Reveal-on-scroll on body blocks. Wide serif reading column, comfortable line length. Hover states on nav, services chips, footer links.

\#\# RESPONSIVE  
Desktop: single wide centered column for the answer, services strip in a row. Tablet: services wrap to 2–3 per row. Mobile: single column, key-facts stack, services chips stack/wrap, footer columns stack.

\#\# KEY DIFFERENCE FROM OTHER TEMPLATES  
This is the leanest content template in the set: just question H1 \+ structured answer \+ services strip \+ footer. No sticky ToC, no portfolio grid, no FAQ accordion (the page \*is\* a single FAQ answer), and no experts roster. The defining elements are the question-as-H1, the highlighted case-study callout, and the key-facts (Investment / Timeline / Best For) block. Because 517 of these exist, treat it as a highly templated component with swappable {question, answer body, case-study, key-facts} content.

\---

That's prompt 6 (FAQ page). Reply \*\*"next"\*\* for \*\*\#7, the Author bio page\*\* (\`/author/tanmaya-rao\`) — the E-E-A-T template (56 pages).

# Author Bio Page

\# NEW BATCH — PROMPT 7 of 10 — Author Bio Page (\`/author/tanmaya-rao\`)

The E-E-A-T / team-credibility template (56 pages, one per team member). Profile header → bio → expertise tags → key-clients marquee → projects grid → authored-blogs list → solution/industry expertise tag clouds → footer. Paste below.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design author/team-member bio page. Exact content, exact section order, exact layout. This is an author profile page: header (name \+ role), an "About" bio, service-expertise tags, a key-clients marquee, a projects grid, an authored-blogs list, and solution/industry expertise tag clouds.

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, card, tag/chip, button primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, profile header, clients marquee, projects grid, blogs list, expertise tag clouds, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — name/headings/tags/UI) \+ \`Fraunces\` (serif — bio body), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Tanmaya Anala Rao | Lead Designer & Illustrator \- Everything Design\`  
\- URL slug: \`/author/tanmaya-rao\`

\#\# OVERALL LAYOUT  
Sticky navbar → profile header → About bio → Service Expertise tags → Key Clients marquee → Projects grid → Blogs list → Solution Expertise tag cloud → Industry Expertise tag cloud → footer. Same global navbar/footer.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Profile Header  
\- \*\*H1 (name):\*\* \`Tanmaya Rao\`  
\- \*\*Role (eyebrow/subtitle):\*\* \`Lead Brand Designer | Illustrator\`  
\- Large profile photo placeholder (portrait, squared corners).  
\- Breadcrumb context \`HOME › AUTHORS › TANMAYA RAO\` (can be in header or footer per source).

\#\#\# SECTION 3 — About bio  
\- \*\*Eyebrow:\*\* \`About\`  
\- \*\*Heading:\*\* \`Tanmaya Rao\`  
\- \*\*Body (verbatim, three paragraphs):\*\* beginning \*"Tanmaya Rao is the Lead Brand Designer & Illustrator at Everything Design, celebrated for her mastery of illustration…"\* through \*"…making brands memorable to the right audiences with clarity, personality, and taste."\* (Fraunces serif, wide column.)

\#\#\# SECTION 4 — Service Expertise tags  
\- \*\*Heading:\*\* \`Service Expertise\`  
\- Tag/chip row (squared corners): \`Logo Design\` · \`B2B Branding\` · \`B2B Web Design\` · \`Illustration\` · \`Website Redesign\` · \`Brand Refresh\` · \`Brochure Design\`.

\#\#\# SECTION 5 — Key Clients marquee  
\- \*\*Heading:\*\* \`Tanmaya Rao's Key Clients\`  
\- Horizontal \`PROJECTS\` logo marquee (continuous loop, many logos).

\#\#\# SECTION 6 — Projects grid  
\- \*\*Heading:\*\* \`Tanmaya Rao's Projects\`  
\- Cards (a \`Visit Website\` / \`View Website\` / \`Watch Video\` action label, name H3, optional sub-labels \+ one-line descriptor; squared corners, hover-reveal), in this exact order with verbatim descriptors:

Armory · \*\*Sevenloop\*\* \*(sub-labels: "End To End Custom Manufacturing Solution Provider" / "Funded by Z47"; descriptor: "Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider")\* · Hand In Hand India · Lakshmigraha · Transitry · Revind Ai · HSR Founder's Club GTM Week 2024 | Promo Film \*(Watch Video)\* · Sevenloop | Explainer Film \*(Watch Video)\* · OneLern Scroll Animation Page · Simpli Contract | Brand Video \*(Watch Video)\*

(Paste each card's exact action label \+ one-liner from source. Note action labels vary: "Visit Website", "View Website", "Visit Webste" \[reproduce source typo\], "Watch Video".)

\#\#\# SECTION 7 — Authored Blogs list  
\- \*\*Heading:\*\* \`Tanmaya Rao's Blogs\`  
\- A list of blog links each with a \`Visit Blog\` action, in this exact order:

\`Climate Tech Website Agency | Cleantech Web Design for Startups & Scale-ups\` · \`Top Brand Design Agencies in Bangalore (Bengaluru): 2026 Shortlist \+ Buyer Guide\` · \`The Psychology & Performance of Scroll Animations\` · \`How to Build Startup Credibility Fast: A B2B Founder's Guide\` · \`Branding Process\` · \`The Art of Iconography: Crafting Distinct Icons for a Professional Online Presence\` · \`Brand Photography in B2B Branding\` · \`Good Food Movement: Branding & Web Design Case Study\` · \`Are People Illustrations a Good Idea on B2B Websites?\` · \`The Brand Book: Your Recipe for a Successful Brand Book\` · \`How to Use Illustrations on a B2B Website (With Examples)\` · \`Dynamic Logos: When and How to Make an Impact?\` · \`How can Illustrations be employed in your B2B Website as a powerful marketing tool?\`

\#\#\# SECTION 8 — Solution Expertise tag cloud  
\- \*\*Heading:\*\* \`Solution Experties\` \*(reproduce source's exact misspelling "Experties")\*  
\- Tag/chip cloud (squared corners), in order: \`Startup Homepage\` · \`Real Estate\` · \`Website Animation\` · \`Fintech Branding\` · \`Financial\` · \`Financial Sector Brand\` · \`Fintech Web Design\` · \`Venture Capital Website\` · \`Global Brand Website\` · \`Energy\` · \`Publication Design\` · \`Real Estate Branding\` · \`Logistics\` · \`Technology Branding\` · \`Climate Tech\` · \`B2B Website Revamp\` · \`Healthcare Tech\` · \`Medical\` · \`Annual Report\` · \`SaaS Brand\` · \`SaaS ReBrand\` · \`Law Firm Branding\` · \`Service Company Rebranding\` · \`Deep Tech\`.

\#\#\# SECTION 9 — Industry Expertise tag cloud  
\- \*\*Heading:\*\* \`Industry Experties\` \*(reproduce source's exact misspelling "Experties")\*  
\- Tag/chip cloud (squared corners), in order: \`Technology Businesses\` · \`Renewable Energy\` · \`Manufacturing\` · \`Healthcare\` · \`Law Firm\` · \`Hospitality\` · \`Aviation Web Design\` · \`Real Estate\` · \`NGO\` · \`DeepTech\`.

\#\#\# SECTION 10 — Global Footer  
Identical site-wide footer: tagline \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\*; breadcrumb echo \`HOME › AUTHORS › TANMAYA RAO\`; caps columns \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL); contact \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`; \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`; copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` · \`LAST UPDATED ON: JUNE 14, 2026\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Key-clients marquee (infinite loop). Projects grid cards with hover-reveal \+ varied action labels (Visit Website / View Website / Watch Video). Expertise tag clouds with hover state. Reveal-on-scroll for sections, cards, tags. Wide serif bio column. Profile header with portrait \+ name/role. Hover states on nav, cards, tags, blog links, footer.

\#\# RESPONSIVE  
Desktop: profile header (portrait beside name/role), multi-col projects grid, multi-col blog list, wrapping tag clouds. Tablet: grids 2-col, tags wrap. Mobile: single column, portrait above name, projects/blogs stack, tag clouds wrap, marquee animates, footer columns stack.

\#\# KEY DIFFERENCE FROM OTHER TEMPLATES  
This is the credibility/E-E-A-T template: a personal profile (name \+ role \+ portrait \+ bio) followed by that person's clients, projects, authored blogs, and their solution/industry expertise tag clouds. No sticky ToC, no FAQ accordion, no CTA band. The defining elements are the bio header, the authored-blogs list, and the dual expertise tag clouds. Across 56 author pages, treat it as a templated profile component with swappable {name, role, photo, bio, expertise tags, clients, projects, blogs} content.

\---

That's prompt 7 (Author page). Reply \*\*"next"\*\* for \*\*\#8, the Website Audit page\*\* (\`/website-audit/cyber-security-company-hackuity\`).

# Website Audit Page

\# NEW BATCH — PROMPT 8 of 10 — Website Audit Page (\`/website-audit/cyber-security-company-hackuity\`)

The website-audit showcase template (10 pages). A lean, image-led page: title \+ intro \+ audit metadata (website/auditor/date), then a large annotated audit visual. Uses dedicated \`audit-\*\` layout classes. Paste below.

\---

\#\# ROLE & GOAL  
Build a single, self-contained build-less \`.html\` file reproducing the Everything Design website-audit page. Exact content, exact section order, exact layout. This is a minimal audit-showcase page: an audit title, a short intro line, an audit metadata block (audited website / auditor / date), and a large annotated audit visual (tall screenshot with critique annotations).

\#\# TECH STACK (mandatory — identical to the rest of the set)  
\- \*\*React 18.3.1\*\* UMD from unpkg; renders into \`\<div id="root"\>\`.  
\- \*\*Babel Standalone 7.29.0\*\* from CDN; inline JSX in \`\<script type="text/babel"\>\`; no build step.  
\- \*\*Design Asylum Studio v3 design system\*\* — \`\_ds\_bundle.js\` (\`window.DesignAsylumDesignSystem\_594314\`) \+ \`styles.css\` \+ tokens. Use navbar, container, button primitives.  
\- \*\*Custom CSS overrides\*\* in one \`\<style\>\` block: squared corners, widened content column, audit heading/content/description wraps, audit hero image, hover/reveal.  
\- \*\*Fonts:\*\* \`Blinker\` (display sans — H1/metadata/UI) \+ \`Fraunces\` (serif — intro/description), via \`@font-face\` from CDN through design-system tokens.  
\- Fallback to semantic HTML with same class names if bundle unreachable.

\#\# PAGE META  
\- \`\<title\>\`: \`Hackuity.io \- Clear Messaging, Augmented By Visual Design\`  
\- URL slug: \`/website-audit/cyber-security-company-hackuity\`

\#\# OVERALL LAYOUT  
Sticky navbar → audit header section (\`padding-global padding-section-medium\`) containing: \`audit-heading-wrap\` (title \+ intro) → \`audit-content-wrap\` (metadata) → \`audit-description-wrap\` (optional notes) → \`author-wrap is-audit\` (auditor) → \`audit-hero-img\` (the large annotated audit visual) → footer. Reuse these exact class names. Single centered column; the audit visual runs full container width.

\---

\#\# SECTIONS — render in this exact order

\#\#\# SECTION 1 — Navbar (sticky, site-wide)  
Logo; caps links \`OUR WORK\`, \`BLOGS\`, \`CASE STUDIES\`, \`REVIEWS\`, \`CLIENTS\`, \`TEAM\`; right \`BOOK A CALL\` \+ \`+91 8547807934\`.

\#\#\# SECTION 2 — Audit Header (\`section.padding-global.padding-section-medium\`)

\*\*\`audit-heading-wrap\`:\*\*  
\- \*\*H1:\*\* \`Hackuity.io \- Clear Messaging, Augmented By Visual Design\`  
\- \*\*Intro line (verbatim, Fraunces):\*\* \*A relatively young organization, Hackuity brings clarity, crispness in messaging augmented by visual design that is minimal.\*

\*\*\`audit-content-wrap\`\*\* — metadata block (label/value pairs, eyebrow labels):  
\- \`WEBSITE\` → \*\*HACKUITY.IO\*\*  
\- \`Audited by\` → \*\*EKTA MANCHANDA\*\*  
\- \`Audited on\` → \*\*OCTOBER 10, 2024\*\*

(Render the auditor as an \`author-wrap is-audit\` block — a small author chip/byline with the auditor's name, optionally a small avatar placeholder.)

\*\*\`audit-description-wrap\`\*\* — any additional short audit notes (placeholder text if expanding; keep minimal to match source).

\#\#\# SECTION 3 — Audit hero visual (\`audit-hero-img\`)  
A \*\*large, full-width annotated audit image\*\* — a tall screenshot of the audited website (Hackuity.io) with critique callouts/annotations. Use a large placeholder image block (squared corners, \~1125px wide source, scales to container). Label the placeholder "Annotated website audit — Hackuity.io homepage with messaging/visual-design critique callouts." This is the centerpiece of the page.

\#\#\# SECTION 4 — Global Footer  
Identical site-wide footer: tagline \*We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate.\*; breadcrumb echo \`HOME › WEBSITE AUDIT › CYBER SECURITY COMPANY HACKUITY\`; caps columns \*\*PROJECTS\*\* (B2B WEBSITE DESIGN, WEBSITE PROJECTS, 3D PROJECTS), \*\*RESOURCES\*\* (BLOG, WEBSITE AUDIT, PRINT DESIGN AGENCY, CLIENTS, CASE STUDY, AGENCY REVIEWS, TEAM, COMICS), \*\*COMPANY\*\* (OUR TERMS, FAQs, NO-BRAINER OFFER, WHY EVERYTHING.DESIGN, RECENT UPDATES, CONTACT, BOOK A CALL); contact \`CALL: \+91 8547807934\` · \`HELLO@EVERYTHING.DESIGN\` · \`BENGALURU, KARNATAKA, INDIA\`; \`ASK AI FOR A SUMMARY OF EVERYTHING.DESIGN\`; copyright \`©EVERYTHING.DESIGN 2026\` · \`WEBSITE DEVELOPED BY EVERYTHING FLOW\`.

\---

\#\# INTERACTIONS / CUSTOM CSS NOTES  
Minimal interactions. Squared corners on the audit hero image and any chips. Auditor byline as a compact author chip. Reveal-on-scroll on the audit hero image. Wide centered content column; the audit visual is full container width. Hover states on nav/footer links.

\#\# RESPONSIVE  
Desktop: centered header column, full-width audit visual below. Tablet/mobile: single column, metadata label/value pairs stack, audit visual scales to 100% width, footer columns stack.

\#\# KEY DIFFERENCE FROM OTHER TEMPLATES  
This is a lean, image-led showcase (closest cousin to the \`/casestudy/\` image-stack and the print template). The defining feature is the audit metadata block (Website / Audited by / Audited on) plus a single large annotated audit screenshot. No ToC, no FAQ, no portfolio grid, no experts, no CTA band — keep it minimal.

\---

That's prompt 8 (Website Audit page). Reply \*\*"next"\*\* for \*\*\#9, the Project page\*\* (\`/project/aavenir\`) — I'll first verify at scrape time whether it's a real standalone layout or (like Sevenloop's) a redirect/alias to \`/clients/\`.

# Project page

\# NEW BATCH — PROMPT 9 of 10 — Project page (\`/project/aavenir\`)

\*\*Verification result (important):\*\* \`/project/aavenir\` is \*\*NOT a unique template\*\*. It is a \*\*301 redirect\*\* to \`/clients/aavenir\` — identical behavior to Sevenloop's \`/project/sevenloop\` and \`/project/sevenloop-explainer-film\`, which also redirected to \`/clients/\`. So the entire \`/project/\*\` family is an \*\*alias of the Client Hub template\*\* we already built in Phase 3\.

Rather than skip the slot, below is (a) the redirect-stub prompt for the \`/project/\*\` alias, and (b) a confirmation that the destination uses the existing Client Hub template, with the Aavenir-specific content filled in as a ready-to-use example so your agent has a second concrete data point alongside Sevenloop.

\---

\#\# 9a — REDIRECT-STUB PROMPT (\`/project/{slug}\` → \`/clients/{slug}\`)

\`\`\`  
\#\# ROLE & GOAL  
Configure a server-side 301 permanent redirect. The path /project/{slug}  
must NOT render its own page — it permanently redirects to /clients/{slug}.

\#\# BEHAVIOR  
\- /project/aavenir              → 301 → /clients/aavenir  
\- /project/sevenloop            → 301 → /clients/sevenloop  
\- /project/{any-slug}           → 301 → /clients/{any-slug}  
\- Preserve the slug exactly; status 301 (permanent), not 302\.  
\- No HTML body, no React mount, no flash of content before redirect.

\#\# WHY  
/project/\* is a legacy URL family kept only for SEO link equity. All canonical  
client work lives at /clients/\*. Do not build a separate template here.  
\`\`\`

\---

\#\# 9b — CONFIRMATION: destination \= existing Client Hub template

The redirect lands on \`/clients/aavenir\`, which renders the \*\*Client Hub template already specified in the Sevenloop batch\*\* (Prompt 1 of Phase 3). Same skeleton, swappable content:

\*\*\#\# SECTIONS — render in this exact order\*\* (Client Hub template, Aavenir content)

1\. \*\*Global navbar\*\* — logo; caps links \`OUR WORK · BLOGS · CASE STUDIES · REVIEWS · CLIENTS · TEAM\`; \`BOOK A CALL\` \+ \`+91 8547807934\`.  
2\. \*\*Hero\*\* — H1 \`Aavenir\`; breadcrumb \`HOME › CLIENTS › AAVENIR\`.  
3\. \*\*Two-column meta block\*\* — left label \`Service Provided\`, right label \`About Client\`; service value \`Website Design\`; client blurb (verbatim): \*"Aavenir is an AI-powered contract lifecycle management platform built on ServiceNow, helping enterprises automate source-to-pay workflows with products spanning contracts, obligations, RFPs, vendor onboarding, and invoicing."\* \+ \`Visit Website\` button.  
4\. \*\*Narrative section\*\* — H2 \`How Everything Design Helped Aavenir\`; 5 body paragraphs (reproduce verbatim from source — covers the no-new-logo refresh, messaging rearchitecture across the five-product suite Contractflow/Obligationflow/RFPflow/Onboardingflow/Invoiceflow, the aavenir.com redesign, and the Reza/CMO collaboration outcome).  
5\. \*\*Project Team\*\* grid — 4 members in the standard role-title / name / one-line bio / \`Read More\` card format:

| Role | Name | Bio |  
|---|---|---|  
| Chief of Staff \\| Project Manager | Arpan Sen | "Arpan handles management at Everything Design, ensuring that everything, well...flows smoothly." |  
| Partner \\| Brand Strategist | Mejo Kuriachan | "Mejo puts the 'Everything' in 'Everything Design, Flow, Video and Motion'—an engineer first, strategist and design manager next." |  
| Lead Designer \\| Content Strategist | Athira Krishnan | "Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites." |  
| Content Strategist | Swathi Mohan | "Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard." |

6\. \*\*Service Provided footer strip\*\* — label \`Service Provided\`; value \`Website Copywriting\`; \`Visit Service\` link.  
7\. \*\*Global footer.\*\*

\*\*TECH STACK:\*\* identical to the rest of the set (React 18.3.1 UMD from unpkg → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build step; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides; Blinker \+ Fraunces via @font-face).

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES:\*\* Do \*\*not\*\* build a new layout for \`/project/\*\` — it's a redirect. The Client Hub destination differs from the visual Case Study template (\`/casestudy/\*\`) in that it leads with a \*\*narrative "How we helped" section \+ project team roster\*\* rather than an image stack.

\---

Net result: \*\*the Project slot adds no new template\*\* — it's a redirect to the Client Hub you already have. That leaves only standalone pages.

Reply \*\*'next'\*\* for \*\*\#10, the Standalone pages\*\* (Home \`/\`, Pricing \`/pricing\`, Manifesto \`/manifesto\`, Team \`/team\`) — these are the last item and are genuinely distinct one-off layouts, so I'll likely split them into sub-prompts.

# \# FOOTER BATCH

\# FOOTER BATCH — PROMPT A of 6 — Clients Index (\`/clients\`)

\*\*\#\# ROLE & GOAL\*\* — Build the all-clients directory page: a single large logo/card grid linking to every \`/clients/{slug}\` hub.

\*\*\#\# TECH STACK\*\* — \*(identical to the set: React 18.3.1 UMD → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides; Blinker \+ Fraunces @font-face; semantic-HTML fallback with same class names.)\*

\*\*\#\# PAGE META\*\* — \`\<title\>\` \`Our Clients | Everything Design\`; slug \`/clients\`.

\*\*\#\# OVERALL LAYOUT\*\* — Standard global navbar → page H1 → one big responsive card grid → global footer. No breadcrumb, no sidebar.

\*\*\#\# SECTIONS — exact order:\*\*  
1\. \*\*Global navbar\*\* — logo; \`OUR WORK · BLOGS · CASE STUDIES · REVIEWS · CLIENTS · TEAM\`; \`BOOK A CALL\` \+ \`+91 8547807934\`.  
2\. \*\*H1\*\* — \`Worked with companies from a diverse set of industries\` (verbatim — same headline reused from the homepage industries section).  
3\. \*\*Client grid\*\* — uniform card grid; each card \= client logo (or name) \+ the tag label \`PROJECTS\`, linking to that client's \`/clients/{slug}\` hub. Render one card per client (the live page shows \~40+ identical \`PROJECTS\`-tagged cards) → \*reproduce the full client list/logos from source.\* Squared card corners (custom CSS override), hover-reveal on each tile.  
4\. \*\*Global footer\*\* (full sitemap footer — same as defined in the standalone batch).

\*\*\#\# INTERACTIONS / CUSTOM CSS NOTES\*\* — squared-off card corners; hover/reveal interaction on each client tile; logo grid responsive wrapping.

\*\*\#\# RESPONSIVE\*\* — desktop 4–5 cols; tablet 3 cols; mobile 2 cols (or 1 for large logos).

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES\*\* — This is an \*index/directory\*, not a client hub. No "How we helped" narrative, no project team, no meta block — just the grid of clickable client tiles. Each tile links \*into\* the Client Hub template.

# Contact / Book a Call

\# FOOTER BATCH — PROMPT B of 6 — Contact / Book a Call (\`/contact-us\`)

\*\*\#\# ROLE & GOAL\*\* — Build the contact page: a lean page whose centerpiece is an embedded Calendly booking widget, plus direct email and a brand video.

\*\*\#\# TECH STACK\*\* — \*(identical to the set: React 18.3.1 UMD → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides; Blinker \+ Fraunces @font-face; semantic-HTML fallback with same class names.)\*

\*\*\#\# PAGE META\*\* — \`\<title\>\` \`Contact Us | Get a Free Brand Consultation | Everything Design\`; slug \`/contact-us\`.

\*\*\#\# OVERALL LAYOUT\*\* — Global navbar → breadcrumb → hero headline \+ contact details \+ video → Calendly embed slot → brand-promise line → global footer. Single centered column, sparse.

\*\*\#\# SECTIONS — exact order:\*\*  
1\. \*\*Global navbar\*\* — logo; \`OUR WORK · BLOGS · CASE STUDIES · REVIEWS · CLIENTS · TEAM\`; \`BOOK A CALL\` \+ \`+91 8547807934\`.  
2\. \*\*Hero\*\* — H1 \`Talk to us for your Branding\`; breadcrumb \`HOME › CONTACT US\`.  
3\. \*\*Contact details \+ media\*\* — email link \`hello@everything.design\`; a \`Play Video\` brand video player.  
4\. \*\*Calendly booking embed\*\* — a third-party Calendly inline-widget slot. While loading it shows the verbatim placeholder text: \*"Oops\!, Calendly is loading, please wait..."\*. ⚠️ Spec this as an \*\*embed placeholder only\*\* — \`\<div class="calendly-inline-widget" data-url="{{CALENDLY\_URL}}"\>\` with the loading message as fallback. Do \*\*not\*\* hardcode any real booking URL, account, or credentials; leave \`{{CALENDLY\_URL}}\` as a configurable token.  
5\. \*\*Brand-promise line\*\* (verbatim): \*"We exist to design B2B businesses their right to win & communicate with clarity, personality, and a point of view, making the right people want to remember & associate."\*  
6\. \*\*Global footer\*\* (full sitemap footer — same as defined in the standalone batch).

\*\*\#\# INTERACTIONS / CUSTOM CSS NOTES\*\* — video play/modal; Calendly script loads async (show fallback text until ready); centered narrow column.

\*\*\#\# RESPONSIVE\*\* — desktop centered \~720px column; tablet full-width with side padding; mobile single column, Calendly widget full-width, video scales to 100%.

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES\*\* — No custom form fields (booking is handled entirely by the Calendly embed — the page has \*\*no native \`\<input\>\` elements\*\*), no card grids, no narrative body. It's a thin shell around a third-party scheduler \+ email \+ video.

\---

# FAQ Index

\# FOOTER BATCH — PROMPT C of 6 — FAQ Index (\`/faq\`)

\*\*Copy note:\*\* The live index holds \*\*\~100 questions\*\*, each an accordion item that also links out to its own \`/faq/{slug}\` page. Don't ask the agent to invent copy — spec the structure and mark the Q\&A list as \*"reproduce the full question list \+ answers from source."\*

\*\*\#\# ROLE & GOAL\*\* — Build the site-wide FAQ index: one long searchable/expandable accordion of all FAQ entries, each linking to its dedicated \`/faq/{slug}\` SEO page.

\*\*\#\# TECH STACK\*\* — \*(identical to the set: React 18.3.1 UMD → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides incl. the FAQ accordion; Blinker \+ Fraunces @font-face; semantic-HTML fallback with same class names.)\*

\*\*\#\# PAGE META\*\* — \`\<title\>\` \`FAQ \- Branding Design Agency in Bengaluru\`; slug \`/faq\`.

\*\*\#\# OVERALL LAYOUT\*\* — Global navbar → H1 → single long accordion list (full width, centered column) → global footer. No breadcrumb, no sidebar ToC.

\*\*\#\# SECTIONS — exact order:\*\*  
1\. \*\*Global navbar\*\* — logo; \`OUR WORK · BLOGS · CASE STUDIES · REVIEWS · CLIENTS · TEAM\`; \`BOOK A CALL\` \+ \`+91 8547807934\`.  
2\. \*\*H1\*\* — \`FAQs\`.  
3\. \*\*FAQ accordion\*\* — \~100 collapsible items rendered in source order. Each item: question as the clickable header (each header is an \`\<h2\>\` on the live page), expandable answer body, \*\*and the question text also links to its dedicated page \`/faq/{slug}\`\*\* (e.g. \`How should a defense-tech startup approach branding for procurement and investors?\` → \`/faq/defense-tech-startup-branding-procurement-investors\`). The list spans topic clusters (defense-tech branding, aerospace/defense, legal/compliance/professional-services, B2B explainer-video agencies, fintech/cybersecurity/proptech/energy explainer videos, 3D, multilingual, etc.) → \*reproduce the full question list, answers, and per-item slugs from source.\*  
4\. \*\*Global footer\*\* (full sitemap footer).

\*\*\#\# INTERACTIONS / CUSTOM CSS NOTES\*\* — accordion expand/collapse (custom CSS, one open at a time or independent toggles to match source); each question header is both a toggle and a link to its \`/faq/{slug}\` page; smooth height transition; chevron rotate on open.

\*\*\#\# RESPONSIVE\*\* — desktop centered single column (\~800px); tablet full width with padding; mobile single column, larger tap targets on headers.

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES\*\* — This is the \*\*FAQ hub/index\*\* (a list of \*all\* questions, each linking out), \*\*not\*\* the single-topic \`/faq/{slug}\` page from Prompt 6 (which is one focused Q\&A with hero \+ breadcrumb \+ long answer body). Don't merge them: the index has no breadcrumb and no single-topic hero — it's purely the master accordion. It is the "hub" in a hub-and-spoke; the \`/faq/{slug}\` pages are the spokes.

# No-Brainer Offer

\# FOOTER BATCH — PROMPT D of 6 — "No-Brainer Offer" / Why Us (\`/why-us\`)

\*\*Copy note:\*\* This is a long sales-letter page with a distinct conversational voice. Mark the long body blocks \*"reproduce full body copy from source."\* Preserve the stray \`‍\` zero-width-joiner artifacts and casual lowercase styling as-is.

\*\*\#\# ROLE & GOAL\*\* — Build the long-form "why pick us" sales-letter page: a persuasive, scrolling narrative that mirrors a buyer's agency-evaluation journey, ending in a soft CTA.

\*\*\#\# TECH STACK\*\* — \*(identical to the set: React 18.3.1 UMD → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides; Blinker \+ Fraunces @font-face; semantic-HTML fallback with same class names.)\*

\*\*\#\# PAGE META\*\* — \`\<title\>\` \`Why Us? | Everything Design — Your B2B Website Agency Partner\`; slug \`/why-us\`.

\*\*\#\# ALT NAVBAR (IMPORTANT — different from the standard one)\*\*  
This page uses the \*\*marketing navbar\*\*, not the global one. Links: \`OUR WORK · THE RIGHT FIT · THE TEAM · WHAT WE DO · PRICING\` \+ right-side CTA button \`Book an Intro\`. (This same alt navbar is reused on \`/why-everything-design\` — Prompt E.)

\*\*\#\# OVERALL LAYOUT\*\* — Single centered editorial column, sales-letter style: short punchy paragraphs, bulleted "hard truths," pull-quote testimonials, a testimonial-video CTA, then a closing call-to-action. No breadcrumb.

\*\*\#\# SECTIONS — exact order (verbatim copy):\*\*  
1\. \*\*Alt navbar\*\* (above).  
2\. \*\*H1\*\* — \`If you're reading this, you are on the hunt for a team who can help you get a B2B website.\`  
3\. \*\*Evaluation-journey intro\*\* — paragraphs about comparing against "3 other agencies," with the inline list of what buyers check: \*what process they follow · what solutions they provide · the kind of clients they've worked with · what it would be like working with them · what the leadership is like · past projects · will they run away in the middle of the project · testimonials · pricing · even location.\* → closes with \*"You want to make sure you pick the best option… you don't want to lose your sleep over this."\* and the mirror line \*"This is similar to the journey your potential customer will also go through…"\* → \*reproduce full copy from source.\*  
4\. \*\*Promise line\*\* — \`We create websites that don't confuse the visitors. That's our promise.\`  
5\. \*\*"Hard truth" bullet list\*\* — \*"The hard truth is, most websites are…"\* → bullets: \*made without thinking about your brand positioning · difficult to navigate and understand · loaded with generic, meaningless content · overloaded with technical jargon · confusing and unclear in their messaging · lacking essential information · overwhelming with too much content\!\!\!\*  
6\. \*\*Empathy/positioning paragraphs\*\* — \*"You might have given this a shot with your busy internal team already…"\* → \*reproduce from source.\*  
7\. \*\*Pull-quote testimonials\*\* — quote 1: \*"You understood our business, products and the industry we operate in better than some of my internal teams."\* → CTA label \`WATCH 10:55 MIN TESTIMONIAL VIDEO\` → quote 2: \*"They actually understood the product, what is getting built out…"\* (reproduce full quote from source).  
8\. \*\*What-we-do tail\*\* — list referencing services incl. \`SEO, Link Building\`, \`Performance Marketing\`.  
9\. \*\*Closing CTA\*\* — \*"So that's us & our take on B2B websites in a nutshell. Reach out to us, and let's get to know you too\!"\* → \`We design your right to win, Say Hi\!\` → \`Let's get that website communication effective.\` (CTA button → \`/contact-us\` / \`Book an Intro\`).  
10\. \*\*Footer\*\* — (use global footer; if the live page omits it under the alt-nav layout, keep just the closing CTA — match source).

\*\*\#\# INTERACTIONS / CUSTOM CSS NOTES\*\* — testimonial video modal/play; reveal-on-scroll for paragraphs; pull-quotes styled in Fraunces serif; preserve \`‍\` joiner characters; casual lowercase kept verbatim.

\*\*\#\# RESPONSIVE\*\* — desktop centered \~720px reading column; tablet padded full-width; mobile single column, larger line-height, full-width video.

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES\*\* — Uses the \*\*alt marketing navbar\*\* (not the standard one). It's a \*\*prose sales letter\*\* — no card grids, no accordion, no data tables, no team roster. Tone is first-person and conversational; don't "clean up" the lowercase/casual voice.

# Why Everything Design

\# FOOTER BATCH — PROMPT E of 6 — "Why Everything Design" landing page (\`/why-everything-design\`)

\*\*Copy note:\*\* Multi-section marketing landing page. Preserve the intentional line-breaks inside headings (the H1 and several H2s are deliberately broken across lines) and keep the source typo \`We're the not right fit if...\` verbatim.

\*\*\#\# ROLE & GOAL\*\* — Build the flagship "why choose us" landing page: a rich, multi-section sales page (hero \+ showreel \+ testimonials \+ featured projects \+ fit/not-fit \+ team \+ CTA).

\*\*\#\# TECH STACK\*\* — \*(identical to the set: React 18.3.1 UMD → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides; Blinker \+ Fraunces @font-face; semantic-HTML fallback with same class names.)\*

\*\*\#\# PAGE META\*\* — \`\<title\>\` \`Why Choose Everything Design | B2B Branding & Web Design Agency\`; slug \`/why-everything-design\`.

\*\*\#\# NAVBAR\*\* — Uses the \*\*alt marketing navbar\*\* (same as \`/why-us\`): \`OUR WORK · THE RIGHT FIT · THE TEAM · WHAT WE DO · PRICING\` \+ \`Book an Intro\` CTA.

\*\*\#\# OVERALL LAYOUT\*\* — Full-width sectioned landing page, each section a distinct band: hero → showreel → testimonials → featured-projects grid → two-column fit/not-fit → team strip → closing CTA → global footer.

\*\*\#\# SECTIONS — exact order (verbatim copy):\*\*  
1\. \*\*Alt navbar\*\* (above).  
2\. \*\*Eyebrow \+ hero\*\* — intro line \`No matter how complex your product is, from copywriting to web development, we can help you all the way in 10 to 14 weeks.\` \+ prompt \`Why you should consider us for your project?\` \+ \`Click to Read \---\`; \*\*H1\*\* (keep line breaks): \`We make B2B websites that communicate your value proposition in the most compelling way\`.  
3\. \*\*Showreel\*\* — \`SHOWREEL\` video block.  
4\. \*\*"How we are different, in our client's words"\*\* (H2) — testimonial band with funding-stat chips: \`SERIES A | $2.4M\` · \`DEEP TECH | $3.3M\` · \`CYBERSECURITY | GLOBAL\` · \`INSUR-TECH | $3.97M\`; CTA \`WATCH TESTIMONIAL\`; quote: \*"Our entire experience, from design concept to the final product was glitch-free. Conversations with our clients have become so much more easier now."\* — \`Sharan Urubail\`, \`CEO & CO-FOUNDER\`.  
5\. \*\*"Featured Projects"\*\* (H2) — case-study card grid (6 cards, \`X of 6\`). Each card: discipline tags (e.g. \`BRAND IDENTITY · WEBSITE DESIGN · WEBSITE DEVELOPMENT\`), a result blurb, and \`Read Case Study\` / \`Visit Website\` links. Verbatim examples: Ximkart (\*"Ximkart was able to communicate the value proposition to prospects via website clearly and was able to bring down the sales effort."\*), Botim (\*"A new website to position Botim as a super app…"\*), a deep-tech platform, EMEA super app, global cybersecurity company → \*reproduce all 6 cards from source.\*  
6\. \*\*"We're the right fit if..."\*\* (H2) — bullet list (verbatim): \*require on time delivery (this means you can go live quicker and start selling sooner) · if you're looking for a team that understands branding and how to take it forward on the website · follow universal good work ethics; hire thoughtfully, let them do their job and not micro-manage\* → reproduce full list from source.  
7\. \*\*"We're the not right fit if..."\*\* (H2 — keep typo verbatim) — bullets: \*are an early stage startup and think branding is expensive · need everything done in 3 weeks, but need 1 week to provide feedback · haven't prioritized website for your business and hence tight on budget.\*  
8\. \*\*"The team that's making B2B interesting"\*\* (H2) — team strip of \`Meet {Name}\` chips/cards: Ekta, Mejo, Sanjana, Tanmaya, Athira, Akhilesh, Arpan, S… → \*reproduce full roster from source\* (links to \`/author/{slug}\` or team profiles).  
9\. \*\*"Communicate this on your website"\*\* (H2) — closing value section.  
10\. \*\*"Want a no-brainer offer?"\*\* (H2) — final CTA band (links to \`/why-us\` / \`Book an Intro\` / \`/contact-us\`).  
11\. \*\*Global footer\*\* (full sitemap footer; bottom strip shows \`WEBSITE DEVELOPED BY EVERYTHING FLOW\` and \`LAST UPDATED ON: MAR 10, 2026\`).

\*\*\#\# INTERACTIONS / CUSTOM CSS NOTES\*\* — showreel \+ testimonial video modals; reveal-on-scroll per band; funding-stat chips styled as pills; project cards with hover; \`X of 6\` counter; preserve heading line-breaks.

\*\*\#\# RESPONSIVE\*\* — desktop multi-column project grid \+ side-by-side fit/not-fit; tablet 2-col; mobile single column, stat chips wrap, team chips scroll horizontally.

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES\*\* — Richer than \`/why-us\`: \`/why-us\` is a plain prose sales letter; \*\*this\*\* page is a fully-sectioned landing page with showreel, stat chips, a 6-card featured-projects grid, explicit right-fit/not-fit columns, and a team strip. Both share the alt navbar, but don't merge their content. Unlike the homepage, this is conversion-focused (fit/not-fit \+ no-brainer CTA) rather than a broad overview.

# Recent Updates / Changelog

\# FOOTER BATCH — PROMPT F of 6 — Recent Updates / Changelog (\`/recent-updates\`) — FINAL

\*\*Copy note:\*\* A dated news-feed / changelog. The entry list is long — spec the structure and mark \*"reproduce full update list from source."\* Preserve em-dash titles (e.g. \`Industry Page Launch — Cybersecurity Sector\`).

\*\*\#\# ROLE & GOAL\*\* — Build the "what's new" changelog page: a byline-led, dated feed of current and past project updates, split into a featured highlight, a numbered current-quarter list, and an "All Updates" archive.

\*\*\#\# TECH STACK\*\* — \*(identical to the set: React 18.3.1 UMD → \`\#root\`; Babel Standalone 7.29.0 inline JSX, no build; Design Asylum Studio v3 \`\_ds\_bundle.js\` / \`window.DesignAsylumDesignSystem\_594314\` / \`styles.css\` / tokens; custom-CSS \`\<style\>\` overrides; Blinker \+ Fraunces @font-face; semantic-HTML fallback with same class names.)\*

\*\*\#\# PAGE META\*\* — \`\<title\>\` \`What's New | Everything Design Projects & Updates\`; slug \`/recent-updates\`.

\*\*\#\# OVERALL LAYOUT\*\* — Standard global navbar → article-style header (date \+ byline \+ H1 \+ intro) → featured highlight block → numbered "current projects" list with status tags → "All Updates" archive list → global footer. Single centered editorial column.

\*\*\#\# SECTIONS — exact order (verbatim copy):\*\*  
1\. \*\*Global navbar\*\* — logo; \`OUR WORK · BLOGS · CASE STUDIES · REVIEWS · CLIENTS · TEAM\`; \`BOOK A CALL\` \+ \`+91 8547807934\`.  
2\. \*\*Article header\*\* — meta line \`Updated May 2026\` · byline \`By Mejo Kuriachan\`; \*\*H1\*\* \`Ongoing Branding and Website Projects at Everything Design\`; intro: \*"Latest projects and milestones — brand strategy, naming, web, motion, and film for B2B companies. You can see Everything Design's currently active client engagements here."\*  
3\. \*\*Featured highlight\*\* — tag \`Q1 2026 HIGHLIGHT\`; H2 \`Brand Refresh and Web Development for Cybersecurity Brand\`; body \*"Under the leadership of Ekta and Sanjana Everything Design revamped the brand and website for SISA, a leading cybersecurity brand."\*; \`Know more\` link.  
4\. \*\*"Current Projects and Updates from Everything Design"\*\* (H2) — sub-line \*"What we've shipped, launched, and built this quarter."\* → \*\*numbered list\*\* of update cards, each with: index (\`01\`, \`02\`…), status tag(s) (\`ONGOING\`, \`PARTNERSHIP\`, etc.), an H2 title, and a one-line description. Verbatim examples: \`01 · ONGOING · Web Design for Turno, a battery intelligence startup\` (\*"Positioning, Messaging, 3D, Brand Refresh \- its progressing really well. Turno a Stellaris funded company."\*); \`02 · PARTNERSHIP · ONGOING · Web Design for an Australian CPaaS brand\` (\*"Website design and Webflow development in partnership with Focus Lab."\*); \`03 · ONGOING · 4 Ad films for Zuora\`; plus \`Branding for a Nuclear Energy startup\`, \`Website Project with a Defense Startup\`, \`Venture Studio Logo Design\`, \`ReBranding for a M\&A Firm\`, \`Messaging and Web Development for a leading IT Product Brand\` → \*reproduce the full numbered list with tags \+ descriptions from source.\*  
5\. \*\*"All Updates"\*\* (H2) — archive feed of shipped items (titles only, em-dash style): \`Industry Page Launch — Cybersecurity Sector\`, \`Industry Page Launch — Energy Sector\`, \`Four ad films for the subscription software platform, Zuora.\`, \`3D Works Page — Now Live\`, \`An AI Report landing page for one of India's oldest VC firms, Z47.\`, \`Strategy, messaging, website, and film for the battery intelligence company, Turno.\`, \`Teaser Film — Armory Defence Tech Website Launch\`, \`Brand Identity and Website for a Legal Tech Platform\`, \`Website for Defence Startup \- Armory\` … → \*reproduce full archive list from source.\*  
6\. \*\*Global footer\*\* (full sitemap footer).

\*\*\#\# INTERACTIONS / CUSTOM CSS NOTES\*\* — status tags styled as pills (\`ONGOING\`, \`PARTNERSHIP\`, \`Q1 2026 HIGHLIGHT\`); numbered list markers in display type; reveal-on-scroll per entry; \`Know more\` links to relevant case study/client pages.

\*\*\#\# RESPONSIVE\*\* — desktop centered \~760px column; tablet padded full width; mobile single column, tags wrap above titles, numbers shrink.

\*\*\#\# KEY DIFFERENCE FROM OTHER TEMPLATES\*\* — A \*\*dated changelog/news feed\*\* with author byline and status-tagged entries — unlike the blog (long-form single article), the clients index (logo grid), or case studies (project deep-dives). The defining elements are the "Updated {month}" \+ byline header, numbered current-projects list with status pills, and an "All Updates" archive.

\---

