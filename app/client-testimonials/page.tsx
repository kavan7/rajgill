import { InfiniteMovingCards } from "@/components/Testimonials";
import React from "react";
import { Metadata } from "next";

import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import { SecondNav } from "@/components/ui/secondnav";

export const metadata: Metadata = {
  title: "Client Testimonials | Raj Gill Law Corporation",
  description: "See what our clients have to say about their experience with Raj Gill Law Corporation. Trusted legal services in Surrey and Abbotsford.",
  robots: "index, follow",
};

const testimonials = [
  {
    quote: "Excellent service. Staff is very helpful and understanding. Really appreciated.",
    name: "Shobha Kanwal",
    title: "3 months ago",
  },
  {
    quote: "Raj gill is a fabulous family law attorney to work with. He explained everything to me about the case (from the procedure to what to expect) right from the start of our very first meeting. He did so in a way that I could understand and was very prompt and clear with communication the entire time. Only downside was that it took  longer thn the given timeframe. Big thanks to shrea grover who was always available to answer all the queries.",
    name: "Kaur Inder",
    title: "5 months ago",
  },
  {
    quote: "Raj & his team has been really understanding & especially have a good hand holding on cases. I definitely recommend them for most who find it tough to get into such conversations, they can really be helpful.",
    name: "Pri D",
    title: "5 months ago",
  },
  {
    quote: "Best lawyer in the Surrey.Great customer service. Special thanks to Madhur goyal and shrea..Highly recommend.",
    name: "Rajbir Kaur",
    title: "6 months ago",
  },
  {
    quote: "Had Pretty amazing experience with this firm. Tried many law firms but wasn’t as satisfied with the work so one of my recommended raj gill best experience so far.",
    name: "Dilpreet Singh",
    title: "7 months ago",
  },
  
];

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
  

const ClientTestimonials = () => {
  return (
    <main className="flex flex-col items-center justify-center py-20 ">
       <SecondNav navItems={navItems}/>
      <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl text-neutral-300">
      What our clients have to say.
    </h1>
    <p className="uppercase tracking-widest text-lg text-center mt-5 text-slate-200 font-medium max-w-80">
      RAJ GILL LAW CORPORATION
    </p>
      <InfiniteMovingCards items={testimonials} speed="normal" direction="left" />
    </main>
  );
};

export default ClientTestimonials;
