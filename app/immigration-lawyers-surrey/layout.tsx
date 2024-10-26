import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immigration Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
  description: "Experienced immigration lawyers in Surrey and Abbotsford providing legal assistance with visas, permanent residency, work permits, and family sponsorships. Schedule a free consultation today.",
  openGraph: {
    title: "Immigration Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
    description: "Professional immigration law services in Surrey and Abbotsford. Expertise in visas, residency, work permits, and family sponsorship. Schedule your free consultation today.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Replace with the correct URL specific to immigration law, if available
    url: "https://rajgilllaw.com/immigration-law", // Update to the actual URL for the immigration law page
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Immigration Lawyer in Surrey & Abbotsford | Raj Gill Law Corporation",
    description: "Raj Gill Law Corporation offers specialized immigration law services in Surrey & Abbotsford, including visa applications, work permits, and family sponsorship. Free consultations available.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Same image for Twitter, ensure it matches immigration services if possible
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
      <body className={inter.className} style={{ backgroundImage: `url('/background2.jpg')`, opacity: 1 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
