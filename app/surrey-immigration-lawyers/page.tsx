import { TracingBeamDemoThree } from '@/components/immigrationlawyers';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigration Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description: 'Professional immigration lawyers in Surrey and Abbotsford providing expert legal assistance with visa applications, permanent residency, family sponsorship, and work permits. Schedule a free consultation with Raj Gill Law Corporation today.',
  robots: 'index, follow',
};

const ImmigrationLawyersPage = () => {
  return (
    <main className="relative flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a4f] via-[#1e293b3e] to-[#33415538] text-white overflow-auto">
      <section className="py-24 relative z-10 px-4 sm:px-10">
        {/* Radial Mask Background */}
        <div className="absolute inset-0 pointer-events-none z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-black/10" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100">
            Immigration Lawyers in Surrey and Abbotsford
          </h1>
          <p className="uppercase tracking-widest text-lg mt-5 text-slate-300 font-medium">
            RAJ GILL LAW CORPORATION
          </p>
        </div>

        <div className="mt-16">
          <TracingBeamDemoThree />
        </div>
      </section>
    </main>
  );
};

export default ImmigrationLawyersPage;
