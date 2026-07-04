import Script from 'next/script';
import { analytics } from '@/lib/config';

/** Microsoft Clarity, GA4/GTM, and the Google Ads tag — all env-driven and
 * loaded with strategy="afterInteractive" so they never block first render.
 * Any ID left unset simply omits that script (no placeholder network calls). */
export function AnalyticsScripts() {
  const { clarityId, gaId, gtmId, googleAdsId } = analytics;
  return (
    <>
      {clarityId && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");`}
        </Script>
      )}

      {gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}

      {(gaId || googleAdsId) && !gtmId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId || googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${gaId ? `gtag('config', '${gaId}');` : ''}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}`}
          </Script>
        </>
      )}
    </>
  );
}
