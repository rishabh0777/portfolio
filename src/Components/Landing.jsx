import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from Framer Motion

export default function Landing() {

  // Animation variant for h1
  const h1Variants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start small and invisible
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3,   // Animation duration
        ease: [0.6, -0.05, 0.51, 0.99], // Unique bounce effect
      },
    },
  };

  // Animation variant for h3
  const h3Variants = {
    hidden: { opacity: 0 }, // Start hidden
    visible: {
      opacity: 1,
      transition: {
        duration: 2,   // Slow fade-in effect
        delay: 1.5,    // Starts after h1 animation finishes
      },
    },
  };

  return (
    <div className="bg-[#faf0e6] dark:bg-zinc-900 relative w-full md:h-[88vh] xsm:h-screen px-[4vw] flex justify-center items-center flex-col">
      
      {/* Animate h1 with bounce and scale-in effect */}
      <motion.h1
        className="text-[10vw] text-zinc-900 dark:text-white font-spicyRice"
        initial="hidden"
        animate="visible"
        variants={h1Variants}
      >
        Frontend Developer
      </motion.h1>
      
      {/* Animate h3 with slow fade-in */}
      <motion.h3
        className="text-[2vw] text-forum font-novaMono text-zinc-800 dark:text-white "
        initial="hidden"
        animate="visible"
        variants={h3Variants}
      >
        Building Interactive Interfaces
      </motion.h3>
      
    </div>
  );
}
