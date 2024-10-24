import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family Lawyer in Surrey & Abbotsford | Raj Gill Law",
  description: "Raj Gill Law Corporation offers legal services in Surrey & Abbotsford. Schedule a free consultation today.",
  openGraph: {
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description: "Raj Gill Law Corporation offers legal services in Surrey & Abbotsford. Schedule a free consultation today.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Updated image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Gill Law Corporation - Trusted Family Lawyers",
    description: "Raj Gill Law Corporation offers legal services in Surrey & Abbotsford. Schedule a free consultation today.",
    images: "https://rajgilllaw.com/assets/preview-image.jpg", // Same image for Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundImage: `url('/background6.jpg')`, opacity: 1 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
