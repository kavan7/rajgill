import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
export const metadata: Metadata = {
  title: "Family Lawyer in Surrey & Abbotsford | Raj Gill Law",
  description: "Raj Gill Law Corporation offers legal services in Surrey & Abbotsford. Schedule a free consultation today.",
  openGraph: {
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description: "Raj Gill Law Corporation offers legal services in Surrey & Abbotsford. Schedule a free consultation today.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description: "Raj Gill Law Corporation offers legal services in Surrey & Abbotsford. Schedule a free consultation today.",
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
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rajgilllaw.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Poppins:wght@400;700&family=Rubik:wght@400;700&display=swap"
        />
      </head>
      <body
        style={{
          backgroundImage: `url('/background6.webp')`,
          backgroundColor: "#f5f5f5", // Fallback color
          opacity: 1,
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
