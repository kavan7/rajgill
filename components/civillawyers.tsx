"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";

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
  
  return (
    <TracingBeam className="px-6">
      <div className="w-full mx-auto shadow-xl shadow-black-100 p-10 rounded-4xl antialiased pt-4 relative">
        <SecondNav navItems={navItems} />
        {dummyContent.map((item, index) => (
          <article key={`content-${index}`} className="mb-10 w-full mt-[25px]">
            <h2 className="text-xl mb-4 text-neutral-300">{item.title}</h2>
            <div className="text-md prose text-neutral-400 prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.altText} // Make sure to provide unique alt text for each item
                  height="200"
                  width="700"
                  className="rounded-xl mb-10 mx-auto items-center object-cover"
                />
              )}
              {item.description}
            </div>
          </article>
        ))}
      </div>
    </TracingBeam>
  );
}

// Update `dummyContent` with unique alt text for each image
const dummyContent = [
  {
    title: "Experienced Civil Lawyers in Surrey",
    description: (
      <>
        <p>
          If you need a seasoned civil lawyer in Surrey, our team brings expertise, dedication, and thorough legal knowledge to address a wide range of civil matters. We provide top-tier legal representation in property disputes, contract law, negligence claims, and employment issues. Our civil lawyers work tirelessly to achieve favorable outcomes, protecting your rights and interests every step of the way.
        </p>
      </>
    ),
    image: "/background.jpg",
    altText: "Civil lawyer in Surrey providing legal advice",
  },
  {
    title: "Property Disputes and Real Estate Law in Surrey",
    description: (
      <>
        <p>
          Navigating property disputes can be complex and time-consuming. Our experienced real estate and civil lawyers in Surrey specialize in resolving conflicts around property boundaries, land ownership, tenancy agreements, and more. We take the time to understand your situation fully, aiming to resolve issues efficiently while safeguarding your property rights under British Columbia’s legal framework.
        </p>
      </>
    ),
    image: "/background5.jpg",
    altText: "Real estate law and property dispute lawyer in Surrey",
  },
  {
    title: "Contract Disputes and Breach of Contract Cases",
    description: (
      <>
        <p>
          When a contract is breached, swift and knowledgeable legal assistance is crucial. Our civil law team in Surrey handles all forms of contract disputes, from interpreting contract terms to enforcing breach of contract claims. We help clients pursue remedies such as compensation, contract renegotiation, or specific performance, ensuring your contractual rights are upheld.
        </p>
      </>
    ),
    image: "/background3.jpg",
    altText: "Lawyer assisting with contract disputes in Surrey",
  },
  {
    title: "Negligence Claims and Personal Injury Civil Cases",
    description: (
      <>
        <p>
          Negligence claims require an in-depth understanding of tort law and a strategic approach to achieve fair compensation. Our skilled civil lawyers in Surrey have a proven record of success in personal injury cases, whether due to accidents, medical malpractice, or workplace incidents. We prioritize your recovery and financial security, helping you navigate the claims process with confidence.
        </p>
      </>
    ),
    image: "/background6.jpg",
    altText: "Surrey lawyer handling negligence claims",
  },
  {
    title: "Employment Disputes and Workplace Rights",
    description: (
      <>
        <p>
          Our employment law experts in Surrey are adept at handling complex workplace disputes, including wrongful termination, harassment, and wage claims. We provide strong representation for both employees and employers, addressing workplace concerns through negotiation, mediation, or litigation. Count on us to defend your rights and seek resolutions aligned with British Columbia’s employment laws.
        </p>
      </>
    ),
    image: "/background4.jpg",
    altText: "Employment dispute lawyer in Surrey",
  },
  {
    title: "Why Choose Us for Civil Law Matters?",
    description: (
      <>
        <p>
          At our Surrey law firm, we combine practical experience with a commitment to client-focused service. Our civil lawyers offer strategic guidance tailored to your needs, ensuring that every decision is well-informed and every action is in your best interest. Whether you’re facing a lawsuit, seeking to protect your business interests, or require sound legal advice, we’re here to provide robust, effective solutions.
        </p>
      </>
    ),
    image: "/background2.jpg",
    altText: "Experienced civil law firm in Surrey",
  },
];
