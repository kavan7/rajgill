"use client";
import React from "react";
import Link from "next/link";
import { ContactRound, Building, Plane, Columns4, Trees } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/**
 * FeaturesSection
 * - Accessible, responsive card grid for practice areas / locations
 * - Clean typography, consistent spacing, and polished hover/focus states
 * - Data‑driven items with semantic markup and improved copy
 */

export type FeatureItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  // Tailwind span classes per breakpoint; defaults provided below
  colSpan?: string; // e.g., "md:col-span-6 xl:col-span-4"
};

const items: FeatureItem[] = [
  {
    title: "Divorce Lawyers in Surrey",
    description: "Practical guidance for contested and uncontested divorce in BC.",
    href: "/surrey-divorce-lawyers",
    icon: <ContactRound className="h-5 w-5" aria-hidden />,
    colSpan: "md:col-span-6 xl:col-span-4",
  },
  {
    title: "Civil Litigation in Surrey",
    description:
      "Estate disputes, contract litigation, and comprehensive civil law support.",
    href: "/surrey-civil-lawyers",
    icon: <Building className="h-5 w-5" aria-hidden />,
    colSpan: "md:col-span-6 xl:col-span-4",
  },
  {
    title: "Immigration Law in Surrey",
    description: "Permanent residency, work permits, and family sponsorship.",
    href: "/surrey-immigration-lawyers",
    icon: <Plane className="h-5 w-5" aria-hidden />,
    colSpan: "md:col-span-6 xl:col-span-4",
  },
  {
    title: "Criminal Defence in Surrey",
    description: "Experienced defence for investigations, charges, and trials.",
    href: "/surrey-criminal-lawyers",
    icon: <Columns4 className="h-5 w-5" aria-hidden />,
    colSpan: "md:col-span-6 xl:col-span-4",
  },
  {
    title: "Abbotsford",
    description: "Full suite of services available to clients in Abbotsford.",
    href: "/abbotsford-divorce-lawyers",
    icon: <Trees className="h-5 w-5" aria-hidden />,
    colSpan: "md:col-span-12 xl:col-span-8",
  },
];

export default function FeaturesSection({ data = items }: { data?: FeatureItem[] }) {
  return (
    <section aria-labelledby="features-heading" className="relative">
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.02)_1px)] [background-size:32px_32px]"
      />

      <h2 id="features-heading" className="sr-only">
        Practice Areas and Locations
      </h2>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 xl:gap-6">
        {data.map((item, idx) => (
          <GridItem key={idx} {...item} />
        ))}
      </ul>
    </section>
  );
}

function GridItem({ title, description, href, icon, colSpan }: FeatureItem) {
  return (
    <li className={colSpan ?? "md:col-span-6 xl:col-span-4"}>
      <Link
        href={href}
        aria-label={`${title} — learn more`}
        className="group block h-full focus:outline-none"
      >
        <div className="relative h-full rounded-2xl border border-white/10 bg-neutral-900/40 p-2 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur transition-transform duration-200 group-hover:-translate-y-0.5">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />

          <article className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 ring-1 ring-white/5 transition group-hover:ring-white/10">
            <header className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-md border border-white/15 bg-white/5 text-neutral-300 transition group-hover:bg-white/10">
                {icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-100 md:text-2xl">
                {title}
              </h3>
            </header>

            <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
              {description}
            </p>

            <footer className="mt-auto flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-200 underline-offset-4 group-hover:underline">
                Learn more
              </span>
              <span
                aria-hidden
                className="inline-flex size-6 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform group-hover:translate-x-0.5"
              >
                {/* simple chevron using border */}
                <span className="block h-3 w-3 rotate-45 border-b border-r border-neutral-300" />
              </span>
            </footer>

            {/* Focus ring for keyboard users */}
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-transparent focus-within:ring-indigo-400" />
          </article>
        </div>
      </Link>
    </li>
  );
}
