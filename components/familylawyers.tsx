"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";

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

const dummyContent = [
  {
    title: "Expert Family Lawyers in Surrey",
    description: (
      <>
        <p>
          If you’re looking for experienced family lawyers in Surrey, our team provides compassionate, effective legal representation across all family law matters. We specialize in divorce, child custody, property division, spousal support, and domestic agreements to help families resolve their disputes efficiently and respectfully.
        </p>
        <p>
          Whether you're facing a contested divorce, a separation agreement, or post-divorce modifications, we have the skills to support you through the process. We also assist with adoption, guardianship, and domestic violence protection orders, always prioritizing the well-being of your family.
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
          Navigating a divorce in Surrey can be challenging, but our skilled divorce lawyers make the process smoother. From mediation to court representation, we help our clients pursue fair resolutions. We understand the emotional and financial toll of separation and work to safeguard your interests throughout each step of the divorce process.
        </p>
        <p>
          We guide clients through both uncontested and contested divorce proceedings and provide legal clarity on parenting plans, spousal maintenance, and shared property responsibilities. Our Surrey-based team combines legal precision with empathy to help you transition into the next chapter with confidence.
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
          Child custody and support issues can be emotionally charged, but our experienced child custody lawyers in Surrey are dedicated to protecting your family’s well-being. We work on both custody arrangements and child support calculations, prioritizing the needs of your children while ensuring fair agreements that comply with legal standards.
        </p>
        <p>
          We assist with sole and joint custody, access rights, and modifications to existing custody orders. Our legal approach ensures both parents understand their rights and obligations, helping create a stable environment that supports your child’s development.
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
          Our family law team in Surrey handles complex property division and spousal support cases, ensuring that our clients receive fair settlements based on British Columbia’s Family Law Act. Whether you’re dealing with shared assets, debt division, or spousal support, we provide tailored guidance to achieve equitable solutions for your future.
        </p>
        <p>
          We work to protect your financial interests by clearly identifying matrimonial property, exempt assets, and fair support entitlements. Our goal is to provide legal solutions that minimize conflict while maximizing fairness and clarity for both parties.
        </p>
      </>
    ),
    image: "/background6.png",
    altText: "Lawyer discussing property division and spousal support with client in Surrey",
  },
];
