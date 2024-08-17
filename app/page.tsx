import Hero from "@/components/Hero";
import Image from "next/image";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import logonav from '@/public/logonav.png'
import { MacbookScrollDemo } from "@/components/Contact";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/Aurora";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
  
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

      <div className="max-w-7xl w-full">
     
          <FloatingNav navItems={navItems} />
        <Hero/>
        <MacbookScrollDemo/>
      
      </div>
  
     
    </main>
 
  );
}
