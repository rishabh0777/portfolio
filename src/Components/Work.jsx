import { useRef } from 'react'
import Card from "./Card.jsx"
import atmos from "../assets/image/atmos.webp"
import techvista from "../assets/image/techvista.png"
import spicesaga from "../assets/image/spicesaga.webp"
import ishaniaqua from "../assets/image/ishaniaqua.webp"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


export default function Work() {
		const textRef = useRef(null);
		let mm = gsap.matchMedia();

// Create your matchMedia function
mm.add("(max-width: 768px)", () => {
  useGSAP(()=>{
			const ctx = gsap.context(()=>{
				gsap.from(textRef.current, {
					opacity:0,
					duration:1,
					scale: 0.5,
					scrollTrigger: {
						trigger:textRef.current,
						start: 'top 60%',
						end: 'top 50%',
						// markers: true,
						scrub: true,
					}
				})
			}, textRef)
			return ()=> ctx.revert();
		}, [])
});

mm.add("(min-width: 769px)", () => {
  useGSAP(()=>{
			const ctx = gsap.context(()=>{
				gsap.from(textRef.current, {
					opacity:0,
					duration:1,
					scale: 0.5,
					scrollTrigger: {
						trigger:textRef.current,
						start: 'top 60%',
						end: 'top 40%',
						// markers: true,
						scrub: true,
					}
				})
			}, textRef)
			return ()=> ctx.revert();
		}, [])
});



		

	return (
		<div id="work" className = "bg-[#faf0e6] dark:bg-zinc-900 dark:text-white min-h-screen w-full py-[6vh]">
		<div ref={textRef} className="w-full py-[8vh] px-[4vw]">
			<h1 className="md:text-[4vw] xsm:text-[6vw] margin-bottom-[4vh] font-spicyRice ">My Work</h1>
			<p className="md:w-[45vw] xsm:w-full font-novaMono">As a passionate Frontend Developer, I collaborate closely with clients to bring their vision to life, ensuring seamless communication and delivering engaging, user-friendly digital experiences that leave a lasting impact.</p>
			</div>
			<div className="w-full min-h-[80vh] grid md:grid-cols-2 xsm:grid-cols-1">
			<Card
					key={1}
					pName="Ishani Aqua"
					tech="React, React-Redux, Tailwind CSS, Firebase"
					link="https://ishaniaqua.netlify.app"
					image={ishaniaqua}
				/>
				
				<Card
					key={2}
					pName="Atmos"
					tech="React, OpenWeather API"
					link="https://rishabh0777.github.io/Atmos/"
					image={atmos}
				/>
				<Card
					key={3}
					pName="Spice Saga"
					tech="HTML, Tailwind CSS, JavaScript"
					link="https://rishabh0777.github.io/spice_saga/"
					image={spicesaga}
				/>
				<Card
					key={4}
					className=""
					pName="TechVista"
					tech="React, React-Redux, Tailwind CSS, Firebase"
					link="https://rishabh0777.github.io/techvista/"
					image={techvista}
				/>
			</div>
		</div>
	)
}