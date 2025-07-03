import React from 'react';
import { Metadata } from 'next';
import { TracingBeamDemoTwo } from '@/components/civillawyers';

export const metadata: Metadata = {
  title: 'Civil Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description:
    'Experienced civil lawyers in Surrey and Abbotsford specializing in property disputes, contract law, negligence claims, and employment issues. Contact Raj Gill Law Corporation for expert legal representation.',
  robots: 'index, follow',
};

const CivilLawyersPage = () => {
  return (
    <main className="relative flex items-center justify-center flex-col min-h-screen px-4 sm:px-8 bg-gradient-to-br from-[#0f172a4f] via-[#1e293b3e] to-[#33415538]  text-white ">
      {/* Decorative Mask Layer */}
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(circle_at_center,white,transparent)] bg-black/10 pointer-events-none" />

      {/* Content Container */}
      <section className="relative z-10 flex flex-col items-center text-center max-w-4xl py-24 px-4 md:px-0">
        <h1 className="text-4xl sm:text-5xl mt-12 md:text-6xl font-extrabold tracking-tight text-white">
          Trusted Civil Lawyers in <span className="text-blue-400">Surrey</span> &{' '}
          <span className="text-blue-400">Abbotsford</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-slate-200 leading-relaxed">
          At Raj Gill Law Corporation, we specialize in resolving property disputes, contract law
          issues, negligence claims, and employment matters. Let our experience guide you through
          civil legal challenges with clarity and care.
        </p>

        <div className="mt-8">
         
        </div>

        <div className="mt-12 w-full">
          <TracingBeamDemoTwo />
        </div>
      </section>
    </main>
  );
};

export default CivilLawyersPage;
