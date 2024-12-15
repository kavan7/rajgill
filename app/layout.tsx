import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

export const metadata: Metadata = {
  title: "Family Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
  description: "Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation.",
  openGraph: {
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description: "Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg",
    url: "https://rajgilllaw.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description: "Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta name="description" content="Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rajgilllaw.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Raj Gill Law Corporation - Trusted Family Lawyers" />
        <meta property="og:description" content="Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today with Raj Gill Law Corporation." />
        <meta property="og:image" content="https://rajgilllaw.com/assets/preview-image.jpg" />
        <meta property="og:url" content="https://rajgilllaw.com" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Raj Gill Law Corporation",
            description:
              "Expert legal services in Surrey & Abbotsford, specializing in family law, estate planning, and more. Schedule a free consultation today.",
            url: "https://rajgilllaw.com",
            logo: "https://rajgilllaw.com/assets/logo.png",
            areaServed: ["Surrey", "Abbotsford"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Surrey",
              addressRegion: "BC",
              postalCode: "V3T",
              addressCountry: "Canada",
            },
            telephone: "+1-604-123-4567",
          })}
        </script>
      </head>
      <body
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/bg40.png')`,
          backgroundColor: "#fff", // Fallback color
          backgroundSize: "cover", // Ensure the background image covers the whole area
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1,
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
