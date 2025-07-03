"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";


import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import Touch from "@/components/Touch";
import ChatBox from "@/components/ChatBox";
import FloatingChatWidget from "@/components/FloatingChatWidget";





export default function Page() {

 const [isOpen] = useState(false);


  return (
    <main className="relative bg-opacity-10 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <TracingBeam>
             {isOpen && <ChatBox />}
             
            <FloatingChatWidget/>
          <div id="home" className="w-full">
            <div className="flex flex-col">
              <Hero />
            </div>
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
