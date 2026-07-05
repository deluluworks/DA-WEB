// Shared primitives used across multiple sections.

export function Eyebrow({ children, color = 'var(--color-graphite)', style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-iris-voltage)' }} />
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11, color }}>{children}</span>
    </span>
  );
}
