import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Work() {
    const worksRef = useRef([]);
    const workHeadRef = useRef(null);

    const works = [
        {
            title: 'Webli',
            description: 'A Creative Agency',
        },
        {
            title: 'Atmos',
            description: 'A Weather Website'
        },
        {
            title: 'Spicesaga',
            description: 'A Food Selling site'
        },
        {
            title: 'Timeless Vogue',
            description: 'An E-commerce Website for Men\'s Fashion'
        }
    ];

    useGSAP(() => {
        gsap.fromTo(workHeadRef.current, {
            opacity: 0,

        }, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: workHeadRef.current,
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });

        worksRef.current.forEach((work, index) => {
            if (!work) return;
            gsap.fromTo(work, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'lenient',
                scrollTrigger: {
                    trigger: work,
                    start: 'top 90%',
                    end: 'top 80%',
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            });
        });
    }, []);

    return (
        <div className='work relative w-full min-h-[60vh] px-10 py-4'>
            <div ref={workHeadRef} className='flex items-center justify-between whitespace-nowrap w-[5vw]'>
                <h1 className='md:text-[2vw] sm:text-[6vw] font-bold'>Selected Woks</h1>
                <p className='md:text-[0.9vw] sm:text-[4vw] text-pink-300'>[4]</p>
            </div>
            <div className='md:w-[95vw mx-auto mt-8 border-t-[0.1vh] border-zinc-400'>
                {
                    works.map((work, index) => (
                        <div
                            key={index}
                            ref={(el) => worksRef.current[index] = el}
                            className='flex items-center justify-between w-full py-4 px-4 border-b-[0.1vh] border-zinc-400 hover:bg-[#caf291] hover:text-black cursor-pointer transition-all duration-300'
                        >
                            <div className='flex flex-col'>
                                <h2 className='md:text-[4vw] sm:text-[6vw] font-bold'>{work.title}</h2>
                                <p className='md:text-[1.2vw] sm:text-[2.5vw]'>{work.description}</p>
                            </div>
                            <div>
                                <i className="ri-arrow-right-up-line md:text-[4vw] sm:text-[7vw]"></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Work;
