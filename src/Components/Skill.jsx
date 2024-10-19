import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


const skills = [
  { name: "HTML", icon: "ri-html5-fill" },
  { name: "CSS", icon: "ri-css3-fill" },
  { name: "JavaScript", icon: "ri-javascript-fill" },
  { name: "React", icon: "ri-reactjs-fill" },
  { name: "Tailwind CSS", icon: "ri-tailwindcss-fill" },
  { name: "Redux", icon: "ri-redux-fill" }, 
  { name: "GSAP", icon: "ri-gsap-fill" }, 
  { name: "Firebase", icon: "ri-fire-fill" }, 
];

export default function Skills() {
  const row1Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;

    const setupInfiniteScroll = (row, direction = 'left') => {
      const children = [...row.children];
      const totalWidth = children.reduce((acc, child) => acc + child.offsetWidth, 0);
      
      // Clone children to create the illusion of seamless scroll
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        row.appendChild(clone);
      });

      // Calculate the scroll direction and speed based on the row
      const moveLeft = direction === 'left' ? -totalWidth : totalWidth;
      
      gsap.fromTo(
        row,
        { x: 0 },
        {
          x: moveLeft,
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: true,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        }
      );
    };

    // Apply infinite scroll setup for the row
    setupInfiniteScroll(row1, 'left'); // Row 1 scrolls left

  }, []);

  return (
    <section className="bg-[#faf0e6] font-novaMono dark:bg-zinc-900 dark:text-white py-12 overflow-hidden text-zinc-900">

      {/* Row 1 - Scroll Left */}
      <div className="overflow-hidden">
        <div className="flex space-x-8" ref={row1Ref}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex flex-col items-center p-6"
              style={{ minWidth: "150px" }} // Ensure that all cards have a fixed width
            >
              <i className={skill.icon + " text-6xl mb-4"}></i>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

