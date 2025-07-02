"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";

export function TracingBeamDemoFour() {
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
        {criminalLawContent.map((item, index) => (
          <article key={`content-${index}`} className="mb-10 w-full mt-[25px]">
            <h2 className="text-xl mb-4 text-neutral-300">{item.title}</h2>
            <div className="text-md prose text-neutral-400 prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.altText}
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

const criminalLawContent = [
  {
    title: "Skilled Criminal Defence Lawyers in Surrey",
    description: (
      <>
        <p>
          Facing criminal charges can be life-altering. At Raj Gill Law Corporation, our experienced criminal defence lawyers in Surrey provide unwavering support and legal expertise. We defend clients against charges including DUI, assault, theft, and drug offenses. Our mission is to protect your rights and secure the best possible outcome.
        </p>
        <p>
          With in-depth courtroom experience and strategic negotiation skills, we analyze each element of your case to build a tailored defense plan. Whether it’s your first charge or a repeat accusation, we are here to help you move forward with confidence.
        </p>
      </>
    ),
    image: "/background.png",
    altText: "Criminal defence lawyer in Surrey",
  },
  {
    title: "DUI and Impaired Driving Defence",
    description: (
      <>
        <p>
          DUI charges carry serious consequences, including license suspension, fines, and even jail time. Our Surrey criminal lawyers assess every detail—from roadside procedures to breathalyzer accuracy—to build a strong defence. Let us help you protect your driving privileges and your future.
        </p>
        <p>
          We explore all legal options including Charter violations, lack of probable cause, or errors in police conduct. A strong DUI defense starts with a legal team that understands both the law and the science behind your case.
        </p>
      </>
    ),
    image: "/background5.png",
    altText: "Lawyer reviewing DUI case files in Surrey",
  },
  {
    title: "Assault and Violent Crime Charges",
    description: (
      <>
        <p>
          If you&apos;re facing charges of assault, domestic violence, or other violent offenses, our legal team is here to help. We take a strategic approach to challenge the evidence and represent you confidently in court. Every case deserves a fair defense—trust us to stand by you.
        </p>
        <p>
          We handle simple and aggravated assault, uttering threats, weapons charges, and more. From self-defense claims to factual disputes, we carefully evaluate all facts to pursue the best legal result.
        </p>
      </>
    ),
    image: "/background3.png",
    altText: "Surrey defence lawyer handling assault case",
  },
  {
    title: "Theft, Fraud, and Property Offenses",
    description: (
      <>
        <p>
          Charges like theft, fraud, or mischief can significantly impact your criminal record and employment prospects. Our lawyers work diligently to resolve these matters with minimal penalties. We’re committed to defending your reputation and helping you move forward.
        </p>
        <p>
          We represent clients in shoplifting, embezzlement, identity fraud, vandalism, and other property-related offenses. Early legal intervention can lead to diversion programs, peace bonds, or even full acquittals.
        </p>
      </>
    ),
    image: "/background6.png",
    altText: "Lawyer discussing theft and fraud charges",
  },
  {
    title: "Drug Offense Defence in British Columbia",
    description: (
      <>
        <p>
          British Columbia’s drug laws are complex and penalties can be severe. Whether you&apos;re charged with possession, trafficking, or production, our firm has the experience to guide you. We examine every angle to challenge the prosecution’s case and pursue alternative sentencing or dismissals where possible.
        </p>
        <p>
          We routinely assist with CDSA charges, including controlled substance possession, intent to distribute, and marijuana-related offenses post-legalization. We are meticulous in defending against unlawful search and seizure or Charter breaches.
        </p>
      </>
    ),
    image: "/background4.png",
    altText: "Drug defense lawyer in Surrey, BC",
  },
  {
    title: "Why Choose Raj Gill Law for Criminal Defence?",
    description: (
      <>
        <p>
          At Raj Gill Law Corporation, we combine decades of criminal law experience with a client-first approach. We know what’s at stake. Our firm is committed to clear communication, tireless advocacy, and protecting your rights every step of the way.
        </p>
        <p>
          We take pride in our responsive, results-oriented representation and our track record of success in Surrey criminal courts. From the moment you retain us, we begin working on your defense with urgency and care.
        </p>
      </>
    ),
    image: "/background2.png",
    altText: "Experienced criminal law firm in Surrey",
  },
];
