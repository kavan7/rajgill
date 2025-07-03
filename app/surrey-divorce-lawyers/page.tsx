import React from 'react';
import { Metadata } from 'next';
import { TracingBeamDemo } from '@/components/familylawyers';

export const metadata: Metadata = {
  title: 'Divorce Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description:
    'Experienced divorce lawyers in Surrey and Abbotsford offering compassionate and effective legal representation. Specializing in divorce, child custody, and spousal support cases.',
  robots: 'index, follow',
};

const DivorceLawyersPage = () => {
  return (
    <main className="relative flex items-center justify-center flex-col min-h-screen px-4 sm:px-8 bg-gradient-to-br from-[#0f172a4f] via-[#1e293b3e] to-[#33415538] text-white overflow-hidden">
      {/* Decorative Mask Layer */}
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(circle_at_center,white,transparent)] bg-black/10 pointer-events-none" />

      {/* Content Container */}
      <section className="relative z-10 flex flex-col items-center text-center max-w-4xl py-24 px-4 md:px-0">
        <h1 className="text-4xl sm:text-5xl mt-12 md:text-6xl font-extrabold tracking-tight text-white">
          Compassionate Divorce Lawyers in <span className="text-blue-400">Surrey</span> &{' '}
          <span className="text-blue-400">Abbotsford</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-slate-200 leading-relaxed">
          At Raj Gill Law Corporation, we understand the emotional and legal complexities of
          divorce. Our team supports clients through separation, child custody disputes, and
          spousal support issues with clarity, care, and proven legal strategy.
        </p>

        <div className="mt-12 w-full">
          <TracingBeamDemo />
        </div>
      </section>
    </main>
  );
};

export default DivorceLawyersPage;
