import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import greensock  from "../assets/logo/pngwing.com.png";
import cssLogo from "../assets/logo/CSS3.png";
import htmlLogo from "../assets/logo/HTML5.png"
import tailwind from "../assets/logo/TailwindCSS.png"
import REACT from "../assets/logo/React.png"
import javaScript from "../assets/logo/JavaScript.png"

const skills = [
  { name: "HTML", logo:htmlLogo},
  { name: "CSS", logo:cssLogo},
  { name: "JavaScript", logo:javaScript},
  { name: "React", logo:REACT},
  { name: "Tailwind CSS", logo:tailwind},
  { name: "GSAP", logo:greensock},
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
              className="skill-card flex flex-col items-center justify-center p-6 gap-4 text-center"
              style={{ minWidth: "150px" }} // Ensure that all cards have a fixed width
>
  <img className="md:w-[5vw] xsm:w-[8vw] h-auto object-contain" src={skill.logo} alt="not found" />
  <h2 className="md:text-[0.9vw] xsm:text-[1vw] text-center font-semibold text-gray-800 dark:text-white">{skill.name}</h2>
</div>
            
          ))}
        </div>
      </div>

    </section>
  );
}

