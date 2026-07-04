import type { HTMLAttributes, ReactNode } from "react";

type Tone = "outline" | "solid" | "mint" | "iris";

type Props = HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  children: ReactNode;
};

/** Ported from _ds components/content/Tag.jsx — small outlined pill label. */
export function Tag({ tone = "outline", className, children, ...rest }: Props) {
  return (
    <span className={["da-tag", `da-tag-${tone}`, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </span>
  );
}
