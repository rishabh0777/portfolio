import React, { useRef} from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function Contact() { 
	const contacttextRef = useRef(null);
	const formRef = useRef(null)
	let mm = gsap.matchMedia();

	mm.add("(max-width: 768px)", () => {
 		
		useGSAP(()=>{
			const ctx = gsap.context(()=>{
				gsap.from(contacttextRef.current, {
					opacity:0,
					duration:1,
					scale: 0.5,
					scrollTrigger: {
						trigger:contacttextRef.current,
						start: 'top 60%',
						end: 'top 50%',
						// markers: true,
						scrub: true,
					}
				})
			}, contacttextRef)
			return ()=> ctx.revert();
		}, [])

		useGSAP(()=>{
			const ctx = gsap.context(()=>{
				gsap.from(formRef.current, {
					opacity:0,
					scale:0.5,
					x: 200,
					duration:1,
					rotate:90,
					scrollTrigger:{
						trigger: formRef.current,
						start:'top 90%',
						end:'top 76%',
						scrub:true,
					}

				})
			}, formRef)
			return ()=> ctx.revert()
		}, [])

	
});

	
	mm.add("(min-width: 769px)", () => {
 		
		useGSAP(()=>{
			const ctx = gsap.context(()=>{
				gsap.from(contacttextRef.current, {
					opacity:0,
					duration:1,
					scale: 0.5,
					scrollTrigger: {
						trigger:contacttextRef.current,
						start: 'top 70%',
						end: 'top 60%',
						// markers: true,
						scrub: true,
					}
				})
			}, contacttextRef)
			return ()=> ctx.revert();
		}, [])

		useGSAP(()=>{
			const ctx = gsap.context(()=>{
				gsap.from(formRef.current, {
					opacity:0,
					scale:0.5,
					x: 200,
					duration:1,
					rotate:90,
					scrollTrigger:{
						trigger: formRef.current,
						start:'top 60%',
						end:'top 45%',
						scrub:true,
					}

				})
			}, formRef)
			return ()=> ctx.revert()
		}, [])

	
});


	return (
		<div id="about" className="bg-[#faf0e6] dark:bg-zinc-900 dark:text-white w-full h-screen py-2 flex md:flex-row xsm:flex-col px-[4vw]">
			<div ref={contacttextRef} className="md:w-1/2 xsm:w-full md:h-screen xsm:h-[30vh] py-[8vh]">
				<h1 className="md:text-[4vw] xsm:text-[6vw] font-spicyRice">Contact Us</h1>
				<p className="mt-2 text-lg text-gray-600 dark:text-[#ccc] md:text-[1em] xsm:text-[0.9em] font-novaMono">
					I’d love to hear from you! Whether you have a question or want to discuss a project, feel free to send a message.
				</p>
			</div>
			<div className="md:w-1/2 xsm:w-full md:h-screen xsm:h-[70vh] flex justify-center items-center">
				<form ref={formRef} action="" className="md:h-[80vh] xsm:h-[70vh] flex flex-col xsm:w-[70%] md:w-[50%] font-novaMono">
				<lable className="ml-5 mb-2 text-[0.9em] font-bold">Name</lable>
					<input 
					type="text" 
					name="name" 
					className="rounded-full  px-5 py-[2vh] mb-5 outline-none border-[0.1em] border-zinc-800 dark:border-white dark:text-zinc-900"  
					placeholder="Enter your full name"/>
					<lable className="ml-5 mb-2">Email</lable>
					<input 
					type="email" 
					name="email"
					className="rounded-full px-5 py-[2vh] mb-5 outline-none border-[0.1em] border-zinc-800 dark:border-white dark:text-zinc-900"
					placeholder="Enter your full name"
					  />
					<lable className="ml-5 mb-2">Message</lable>
					<textarea
						name="message"
						placeholder="Enter your message here"
						required
						className="resize-none rounded-[2vw] px-5 py-[2vh] min-h-[12vh] mb-5 outline-none border-[0.1em] border-zinc-800 dark:border-white dark:text-zinc-900"
						style={{ minHeight: '100px' }} 
					></textarea>
					<button className="rounded-[2vw] px-5 py-[2vh] bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-[#ccc] hover:bg-zinc-800 duration-300 text-white" >Send Message <i class="ri-arrow-right-line"></i></button>
				</form>
			</div>
		</div>
	)
}
