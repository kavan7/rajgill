"use client";
import React from "react";
import {ContactRound, Building, Plane, Columns4, Trees} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";

export function FeaturesSectionDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
   
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<ContactRound className="h-4 w-4 text-neutral-400" />}
        title="Divorce Lawyers in Surrey"
        description="How to Resolve a Contested Divorce in BC"
        link="surrey-divorce-lawyers"
      />

  
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Building className="h-4 w-4 text-neutral-400" />}
        title="Civil Law in Surrey"
        description="From Estate Litigration, Contract litigation, we do everyhing Civil Law related. "
         link="surrey-civil-lawyers"
      />
  

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Plane className="h-4 w-4 text-neutral-400" />}
        title="Immigration Law in Surrey"
        description="Permanent residency and family sponsorship. "
         link="surrey-immigration-lawyers"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Columns4 className="h-4 w-4 text-neutral-400" />}
        title="Criminal Lawyers in Surery"
        description="Skilled Criminal Defence Lawyers in Surrey"
         link="surrey-criminal-lawyers"
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Trees className="h-4 w-4 text-neutral-400" />}
        title="Abbotsford"
        description="All of our services available in Abbotsford."
         link="abbotsford-divorce-lawyers"
      />
       
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  link: string;
}

const GridItem = ({ area, icon, title, description, link}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
     <Link href={link}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3" >
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className=" border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_197px_0px_#404040]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5  text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-neutral-200">
                {title}
              </h3>
              <h2 className=" text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-300 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </li>
  );
};
