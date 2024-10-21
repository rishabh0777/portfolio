import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar visibility

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Animation variants for the fullscreen navbar
  const navAnimation = {
    hidden: { opacity: 0, y: -50 }, // Start state (hidden)
    visible: { opacity: 1, y: 0 },  // End state (visible)
    exit: { opacity: 0, y: -50 },   // Exit state (reverse)
  };

  // Function to handle opening and closing of the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="w-screen h-full overflow-hidden fixed z-[1000] bg-[#faf0e6] dark:text-white dark:bg-zinc-900 xsm:flex md:hidden flex-col justify-center items-center text-[6vw] gap-8  font-novaMono tracking-extraWide "
          initial="hidden"
          animate="visible"
          exit="exit" // Use the exit animation
          variants={navAnimation}
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <i 
            className="ri-close-line xsm:flex md:hidden absolute top-[5.5vh] font-thin cursor-pointer left-[5vw] xsm:text-[5.5vw]" 
            onClick={toggleNavbar} // Close button
          ></i>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Home
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Work
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            About
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Contact
          </motion.h2>
           <motion.h2
            className="cursor-pointer md:hidden xsm:flex gap-2 absolute top-[6vh] right-[5vw] text-[3vw]"
            onClick={toggleDarkMode}
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {darkMode ? "LightMode" : "DarkMode"} <i className={`${darkMode ? "ri-sun-fill" : "ri-moon-fill"}`}></i>  
          </motion.h2>
        </motion.div>
      )}

      <motion.div
        className="bg-[#faf0e6] dark:bg-zinc-900 font-novaMono dark:text-white w-full h-[12vh] flex justify-center items-center px-[4vw] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={navAnimation}
        transition={{ duration: 0.5 }} // Duration of the fade-in effect
      >
        <nav className="w-full h-full flex justify-between items-center overflow-hidden">
          <motion.h2
            className="xsm:text-[0.7em] md:text-[0.9em] font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }} // Delay the animation slightly
          >
            Rishabh Srivastava
          </motion.h2>
          <i className="ri-align-right xsm:text-[3vw] xsm:flex md:hidden md:text-[4vw] cursor-pointer" onClick={toggleNavbar}></i>

          <div className="w-[40vw] h-full md:flex xsm:hidden justify-between items-center">
            <ul className="flex justify-center items-center gap-10 xsm:text-[0.6em] sm:text-[0.7em] md:text-[0.8em] font-bold">
              {['Home', 'Work'].map((item, index) => (
                <motion.li
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }} // Adding delay to each item
                  key={item}
                >
                  <a href="#">{item}</a>
                  <div className="w-0 group-hover:w-full mt-[0.1em] border-[0.1em] rounded-full border-transparent dark:group-hover:border-white group-hover:border-zinc-800 transition-all duration-300 ease-in-out"></div>
                </motion.li>
              ))}
            </ul>
            <ul className="flex justify-center items-center gap-10 xsm:text-[0.6em] sm:text-[0.7em] md:text-[0.8em] font-bold">
              {['About', 'Contact'].map((item, index) => (
                <motion.li
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  key={item}
                >
                  <a href="#">{item}</a>
                  <div className="w-[0%] group-hover:w-full mt-[0.1em] border-[0.1em] rounded-full border-transparent dark:group-hover:border-white group-hover:border-zinc-800 transition-all duration-300 ease-in-out"></div>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.h2
            className="cursor-pointer xsm:text-[0.7em] sm:text-[0.9em] md:text-[0.9em] font-bold md:flex xsm:hidden"
            onClick={toggleDarkMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {darkMode ? "LightMode" : "DarkMode"} <i className={`${darkMode ? "ri-sun-fill" : "ri-moon-fill"}`}></i>
          </motion.h2>
        </nav>
      </motion.div>
      
    </>
  );
}
