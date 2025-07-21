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
            link: 'https://webli.vercel.app/'
        },
        {
            title: 'Spicesaga',
            description: 'A Food Selling site',
            link: 'https://rishabh0777.github.io/spice_saga/'
        },
        {
            title: 'Timeless Vogue',
            description: "An E-commerce Website for Men's Fashion",
            link: 'https://timelessvogue.vercel.app'
        }
    ];

    useGSAP(() => {
        // Animate heading
        gsap.fromTo(workHeadRef.current, {
            opacity: 0,
            y: 30,
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: workHeadRef.current,
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate each work card
        worksRef.current.forEach((work, index) => {
            if (!work) return;
            gsap.fromTo(work, {
                opacity: 0,
                y: 60
            }, {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: 'linear',
                scrollTrigger: {
                    trigger: work,
                    start: 'top 90%',
                    end: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }, []);

    return (
        <div className='work relative w-full min-h-[60vh] px-6 py-4'>
            <div ref={workHeadRef} className='flex items-center justify-between whitespace-nowrap w-[5vw]'>
                <h1 className='md:text-[2vw] sm:text-[6vw] font-bold'>Selected Works</h1>
                <p className='md:text-[0.9vw] sm:text-[4vw] text-pink-300'>[{works.length}]</p>
            </div>

            <div className='md:w-[95vw] mx-auto mt-5 flex flex-col md:gap-5 sm:gap-8'>
                {
                    works.map((work, index) => {
                        const content = (
                            <div
                                ref={(el) => worksRef.current[index] = el}
                                className='flex items-center justify-between w-full py-3 px-4 hover:bg-[#caf291] hover:text-black cursor-pointer transition-all duration-300'
                            >
                                <div className='flex flex-col'>
                                    <h2 className='md:text-[3vw] sm:text-[6vw] font-bold'>{work.title}</h2>
                                    <p className='md:text-[1.2vw] sm:text-[2.5vw]'>{work.description}</p>
                                </div>
                                <div>
                                    <i className="ri-arrow-right-up-line md:text-[4vw] sm:text-[7vw]"></i>
                                </div>
                            </div>
                        );

                        return work.link ? (
                            <a
                                key={index}
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content}
                            </a>
                        ) : (
                            <div key={index}>{content}</div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Work;
