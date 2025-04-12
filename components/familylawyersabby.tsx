"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";

export function TracingBeamDemoFive() {
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
    title: "Expert Family Lawyers in Abbotsford",
    description: (
      <>
        <p>
          If you’re looking for experienced family lawyers in Abbotsford, our team provides compassionate, effective legal representation across all family law matters. We specialize in divorce, child custody, property division, spousal support, and domestic agreements to help families resolve their disputes efficiently and respectfully.
        </p>
        <p>
          From high-conflict custody battles to amicable separation agreements, our Abbotsford team is equipped to guide you with clarity and care. We also help clients with matters such as adoption, protection orders, and grandparents’ rights, offering a full spectrum of legal solutions rooted in empathy and strategy.
        </p>
      </>
    ),
    image: "/background.png",
    altText: "Experienced family lawyer assisting clients in Abbotsford",
  },
  {
    title: "Divorce and Separation Services in Abbotsford",
    description: (
      <>
        <p>
          Navigating a divorce in Abbotsford can be challenging, but our skilled divorce lawyers make the process smoother. From mediation to court representation, we help our clients pursue fair resolutions. We understand the emotional and financial toll of separation and work to safeguard your interests throughout each step of the divorce process.
        </p>
        <p>
          Whether it’s a straightforward uncontested divorce or a more complex contested matter, we’re here to provide clarity on legal timelines, division of assets, spousal support, and parenting arrangements. Our firm is committed to helping Abbotsford families move forward confidently.
        </p>
      </>
    ),
    image: "/background5.png",
    altText: "Divorce lawyer consulting with a client in Abbotsford",
  },
  {
    title: "Child Custody and Support Lawyers in Abbotsford",
    description: (
      <>
        <p>
          Child custody and support matters require sensitivity, expertise, and a deep understanding of British Columbia’s family law system. Our Abbotsford-based legal team focuses on ensuring that custody and support arrangements prioritize the best interests of your children.
        </p>
        <p>
          We provide legal advice and representation for sole and joint custody cases, access rights, and variations to existing court orders. Whether you’re establishing support for the first time or requesting changes due to life circumstances, our lawyers are committed to achieving outcomes that work for your family.
        </p>
      </>
    ),
    image: "/background3.png",
    altText: "Lawyer providing child custody support in Abbotsford",
  },
  {
    title: "Property Division and Spousal Support",
    description: (
      <>
        <p>
          At Raj Gill Law Corporation, we assist Abbotsford clients in navigating property division and spousal support issues with confidence. We help clearly define matrimonial property, address complex asset portfolios, and ensure proper disclosure to reach fair agreements under the Family Law Act.
        </p>
        <p>
          Whether you&apos;re concerned about pensions, investments, real estate, or business interests, our team will protect your financial rights and ensure your voice is heard. We also handle spousal support claims and defenses, offering pragmatic advice on entitlement, duration, and amount.
        </p>
      </>
    ),
    image: "/background6.png",
    altText: "Lawyer discussing property division and spousal support with client in Abbotsford",
  },
];
