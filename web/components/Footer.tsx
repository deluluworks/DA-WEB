import Link from "next/link";
import { brand, footerColumns, socials } from "@/lib/site-config";

const legalLines = [
  `© Design Asylum ${new Date().getFullYear()}`,
  "Built in-house by Asylum Build",
];

/** Dark/obsidian footer — ported from sevenloop/sl-shared.jsx `SLFooter`. */
export function Footer() {
  return (
    <footer className="da-footer">
      <div className="da-wrap">
        <div className="da-footer-top">
          <p className="da-footer-tagline">
            We exist to design B2B businesses their right to win &amp; communicate with
            clarity, personality, and a point of view, making the right people want to
            remember &amp; associate.
          </p>
          <div className="da-footer-cta-col">
            <Link href="/contact" className="da-footer-cta pill-hover">
              Start a project <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="da-footer-cols">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <div className="da-footer-col-head">{col.heading}</div>
              <ul className="da-footer-col-list">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href}>{it.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="da-footer-col-head">Contact</div>
            <div className="da-footer-contact">
              <a className="da-mail" href={brand.phoneHref}>
                Call: {brand.phone}
              </a>
              <a className="da-mail" href={`mailto:${brand.email}`}>
                <span>{brand.email}</span>
                <span aria-hidden>&#8599;</span>
              </a>
              <span className="da-footer-location">{brand.location}</span>
            </div>
            <div className="da-footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="da-footer-wordmark-row">
          <span className="da-footer-wordmark">{brand.wordmark}</span>
          <span aria-hidden className="da-footer-wordmark-star">
            &#10022;
          </span>
        </div>

        <div className="da-footer-legal">
          {legalLines.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
