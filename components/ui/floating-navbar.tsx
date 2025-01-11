"use client";

import React, { useState } from "react";
import logo from "@/app/resizedlogo.png";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    id: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress!, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05 || direction < 0) {
        setVisible(true);
      } else {
        setVisible(true);
      }
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : 0,
          opacity: visible ? 1 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={cn(
          "flex max-w-full fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black bg-white/[0.96] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        <button
          onClick={() => {
            scrollToSection("home");
          }}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-2 py-2 rounded-full"
        >
          <span>
            <Image src={logo} alt="logo" width={50} height={50} />
          </span>
        </button>
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={""}
            onClick={() => {
              scrollToSection(navItem.id);
            }}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-5 rounded-full">
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="flex flex-row"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-r1:"
                data-state="closed"
              >
             
                <IconMapPin className="mr-2" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="mt-10">
              12885 80 Ave #205, Surrey, BC
              <hr />
              1779 Clearbrook Road #216, Abbotsford, BC
            </PopoverContent>
          </Popover>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
