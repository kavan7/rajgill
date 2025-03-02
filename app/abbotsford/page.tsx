"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";



export default function page() {
  const navItems = [
    {
        name: "Services",
        id: "home",
        icon: <></>
    }
  ]


  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
      <TracingBeam>
      <Hero/>
      </TracingBeam>
          <div id="home">
            
            
            <div className="flex flex-col">
            
            </div>
          </div>
        
   
          <div id="">
      
          </div>
          <div id="" />
          <hr id="" />
        
          <hr />
          <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          
          </div>
    
      </div>
    </main>
  );
}
