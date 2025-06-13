import React from 'react';

const Navbar = () => {
  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='w-full h-[8vh] bg-white-100 fixed top-0 left-0 z-[200] px-4 flex items-center justify-between'>
      <h3>Rishabh Srivastava</h3>
      <ul className='flex justify-end items-center gap-6 text-[1.1vw]'>
        <li className="cursor-pointer" onClick={() => scrollToSection('.home')}>About</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('.work')}>Work</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('.process')}>Process</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('.contact')}>Contact</li>
      </ul>
      <h3>
        <i className="ri-moon-fill"></i>
        Dark
      </h3>
    </nav>
  );
};

export default Navbar;
