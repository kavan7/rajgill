"use client";
import React from "react";

import Image from "next/image";

import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 ">
      <div className="w-full mx-auto shadow-xl shadow-black-100 p-10 rounded-4xl  antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 w-full mt-[25px]">
            

            <p className="text-xl mb-4 text-neutral-500">
              {item.title}
            </p>

            <div className="text-md  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="300"
                  width="800"
                  className="rounded-xl mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
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
        </>
      ),
      image:
        "/background.jpg", // Use an appropriate image URL
    },
    {
      title: "Divorce and Separation Services in Surrey",
      description: (
        <>
          <p>
            Navigating a divorce in Surrey can be challenging, but our skilled divorce lawyers make the process smoother. From mediation to court representation, we help our clients pursue fair resolutions. We understand the emotional and financial toll of separation and work to safeguard your interests throughout each step of the divorce process.
          </p>
        </>
      ),
      image:
        "/background2.jpg", // Use an appropriate image URL
    },
    {
      title: "Child Custody and Support Lawyers",
      description: (
        <>
          <p>
            Child custody and support issues can be emotionally charged, but our experienced child custody lawyers in Surrey are dedicated to protecting your family’s well-being. We work on both custody arrangements and child support calculations, prioritizing the needs of your children while ensuring fair agreements that comply with legal standards.
          </p>
        </>
      ),
      image:
        "/background3.jpg", // Use an appropriate image URL
    },
    {
      title: "Property Division and Spousal Support",
      description: (
        <>
          <p>
            Our family law team in Surrey handles complex property division and spousal support cases, ensuring that our clients receive fair settlements based on British Columbia’s Family Law Act. Whether you’re dealing with shared assets, debt division, or spousal support, we provide tailored guidance to achieve equitable solutions for your future.
          </p>
        </>
      ),
      image:
        "https://rajgilllaw.com/property-division.jpg", // Use an appropriate image URL
    },
  ];