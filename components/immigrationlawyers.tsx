"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import { SecondNav } from "./ui/secondnav";

export function TracingBeamDemoThree() {
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
                  alt={item.altText} // Unique alt text for each image
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
    title: "Trusted Immigration Lawyers in Surrey – Free Consultations Available",
    description: (
      <>
        <p>
          Navigating immigration law can be complex and overwhelming, but our immigration lawyers in Surrey are here to guide you every step of the way. Offering free consultations, we provide clear, effective guidance on visa applications, permanent residency, family sponsorship, work permits, and more. Let our experienced team handle the complexities, so you can focus on your future in Canada.
        </p>
      </>
    ),
    image: "/background.jpg",
    altText: "Experienced immigration lawyer in Surrey offering free consultations",
  },
  {
    title: "Free Consultation for Immigration Matters",
    description: (
      <>
        <p>
          Our Surrey-based law firm offers free consultations to assess your immigration needs and outline the best approach for your unique situation. Whether you’re applying for a visa, seeking permanent residency, or reuniting with family, we offer personalized guidance to make the process smoother and more manageable.
        </p>
      </>
    ),
    image: "/background5.jpg",
    altText: "Lawyer in Surrey providing free consultation for immigration services",
  },
  {
    title: "Permanent Residency and Citizenship Applications",
    description: (
      <>
        <p>
          Achieving permanent residency or Canadian citizenship is a significant milestone. Our team has extensive experience in guiding clients through the Express Entry, Provincial Nominee Programs (PNPs), and Citizenship applications. We work diligently to ensure that your application is complete, accurate, and has the best chance for approval.
        </p>
      </>
    ),
    image: "/background3.jpg",
    altText: "Assistance with permanent residency and citizenship applications in Surrey",
  },
  {
    title: "Work Permits and Business Immigration",
    description: (
      <>
        <p>
          Canada is a land of opportunity, and securing a work permit or starting a business here is an exciting step. Our Surrey immigration lawyers help with work permit applications, business visas, and entrepreneur immigration pathways, ensuring compliance with immigration regulations while maximizing your chances of success.
        </p>
      </>
    ),
    image: "/background6.jpg",
    altText: "Lawyer in Surrey assisting with work permits and business immigration",
  },
  {
    title: "Family Sponsorship and Reunification",
    description: (
      <>
        <p>
          Reuniting families is a core mission of our immigration services. We assist with spousal sponsorships, parent sponsorships, and other family reunification visas, handling each case with the care and attention it deserves. Book a free consultation to discuss your family’s unique needs and let us guide you through the sponsorship process with compassion and expertise.
        </p>
      </>
    ),
    image: "/background4.jpg",
    altText: "Surrey immigration lawyer assisting with family sponsorship and reunification",
  },
  {
    title: "Why Choose Us for Immigration Services in Surrey?",
    description: (
      <>
        <p>
          With a team of dedicated immigration lawyers in Surrey, we offer client-focused, comprehensive legal services that simplify the immigration process. From preparing your documentation to providing honest advice, our free consultations allow you to explore your options without any financial commitment. Trust our experience to help make Canada your home.
        </p>
      </>
    ),
    image: "/background2.jpg",
    altText: "Surrey law firm providing comprehensive immigration services",
  },
];
