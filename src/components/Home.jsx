import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  const textTimeline = gsap.timeline(); // Separate timeline for text animation
  const introTimeline = gsap.timeline(); // Separate timeline for initial animations
  const heroTextRef = useRef(null);
  const scrollTextRef = useRef(null);
  const scrollIconRef = useRef(null);
  const paraRef = useRef(null);
  const [scrollText, setScrollText ] = useState("Scroll down");
  const txtArr = ["Design.", "Build.", "Scale."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const animateText = () => {
    textTimeline
      .to(heroTextRef.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % txtArr.length);
        },
      })
      .to(heroTextRef.current, {
        duration: 2,
        opacity: 1,
      });
  };

  

  useEffect(() => {
    // Initial animations for paragraph and scroll elements
    introTimeline
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
        "a"
      )
      .fromTo(
        scrollTextRef.current,
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.7 },
        "a"
      )
      .fromTo(
        scrollIconRef.current,
        { opacity: 0, y: -70 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.7 },
        "a"
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      animateText();
    }, 6000); // Change text every 6 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling Down
        gsap.to(scrollIconRef.current, { rotate: 180, duration: 0.5 });
        setScrollText('ScrollUp')
      } else {
        // Scrolling Up
        gsap.to(scrollIconRef.current, { rotate: 0, duration: 0.5 });
        setScrollText('ScrollDown')
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="home sm:w-full min-h-screen relative sm:px-4 md:px-8 flex justify-center text-zinc-900">
      <h1
        ref={heroTextRef}
        className="sm:text-[18vw] md:text-[14vw] z-[10] tracking-wide absolute sm:top-[35%] md:top-[29%] transform sm:translate-y-[-35%] md:translate-y-[-29%]"
      >
        {txtArr[currentTextIndex]}
      </h1>
      <p
        ref={paraRef}
        className="sm:text-[2.7vw] md:text-[1.1vw] xsm:tracking-wide md:tracking-wider tracking-wider z-[11] text-center text-zinc-900 absolute sm:top-[45%] md:top-[50%] lg:top-[53%] 2xl:top-[50%] transform sm:translate-y-[-45%] 2xl:translate-y-[-47%] lg:translate-y-[-53%] md:translate-y-[-470%] sm:translate-y-[-47%]"
      >
        Turning ideas into stunning, interactive <br /> web solutions.
      </p>
      <div className="sm:w-full sm:h-[9vh] absolute bottom-[9vh] flex justify-between items-center sm:p-4 p-4 md:px-10 sm:text-2xl md:text-lg">
        <i ref={scrollIconRef} className="ri-arrow-down-line sm:text-3xl"></i>
        <h3 className="all-ease duration-600 " ref={scrollTextRef}>{scrollText}</h3>
      </div>
    </div>
  );
};

export default Home;