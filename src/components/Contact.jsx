import React, {useRef} from 'react'
import Rishabh from '../assets/rishabh.jpeg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, textRef);

    return () => ctx.revert();
  }
  , [textRef]);
  return (
    <div className='relative w-full md:min-h-screen sm:min-h-[40vh] flex items-center justify-center py-4 px-10'>
      <div className='md:w-[95vw] sm:w-[98vw] contact'>
        <h1 ref={textRef} className='md:text-[6vw] font-bold md:leading-[6vw] sm:text-[6.5vw] sm:leading-[6.5vw]'>
          <div className='md:w-[5vw] md:h-[5vw] sm:w-[7vw] sm:h-[7vw] inline-block mr-2 rounded-full overflow-hidden'>
            <img src={Rishabh} alt="" />
          </div>

         
          Let's talk about a <br />project, collaboration or<br />an idea you may have.
        </h1>
      </div>
    </div>
  )
}

export default Contact