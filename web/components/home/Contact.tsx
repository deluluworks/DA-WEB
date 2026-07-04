import { ContactForm } from "@/components/ContactForm";
import { brand } from "@/lib/site-config";

/**
 * Ported from da/sections-4.jsx `DAContact` (id="contact", the section
 * app.jsx actually mounts on the homepage). The export's right column was an
 * inert "Pick a slot" booking placeholder with a hardcoded confirmed slot
 * that submitted nothing — replaced with the real ContactForm, matching the
 * same decision made for the standalone /contact page.
 */
export function Contact() {
  return (
    <section id="contact" className="da-home-contact">
      <div className="da-wrap da-contact-grid">
        <div className="da-contact-intro da-home-contact-intro">
          <h2>Let&rsquo;s talk about your brand</h2>
          <div className="da-contact-intro-links">
            <a className="da-mail da-mail-serif" href={`mailto:${brand.email}`}>
              {brand.email} <span aria-hidden>&#8599;</span>
            </a>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--color-graphite)" }}>
              {brand.phone}
            </span>
          </div>
          <p>
            Tell us what you&rsquo;re building. We reply within a day, usually with questions,
            sometimes with opinions.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
