"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, primaryNav, type NavItem } from "@/lib/site-config";

/**
 * Floating capsule nav — ported from the design system's PillNav
 * (_ds/.../components/hero/PillNav.jsx). Desktop: inline pill chip groups.
 * Tablet/mobile (≤1024px): collapses to wordmark + a circular "+" toggle that
 * opens a full-screen overlay of large Fraunces links — this collapse was
 * already part of the design-system component, just never wired into the
 * page assembly in the export, so this is now the site's real mobile nav.
 */
function useBreakpoint() {
  const get = () =>
    typeof window === "undefined"
      ? "desktop"
      : window.innerWidth <= 640
        ? "mobile"
        : window.innerWidth <= 1024
          ? "tablet"
          : "desktop";
  const [bp, setBp] = useState(get);
  useEffect(() => {
    const on = () => setBp(get());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return bp;
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function Chip({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className="pill-hover da-nav-chip"
      data-active={active || undefined}
    >
      {item.label}
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const bp = useBreakpoint();
  const [open, setOpen] = useState(false);
  const isCompact = bp !== "desktop";
  const left = primaryNav.filter((i) => i.group !== "right");
  const right = primaryNav.filter((i) => i.group === "right");

  // Close the overlay when the layout leaves compact mode or the route
  // changes, by adjusting state during render (React's documented pattern
  // for "state that depends on a prop") rather than in an effect.
  const [prevKey, setPrevKey] = useState(`${isCompact}:${pathname}`);
  const key = `${isCompact}:${pathname}`;
  if (key !== prevKey) {
    setPrevKey(key);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="da-nav-shell">
      <nav className="da-nav-bar" aria-label="Primary">
        <Link href="/" className="da-nav-brand" onClick={() => setOpen(false)}>
          {brand.name}
        </Link>

        {!isCompact && (
          <div className="da-nav-groups">
            <div className="da-nav-group">
              {left.map((it) => (
                <Chip key={it.id} item={it} active={isActive(pathname, it.href)} />
              ))}
            </div>
            {right.length > 0 && (
              <div className="da-nav-group">
                {right.map((it) => (
                  <Chip key={it.id} item={it} active={isActive(pathname, it.href)} />
                ))}
              </div>
            )}
          </div>
        )}

        {isCompact && (
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="pill-hover da-nav-toggle"
            data-open={open || undefined}
            onClick={() => setOpen((o) => !o)}
          >
            +
          </button>
        )}
      </nav>

      {isCompact && open && (
        <div className="da-nav-overlay" role="dialog" aria-modal="true">
          {primaryNav.map((it, idx) => (
            <Link
              key={it.id}
              href={it.href}
              className="da-nav-overlay-link"
              data-active={isActive(pathname, it.href) || undefined}
              style={{ transform: `translateX(${idx % 2 === 0 ? -18 : 22}px)` }}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
