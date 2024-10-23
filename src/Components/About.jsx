import React, {useRef} from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
	const infoRef = useRef([]);
	const aboutRef = useRef(null)

	useGSAP(()=>{
		const ctx = gsap.context(()=>{
			gsap.from(aboutRef.current, {
				opacity:0,
				duration:1,
				scale:0.5,
				scrollTrigger:{
					trigger: aboutRef.current,
					start: 'top 40%',
					end: 'top 25%',
					scrub:true, 
					// markers:true,
				}
			});
			
		}, aboutRef)
		return ()=> ctx.revert();
	}, [])

	useGSAP(()=>{
		const ctx = gsap.context(()=>{
			gsap.from(infoRef.current, {
				x: -200, 
				opacity:0,
				stagger:0.3,
				duration:1,
				scrollTrigger:{
					trigger: infoRef.current,
					start: 'top 60%',
					end: 'top 30%',
					scrub:true, 
					// markers:true,
				}
			});
			
		}, infoRef)
		return ()=> ctx.revert();
	}, [])
	const addToRef = (el)=>{
		if(el && ! infoRef.current.includes(el)){
			infoRef.current.push(el)
		}
	}
	return (
		<div id="about" className="bg-[#faf0e6] dark:bg-zinc-900 dark:text-white xsm:h-[100vh] md:min-h-screen flex flex-col items-center py-8">
			<div ref= {addToRef} className="w-full h-[20vh] flex items-center px-[6vh]">
			<h3 ref={addToRef} className="md:text-[1.2vw] xsm:text-[5vw] sm:text-[2vw] text-black dark:text-white font-novaMono">Hello There </h3>
			<div className="w-[3vw] border-black dark:border-white ml-2 border rounded-full"></div>	
			</div>
			<div className="w-full h-[100vh] pb-[15vh] text-zinc-900 dark:text-white font-spicyRice">
			<h1 ref={addToRef} className="md:text-[3vw] sm:text-[6vw] xsm:text-[8vw] ml-[13vw] leading-none">I'm</h1>
			<h1 ref={addToRef} className="md:text-[6vw] sm:text-[7vw] xsm:text-[10vw] ml-[13vw] leading-none">RISHABH</h1>
			<h1 ref={addToRef} className="md:text-[3vw] sm:text-[6vw] xsm:text-[8vw] ml-[13vw] leading-none">SRIVASTAVA</h1>
			<div ref={aboutRef} className="md:ml-[11vw] xsm:mx-[7.5vw] md:mt-[3vh] xsm:mt-[6vh] sm:mt-[3vh] bg-red-500 md:w-[80vw] xsm:w-[85vw] xsm:h-[50vh] sm:h-[60vh] md:h-[55vh] flex md:flex-row xsm:flex-col rounded-[3vw] overflow-hidden shadow-lg shadow-black">
				<div className="md:w-[40%] xsm:w-full p-8 md:h-full xsm:h-[50%] font-extraBold md:text-[4vw] xsm:text-[6vw] sm:text-[5vw] bg-white text-zinc-900 flex flex-col justify-center items-center">
					<h3>Turning</h3>
					<h3>Coffee into</h3>
					<h3>Code</h3>
				</div>
				<div className="md:w-[60%] xsm:w-full md:h-full xsm:h-[50%] bg-zinc-800 flex items-center p-8">
					<p className="text-white md:text-[1.5vw] xsm:text-[2vw] leading-relaxed font-novaMono">
						I am a passionate <span className="font-bold text-red-500">Frontend Developer</span> who loves creating visually appealing and responsive websites. 
						My focus is on transforming complex problems into intuitive, simple designs using modern technologies like <span className="font-bold text-red-500">React</span>, <span className="font-bold text-red-500">Tailwind CSS</span>, and <span className="font-bold text-red-500">JavaScript</span>. 
						From building dynamic UIs to crafting clean, well-structured code, I aim to create impactful experiences that blend design with functionality.
					</p>
				</div>
			</div>
			</div>
		</div>
	);
}
