import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceHeadRef = useRef(null);
  const servicesRef = useRef([]);

  const services = [
    {
      title: 'Frontend Development',
      description: 'I build fast, responsive, and interactive user interfaces using React.js, Tailwind CSS, GSAP, and Framer Motion.',
      index: '01'
    },
    {
      title: 'Backend Development',
      description: 'I create robust backend systems using Node.js, Express, and MongoDB. My backend solutions are scalable and secure.',
      index: '02'
    },
    {
      title: 'Complete Web Solutions',
      description: 'Need full stack? I handle both frontend and backend to deliver MERN-based solutions efficiently.',
      index: '03'
    }
  ];

  // Heading animation
  useGSAP(() => {
    if (serviceHeadRef.current) {
      gsap.from(serviceHeadRef.current, {
        scrollTrigger: {
          trigger: serviceHeadRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, []);

  // Cards animation
  useGSAP(() => {
    servicesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div className='services relative w-full min-h-[90vh] flex flex-col justify-center items-center px-10'>
      <div className='w-[90vw]'>
        <h3 ref={serviceHeadRef} className="sm:text-[7vw] md:text-[4vw]">
          I can help you with...
        </h3>
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-8 sm:justify-items-center md:justify-items-start sm:items-center md:items-start'>
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (servicesRef.current[i] = el)}
              className='md:w-[20vw] md:h-auto sm:w-[80vw] sm:h-auto flex flex-col'
            >
              <h1 className="md:text-[5vw] sm:text-[18vw] text-zinc-500">{service.index}</h1>
              <h1 className='md:text-[1.5vw] sm:text-[5vw] font-bold'>{service.title}</h1>
              <p className='md:text-[0.8vw] sm:text-[3vw]'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
