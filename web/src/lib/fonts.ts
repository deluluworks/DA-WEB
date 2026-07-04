import localFont from 'next/font/local';

/** Display sans — headlines, nav, buttons, stats. Regular 400 only in copy; other
 * weights are ported for parity with the design-system token file. */
export const blinker = localFont({
  src: [
    { path: '../fonts/blinker-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/blinker-600.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/blinker-700.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/blinker-800.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/blinker-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-blinker',
  display: 'swap',
});

/** Editorial serif — body copy, taglines, captions. Variable font (opsz/wght/SOFT/WONK). */
export const fraunces = localFont({
  src: [
    { path: '../fonts/fraunces-variable.woff2', weight: '300 700', style: 'normal' },
    { path: '../fonts/fraunces-variable-italic.woff2', weight: '300 700', style: 'italic' },
  ],
  variable: '--font-fraunces',
  display: 'swap',
});
