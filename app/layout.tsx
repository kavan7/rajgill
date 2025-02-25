import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-686827248"
        />

        {/* 2) Initialize gtag with an inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-686827248');
            `,
          }}
        />
       
      </head>
      <body
        style={{
          backgroundImage: `url('/background2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000000", // Fallback color for when the image doesn't load
        }}
      >
        {children}
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
