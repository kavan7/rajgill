import React from 'react';
import { Metadata } from 'next';
import { TracingBeamDemoFour } from '@/components/criminallawyers';

export const metadata: Metadata = {
  title: 'Criminal Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description:
    'Trusted criminal lawyers in Surrey and Abbotsford, specializing in DUI, assault, theft, drug charges, and more. Contact Raj Gill Law Corporation for skilled defence and legal support.',
  robots: 'index, follow',
};

const CriminalLawyersPage = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a4f] via-[#1e293b3e] to-[#33415538]  text-white">
      <main className="flex-grow flex justify-center items-center px-5 sm:px-10 py-20">
        <section className="relative w-full max-w-6xl z-10 text-center space-y-6">
          <h1 className="text-[36px] md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-200">
            Criminal Lawyers in Surrey and Abbotsford
          </h1>
          <p className="uppercase tracking-widest text-lg mt-3 text-slate-300 font-medium">
            RAJ GILL LAW CORPORATION
          </p>
          <TracingBeamDemoFour />
        </section>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default CriminalLawyersPage;
