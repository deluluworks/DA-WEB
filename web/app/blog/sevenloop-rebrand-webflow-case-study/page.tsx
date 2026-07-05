import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { getPostBySlug } from "@/lib/content/blog";
import { ArticleBody, extractToc } from "@/components/blog/ArticleBody";
import { BlogToc } from "@/components/blog/BlogToc";

const SLUG = "sevenloop-rebrand-webflow-case-study";
const post = getPostBySlug(SLUG);

export const metadata: Metadata = {
  title: { absolute: post?.frontmatter.title ?? "Sevenloop Rebrand & Webflow Site: A 5-Month Case Study" },
  description:
    post?.frontmatter.summary ??
    "How Sevenloop went from B2B product company to enterprise-ready brand in 5 months — repositioning, identity, Webflow build, and the conversations it opened.",
};

/** FAQ block — ported verbatim from `blog/blog-extras.jsx`; native <details> so
 *  it works without JS (same pattern as the /faq index page). */
const FAQ: { q: string; sub?: string; a: string }[] = [
  {
    q: "How much does a B2B website design project typically cost?",
    a: "It depends on scope — a focused redesign sits in one range, a full brand-plus-Webflow build like Sevenloop sits in another. The honest answer is that cost tracks complexity: number of templates, depth of strategy, custom illustration, motion, and collateral. We scope every project against the outcome you need, then quote a fixed engagement so there are no surprises mid-build.",
  },
  {
    q: "Can a B2B branding agency help with website design?",
    sub: "Do B2B branding agencies also handle website design?",
    a: "Yes — and the best ones treat them as one job. Brand without a site is a guideline no one sees; a site without brand is a template. We run strategy, identity, copy, and Webflow build under a single team so the thinking carries all the way from positioning to the live page.",
  },
  {
    q: "Can one agency handle branding and Webflow development?",
    a: "That's exactly how we're set up. The same team that writes the manifesto and designs the identity builds the Webflow site and the motion that goes with it. On Sevenloop, that continuity is why the strategic thread never got lost between strategy, design, build, and film.",
  },
];

const SOLUTIONS = [
  "Website Redesign Services",
  "Website Redesign",
  "B2B SaaS Website Redesign Agency",
  "Website Revamp for B2B SaaS",
  "Website Redesign for Series A Startup",
];

/* The export's two "More blogs" teasers have no article body in the source, so
 * they render as decorative cards (no invented route). The on-topic Sevenloop
 * case-study links are real internal destinations. */
const RELATED = [
  { title: "Employer Branding and Talent Acquisition: A Strategic Guide for B2B Tech", author: "Mejo Kuriachan", updated: "June 16, 2026", reviewer: "Mejo Kuriachan", tone: "iris" },
  { title: "Messaging Is Decision-Making: The 7-Step Process Before Copy and Design", author: "Mejo Kuriachan", updated: "June 12, 2026", reviewer: "Ekta Manchanda", tone: "maroon" },
];

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function SevenloopBlogArticle() {
  if (!post) notFound();
  const { frontmatter, content } = post;
  const toc = extractToc(content);

  return (
    <>
      <RevealObserver />

      <header className="da-wrap bl-article-head">
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Sevenloop Brand Website Redesign" },
          ]}
        />
        <h1 className="bl-title">{frontmatter.title}</h1>
        <p className="bl-dek">{frontmatter.summary}</p>
        <div className="bl-byline">
          <div className="bl-byline-item">
            <span className="bl-byline-k">Author</span>
            <span className="bl-byline-v">{frontmatter.author}</span>
          </div>
          {frontmatter.lastUpdated && (
            <div className="bl-byline-item">
              <span className="bl-byline-k">Last updated</span>
              <span className="bl-byline-v">{formatDate(frontmatter.lastUpdated)}</span>
            </div>
          )}
        </div>
        <div className="bl-hero reveal-up">
          <div aria-hidden className="bl-hero-glow gradient-loop" />
          <span className="bl-hero-cap">{frontmatter.heroCaption ?? frontmatter.title}</span>
        </div>
      </header>

      <div className="da-wrap bl-layout">
        <BlogToc items={toc} />
        <ArticleBody md={content} />
      </div>

      <section className="da-wrap bl-extra reveal-up">
        <h2 className="svc-section-h2">Frequently asked questions</h2>
        <div className="bl-faq">
          {FAQ.map((item, i) => (
            <details key={item.q} className="bl-faq-item" open={i === 0}>
              <summary className="bl-faq-q">
                <span>{item.q}</span>
                <span className="bl-faq-icon" aria-hidden />
              </summary>
              <div className="bl-faq-a-inner">
                {item.sub && <div className="bl-faq-sub">{item.sub}</div>}
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="da-wrap bl-extra reveal-up">
        <div className="bl-author">
          <div className="bl-author-portrait" aria-hidden>
            <div className="bl-author-glow" />
            <span>AK</span>
          </div>
          <div>
            <span className="bl-author-role">Lead Designer | Content Strategist</span>
            <h3 className="bl-author-name">Athira Krishnan</h3>
            <p className="bl-author-bio">
              Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and
              B2C websites.
            </p>
          </div>
        </div>
      </section>

      <section className="da-wrap bl-extra reveal-up">
        <h2 className="svc-section-h2">Solutions we offer</h2>
        <div className="bl-soln-row">
          {SOLUTIONS.map((it) => (
            <span key={it} className="bl-soln">
              {it} <span aria-hidden>&#8599;</span>
            </span>
          ))}
        </div>
      </section>

      <section className="da-wrap bl-extra bl-extra-last reveal-up">
        <h2 className="svc-section-h2">Explore the Sevenloop work</h2>
        <div className="bl-crosslinks">
          <Link href="/clients/sevenloop" className="bl-crosslink">
            <span className="bl-crosslink-k">Client hub</span>
            <span className="bl-crosslink-t">Sevenloop — brand, website, brochure &amp; film</span>
          </Link>
          <Link href="/clients/sevenloop/branding" className="bl-crosslink">
            <span className="bl-crosslink-k">Case study</span>
            <span className="bl-crosslink-t">Sevenloop branding &amp; project brochure</span>
          </Link>
        </div>

        <h2 className="svc-section-h2 bl-more-h">More blogs</h2>
        <div className="bl-related-grid">
          {RELATED.map((p) => (
            <div key={p.title} className={"bl-related bl-related-" + p.tone}>
              <div className="bl-related-thumb" aria-hidden>
                <div className="bl-related-thumb-glow" />
              </div>
              <h3 className="bl-related-title">{p.title}</h3>
              <div className="bl-related-meta">
                {[
                  ["Author", p.author],
                  ["Updated", p.updated],
                  ["Reviewed by", p.reviewer],
                ].map(([k, v]) => (
                  <div key={k} className="bl-related-metaitem">
                    <span className="bl-related-metak">{k}</span>
                    <span className="bl-related-metav">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
