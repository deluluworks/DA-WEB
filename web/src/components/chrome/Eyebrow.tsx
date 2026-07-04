import type { CSSProperties, ReactNode } from 'react';

/** Small dot + uppercase label; ported from sevenloop/sl-shared.jsx. */
export function Eyebrow({
  children,
  color = 'var(--color-graphite)',
  style,
}: {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: 'var(--color-iris-voltage)',
          flex: '0 0 auto',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          fontSize: 11,
          color,
        }}
      >
        {children}
      </span>
    </span>
  );
}
