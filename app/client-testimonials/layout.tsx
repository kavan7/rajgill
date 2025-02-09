import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Client Testimonials | Raj Gill Law Corporation",
  description: "Read what our clients have to say about their experiences with Raj Gill Law Corporation. Trusted legal services in Surrey and Abbotsford.",
  openGraph: {
    title: "Client Testimonials | Raj Gill Law Corporation",
    description: "See how Raj Gill Law Corporation has helped clients with their legal needs. Honest testimonials from satisfied clients in Surrey and Abbotsford.",
    images: "https://rajgilllaw.com/assets/testimonials-preview-image.jpg", // Replace with an appropriate image URL for testimonials
    url: "https://rajgilllaw.com/testimonials", // Update URL for the testimonials page
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Raj Gill Law Corporation",
    description: "Discover why clients trust Raj Gill Law Corporation for expert legal services. Testimonials from real clients in Surrey and Abbotsford.",
    images: "https://rajgilllaw.com/assets/testimonials-preview-image.jpg", // Same image for Twitter
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
      <body  className="bg-hero-pattern" >
        <header className="mt-[150px] ont-bold  text-center underline underline-offset-2text-[40px] md:text-5xl lg:text-6xl text-neutral-300">
          <h1>Raj Gill Law | Reviews</h1>
        </header>
        <main role="main" className="p-6 min-h-screen">
          <section className=" p-4 shadow-lg rounded-full ">
        
            {children}
          </section>
        </main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © {new Date().getFullYear()} Raj Gill Law Corporation
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
