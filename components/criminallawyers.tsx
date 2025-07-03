"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconBriefcase, IconMan, IconPhone, IconChevronDown } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";
import { TracingBeam } from "./ui/tracing-beam";

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

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleCard = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <TracingBeam className="px-4 sm:px-8 lg:px-16">
      <SecondNav navItems={navItems} />
      <div className="w-full mx-auto p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30 space-y-6">
        {criminalLawContent.map((item, index) => {
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

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-blue-600 text-white p-6 sm:p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Book a Free Consultation</h2>
          <p className="mt-3 text-blue-100 text-sm sm:text-base">
            Unsure about your legal rights or next steps? Our defence lawyers are here to guide you — confidentially and for free.
          </p>
          <a
            href="/#touch"
            className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Schedule Now
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-14 space-y-6">
          <h3 className="text-white text-2xl font-bold text-center">Frequently Asked Questions</h3>
          {faqList.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div
                key={`faq-${index}`}
                className="border border-white/10 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/10 transition"
                >
                  <span className="text-white font-medium text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <IconChevronDown
                    className={`w-5 h-5 text-white transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-neutral-300">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
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
          Facing criminal charges can be life-altering. Our experienced defence lawyers provide support and strategy against DUI, assault, theft, drug offenses, and more.
        </p>
        <p>
          Whether it’s your first charge or not, we offer proactive, personalized defence strategies that protect your future.
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
          DUI charges carry serious consequences. We challenge roadside procedures, breathalyzer data, and ensure your rights weren’t violated.
        </p>
        <p>
          From first-time offenders to complex Charter arguments, we tailor your defence for the best result.
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
          If you’re facing assault, domestic violence, or weapons charges, we build strong courtroom strategies and challenge weak or contradictory evidence.
        </p>
        <p>
          Whether claiming self-defense or disputing facts, we’ll make sure your voice is heard.
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
          From shoplifting to embezzlement, we minimize penalties and pursue alternatives like diversion or peace bonds whenever possible.
        </p>
        <p>
          Early legal advice can protect your record and help avoid harsh consequences.
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
          Charged with possession, trafficking, or cultivation? We examine all facts and Charter violations to reduce or dismiss charges.
        </p>
        <p>
          We’re experienced in CDSA matters and cannabis-related offenses post-legalization.
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
          With decades of criminal law experience, our firm is known for tireless advocacy, clear communication, and winning results.
        </p>
        <p>
          We act fast — because your future is too important to wait.
        </p>
      </>
    ),
    image: "/background2.png",
    altText: "Experienced criminal law firm in Surrey",
  },
];

const faqList = [
  {
    question: "Do I need a lawyer if it’s my first criminal charge?",
    answer:
      "Yes. Even first-time charges can lead to a criminal record or jail time. A lawyer ensures your rights are protected and helps minimize consequences.",
  },
  {
    question: "What should I do if I’ve been arrested?",
    answer:
      "Remain silent and ask for a lawyer immediately. Don’t answer questions without legal advice. You have the right to remain silent and consult counsel.",
  },
  {
    question: "Can a DUI charge be dropped?",
    answer:
      "It depends on the evidence and police conduct. We explore issues like improper stops, flawed testing, and Charter violations to dismiss or reduce charges.",
  },
  {
    question: "What is a peace bond?",
    answer:
      "A peace bond is a court order to stay away from a person or location. It’s often used as an alternative to a criminal conviction for certain minor offenses.",
  },
];
