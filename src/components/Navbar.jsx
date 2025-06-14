import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
    
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuAnimation = () => {
    if(isOpen){
      gsap.fromTo(overlayRef.current, {
        y: '100%',
        opacity: 0
      }, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    }else{
      gsap.fromTo(overlayRef.current, {
        y: '0%',
        opacity: 1
      }, {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
    }
  }

  useGSAP(()=>{
    menuAnimation();
  },[isOpen])

  

  return (
    <>
      <nav className='w-full h-[8vh] bg-white-100 fixed top-0 left-0 z-[200] px-4 flex items-center justify-between'>
        <h1 className="text-[1.2vw] font-bold">Rishabh Srivastava</h1>
        <h3 
        onClick={!isOpen ? toggleMenu : closeMenu}
        className="text-[1.2vw] font-bold tracking-[0.1em] cursor-pointer">{isOpen ? "Close":"Menu"}</h3>

      </nav>
      <div ref = {overlayRef} className="fixed right-0 h-screen w-screen bg-white z-[199]">
        <ul className='flex flex-col items-center justify-center h-full gap-5 text-[3.5vw]'>
          <div className="overflow-hidden relative py-2 flex flex-col justify-between">
          <h1 className="cursor-pointer" onClick={() => scrollToSection('.home')}>About</h1>
          <div className="absolute w-full bg-zinc-900 h-[0.2vh] bottom-2 left-[-100%]"></div>
          </div>
          <div className="overflow-hidden relative py-2 flex flex-col justify-between">
          <h1 className="cursor-pointer" onClick={() => scrollToSection('.work')}>Work</h1>
          <div className="absolute w-full bg-zinc-900 h-[0.2vh] bottom-2 left-[-100%]"></div>
          </div>
          <div className="overflow-hidden relative py-2 flex flex-col justify-between">
          <h1 className="cursor-pointer" onClick={() => scrollToSection('.process')}>Process</h1>
          <div className="absolute w-full bg-zinc-900 h-[0.2vh] bottom-2 left-[-100%]"></div>
          </div>
          <div className="overflow-hidden relative py-2 flex flex-col justify-between">
          <h1 className="cursor-pointer" onClick={() => scrollToSection('.contact')}>Contact</h1>
          <div className="absolute w-full bg-zinc-900 h-[0.2vh] bottom-2 left-[-100%]"></div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

//  <ul className='flex justify-end items-center gap-6 text-[1.1vw]'>
//         <li className="cursor-pointer" onClick={() => scrollToSection('.home')}>About</li>
//         <li className="cursor-pointer" onClick={() => scrollToSection('.work')}>Work</li>
//         <li className="cursor-pointer" onClick={() => scrollToSection('.process')}>Process</li>
//         <li className="cursor-pointer" onClick={() => scrollToSection('.contact')}>Contact</li>
//       </ul>
