// app/divorce-lawyers/layout.tsx
import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Divorce Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description: 'Experienced divorce lawyers in Surrey and Abbotsford offering compassionate and effective legal representation. Specializing in divorce, child custody, and spousal support cases.',
  robots: 'index, follow',
  openGraph: {
    title: 'Divorce Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
    description: 'Professional and compassionate legal support in divorce, child custody, and spousal support. Contact Raj Gill Law Corporation today.',
    url: 'https://rajgilllaw.com/divorce-lawyers',
    images: 'https://rajgilllaw.com/assets/preview-image.jpg', // Replace with specific URL if available
    type: 'website',
  },

};

export default function DivorceLawyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundImage: `url('/background2.jpg')`, opacity: 1 }}>
  
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
