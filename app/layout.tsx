import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

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
      
        <GoogleTagManager gtmId="GTM-W28GRVRP" />
        <link
  rel="preload"
  as="image"
  href="/background2.webp"
  type="image/png"
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Raj Gill Law Corporation",
      "image": "https://rajgilllaw.com/assets/preview-image.jpg",
      "url": "https://rajgilllaw.com",
      "telephone": "+1-604-555-1234",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main St",
        "addressLocality": "Surrey",
        "addressRegion": "BC",
        "postalCode": "V3R 1V6",
        "addressCountry": "CA"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
      }
    }),
  }}
/>
      </head>
      <body
      >
      
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="AW-686827248" />
      <GoogleAnalytics gaId="AW-16895292879" />
    </html>
  );
}
