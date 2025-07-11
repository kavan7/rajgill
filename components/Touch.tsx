import { IconMail, IconMapPin2, IconPhone } from '@tabler/icons-react'
import React from 'react'


const Touch = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined') {
      window.gtag_report_conversion("tel:+16045936470");
    }
  };
  return (
    <main className='flex flex-col md:flex-row lg:flex-col'>
    <div  id='touch' className="h-[40rem] w-full bg-transparent flex xs:flex-col flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="md:text-2xl text-7xl lg:text-8xl font-bold  ml-5 text-center text-neutral-100 relative z-20">
      Our Contacts
    </h1>
    
    <div className="w-[60rem]  bg-transparent relative">
        
      {/* Gradients */}
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black-300 to-transparent h-[2px]  blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black-200 to-transparent h-px " />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-[5px]  blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-px " />

      {/* Core component */}
    
      

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-transparent"></div>
      
    </div>
    <div className='flex flex-col'>
    <h1 className='text-center flex flex-row text-white font-light text-2xl'><IconMail className='mt-2 mr-2'/> info@rajgilllaw.com</h1>
    
    <h1 className='text-center flex flex-row text-white mt-4 font-light  text-2xl'><button onClick={handleCall} className='flex flex-row' ><a href="tel:+16045936470" className='flex flex-row'><IconPhone className='mt-1 mr-2 '/>604-593-6470</a></button></h1>
    </div>
    <div className='flex flex-col'>
      <hr className='opacity-0.2 mt-5 mb-5'/>
      <a href="https://maps.app.goo.gl/8VfGNuFm88xrwuPX8" target='_blank'>
     
    <h1 className='text-center flex flex-row text-white font-light mt- 5 text-3xl'><IconMapPin2 className='mt-2 mr-2'/> 12885 80 Ave #205, Surrey, BC</h1> </a> 
    <a href="https://maps.app.goo.gl/YxYMufi68Y4oxmUN8" target='_blank'>
 
    <h1 className='text-center flex flex-row text-white font-light mt- 5 text-3xl'><IconMapPin2 className='mt-2 mr-2'/> 1779 Clearbrookroad #216, Abbotsford, BC </h1>
  </a>
      </div>
  </div>
  <div className=" md:w-full lg:w-full   bg-transparent align-middle flex md:flex-row lg:flex-row flex-col  ">

   </div>
 
  </main>
  )
}

export default Touch