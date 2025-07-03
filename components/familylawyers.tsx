"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconBriefcase, IconMan, IconPhone, IconChevronDown } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  const navItems = [
    {
      name: "Services",
      id: "/#services",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Team",
      id: "/#about",
      icon: <IconMan className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      id: "/#touch",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleCard = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <TracingBeam className="px-4 sm:px-8 lg:px-16">
      <SecondNav navItems={navItems} />
      <div className="w-full mx-auto p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30 space-y-6">
        {dummyContent.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={`card-${index}`}
              className="border border-white/10 bg-white/10 rounded-2xl overflow-hidden shadow-md backdrop-blur-sm transition-all"
            >
              <button
                onClick={() => toggleCard(index)}
                className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-white/10 transition"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h2>
                <IconChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-neutral-300 prose prose-sm sm:prose-base dark:prose-invert max-w-none">
                  {item.image && (
                    <div className="my-4 flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.altText}
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md object-cover"
                      />
                    </div>
                  )}
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Expert Family Lawyers in Surrey",
    description: (
      <>
        <p>
          If you&apos;re looking for experienced family lawyers in Surrey, our team provides
          compassionate, effective legal representation across all family law matters. We specialize
          in divorce, child custody, property division, spousal support, and domestic agreements to
          help families resolve their disputes efficiently and respectfully.
        </p>
        <p>
          Whether you&apos;re facing a contested divorce, a separation agreement, or post-divorce
          modifications, we have the skills to support you through the process.
        </p>
      </>
    ),
    image: "/background.png",
    altText: "Experienced family lawyer assisting clients in Surrey",
  },
  {
    title: "Divorce and Separation Services in Surrey",
    description: (
      <>
        <p>
          Navigating a divorce in Surrey can be challenging, but our skilled divorce lawyers make
          the process smoother. From mediation to court representation, we help our clients pursue
          fair resolutions.
        </p>
        <p>
          We guide clients through both uncontested and contested divorce proceedings and provide
          legal clarity on parenting plans, spousal maintenance, and shared property responsibilities.
        </p>
      </>
    ),
    image: "/background5.png",
    altText: "Divorce lawyer consulting with a client in Surrey",
  },
  {
    title: "Child Custody and Support Lawyers",
    description: (
      <>
        <p>
          Child custody and support issues can be emotionally charged, but our experienced child
          custody lawyers in Surrey are dedicated to protecting your family&apos;s well-being. We work on
          both custody arrangements and child support calculations.
        </p>
        <p>
          We assist with sole and joint custody, access rights, and modifications to existing custody
          orders. Our goal is to create a stable, healthy arrangement for your child.
        </p>
      </>
    ),
    image: "/background3.png",
    altText: "Lawyer providing child custody support in Surrey",
  },
  {
    title: "Property Division and Spousal Support",
    description: (
      <>
        <p>
          Our family law team in Surrey handles complex property division and spousal support cases,
          ensuring fair and equitable outcomes under BC&apos;s Family Law Act.
        </p>
        <p>
          Whether dealing with assets, debts, or ongoing financial support, we tailor a legal
          strategy that aligns with your goals and protects your financial future.
        </p>
      </>
    ),
    image: "/background6.png",
    altText: "Lawyer discussing property division and spousal support with client in Surrey",
  },
];
