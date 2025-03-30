import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Criminal Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
  description:
    "Trusted criminal defence lawyers in Surrey and Abbotsford. We handle DUI, assault, theft, drug charges, and more. Book a free consultation with Raj Gill Law today.",
  openGraph: {
    title: "Criminal Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
    description:
      "Experienced criminal defence representation in Surrey and Abbotsford. We defend against DUI, assault, drug offenses, and more. Free consultation available.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Replace with relevant image
    url: "https://rajgilllaw.com/surrey-criminal-lawyers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criminal Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
    description:
      "Raj Gill Law Corporation offers dedicated criminal defence services in Surrey and Abbotsford. Contact us for a free consultation.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(/background2.png)` }}>
        <header className="p-4 bg-gray-600 text-white text-center">
          <h1>Raj Gill Law Corporation - Criminal Defence Lawyers</h1>
        </header>
        <main role="main" className="p-6 min-h-screen">
          {children}
        </main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © {new Date().getFullYear()} Raj Gill Law Corporation
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
