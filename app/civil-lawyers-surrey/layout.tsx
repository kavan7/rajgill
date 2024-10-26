import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} style={{ backgroundImage: `url('/background2.jpg')`, opacity: 1 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
