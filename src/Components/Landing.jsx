import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing motion from Framer Motion

export default function Landing() {
  const h1 = useRef(null); // Refs are used to access DOM elements
  const [splittedText, setSplittedText] = useState([]); // State to hold the split text

  // Function to split text and put each letter in span
  const heroTxtAnim = () => {
    const h1Txt = "Frontend Developer"; // Your text to split
    const splTxt = h1Txt.split(""); // Splitting the text into an array of letters
    setSplittedText(splTxt); // Save the splitted array to state
  };

  // Call the function when the component mounts
  useEffect(() => {
    heroTxtAnim();
  }, []);

  // Animation variant for h3
  const h3Variants = {
    hidden: { opacity: 0 }, // Start hidden
    visible: {
      opacity: 1,
      transition: {
        duration: 2,   // Slow fade-in effect
        delay: 2.8,    // Starts after h1 animation finishes
      },
    }, 
  };

  return (
    <div id="home" className="bg-[#faf0e6] dark:bg-zinc-900 relative w-full md:h-[88vh] xsm:h-screen px-[4vw] flex justify-center items-center flex-col">
      
      {/* Animate h1 with bounce and scale-in effect */}
      <motion.h1
        ref={h1}
        className="text-[8vw] text-zinc-900 dark:text-white font-spicyRice tracking-wider"
      > 
        {/* Loop through the splittedText array and wrap each letter in a span */}
        {splittedText.map((letter, index) => (
          <motion.span
            className="inline-block"
            key={index} // Each span needs a unique key
            initial={{ opacity: 0, y: 50 }} // Initial animation state for each letter
            animate={{ opacity: 1, y: 0 }}  // Final animation state for each letter
            transition={{ duration: 0.4, delay: index * 0.3 }} // Delay each letter's animation
          >
            {letter === " " ? "\u00A0" : letter} {/* Handle space characters */}
          </motion.span>
        ))}
      </motion.h1>
      
      {/* Animate h3 with slow fade-in */}
      <motion.h3
        className="text-[2vw] text-forum font-novaMono text-zinc-800 dark:text-white"
        initial="hidden"
        animate="visible"
        variants={h3Variants}
      >
        Building Interactive Interfaces
      </motion.h3>
      
    </div>
  );
}
