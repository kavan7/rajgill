import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
import { InfiniteMovingCards } from "./Testimonials";
import { Icon123, IconBrandGoogle, IconBrandGoogleAnalytics, IconBrandGoogleBigQuery } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "I had a wonderful experience working with Raj Gill Law firm during my divorce process. Mr. Raj Gill & Mr. Madhur Goyal were not only professional, knowledgeable, but also compassionate throughout the entire process. Their work ethics and genuine care for their clients truly sets them apart. Their legal fees are also quite reasonable. I highly highly recommend Raj Gill Law firm to anyone in need of legal assistance. Thank you for your exceptional service!",
    name: "Roveena Robinson",
    title: "3 months ago",
  },
  {
    quote:
      "I recently used their services for my divorce. Highly impressed with their quality or service and support . My divorce went so smoothly and is done within less than 6 months only. Big thanks to Madhur and Raj and Shrea for the great help. Highly recommended!!!",
    name: "Gurpreet Kaur",
    title: "5 months ago",
  },
  {
    quote: "My name is sukhjinder singh and i just want to share my experience Raj gill and law corporation, all staff members treated very good, especially shreag mam. She give advise and guide me very well at evey step and i did same, and i got positive result. So, I am very glad with this service. Thank you mam and other staff members",
    name: "Kamaljit Singh",
    title: "2 months ago",
  },
  {
    quote:
      "Raj & his team has been really understanding & especially have a good hand holding on cases. I definitely recommend them for most who find it tough to get into such conversations, they can really be helpful.Thanks",
    name: "Pri D",
    title: "2 months ago",
  },
  {
    quote:
      "Raj gill is a fabulous family law attorney to work with. He explained everything to me about the case (from the procedure to what to expect) right from the start of our very first meeting. He did so in a way that I could understand and was very prompt and clear with communication the entire time. Only downside was that it took  longer thn the given timeframe. Big thanks to shrea grover who was always available to answer all the queries.",
       name: "Kaur Inder",
    title: "4 months ago",
  },
  {
    quote:
      "Recently I found myself in urgent need of a lawyer when my workplace and my union both refused me legal help. With a court date only a week away I was in a panic so I googled 'a lawyer near me'. Since I live in the middle of Surrey the firm named Raj Gill Law came up so I left a message not knowing what to expect. I was immediately called back, referred to a lawyer named Ransiri Fernando and given a free 30 minute appointment with him 2 days later...",
        name: "Marlene ter Kuile",
    title: "3 years ago",
  },
];

export function MacbookScrollDemo() {
  return (
    <div id="" className="overflow-hidden dark:bg-[#0B0B0F] text-neutral-800 bg-transparent w-full">
            <h1 className="text-5xl text-center text-neutral-300 mt-10 ">Testimonials</h1>
      <h1 className="text-1xl text-center text-neutral-300 mt-10 mb-10 uppercase tracking-wider">Hear what our clients have to say about us.</h1>
      <div className="">
      <h1 className="text-sm flex flex-row text-center text-neutral-300 mt-10 ml-10 "><span className="mr-1 mt-[0.1]"></span><a href="https://www.google.com/search?client=firefox-b-d&q=Raj+Gill+Law+Corporation#lrd=0x5485d91def814d43:0x33bc4e5ad6736eef,1,,,," target="_blank"> <IconBrandGoogle className=""/><span className="mt-1">&nbsp;Reviews</span></a></h1>
      </div>  <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      
      <hr className="opacity-[0.1] mt-36"/>
      <MacbookScroll
        title={
          <span className="text-neutral-400">
            Frequently asked<br />Questions
          </span>
        }
        badge={
        
            <Badge className="h-10 w-10 transform -rotate-12" />
         
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};
