type Props = {
  name?: string;
  alt?: string;
  size?: number;
};

/** Ported from _ds components/content/Avatar.jsx — initials-only (no image source in this content set). */
export function Avatar({ name, alt = "", size = 48 }: Props) {
  const initials = (name || alt || "")
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      className="da-avatar"
      style={{ width: size, height: size }}
    >
      <span className="da-avatar-initials" style={{ fontSize: Math.round(size * 0.32) }}>
        {initials}
      </span>
    </span>
  );
}
