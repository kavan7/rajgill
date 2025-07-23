"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";


import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import Touch from "@/components/Touch";
import ChatBox from "@/components/ChatBox";
import FloatingChatWidget from "@/components/FloatingChatWidget";
import { InfiniteMovingCards } from "@/components/Testimonials";





export default function Page() {

 const [isOpen] = useState(false);

const testimonials = [
  {
    quote: "Excellent service. Staff is very helpful and understanding. Really appreciated.",
    name: "Shobha Kanwal",
    title: "3 months ago",
  },
  {
    quote: "Raj gill is a fabulous family law attorney to work with. He explained everything to me about the case (from the procedure to what to expect) right from the start of our very first meeting. He did so in a way that I could understand and was very prompt and clear with communication the entire time. Only downside was that it took longer than the given timeframe. Big thanks to shrea grover who was always available to answer all the queries.",
    name: "Kaur Inder",
    title: "5 months ago",
  },
  {
    quote: "Raj & his team has been really understanding & especially have a good hand holding on cases. I definitely recommend them for most who find it tough to get into such conversations, they can really be helpful.",
    name: "Pri D",
    title: "7 months ago",
  },
  {
    quote: "Best lawyer in Surrey. Great customer service. Special thanks to Madhur Goyal and Shrea.. Highly recommend.",
    name: "Rajbir Kaur",
    title: "6 months ago",
  },
  {
    quote: "Had pretty amazing experience with this firm. Tried many law firms but wasn’t as satisfied with the work, so one of my recommended Raj Gill best experience so far.",
    name: "Dilpreet Singh",
    title: "7 months ago",
  },
  {
    quote: "Great Service! Highly recommend for your family law needs. Helped me out tremendously. The free consultation was way better than the ones that were charged.",
    name: "Ili",
    title: "1 hour ago",
  },
  {
    quote: "Madhur Goyal professionally handled my real estate transaction.",
    name: "Rabina Ghai",
    title: "2 weeks ago",
  },
  {
    quote: "Great experience working with this team! They were super helpful and made a tough situation a lot easier to deal with. Always there to answer my questions and explain things in a way that made sense. Definitely recommend if you're looking for caring and knowledgeable family lawyers!",
    name: "Karan",
    title: "4 weeks ago",
  },
  {
    quote: "I had an excellent experience with Raj Gill Law. Madhur and Shrea are incredibly knowledgeable and supportive throughout. I highly recommend this firm, especially if you have the chance to work with Madhur and Shrea. Thank you Raj Gill Law Team.",
    name: "Happy Hayer",
    title: "a month ago",
  },
  {
    quote: "THANK YOU SO MUCH!! I had an excellent experience with Raj Gill Law. Madhur, one of their lawyers, was incredibly knowledgeable and attentive throughout my case.",
    name: "Kunwar Kaur",
    title: "3 months ago",
  },
  {
    quote: "I had a wonderful experience working with Raj Gill Law firm during my divorce process. Mr. Raj Gill & Mr. Madhur Goyal were not only professional, knowledgeable, but also compassionate throughout the entire process. Their work ethics and dedication were exceptional.",
    name: "Roveena Robinson",
    title: "8 months ago",
  },
  {
    quote: "My name is Sukhjinder Singh and I just want to share my experience with Raj Gill and Law Corporation. All staff members treated me very well, especially Shrea Grover. She gave advice and guided me very well at every step, and I did the same, and I got great results.",
    name: "Kamaljit Singh",
    title: "8 months ago",
  },
  {
    quote: "Our family had a consultation with Raj Gill, and he was absolutely amazing to work with. He was incredibly compassionate, kind, and caring, taking the time to listen and understand our situation. Despite it being a last-minute request, he accommodated us, even on a weekend, which we truly appreciated.This was a family law matter, and speaking with him gave us so much clarity and reassurance. He explained everything thoroughly and made sure we felt supported throughout the conversation. On top of his professionalism and empathy, his rates were also very reasonable, which was a huge relief. Overall, it was just a really great experience, and we are so grateful for his time and guidance. I highly recommend Raj Gill to anyone looking for a knowledgeable and compassionate lawyer.",
    name: "Kam",
    title: "5 days ago",
  },
    {
    quote: "Excellent service Ashley and raj gill handle my divorce case and made it easy for me.thanks raj gill law corporation.I highly recommend for family case",
    name: "Aman Gill",
    title: "2 weeks ago",
  },
    {
    quote: "A Very good Law firm in metro Vancouver.They understand my all problems and querries and they fought and handled the cases like they are contesting it their own….So impressed with Raj Gill law 👍🏻And Mr. Prateeq Ghai. A very fine lawyer in this firm he handled my case file regarding family law and i dont think so i did any hard work in my case he handled all the work and support me in my bad phase and took all my worries personally. Hats off guys… you are the best. Keep rising 🥂",
    name: "Abhishek kapoor",
    title: "A week ago",
  },
    {
    quote: "I had a great experience with Raj Gill Law. I met Mr. Raj regarding my divorce who is very knowledgeable and professional lawyer. I am highly impressed with their service and support. My case went smoothly and is done within six months. Big thanks to Raj and Ashley for the great help. I highly recommend Raj Gill Law to anyone in need of legal assistance.",
    name: "Gagandeep Samra",
    title: "3 weeks ago",
  },
    {
    quote: "Good service, these guy’s well. Know how to do their job. Thanks",
    name: "Prabhjot Singh",
    title: "3 weeks ago",
  },
    {
    quote: "Shrea was really helpful throughout the process.",
    name: "Simranjit Kaur",
    title: "Yesterday",
  },
    {
    quote: "Worked with Raj Gill on some legal stuff and he was solid. Straight up, no BS, explained things in a way that actually made sense. Super chill but knows what he's doing. Whole process was smooth and way less stressful than I expected. Would def go back if I ever need a lawyer again..",
    name: "Javer Acasta",
    title: "3 weeks ago",
  },

];
  return (
    <main className="relative bg-opacity-10 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <TracingBeam>
             {isOpen && <ChatBox />}
             
            <FloatingChatWidget/>
          <div id="home" className="w-full">
            <div className="flex flex-col">
              <Hero />
               <hr  className="mb-10"/>
            </div>
          <h1 className="font-bold mb-10 text-center text-[40px] md:text-5xl lg:text-6xl text-neutral-300">
      What our clients have to say.
    </h1>
<div className="flex flex-row items-center justify-center space-x-1">
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
</div>
            <InfiniteMovingCards items={testimonials} speed="slow" direction="left" />
          </div>
          <About />
          <hr />
        <div>

        </div>
     
          <hr id="" />
          <Touch />
          <hr />
          <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Footer />
          </div>
        
        </TracingBeam>
      
      </div>
    </main>
  );
}
