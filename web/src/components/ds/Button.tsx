'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'sm' | 'md' | 'lg';

const SIZES: Record<Size, { padding: string; font: string }> = {
  sm: { padding: '10px 20px', font: '12px' },
  md: { padding: '15px 28px', font: '14px' },
  lg: { padding: '20px 38px', font: '16px' },
};

const VARIANTS: Record<Variant, { background: string; color: string; borderColor: string }> = {
  primary: {
    background: 'var(--color-obsidian-ink)',
    color: 'var(--color-paper-white)',
    borderColor: 'var(--color-obsidian-ink)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-obsidian-ink)',
    borderColor: 'var(--color-iris-voltage)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-obsidian-ink)',
    borderColor: 'transparent',
  },
  inverse: {
    background: 'var(--color-paper-white)',
    color: 'var(--color-obsidian-ink)',
    borderColor: 'var(--color-paper-white)',
  },
};

const HOVER_FOR: Record<Variant, Partial<CSSStyleDeclaration>> = {
  primary: { background: 'var(--color-deep-teal)', borderColor: 'var(--color-deep-teal)' } as never,
  secondary: { background: 'var(--color-iris-voltage)', color: 'var(--color-paper-white)' } as never,
  ghost: { background: 'var(--color-mint-wash)' } as never,
  inverse: { background: 'var(--color-mint-wash)', borderColor: 'var(--color-mint-wash)' } as never,
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

/** Design Asylum — Button. Fully-rounded pill action; ported from
 * _ds/.../components/buttons/Button.jsx. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  type = 'button',
  style,
  ...rest
}: Props) {
  const s = SIZES[size];
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: 'var(--font-display)',
    fontStretch: 'var(--display-stretch)',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    fontSize: s.font,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: 'var(--radius-buttons)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition:
      'background-color .25s ease, color .25s ease, border-color .25s ease, transform .12s ease',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.4 : 1,
  };

  const onEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, HOVER_FOR[variant]);
  };
  const onLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, VARIANTS[variant]);
    e.currentTarget.style.transform = 'none';
  };
  const onDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      style={{ ...base, ...VARIANTS[variant], ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
