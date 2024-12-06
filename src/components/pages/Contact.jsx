import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Mobile from '../3d/Mobile';
import HoverDevCards from '../3d/HoverLinks';
import Forms from '../UI/Forms';
import { ScrollTrigger } from 'gsap/all';
import { DivOrigami } from '../3d/FlipingCards';


gsap.registerPlugin(ScrollTrigger)
function Contact() {
  const sidebarRefD = useRef(null);
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

 
   
  

  
  
 

  return (

    <>
    <div className="w-full  text-white flex items-center justify-center">
<h1 className="w-[80vw] bg-navy py-10 text-[5vw] font-bold px-5  flex items-center justify-center rounded-b-xl">
   CONTACT US
</h1>
        </div>
    
  <div className='p-5 md:p-10 '>
    
    <div className='flex  flex-col-reverse md:flex-row md:items-center md:justify-center'>
    <p className='mt-20 text-sm xl:text-xl max-w-[65vw] KhabyR  md:max-w-[50vw]'>
      Lets connect togather and leave a mark on this world we povude fast service and best quality out there
      dont be late and have advantage working with us we are known for our work @ MOTION creators 
    </p>
    <div className='mt-20 md:px-5 Mobile z-[100] relative '>
      <Mobile/>
    </div>
   
    </div>
    <div className=' gap-10 md:items-center md:justify-center flex flex-col md:flex-row AnimatedDiv relative z-[50]'>
      <div className='cards '>
        <DivOrigami/>
      </div>
      <div className='flex justify-end'>  <p className='mt-20 text-sm xl:text-xl max-w-[65vw] KhabyR  md:max-w-[50vw]'>
      Lets connect togather and leave a mark on this world we povude fast service and best quality out there
      dont be late and have advantage working with us we are known for our work @ MOTION creators 
    </p>
    </div>
    </div>
    
          <div className='mt-20'>
          <h1 className='KhabyB heading uppercase border-b pb-10 text-navy text-[4vw] font-bold'>Get in touch</h1>
</div>
<div className="flex flex-col md:flex-row mt-10">
<div className='md:w-[50%] '>
  <Forms/>
</div>

<div className='md:w-[50%] flex flex-col-reverse md:flex-col justify-center'>
  <HoverDevCards/>
  <div className='flex justify-end px-5 '>
  
  <div className="flex justify-end Fancy p-5">
  <button  className="bg-orange py-2 px-2 font-bold shadow-black shadow-lg text-white" >Submit</button>
        </div>
    </div>
</div>
</div>


          </div>
          </>
  
  )
}

export default Contact