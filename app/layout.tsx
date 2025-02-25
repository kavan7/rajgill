import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
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
        {/* Google Analytics Script (Loads gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-686827248"
          strategy="afterInteractive"
        />
        
        {/* Google Ads Configuration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-686827248');
          `}
        </Script>
      </head>
      <body
        style={{
          backgroundImage: `url('/background2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000000", // Fallback color if image doesn't load
        }}
      >
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
