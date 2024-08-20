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
    <hr/>
       <TextGenerateEffect
            words="Meet our team."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
          
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-white dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white dark:text-white  text-base"
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
                    className="px-4 py-3 text-sm rounded-full font-bold bg-purple text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 px-5  tracking-wider text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-[#141819] dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={1000}
                  height={1000}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-2xl object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-white dark:text-neutral-200 text-center text-lg md:text-left "
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
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
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
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
    src: "/rajpic.jpg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/raj-gill-a83b22a7/",
    content: () => {
      return (
        <p>
     The owner and founder of Raj Gill Law Corp, Rajdeep S. Gill, has been helping clients with a variety of claims since 2014. His specialties are family law, civil law and Real Estate.

Raj is a life-long learner and enjoys the challenge of solving problems. Raj is an expert with the legal process and familiar with the system. He is a strategic thinker and enjoys analysis of various paths, and finds the best possible solution. His passion to help clients in difficult situations and strong negotiation and persuasion skills made him a strong and winning lawyer. Raj graduated in Commerce from the University of British Columbia and his Doctor of Law (J.D.) from the Seattle University.
        </p>
      );
    },
  },
  {
    description: "Lawyer",
    title: "Madhur Goyal",
    src: "/madhurpic.png",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/madhur-goyal-584010168/",
    content: () => {
      return (
        <p>
         Madhur Goyal is an Internationally Trained Lawyer, who gained considerable experience in Immigration Law, Family Law and Litigation after completing his B.A.LL. B and Madhur was called to the Bar Council of Punjab and Haryana (India) in September 2016. Madhur was called to the Law Society of British Columbia in March 2022 and since, has successfully navigated through numerous highly complex cases at the firm. Madhur is constantly up to date on the latest developments in Family Law, Immigration Law and other areas of Civil Litigation to craft perfect legal solutions for each client.  Madhur is goal-oriented and provides quality work even under pressure. Madhur is adept in handling clients while managing the firm and his workload. With the high volume of trials that the firm deals with, Madhur is able to navigate through the demands of the trial along with the administrative management of the firm.
        </p>
      );
    },
  },

  {
    description: "Lawyer",
    title: "Prateeq Ghai",
    src: "/download.png",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/prateeq-ghai-45620b160",
    content: () => {
      return (
        <p>
    Prateeq Ghai is an experienced legal professional with a solid academic foundation and a diverse career background. He earned his Bachelor of Laws (LLB) from Panjab University, India, in 2012, and later pursued a Master of Business Administration (MBA) in Business Administration and Management from the University of Wales. Prateeq has accumulated significant legal experience, notably serving as an Articled Student at CGM Lawyers for nearly two years, where he gained hands-on experience in various aspects of legal practice. His expertise spans across multiple domains, including administrative assistance and compensation law, making him a valuable member of any legal team. Prateeq&apos;s commitment to excellence and his comprehensive understanding of legal processes allow him to provide high-quality legal services to his clients.
        </p>
      );
    },
  },
  {
    description: "Articling Student",
    title: "Shrea Grover",
    src: "/shreyapic.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
      Shrea Grover is an Internationally Trained Lawyer, possessing a Master of Laws in Constitutional and Environmental Law from India. Shrea is in the legal profession since 2017. Shrea specializes in Legal Research as she has gained considerable experience over 4 years while working as a Legal Researcher at the High Court of Punjab and Haryana, Chandigarh, India. Shrea is a hard-working, driven individual capable of rising to any challenge. Shrea’s passion for legal research, and her enthusiasm to get the job done, make her a dedicated and esteemed member of the Legal Team at Raj Gill Law Corporation. <br/> Shrea is an open and honest person who strives to be the best in all that she does.
        </p>
      );
    },
  },
  {
    description: "Paralegal",
    title: "Simran Gill",
    src: "/logonav.png",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        <p>
        
        </p>
      );
    },
  },
  {
    description: "Paralegal",
    title: "Ashley Deucth",
    src: "/logonav.png",
    ctaText: "Visit",
    ctaLink: "",
    content: () => {
      return (
        <p>
         
          and abroad.
        </p>
      );
    },
  },
  {
    description: "Paralegal",
    title: "Shahin Hardy",
    src: "/logonav.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
        
        </p>
      );
    },
  },
  {
    description: "Legal Assistant",
    title: "Sahib Dhaliwal",
    src: "/sahibpic.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
        Sahib is a student studying at Simon Fraser University where he is in the final year of his Bachelor of Arts in Criminology. He started at Raj Gill Law Corporation in 2021 after he realized his passion for law. Sahib is a self-driven and ambitious individual who is looking forward to attending law school, so he too can pursue his interests in Family law and other areas of litigation. He brings great enthusiasm to the workplace and creates an encouraging environment for his own learning and for the satisfaction of his co-workers and clients.
        </p>
      );
    },
  },
];
