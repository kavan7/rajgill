import { TracingBeamDemoTwo } from '@/components/civillawyers';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Civil Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description: 'Experienced civil lawyers in Surrey and Abbotsford specializing in property disputes, contract law, negligence claims, and employment issues. Contact Raj Gill Law Corporation for expert legal representation.',
  robots: 'index, follow',
};

const CivilLawyersPage = () => {
  return (
    <main className="relative flex bg-hero-pattern justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Civil Lawyers Section */}
      <section className="flex flex-col bg-no-repeat py-20">
        <div className="pb-[-30px] pt-24">
          <div className="h-screen w-full dark:bg-black-100 bg-transparent absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="flex justify-center relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl text-neutral-300">
                Civil Lawyers in Surrey and Abbotsford
              </h1>
              <p className="uppercase tracking-widest text-lg text-center mt-5 text-slate-200 font-medium max-w-80">
                RAJ GILL LAW CORPORATION
              </p>
              <TracingBeamDemoTwo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CivilLawyersPage;
