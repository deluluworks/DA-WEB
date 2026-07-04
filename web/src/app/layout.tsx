import type { Metadata } from 'next';
import { blinker, fraunces } from '@/lib/fonts';
import { Nav } from '@/components/chrome/Nav';
import { Footer } from '@/components/chrome/Footer';
import { AnalyticsScripts } from '@/lib/analytics';
import { site } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Design Asylum — Bold by design',
    template: '%s | Design Asylum',
  },
  description:
    'Design Asylum is a B2B branding and website design studio — bold identity, editorial websites, and brand systems built to win attention.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${blinker.variable} ${fraunces.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
