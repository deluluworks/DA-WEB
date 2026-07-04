import localFont from "next/font/local";

/*
 * Self-hosted per TARGET STACK — next/font/google is unreachable in this
 * sandbox and self-hosting is the permanent choice either way.
 * Blinker ships Regular 400 only (project rule: never heavier); every
 * heavier font-weight request is remapped to this single face by the
 * `--font-weight-display: 400` token instead of loading more files.
 */
export const blinker = localFont({
  src: "./fonts/blinker-400.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-blinker",
  display: "swap",
});

export const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-variable.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/fraunces-variable-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});
