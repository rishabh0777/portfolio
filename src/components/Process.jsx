import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Process = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const processSteps = [
    {
      title: "1. Requirement Discussion",
      content:
        "We start with a clear discussion about your goals, features, references, and expectations. I work from your design or suggested layouts — no design or wireframing from scratch is included.",
    },
    {
      title: "2. Frontend Development",
      content:
        "I build the user interface using React.js, Tailwind CSS, and tools like GSAP or Framer Motion to make it responsive and visually engaging.",
    },
    {
      title: "3. Backend Development",
      content:
        "If your project requires backend features, I develop secure APIs using Express.js and manage data with MongoDB. This includes login systems, admin panels, and more.",
    },
    {
      title: "4. Integration & Testing",
      content:
        "I connect frontend and backend, test across screen sizes, fix bugs, and ensure smooth functionality before sharing the final preview.",
    },
    {
      title: "5. Delivery & Optional Deployment",
      content:
        "I deliver the complete project with source code and full access. Deployment is available as an add-on if needed (extra charges apply).",
    },
  ];

  return (
    <div className='process w-full min-h-screen flex py-4 px-10 items-center'>
      {/* Left Side */}
      <div className='flex flex-col w-1/2 h-[80vh] justify-center'>
        <h1 className='font-bold text-[5vw] leading-[5vw]'>
          My way of getting <br /> things done
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I follow a clear, step-by-step process — from understanding what you need, to writing clean, scalable code. Whether it's a React frontend or a complete MERN solution, I make sure your website performs smoothly and looks modern. Need deployment? I offer it as a paid add-on.
        </p>
      </div>

      {/* Right Side: Accordion */}
      <div className='flex flex-col w-1/2 h-[80vh] justify-center space-y-2'>
        {processSteps.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 rounded-xl p-4 cursor-pointer"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center text-[1vw] font-medium text-gray-800"
            >
              {item.title}
              <span className='text-[1.2vw]'>{openIndex === index ? '-' : '+'}</span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 text-gray-600 text-[0.9vw]">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
