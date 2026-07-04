import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { brand } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Book a Call",
  description:
    "Talk to Design Asylum about your brand. Send a brief and we'll reply within a day — usually with questions, sometimes with opinions.",
};

export default function ContactPage() {
  return (
    <div className="da-wrap da-contact-page">
      <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className="da-contact-grid" style={{ marginTop: 28 }}>
        <div className="da-contact-intro">
          <h1>Let&rsquo;s talk about your brand</h1>
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
            sometimes with opinions. Curious about the studio first? Read{" "}
            <Link href="/why-design-asylum">why teams pick Design Asylum</Link>, browse{" "}
            <Link href="/clients">client work</Link>, or check our{" "}
            <Link href="/pricing">pricing ranges</Link>.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
