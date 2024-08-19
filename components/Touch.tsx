import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { PinContainer } from './ui/3d-pin'
import { IconLocationBolt, IconMail, IconMapPin2, IconPhone } from '@tabler/icons-react'

const Touch = () => {
  return (
    <main className='flex flex-col md:flex-row lg:flex-col'>
    <div  id='touch' className="h-[40rem] w-full bg-transparent flex xs:flex-col flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="md:text-2xl text-7xl lg:text-8xl font-bold  ml-5 text-center text-neutral-300 relative z-20">
      Our Contacts.
    </h1>
    
    <div className="w-[60rem]  bg-transparent relative">
        
      {/* Gradients */}
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black-300 to-transparent h-[2px]  blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black-200 to-transparent h-px " />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-[5px]  blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-px " />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full rounded-full"
        particleColor="#4b4f57"
      />
      

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-transparent"></div>
    </div>

  </div>
  <div className=" md:w-full lg:w-full w-7/8  bg-transparent align-middle flex md:flex-row lg:flex-row flex-col  ">
   </div>
  
  </main>
  )
}

export default Touch