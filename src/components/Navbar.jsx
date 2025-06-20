import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nameRef = useRef(null);
  const iconRef = useRef(null);
  const btnRef = useRef(null);
  const overlayRef = useRef(null);
  const ulRef = useRef(null);        // mobile ul
  const desktopUlRef = useRef(null); // desktop ul

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const menuAnimation = () => {
    if (isOpen) {
      gsap.fromTo(overlayRef.current, {
        y: '100%',
        opacity: 0,
      }, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.fromTo(ulRef.current?.children, {
        opacity: 0,
        y: 30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3,
      });
    } else {
      gsap.to(overlayRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  };

  // Animate mobile menu on open
  useGSAP(() => {
    menuAnimation();
  }, [isOpen]);

  // Animate logo, icon, button, and desktop ul on mount
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.addLabel('a');

    tl.fromTo(nameRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
    }, 'a');

    tl.fromTo(iconRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
    }, 'a');

    tl.fromTo(btnRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
    }, 'a');

    // Animate desktop nav items
    tl.fromTo(desktopUlRef.current?.children, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    }, 'a');
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[10vh] z-[999] px-4 flex justify-between items-center bg-transparent">
        <h1 ref={nameRef} className="name tracking-[0.1em] md:text-[1.4vw] text-[4vw]">Rishabh Srivastava</h1>

        <ul ref={desktopUlRef} className="text-[1.2vw] gap-6 items-center hidden md:flex">
          <li className="cursor-pointer hover:text-[#caf291]" onClick={() => scrollToSection('.home')}>About</li>
          <li className="cursor-pointer hover:text-[#caf291]" onClick={() => scrollToSection('.work')}>Work</li>
          <li className="cursor-pointer hover:text-[#caf291]" onClick={() => scrollToSection('.process')}>Process</li>
          <li className="cursor-pointer hover:text-[#caf291]" onClick={() => scrollToSection('.contact')}>Contact</li>
        </ul>

        <button
          ref={btnRef}
          onClick={() => window.open('https://webli.vercel.app', '_blank')}
          className="bg-[#caf291] px-4 py-2 rounded-full text-black hidden md:flex"
        >
          VISIT TO WEBLI
        </button>

        <i
          ref={iconRef}
          onClick={toggleMenu}
          className={`flex md:hidden ${isOpen ? "ri-close-fill" : "ri-align-right"} text-[6vw] font-bold`}
        ></i>
      </nav>

      {/* Mobile Hamburger Menu */}
      <nav className="hamburger w-screen h-screen top-[100%] left-0 fixed z-[998]">
        <div ref={overlayRef} className={`overlay w-full h-full bg-black fixed top-0 left-0 ${isOpen ? 'block' : 'hidden'}`}>
          <ul ref={ulRef} className="flex flex-col justify-center items-center h-full text-[5vw] gap-8 text-white">
            <li className="cursor-pointer" onClick={() => scrollToSection('.home')}>About</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('.work')}>Work</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('.process')}>Process</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('.contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
