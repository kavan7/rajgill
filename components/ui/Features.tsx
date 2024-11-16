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
import React, { useEffect, useId, useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CloseIcon } from "../About";

export function FeaturesSectionDemo() {
  const featureList = [
    {
      title: "Divorce Lawyers Surrey",
      description:
        "We are experienced family lawyers who strive to provide our clients with the best possible outcome. We use several different approaches in achieving the best result for our clients, including collaborative divorce, mediation, arbitration, and litigation when necessary.",
      icon: <IconUsersGroup />,
      items: [
        "Divorce",
        "Sole Custody",
        "Child Support",
        "Asset Division",
        "Spousal Support",
      ],
    },
    {
      title: "Civil Lawyers Surrey",
      description:
        "Raj Gill Law can help you navigate the legal system with experience in property disputes, construction issues, and general litigation.",
      icon: <IconGavel />,
      items: [
        "General Civil Litigation",
        "Property Disputes",
        "Construction Disputes",
      ],
    },
    {
      title: "Immigration Lawyers Surrey",
      description:
        "We handle everything from setting up your business and ensuring compliance to assisting with contracts, mergers, and more.",
      icon: <IconCurrencyDollar />,
      items: [
        "Business Registration",
        "Corporate Governance",
        "Contract Drafting and Review",
      ],
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

type FeatureProps = {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  items?: string[];
};

const Feature = ({
  title,
  description,
  icon,
  index,
  items,
}: FeatureProps) => {
  const [active, setActive] = useState<FeatureProps | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
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
        "flex flex-col lg:border-r border-white/[0.6] py-10 relative group/feature hover:bg-black-200/[0.3] rounded-sm  dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=""
            >
              <motion.div layoutId={`image-${active.title}-${id}`} ></motion.div>

              <div>
                <div className="flex justify-between overflow-y-auto items-start p-4">
                  <div className="overflow-y-auto">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium flex flex-row text-white dark:text-neutral-200 text-3xl"
                    >
                      {active.title}
                      <button
                        className="ml-40 bg-neutral-900 rounded-full h-6 w-6"
                        onClick={() => setActive(null)}
                      >
                        <CloseIcon />
                      </button>
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white dark:text-white font-light text-base mt-3"
                    >
                      <hr className="mb-3" />
                      {active.description}
                      <br />
                      <hr className="my-3" />
                      {items && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fill, minmax(150px, 1fr))",
                            gap: "10px",
                            padding: "10px",
                          }}
                        >
                          {items.map((item, idx) => (
                            <h3
                              key={idx}
                              style={{
                                padding: "8px",
                                borderRadius: "4px",
                                textAlign: "center",
                                margin: "0",
                              }}
                            >
                              - {item}
                            </h3>
                          ))}
                        </div>
                      )}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive({ title, description, icon, index, items })}
        className="p-4 flex flex-col cursor-pointer"
      >
        <div className="flex gap-4 flex-col h-full w-full">
          <motion.div layoutId={`image-${title}-${id}`}></motion.div>
          <div className="flex justify-center items-center flex-col">
            <motion.h3
              layoutId={`title-${title}-${id}`}
              className="font-bold flex flex-row px-2 text-white dark:text-neutral-200 text-center text-2xl uppercase md:text-left"
            >
              <span className="mr-2">{icon}</span>
              {title}
            </motion.h3>
            <Link href={`/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          <button className="mt-4 px-6 py-2  bg-slate-600 text-white rounded-md hover:bg-slate-200 transition-all">
            Learn More
          </button>
        </Link>
            <motion.p
              layoutId={`description-${description}-${id}`}
              className="text-neutral-100 dark:text-neutral-400 text-center md:text-left font-light"
            ></motion.p>
          </div>
        </div>
        {/* Rectangular Button for navigation */}
      
      </motion.div>
    </div>
  );
};
