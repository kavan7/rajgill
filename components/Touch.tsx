import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { PinContainer } from './ui/3d-pin'
import { IconLocationBolt, IconMail, IconMapPin2, IconPhone } from '@tabler/icons-react'

const Touch = () => {
  return (
    <main className='flex flex-col md:flex-row lg:flex-col'>
    <div  id='touch' className="h-[40rem] w-full bg-white flex xs:flex-col flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="md:text-2xl text-7xl lg:text-8xl font-bold  ml-5 text-center text-black-100 relative z-20">
      Our Contacts.
    </h1>
    
    <div className="w-[60rem]  bg-white relative">
        
      {/* Gradients */}
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black-300 to-transparent h-[2px]  blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black-200 to-transparent h-px " />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple to-transparent h-[5px]  blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#000000"
      />
      

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>

  </div>
  <div className=" md:w-full lg:w-full w-7/8  align-middle flex md:flex-row lg:flex-row flex-col  ">
  <PinContainer title='(604) 593-6470' className='text-neutral-300 '><div className="flex basis-full flex-col p-4  tracking-tight h-[10rem] w-[15rem]  "><IconPhone/>Phone<br className='mt-5'/>(604) 593-6470</div></PinContainer>
  <div className='mt-5 mb-5'/>
  <PinContainer title='12885 80 Ave #205, Surrey, BC V3W 0E6' className='text-neutral-300 '><div className="flex basis-full flex-col p-4 tracking-tight h-[10rem] w-[15rem] sm:basis-1/2 "><IconMapPin2/>Offices<br className='mt-5'/>12885 80 Ave #205, Surrey, BC V3W 0E6</div></PinContainer>
  <div className='mt-5 mb-5'/>
 <PinContainer title='Info@rajgilllaw.com' className='text-neutral-300 '><div className="flex basis-full flex-col p-4 tracking-tight h-[10rem] w-[15rem] sm:basis-1/2 "><IconMail/>Email<br className='mt-5'/>Info@rajgilllaw.com</div></PinContainer>
  </div>
  
  </main>
  )
}

export default Touch