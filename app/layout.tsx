import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raj Gill Law | Family Lawyers",
  description: "Lawyers in Surrey, BC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
       
      <body className={inter.className}> {children} </body>
     
    </html>
  );
}
