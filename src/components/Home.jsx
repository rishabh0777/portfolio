import React, {useRef, useState} from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const Home = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const imgRef5 = useRef(null);
  const imgRef6 = useRef(null);

  const heroTextRef = useRef(null);
  const heroParaTextRef = useRef(null)


  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.addLabel('a');

    

    tl.fromTo(imgRef1.current, {
      opacity: 0,
      left: '50%',
      top: '50%'
    },{
      opacity: 1,
      left: '10vw',
      top: '10vh',
      duration: 1.6,
      ease: 'power2.out',
      delay: 1.5
    }, 'a');

    tl.fromTo(imgRef2.current, {
      opacity: 0,
      left: '50%'
    },{
      opacity: 1,
      left: '5vw',
      duration: 1.6,
      ease: 'power2.out',
      delay: 1.5
    }, 'a');
    tl.fromTo(imgRef3.current, {
      opacity: 0,
      left: '50%',
      bottom: '50%'
    },{
      opacity: 1,
      left: '10vw',
      bottom: '10vh',
      duration: 1.6,
      ease: 'power2.out',
      delay: 1.5
    }, 'a');
    tl.fromTo(imgRef4.current, {
      opacity: 0,
      right: '50%',
      top: '50%'
    },{
      opacity: 1,
      right: '10vw',
      top: '10vh',
      duration: 1.6,
      ease: 'power2.out',
      delay: 1.5
    }, 'a');
    tl.fromTo(imgRef5.current, {
      opacity: 0,
      right: '50%'
    },{
      opacity: 1,
      right: '5vw',
      duration: 1.6,
      ease: 'power2.out',
      delay: 1.5
    }, 'a');
    tl.fromTo(imgRef6.current, {
      opacity: 0,
      right: '50%',
      bottom: '50%'
    },{
      opacity: 1,
      right: '10vw',
      bottom: '10vh',
      duration: 1.6,
      ease: 'power2.out',
      delay: 1.5
    }, 'a');

    tl.fromTo(heroTextRef.current, {
      opacity: 0,
      scale:0.5
    },{
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
   
    });

    tl.fromTo(heroParaTextRef.current, {
      opacity: 0,
      y: 50
    },{
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // Infinite subtle motion (like shaking/vibrating)
gsap.to(imgRef1.current, {
  x: '+=4',
  y: '+=3',
  duration: 1.2,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to(imgRef2.current, {
  x: '-=3',
  y: '+=2',
  duration: 1.4,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to(imgRef3.current, {
  x: '+=2',
  y: '-=3',
  duration: 1.5,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to(imgRef4.current, {
  x: '-=4',
  y: '+=2',
  duration: 1.3,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to(imgRef5.current, {
  x: '+=3',
  y: '-=2',
  duration: 1.4,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to(imgRef6.current, {
  x: '-=2',
  y: '+=3',
  duration: 1.6,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});


    
  },[])


  return (
    <div className="home relative w-full h-screen flex flex-col items-center justify-center">
      <h1 ref={heroTextRef} className="text-center md:text-[5vw] md:leading-[5vw] text-[10vw]  font-bold">EXCEPTIONAL<br /><span className="text-pink-300">DIGITAL </span><br />EXPERIANCES</h1>
      <p ref={heroParaTextRef} className="md:w-[40%] w-[65%] text-center mt-[2vh] text-[2.8vw] md:text-[1.2vw]">I'm Rishabh Srivastava — Full-Stack Developer & Founder of <span className='text-pink-300'>Webli</span>, crafting modern, high-performing websites with animations and scalable solutions.
</p>
      <div ref={imgRef1} className="md:w-[10vw] md:h-[15vh] w-[30vw] bg-red-400 absolute left-[10vw] md:top-[10vh] top-[15vh]">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1710447503692-8364152e431c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdyaXRpbmclMjBzb210aGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div ref={imgRef2} className="md:w-[10vw] md:h-[15vh] w-[2vw] sm:h-[15vh] bg-red-400 absolute left-[5vw] hidden md:flex">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1699046795037-e736ec97cc2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div ref={imgRef3} className="md:w-[10vw] md:h-[15vh] w-[30vw] sm:h-[15vh] bg-red-400 absolute left-[10vw] md:bottom-[10vh] bottom-[15vh]">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW5uaW5nfGVufDB8fDB8fHww" alt="" />
      </div>
      <div ref={imgRef4} className="md:w-[10vw] md:h-[15vh] w-[30vw] sm:h-[15vh] bg-red-400 absolute right-[10vw] md:top-[10vh] top-[15vh]">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531421331102-e5124fed6bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRhYnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div ref={imgRef5} className="md:w-[10vw] md:h-[15vh] w-[30vw] sm:h-[15vh] bg-red-400 absolute right-[5vw] hidden md:flex">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGN8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
      <div ref={imgRef6} className="md:w-[10vw] md:h-[15vh] w-[30vw] sm:h-[15vh] bg-red-400 absolute right-[10vw] md:bottom-[10vh] bottom-[15vh] ">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlfGVufDB8fDB8fHww" alt="" />
      </div>
    </div>
  )
}

export default Home