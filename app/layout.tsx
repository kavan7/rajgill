import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Family & Divorce Lawyers in Surrey | Abbotsford",
  description:
    "Contact Raj Gill Law Family Lawyers & Divorce Lawyers in Surrey for all of your family law needs today. Book a free consultation now.",
  openGraph: {
    type: "website",
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description:
      "Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg",
    url: "https://rajgilllaw.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description:
      "Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GTM */}
        <GoogleTagManager gtmId="GTM-W28GRVRP" />

        {/* 1) Inline minimal critical CSS (header/hero only). Keep this tiny. */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              `/* critical.css (example — replace with your real minimal rules)
                 Keeps header and above-the-fold hero clean before full CSS arrives */
               html,body{height:100%}
               header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px}
               .hero{min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:32px 16px}
               .btn{display:inline-flex;gap:8px;align-items:center;padding:10px 16px;border-radius:8px;border:1px solid #e5e5e5}
              `.replace(/\n\s+/g, " "),
          }}
        />

        {/* 2) Preload + non-blocking load for the full stylesheet */}
        <link
          rel="preload"
          as="style"
          href="/css/33b0fc2c68638ff5.css"
        />
      <link
  rel="stylesheet"
  href="/css/33b0fc2c68638ff5.css"
  media="print"
  onLoad={(e) => {
    const link = e.currentTarget as HTMLLinkElement;
    link.media = "all";
  }}
/>
        <noscript>
          {`<link rel="stylesheet" href="/css/33b0fc2c68638ff5.css" />`}
        </noscript>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Raj Gill Law Corporation",
              image: "https://rajgilllaw.com/assets/preview-image.jpg",
              url: "https://rajgilllaw.com",
              telephone: "+1-604-593-6470",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St",
                addressLocality: "Surrey",
                addressRegion: "BC",
                postalCode: "V3R 1V6",
                addressCountry: "CA",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "87",
              },
            }),
          }}
        />

        {/* Conversion snippet (loads after interactive) */}
        <Script id="gtag-conversion-snippet" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof url !== 'undefined') window.location = url;
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16895292879/ssfPCKvujrgaEM_rpvg-',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>

      {/* Avoid inline background styles to reduce recalc/layout. Put these in CSS. */}
      <body>
        {children}
        <Analytics />
      </body>

      {/* GA — these components already use non-blocking loading */}
      <GoogleAnalytics gaId="AW-686827248" />
      <GoogleAnalytics gaId="AW-16895292879" />
    </html>
  );
}
