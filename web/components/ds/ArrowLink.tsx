import Link from "next/link";
import type { ReactNode } from "react";

/** Ported from _ds components/buttons/ArrowLink.jsx. */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="da-arrow-link">
      {children} <span aria-hidden>&rarr;</span>
    </Link>
  );
}
