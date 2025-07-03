"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconBriefcase, IconMan, IconPhone, IconChevronDown } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemoTwo() {
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
      <div className="w-full h-full mx-auto p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30 space-y-6">
        {dummyContent.map((item, index) => {
          const isOpen = openIndex === index;
          return (  
            <div
              key={`card-${index}`}
              className="border border-white/10  overflow-auto bg-white/10 rounded-2xl shadow-md backdrop-blur-sm transition-all"
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
    title: "Experienced Civil Lawyers in Surrey",
    description: (
      <>
        <p>
          If you need a seasoned civil lawyer in Surrey, our team brings expertise, dedication, and
          thorough legal knowledge to address a wide range of civil matters. We provide top-tier
          legal representation in property disputes, contract law, negligence claims, and
          employment issues.
        </p>
        <p>
          We understand how personal and financially impactful civil disputes can be. That’s why we
          approach each case with a tailored strategy aimed at efficiency and resolution—whether
          through litigation, mediation, or negotiation.
        </p>
      </>
    ),
    image: "/background.png",
    altText: "Civil lawyer in Surrey providing legal advice",
  },
  {
    title: "Property Disputes and Real Estate Law in Surrey",
    description: (
      <>
        <p>
          Navigating property disputes can be complex and time-consuming. Our experienced real
          estate and civil lawyers in Surrey specialize in resolving conflicts around property
          boundaries, land ownership, tenancy agreements, and more.
        </p>
        <p>
          From residential lease conflicts to commercial property disagreements, our firm delivers
          timely, practical legal solutions that protect your investment and peace of mind.
        </p>
      </>
    ),
    image: "/background5.png",
    altText: "Real estate law and property dispute lawyer in Surrey",
  },
  {
    title: "Contract Disputes and Breach of Contract Cases",
    description: (
      <>
        <p>
          When a contract is breached, swift and knowledgeable legal assistance is crucial. Our
          civil law team in Surrey handles all forms of contract disputes, from interpreting
          contract terms to enforcing breach of contract claims.
        </p>
        <p>
          We also advise on contract drafting and preventative legal measures to help businesses
          and individuals avoid disputes in the first place.
        </p>
      </>
    ),
    image: "/background3.png",
    altText: "Lawyer assisting with contract disputes in Surrey",
  },
  {
    title: "Negligence Claims and Personal Injury Civil Cases",
    description: (
      <>
        <p>
          Negligence claims require an in-depth understanding of tort law and a strategic approach
          to achieve fair compensation. Our skilled civil lawyers in Surrey have a proven record of
          success in personal injury cases.
        </p>
        <p>
          We take on both plaintiff and defense roles in civil negligence disputes and aim to
          achieve fair settlements without unnecessary litigation when possible.
        </p>
      </>
    ),
    image: "/background6.png",
    altText: "Surrey lawyer handling negligence claims",
  },
  {
    title: "Employment Disputes and Workplace Rights",
    description: (
      <>
        <p>
          Our employment law experts in Surrey are adept at handling complex workplace disputes,
          including wrongful termination, harassment, and wage claims.
        </p>
        <p>
          From employment contracts to human rights complaints and regulatory compliance, we help
          clients protect their workplace rights with precision and care.
        </p>
      </>
    ),
    image: "/background4.png",
    altText: "Employment dispute lawyer in Surrey",
  },
  {
    title: "Why Choose Us for Civil Law Matters?",
    description: (
      <>
        <p>
          At our Surrey law firm, we combine practical experience with a commitment to
          client-focused service. Our civil lawyers offer strategic guidance tailored to your
          needs, ensuring every action is in your best interest.
        </p>
        <p>
          We take pride in responsive service, transparent communication, and a results-oriented
          mindset that delivers peace of mind during complex civil disputes.
        </p>
      </>
    ),
    image: "/background2.png",
    altText: "Experienced civil law firm in Surrey",
  },
];
