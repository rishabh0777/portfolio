import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'; // Import useGSAP from @gsap/react
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default function Card({className, pName, tech, link,image}) {
	const cardRef = useRef(null)
	let mm = gsap.matchMedia();

	
	mm.add("(max-width: 768px)", () => {
 		
	useGSAP(() => {
		const ctx = gsap.context(() => {
		  gsap.from(cardRef.current, {
			y: 50,
			opacity: 0,
			scale:0.8,
			duration: 1.5,
			rotate: 70,
			scrollTrigger: {
			  // markers:true,
			  trigger: cardRef.current, // Trigger animation on scroll
			  start: 'top 70%', 
			  end: 'top 60%', 
			  scrub:true,
			  // When the card reaches 80% of the viewport
			//   toggleActions: 'play none none none', // Play the animation only once
			},
		  });
		}, cardRef); // Context restricted to cardRef
	
		return () => ctx.revert(); // Clean up animations on unmount
	  }, []);
});
	mm.add("(min-width: 769px)", () => {
 		
	useGSAP(() => {
		const ctx = gsap.context(() => {
		  gsap.from(cardRef.current, {
			y: 50,
			opacity: 0,
			scale:0.8,
			duration: 1.5,
			rotate: 70,
			scrollTrigger: {
			//   markers:true,
			  trigger: cardRef.current, // Trigger animation on scroll
			  start: 'top 40%', 
			  end: 'top 20%',
			  scrub:true,
			  // When the card reaches 80% of the viewport
			//   toggleActions: 'play none none none', // Play the animation only once
			},
		  });
		}, cardRef); // Context restricted to cardRef
	
		return () => ctx.revert(); // Clean up animations on unmount
	  }, []);
});


	return (
		<div ref={cardRef} className={`md:h-[80vh] p-[5vw] ${className} font-novaMono`}>
			<div className="md:h-[80%] bg-zinc-500 border-zinc-700 dark:border-0 border-[0.1em]">
				<img src={image} alt="" className="w-full h-full object-fit" />
			</div> 
			<h1 className="text-2xl font-semibold mt-4">{pName}</h1>
			<p className="text-lg mt-2">{tech}</p>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<h2 className="text-red-500 mt-4 text-bold">Visit Website <i className="ri-arrow-right-up-line"></i></h2>
			</a>
				
		</div>
	)
}