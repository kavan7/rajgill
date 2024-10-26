// app/divorce-lawyers/layout.tsx
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Divorce Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description: 'Experienced divorce lawyers in Surrey and Abbotsford offering compassionate and effective legal representation. Specializing in divorce, child custody, and spousal support cases.',
  robots: 'index, follow',
};

export default function DivorceLawyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Raj Gill Law Corporation - Divorce Lawyers</h1>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Raj Gill Law Corporation</footer>
      </body>
    </html>
  );
}
