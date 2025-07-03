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
    url: "https://rajgilllaw.com/surrey-civil-lawyers", // Add URL if available
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
        <body style={{backgroundImage: `url(/background2-3.webp)`}} >
  

  <main role="main" className="p-6  min-h-screen">
    {children}
  </main>
 <footer className="bg-[#0f172a43] text-gray-300 px-6 py-10 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Left: Branding */}
    <div>
      <h2 className="text-white text-xl font-semibold">Raj Gill Law Corporation</h2>
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        Providing trusted legal services in Surrey & Abbotsford in family, civil, criminal, and immigration law.
      </p>
    </div>

    {/* Center: Quick Links (replace with actual URLs) */}
    <div className="space-y-2 text-sm">
      <h3 className="text-white font-medium mb-2">Quick Links</h3>
      <ul className="space-y-1">
        <li><a href="/#services" className="hover:text-white transition">Services</a></li>
        <li><a href="/#about" className="hover:text-white transition">Our Team</a></li>
        <li><a href="/#touch" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Right: Contact */}
    <div className="text-sm space-y-2">
      <h3 className="text-white font-medium mb-2">Contact</h3>
      <p>Surrey: 12885 80 Ave #205</p>
      <p>Abbotsford: 1779 Clearbrook Rd #216</p>
      <p>Email: <a href="mailto:info@rajgilllaw.com" className="hover:text-white transition">info@rajgilllaw.com</a></p>
      <p>Phone: <a href="tel:+16045936470" className="hover:text-white transition">+1 (604) 593-6470</a></p>
    </div>
  </div>

  {/* Bottom: Legal */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} Raj Gill Law Corporation. All rights reserved.
  </div>
</footer>
  <Analytics />
</body>
    </html>
  );
}
