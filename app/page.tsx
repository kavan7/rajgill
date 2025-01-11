"use client";
import React from "react";
import Hero from "@/components/Hero";
import {
  IconBriefcase,
  IconMan,
  IconPhone,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import Touch from "@/components/Touch";



export default function page() {
  

  const navItems = [
    {
      name: "Services",
      id: "services",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Team",
      id: "about",
      icon: <IconMan className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      id: "touch",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
       <FloatingNav navItems={navItems}/>
        <TracingBeam>
          <div id="home">
            <div className="flex flex-col">
              <Hero />
            </div>
          </div>
          <About />
          <hr />
          <div id="">
      
          </div>
          <div id="" />
          <hr id="" />
          <Touch />
          <hr />
          <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Footer />
          </div>
        </TracingBeam>
      </div>
    </main>
  );
}
