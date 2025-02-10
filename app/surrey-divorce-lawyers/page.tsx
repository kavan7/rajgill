import { TracingBeamDemo } from '@/components/familylawyers';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Divorce Lawyers in Surrey and Abbotsford | Raj Gill Law Corporation',
  description: 'Experienced divorce lawyers in Surrey and Abbotsford offering compassionate and effective legal representation. Specializing in divorce, child custody, and spousal support cases.',
  robots: 'index, follow',
};

const DivorceLawyersPage = () => {
  return (
    <main className="relative flex justify-center bg-hero-pattern items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <section className="flex flex-col bg-no-repeat py-20">
        <div className="pb-[-30px] pt-5">
          <div className="h-screen w-full dark:bg-black-100 bg-transparent absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="flex justify-center relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl text-neutral-300">
                Divorce Lawyers in Surrey and Abbotsford
              </h1>
              <p className="uppercase tracking-widest text-lg text-center mt-5 text-slate-200 font-medium max-w-80">
                RAJ GILL LAW CORPORATION
              </p>
              <TracingBeamDemo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DivorceLawyersPage;
