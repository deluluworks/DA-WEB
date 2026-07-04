import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { ProjectCard, type Project } from "@/components/author/ProjectCard";
import { TagCloud } from "@/components/author/TagCloud";

export const metadata: Metadata = {
  title: "Tanmaya Rao",
  description:
    "Tanmaya Rao is the Lead Brand Designer & Illustrator at Design Asylum, celebrated for her mastery of illustration and her ability to give B2B brands a distinct, human personality.",
};

const SERVICE_TAGS = [
  "Logo Design",
  "B2B Branding",
  "B2B Web Design",
  "Illustration",
  "Website Redesign",
  "Brand Refresh",
  "Brochure Design",
];

const PROJECTS: Project[] = [
  {
    name: "Armory",
    cta: "Visit Website",
    desc: "Brand identity and website design for Armory, a security and infrastructure tooling company.",
  },
  {
    name: "Sevenloop",
    cta: "View Website",
    feat: true,
    subs: ["End To End Custom Manufacturing Solution Provider", "Funded by Z47"],
    desc: "Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider.",
  },
  {
    name: "Hand In Hand India",
    cta: "Visit Website",
    desc: "Brand and web design for Hand In Hand India, a livelihoods and social-impact NGO.",
  },
  {
    name: "Lakshmigraha",
    cta: "Visit Website",
    desc: "Brand identity for Lakshmigraha, a heritage gold and jewellery manufacturing business.",
  },
  {
    name: "Transitry",
    cta: "Visit Website",
    desc: "Branding and website design for Transitry, a logistics and mobility technology platform.",
  },
  {
    name: "Revind Ai",
    cta: "Visit Website",
    desc: "Branding for Revind Ai, an AI platform for metals, manufacturing, and industrial procurement.",
  },
  {
    name: "HSR Founder's Club GTM Week 2024 | Promo Film",
    cta: "Watch Video",
    desc: "Concept, illustration, and direction for the GTM Week 2024 promotional film.",
  },
  {
    name: "Sevenloop | Explainer Film",
    cta: "Watch Video",
    desc: "Brand explainer film for Sevenloop, telling the custom-manufacturing story with conviction.",
  },
  {
    name: "OneLern Scroll Animation Page",
    cta: "Visit Website",
    desc: "Illustration and scroll-animation design for OneLern, an ed-tech platform for schools.",
  },
  {
    name: "Simpli Contract | Brand Video",
    cta: "Watch Video",
    desc: "Brand video for SimpliContract, an enterprise contract lifecycle management platform.",
  },
];

const BLOGS = [
  "Climate Tech Website Agency | Cleantech Web Design for Startups & Scale-ups",
  "Top Brand Design Agencies in Bangalore (Bengaluru): 2026 Shortlist + Buyer Guide",
  "The Psychology & Performance of Scroll Animations",
  "How to Build Startup Credibility Fast: A B2B Founder's Guide",
  "Branding Process",
  "The Art of Iconography: Crafting Distinct Icons for a Professional Online Presence",
  "Brand Photography in B2B Branding",
  "Good Food Movement: Branding & Web Design Case Study",
  "Are People Illustrations a Good Idea on B2B Websites?",
  "The Brand Book: Your Recipe for a Successful Brand Book",
  "How to Use Illustrations on a B2B Website (With Examples)",
  "Dynamic Logos: When and How to Make an Impact?",
  "How can Illustrations be employed in your B2B Website as a powerful marketing tool?",
];

// Source has "Solution Experties" / "Industry Experties" (typo for
// "Expertise") in both `auth-blocks.jsx` TagCloud headings — ported
// verbatim as editorial copy, not a technical rendering bug; flagging for
// human review rather than silently correcting the source's wording.
const SOLUTION_TAGS = [
  "Startup Homepage",
  "Real Estate",
  "Website Animation",
  "Fintech Branding",
  "Financial",
  "Financial Sector Brand",
  "Fintech Web Design",
  "Venture Capital Website",
  "Global Brand Website",
  "Energy",
  "Publication Design",
  "Real Estate Branding",
  "Logistics",
  "Technology Branding",
  "Climate Tech",
  "B2B Website Revamp",
  "Healthcare Tech",
  "Medical",
  "Annual Report",
  "SaaS Brand",
  "SaaS ReBrand",
  "Law Firm Branding",
  "Service Company Rebranding",
  "Deep Tech",
];

const INDUSTRY_TAGS = [
  "Technology Businesses",
  "Renewable Energy",
  "Manufacturing",
  "Healthcare",
  "Law Firm",
  "Hospitality",
  "Aviation Web Design",
  "Real Estate",
  "NGO",
  "DeepTech",
];

/** Ported from author/auth-app.jsx + author/auth-blocks.jsx (`Author - Tanmaya Rao.html`). */
export default function TanmayaRaoAuthorPage() {
  const strip = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="auth-page">
      <RevealObserver />
      <header className="da-wrap auth-header">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Team", href: "/team" }, { label: "Tanmaya Rao" }]} />
        <div className="auth-header-grid">
          <div className="auth-photo">
            <div className="auth-photo-glow" aria-hidden />
            <span className="auth-photo-initials" aria-hidden>
              TR
            </span>
          </div>
          <div>
            <span className="auth-role">Lead Brand Designer | Illustrator</span>
            <h1 className="auth-h1">Tanmaya Rao</h1>
          </div>
        </div>
      </header>

      <section className="da-wrap auth-section">
        <div className="auth-about-grid reveal-up">
          <div>
            <Eyebrow>About</Eyebrow>
            <h2 className="auth-about-h2">Tanmaya Rao</h2>
          </div>
          <div className="auth-about-body">
            <p>
              Tanmaya Rao is the Lead Brand Designer &amp; Illustrator at Design Asylum, celebrated
              for her mastery of illustration and her ability to give B2B brands a distinct, human
              personality. Across Ximkart, Revind, Sevenloop, and a long line of industrial and SaaS
              clients, she has built a deep fluency in the manufacturing, metals, and mechanical space
              that makes her design direction sharper and more informed from day one.
            </p>
            <p>
              Her work pairs strategic thinking with craft &mdash; custom illustration systems,
              iconography, and visual identities that hold up across a website, a brochure, and a
              brand film. Clients return to her precisely because the strategic context carries
              forward; she is often the through-line that keeps a brand coherent as it grows.
            </p>
            <p>
              The result is a body of work that makes brands memorable to the right audiences &mdash;
              with clarity, personality, and taste.
            </p>
          </div>
        </div>
      </section>

      <TagCloud title="Service expertise" tags={SERVICE_TAGS} />

      <section className="da-wrap auth-section">
        <div className="svc-marquee-label reveal-up">Tanmaya Rao&rsquo;s key clients</div>
        <div className="svc-marquee reveal-up">
          <div className="svc-marquee-track">
            {[...strip, ...strip].map((n, i) => (
              <span className="svc-marquee-item" key={i}>
                <span>Projects</span>
                <em aria-hidden>&#10022;</em>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="da-wrap auth-section">
        <h2 className="auth-section-head">Tanmaya Rao&rsquo;s projects</h2>
        <div className="svc-grid reveal-up">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} i={i} />
          ))}
        </div>
      </section>

      <section className="da-wrap auth-section reveal-up">
        <h2 className="auth-section-head">Tanmaya Rao&rsquo;s blogs</h2>
        <div>
          {BLOGS.map((t) => (
            <div key={t} className="auth-blog">
              <p className="auth-blog-t">{t}</p>
              <span className="auth-blog-cta">
                Visit blog <span aria-hidden>&rarr;</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <TagCloud title="Solution Experties" tags={SOLUTION_TAGS} />
      <TagCloud title="Industry Experties" tags={INDUSTRY_TAGS} />
    </div>
  );
}
