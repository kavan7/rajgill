"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function About() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div id="about">
        <hr />
        <TextGenerateEffect
          words="Meet our team"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-fit w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
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
              ></motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full sm:max-h-[80%] max-w-[500px] max-h-[80%]  md:h-fit md:max-h-[80%] flex flex-col bg-neutral-900 dark:bg-neutral-900 sm:rounded-3xl"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={1000}
                    height={1000}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    loading="lazy"
                  />
                </motion.div>

                <div className="flex-1 overflow-y-auto">
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-medium text-white dark:text-neutral-200 text-base"
                      >
                        {active.title} &nbsp;&nbsp;|&nbsp;&nbsp;
                        {active.email}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-white dark:text-white text-base"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 mr-0 text-sm rounded-full font-bold bg-purple text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                    <a onClick={() => setActive(null)}>
                      <CloseIcon />
                    </a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-300 px-5 tracking-normal text-xs md:text-xs lg:text-base h-fit md:h-fit pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-400"
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
        <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col hover:bg-[#141819] dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col h-full w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={1000}
                    height={1000}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-2xl object-cover object-top"
                    loading="lazy"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-white dark:text-neutral-200 text-center text-lg md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={``}
                    className="text-neutral-100 dark:text-neutral-400 text-center md:text-left font-light"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="black"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Founder & Lawyer",
    title: "Rajdeep S. Gill",
    email: "raj@rajgilllaw.com",
    src: "/rajpic.jpg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/raj-gill-a83b22a7/",
    content: () => {
      return (
        <p>
          Rajdeep S. Gill is a lawyer known for his dedication to client advocacy
          in both court and mediation settings. With extensive experience
          appearing before the Supreme Court of British Columbia and the British
          Columbia Court of Appeal, Raj excels in high-stakes litigation and
          complex negotiations.
        </p>
      );
    },
  },
];
