"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import logonav from '@/public/logonav.png'
import { MacbookScrollDemo } from "@/components/Contact";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/Aurora";
import { FeaturesSectionDemo } from "@/components/ui/Features";
import { About } from "@/components/About";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Footer } from "@/components/Footer";
import Touch from "@/components/Touch";
export default function Home() {
  const navItems = [
    {
      name: "Services",
      id: "services",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Team",
      id: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      id: "touch",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
 <>    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
 
      <div className="max-w-7xl w-full">
     
          <FloatingNav navItems={navItems} />
          <TracingBeam>
          <div id="home">
         
        <Hero/>
        </div>
       <About/>
       <hr/>
       <MacbookScrollDemo/>
       <hr/>
       <Touch/>
       <hr/>
      <div className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <Footer/>
       </div>
       </TracingBeam>
       
      </div>
     
    </main>
      
      </>

  );
}
