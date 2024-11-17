import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function Footer() {
  const links = [
  

   
   
    {
      title: "Raj GIll",
      icon: (
        <Image
          src="/favicon.ico"
          width={100}
          height={100}
          alt="Raj Gill Law Logo"
        />
      ),
      href: "https://rajgilllaw.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/rajgilllaw",
    },

    {
      title: "Instagram ",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/rajgilllaw/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.x.com/rajgilllaw",
    },
  ];
  return (
 
    <div className="flex-col">
     
    <div className="">
 
      <FloatingDock
       items={links}
      />
    </div>
    </div>
   
  );
}
