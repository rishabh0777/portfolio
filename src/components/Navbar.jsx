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
      <nav className="fixed top-0 left-0 w-full h-[10vh] z-[999] px-4 flex justify-between items-center">
        <h1 className="name tracking-[0.1em] text-[1.4vw]">Rishabh Srivastava</h1>
        <ul className="flex text-[1.2vw] gap-6 items-center">
          <li className="cursor-pointer" onClick={() => scrollToSection('.home')}>About</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('.work')}>Work</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('.process')}>Process</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('.contact')}>Contact</li>
        </ul>
        <button onClick={()=>window.open('https://webli.vercel.app', '_blank')} className="bg-[#caf291] px-4 py-2 rounded-full text-black">VISIT TO WEBLI</button>
      </nav>
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
