import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

/** Ported from _ds components/buttons/Button.jsx — fully-rounded pill action. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  className,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={["da-btn", `da-btn-${variant}`, `da-btn-${size}`, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
