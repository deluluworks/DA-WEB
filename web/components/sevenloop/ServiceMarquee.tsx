import Link from "next/link";

/**
 * Service-provided marquee — ported from `sevenloop/sl-team-services.jsx`
 * `SLServices`. CSS-only dual-row marquee (no JS). The export's chips were all
 * unwired `href="#"`; only services with a real built route link out (currently
 * "Branding Agency" → /service/branding-agency), the rest render as decorative
 * chips — same "no invented destination" policy used across the port.
 */

const SERVICES = [
  "Web Design Agency", "Branding Agency", "Web Development Agency", "Website Copywriting Agency",
  "Logo Design Agency", "Webflow Agency", "Animated Explainer Video", "Website Redesign",
  "Rebranding Agency", "Landing Page Design", "Lottie Animation Agency", "Brand Strategy Agency",
  "Brand Strategy Consultancy", "Illustration Agency", "Ad Agency for B2B", "Brochure Design Agency",
  "B2B Messaging Agency", "Animation Video Agency", "Brand Positioning Agency", "Product Messaging Agency",
  "Product Launch Video Agency", "B2B Film Agency", "Launch Video Agency", "Website Redesign Services",
  "B2B Branding Agency", "B2B Web Design Agency", "Website Copywriting", "B2b Video Marketing Agency",
  "Brand Refresh Agency",
];

/** Services with a real route in the site today. */
const SERVICE_ROUTES: Record<string, string> = {
  "Branding Agency": "/service/branding-agency",
};

function Chip({ name }: { name: string }) {
  const href = SERVICE_ROUTES[name];
  const inner = (
    <>
      <span className="sl-chip-name">{name}</span>
      <span className="sl-chip-cta">
        Visit service <span aria-hidden>&#8599;</span>
      </span>
    </>
  );
  return href ? (
    <Link className="sl-chip" href={href}>
      {inner}
    </Link>
  ) : (
    <span className="sl-chip">{inner}</span>
  );
}

function MarqueeRow({ items, rowClass }: { items: string[]; rowClass: string }) {
  const loop = [...items, ...items];
  return (
    <div className="sl-chip-wrap">
      <div className={"sl-chiptrack " + rowClass}>
        {loop.map((s, i) => (
          <Chip key={i} name={s} />
        ))}
      </div>
    </div>
  );
}

export function ServiceMarquee() {
  const half = Math.ceil(SERVICES.length / 2);
  const rowA = SERVICES.slice(0, half);
  const rowB = SERVICES.slice(half);
  return (
    <div className="sl-svc-rows">
      <MarqueeRow items={rowA} rowClass="sl-chip-row-a" />
      <MarqueeRow items={rowB} rowClass="sl-chip-row-b" />
    </div>
  );
}
