'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useSyncExternalStore } from 'react';
import type { NavItem } from '@/lib/config';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

function getBreakpointSnapshot(): Breakpoint {
  return window.innerWidth <= 640 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop';
}
function getServerBreakpointSnapshot(): Breakpoint {
  return 'desktop';
}
function subscribeToResize(onChange: () => void) {
  window.addEventListener('resize', onChange);
  return () => window.removeEventListener('resize', onChange);
}

/** Breakpoint hook — mobile ≤640, tablet 641–1024, desktop ≥1025 (tokens/breakpoints.css).
 * useSyncExternalStore reads the real viewport on the client while matching
 * the SSR snapshot ('desktop') during hydration, so there's no mismatch. */
function useBreakpoint(): Breakpoint {
  return useSyncExternalStore(subscribeToResize, getBreakpointSnapshot, getServerBreakpointSnapshot);
}

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Design Asylum — PillNav. Floating capsule nav: desktop shows inline chip
 * groups, tablet/mobile collapses to wordmark + a circular "+" toggle that
 * opens a full-screen overlay of large Fraunces pill links. Ported 1:1 from
 * _ds/.../components/hero/PillNav.jsx (the design system already specs the
 * mobile treatment — the export just never wired a page to it).
 */
export function PillNav({ brand, items }: { brand: string; items: NavItem[] }) {
  const bp = useBreakpoint();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isCompact = bp !== 'desktop';
  // Derived, not synced via effect: the overlay only ever renders while
  // compact, so a stale `open=true` from a prior compact session is inert
  // once the viewport crosses to desktop.
  const menuOpen = isCompact && open;
  const left = items.filter((i) => i.group !== 'right');
  const right = items.filter((i) => i.group === 'right');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const chip = (it: NavItem) => {
    const active = isActive(pathname, it.href);
    return (
      <Link
        key={it.id}
        href={it.href}
        className="pill-hover"
        onClick={() => setOpen(false)}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          fontSize: 12,
          padding: '11px 18px',
          borderRadius: 'var(--radius-pill)',
          color: active ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)',
          background: active ? 'var(--color-obsidian-ink)' : 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        {it.label}
      </Link>
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        padding: '18px var(--gutter)',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          pointerEvents: 'auto',
          position: 'relative',
          zIndex: 61,
          width: '100%',
          maxWidth: 'var(--page-max-width)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            fontSize: 17,
            lineHeight: 0.9,
            color: 'var(--color-obsidian-ink)',
          }}
        >
          {brand}
        </Link>

        {!isCompact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                display: 'flex',
                gap: 6,
                padding: 5,
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(234,247,243,0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              {left.map(chip)}
            </div>
            {right.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: 6,
                  padding: 5,
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(234,247,243,0.6)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                {right.map(chip)}
              </div>
            )}
          </div>
        )}

        {isCompact && (
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="pill-hover"
            onClick={() => setOpen((o) => !o)}
            style={{
              width: 48,
              height: 48,
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 30,
              lineHeight: 1,
              color: open ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)',
              background: open ? 'var(--color-obsidian-ink)' : 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'transform var(--motion-base) var(--ease-out), background var(--motion-base)',
              transform: open ? 'rotate(45deg)' : 'none',
            }}
          >
            +
          </button>
        )}
      </nav>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 55,
            pointerEvents: 'auto',
            background: 'rgba(246,245,241,0.82)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
          }}
        >
          {items.map((it, idx) => {
            const active = isActive(pathname, it.href);
            const nudge = idx % 2 === 0 ? -18 : 22;
            return (
              <Link
                key={it.id}
                href={it.href}
                onClick={() => setOpen(false)}
                style={{
                  transform: `translateX(${nudge}px)`,
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  fontSize: 'clamp(30px, 9vw, 48px)',
                  lineHeight: 1.1,
                  padding: '6px 30px',
                  borderRadius: 'var(--radius-pill)',
                  color: active ? 'var(--color-paper-white)' : 'var(--color-obsidian-ink)',
                  background: active ? 'var(--color-obsidian-ink)' : 'transparent',
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
