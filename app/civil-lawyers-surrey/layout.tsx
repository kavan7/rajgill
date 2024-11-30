import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";



export const metadata: Metadata = {
  title: "Civil Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
  description: "Professional civil law services in Surrey and Abbotsford, specializing in property disputes, contract law, negligence claims, and employment issues. Schedule a free consultation today.",
  openGraph: {
    title: "Civil Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
    description: "Expert civil law services in Surrey and Abbotsford, covering property disputes, contract law, negligence claims, and employment issues. Schedule your free consultation now.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Replace with actual image URL for civil law
    url: "https://rajgilllaw.com/civil-law", // Add URL if available
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
    description: "Offering expert legal services in civil law matters across Surrey and Abbotsford. Book your free consultation today with Raj Gill Law Corporation.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Same image for Twitter
  },
  robots: "index, follow", // Ensure indexing and link-following
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body  style={{ backgroundImage: `url('/background2.jpg')`, opacity: 1 }}>
  
  <header className="p-4 bg-gray-600 text-white text-center">
    <h1>Raj Gill Law Corporation - Divorce Lawyers</h1>
  </header>
  <main role="main" className="p-6  min-h-screen">
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
