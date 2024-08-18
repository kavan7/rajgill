
"use client";
import { FaCalendar} from "react-icons/fa6";
import {motion} from 'framer-motion'
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { AuroraBackground } from "./ui/Aurora";
import { WavyBackground } from "./ui/WavyBackground";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";
//@ts-ignore
import { LoopPingPong } from "three";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MacbookScrollDemo } from "./Contact";
import { FeaturesSectionDemo } from "./ui/Features";


const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };
  
  const [active, setActive] = useState('');
  return (
    <section className="flex flex-col">
    <div className="pb-[-30px] pt-36">
    
      <div>
    
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-lg text-center text-black-100 font-medium max-w-80">
            RAJ GILL LAW CORPORATION
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Surrey, British Columbia’s most trusted Attorneys"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider font-normal mb-4 text-sm md:text-lg lg:text-2xl">
            Schedule a free consultation.
          </p>
            
         
          <Dialog  >
      <DialogTrigger asChild>
        <button>
         <MagicButton
              title="Schedule"
              icon={<FaCalendar />}
              position="right" 
              otherClasses="rounded-lg"
            /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-2xl">
        <DialogHeader>
          <DialogTitle>Schedule a consultation</DialogTitle>
          <DialogDescription>
            Please fill out the information below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Full Name
            </Label>
            <Input
              id="name"
              defaultValue="John Smith"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="johnsmith@email.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone No.
            </Label>
            <Input
              id="phone"
              defaultValue="(604)-999-9999"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Service
            </Label>
            <Input
              id="service"
              defaultValue="Desk Order Divorce"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
           
          
        
        </div>
       
        </div>
        
      </div>
      
 <div className="flex justify-center items-center md:mt-[70px] mt-[20px] lg:mt-[70px]">
 <motion.div
        animate={{
          y: [-40,-90, -40]
        }}
        transition={{
          duration: 1.5, 
          repeat : Infinity,
          repeatType: LoopPingPong
        }} >
          <Link
          href={''}
            className="flex items-center gap-2 shadow-card"
            onClick={() => {
              setActive("");
              scrollToSection("services")
            }}>          
                 
            <svg data-accordion-icon className="  w-16 rotate-180 shrink-0 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="#4d7499" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
      </Link>
      <Link
           href={''} 
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              scrollToSection("services")
            }}>    
        <svg data-accordion-icon className="  w-16  rotate-180 shrink-53" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="#4d7499" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
      </Link>
      
        
        </motion.div>
 </div>
 
 <div id="services" className="py-5 mb-36">
 <FeaturesSectionDemo/>
 </div>
    </section>
  );
};

export default Hero;