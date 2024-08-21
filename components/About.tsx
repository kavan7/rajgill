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
              >
              
              </motion.button>
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
          {cards.map((card, index) => (
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
    email: 'raj@rajgilllaw.com',
    src: "/rajpic.jpg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/raj-gill-a83b22a7/",
    content: () => {
      return (
        <p>
Rajdeep S. Gill is a  lawyer known for his dedication to client
advocacy in both court and mediation settings. With extensive experience appearing
before the Supreme Court of British Columbia and the British Columbia Court of Appeal,
Raj excels in high-stakes litigation and complex negotiations.
<br/>
Prior to obtaining his Doctor of Law (J.D.) from Seattle University, Raj graduated from
the University of British Columbia with a focus on Commerce. Raj combines a strong
academic foundation with a passion for learning and overcoming challenges. His keen
strategic judgment and commitment to achieving optimal outcomes make him a
formidable advocate who is always prepared to fight vigorously for his clients&#39; interests.      </p>
      );
    },
  },
  {
    description: "Associate Lawyer",
    title: "Madhur Goyal",
    src: "/madhurpic.png",
    email: 'mgoyal@rajgilllaw.com',
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/madhur-goyal-584010168/",
    content: () => {
      return (
        <p>
        Madhur Goyal is an Internationally Trained Lawyer, who gained considerable experience in Immigration Law, Family Law and Litigation after completing his B.A.LL. B and Madhur was called to the Bar Council of Punjab and Haryana (India) in September 2016. Madhur was called to the Law Society of British Columbia in March 2022 and since, has successfully navigated through numerous highly complex cases at the firm. Madhur is constantly up to date on the latest developments in Family Law, Immigration Law and other areas of Civil Litigation to craft perfect legal solutions for each client.  Madhur is goal-oriented and provides quality work even under pressure. Madhur is adept in handling clients while managing the firm and his workload. With the high volume of trials that the firm deals with, Madhur is able to navigate through the demands of the trial along with the administrative management of the firm.

Madhur is passionate about complex family and civil litigation that involves the scrutiny of a seasoned legal professional within the industry.
        </p>
      );
    },
  },
  {
    description: "Associate Lawyer",
    title: "Prateeq Ghai",
    email: 'prateeq@rajgilllaw.com',
    src: "/download.png",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/prateeq-ghai-45620b160",
    content: () => {
      return (
        <p>
          Prateeq Ghai is an experienced legal professional with a solid
          academic foundation and a diverse career background. He earned his
          Bachelor of Laws (LLB) from Panjab University, India, in 2012, and
          later pursued a Master of Business Administration (MBA) in Business
          Administration and Management from the University of Wales. Prateeq
          has accumulated significant legal experience, notably serving as an
          Articled Student at CGM Lawyers for nearly two years, where he gained
          hands-on experience in various aspects of legal practice. His
          expertise spans across multiple domains, including criminal, corporate and family law, making him a valuable member of Raj Gill Law Corporation. Prateeq&apos;s commitment to excellence and his
          comprehensive understanding of legal processes allow him to provide
          high-quality legal services to his clients.
        </p>
      );
    },
  },
  {
    description: "Articling Student",
    title: "Shrea Grover",
    src: "/shreyapic.png",
    email: 'shreag@rajgilllaw.com',
    ctaText: "Connect",
    ctaLink: "",
    content: () => {
      return (
        <p>
         Shrea Grover is an accomplished international lawyer with a Master’s Degree in
Constitutional and Environmental Law from India. With over seven years of diverse legal
experience, Shrea has cultivated expertise in navigating complex legal landscapes. Her
professional journey includes four years as a Legal Researcher at the High Court of
Punjab and Haryana in Chandigarh, India, where she honed her skills in legal analysis
and research.
<br/>
Shrea’s career is distinguished by a strong commitment to client advocacy and
achieving favorable outcomes. Her proficiency in delivering positive results has been
evident even during her articling period with Raj Gill Law Corporation, showcasing her
dedication and capability in the legal field. Passionate about helping clients realize their
goals, Shrea continues to leverage her international training and practical experience to
provide exceptional legal services.
        </p>
      );
    },
  },
  {
    description: "Paralegal",
    title: "Simran Gill",
    src: "/logonav.png",
    email: 'simran@rajgilllaw.com',
    ctaText: "Connect",
    ctaLink: "",
    content: () => {
      return <p>Simran Gill is a skilled paralegal with over 4 years of experience in the legal field,
      complemented by a background of over a decade in administrative positions. Simran’s
      experience includes significant roles in ICBC Defense and Personal Injury, enriching her
      expertise in various legal areas. Currently focused on Family Law and Civil Law, Simran
      excels in drafting legal documents, conducting detailed legal research, managing
      complex case files, and maintaining clear and empathetic communication with the
      clients of Raj Gill Law Corporation.
      <br/>
      As a voting member of the BC Paralegal Association and a Commissioner for taking
      Oaths in British Columbia, Simran is committed to upholding high professional
      standards and ensuring legal accuracy.</p>;
    },
  },
  {
    description: "Paralegal",
    title: "Ashley Dewett",
    src: "/logonav.png",
    email: 'ashley@rajgilllaw.com',
    ctaText: "Connect",
    ctaLink: "",
    content: () => {
      return <p>Ashley Dewett is a dedicated paralegal specializing in Family Law, known for her
      enthusiasm and empathy in her work. As the firm’s primary contact for desk-order
      divorce files, Ashley expertly manages these cases with a focus on accuracy and
      efficient processing.
      <br/>
      Ashley’s expertise in this area combined with her compassionate approach, ensures
      that each case is handled with meticulous attention to detail and professionalism.
      Ashley is recognized for consistently delivering excellent service to clients navigating
      the divorce process.</p>;
    },
  },
  {
    description: "Legal Assistant",
    title: "Shahin Hardy",
    src: "/logonav.png",
    email: 'shahin@rajgilllaw.com',
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/shahin-hardy-717941221/",
    content: () => {
      return <p>
        Shahin Hardy is a dedicated legal assistant with a strong background in legal support and disaster management. A graduate with a Bachelor of Laws (LL.B.) from Panjab University, Chandigarh, India, Shahin brings a solid understanding of legal principles and practices to her role at Raj Gill Law Corporation. She has honed her skills in supporting lawyers through meticulous case management, legal research, and document preparation.
<br/>
Currently, Shahin is further enhancing her expertise by pursuing a Post-Baccalaureate Diploma in Disaster Management from the Justice Institute of British Columbia. Her unique combination of legal acumen and disaster management knowledge equips her to address complex challenges in legal and emergency contexts with confidence and precision.
      </p>   },
  },
  {
    description: "Legal Assistant",
    title: "Sahib Dhaliwal",
    email: 'sahib@rajgilllaw.com',
    src: "/sahibpic.png",
    ctaText: "Connect",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Sahib is a student studying at University of Leicester where he is in
          his final year of Law School. He started at Raj Gill Law Corporation
          in 2021 after he realized his passion for law. Sahib is a self-driven
          and ambitious individual looking forward to graduating law school to
          pursue his interests in Family law and other areas of litigation. He
          brings great enthusiasm to the workplace and creates an encouraging
          environment for his own learning and for the satisfaction of his
          co-workers and clients.
        </p>
      );
    },
  },
  {
    description: "Legal Assistant",
    title: "Keshav Goyal",
    email: 'keshav@rajgilllaw.com',
    src: "/logonav.png",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/in/kavanabeyratne/",
    content: () => {
      return (
        <p>
         
        </p>
      );
    },
  },
  {
    description: "Intern",
    title: "Kavan Abeyratne",
    email: 'kavanabeyratne@gmail.com',
    src: "/kavanpic.jpg",
    ctaText: "Connect",
    ctaLink: "",
    content: () => {
      return (
        <p>
       
        </p>
      );
    },
  },
];
