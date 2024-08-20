import { cn } from "@/lib/utils";
import {
  IconUsersGroup,
  IconGavel,
  IconCurrencyDollar,
  IconPlane,
  IconPrison,
  IconHome,
} from "@tabler/icons-react";

import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { CloseIcon } from "../About";

export function FeaturesSectionDemo() {
  const featureList = [
    {
      title: "Family Law",
      description: "",
      icon: <IconUsersGroup />,
    },
    {
      title: "Civil Law",
      description: "",
      icon: <IconGavel />,
    },
    {
      title: "Corporate Law",
      description:
        "",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Immigration Law",
      description: "",
      icon: <IconPlane />,
    },
    {
      title: "Criminal Law",
      description: "",
      icon: <IconPrison />,
    },
    {
      title: "Real Estate Law",
      description: "",
      icon: <IconHome />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {featureList.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  //@ts-ignore
  const [active, setActive] = useState<null | typeof Feature[number]>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-white/[0.6] py-10 relative group/feature hover:bg-black-200/[0.3]  dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-900 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 dark:bg-neutral-900 sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
              
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-white dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white dark:text-white text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 px-5 tracking-wider text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive({ title, description, icon })}
        className="p-4 flex flex-col  dark:   cursor-pointer"
      >
        <div className="flex gap-4 flex-col h-full w-full ">
          <motion.div layoutId={`image-${title}-${id}`}></motion.div>
          <div className="flex justify-center items-center flex-col">
            <motion.h3
              layoutId={`title-${title}-${id}`}
              className="font-bold flex flex-row px-2 text-white dark:text-neutral-200 text-center text-2xl uppercase md:text-left"
            ><span className="mr-2">{icon}</span>
              {title}
            </motion.h3>
            <motion.p
              layoutId={`description-${description}-${id}`}
              className="text-neutral-100 dark:text-neutral-400 text-center md:text-left font-light"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
