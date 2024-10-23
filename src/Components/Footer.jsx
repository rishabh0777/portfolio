import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white w-full xsm:h-[35vh] md:h-[50vh] flex flex-col items-center py-8 font-novaMono overflow-hidden relative">
          <div className="flex gap-12 w-full justify-center">
            <a href="#" className="md:text-[2vw] xsm:text-[4vw] hover:text-red-500 duration-200">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="#" className="md:text-[2vw] xsm:text-[4vw] hover:text-red-500 duration-200">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="#" className="md:text-[2vw] xsm:text-[4vw] hover:text-red-500 duration-200">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="md:text-[2vw] xsm:text-[4vw] hover:text-red-500 duration-200">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
       <p className="w-[80%] lg:text-[1.5vw] xsm:text-[2vw] text-center mt-[4vh]">Thank you for visiting! Connect with me on social media above. I'm exited for future opportunities and Colaborations.</p>
       <h3 className="lg:text-[3vw] xsm:text-[6vw] sm:text-[5vw] mt-[6vh] font-spicyRice ">Uttar Pradesh | India</h3>
       <p className="lg:text-[1vw] sm:text-[1.2vw] xsm:text-[1.9vw] absolute top-[90%]">© <span className="text-red-500">2024</span> Rishabh Srivastava. <span className="text-green-500">All</span> Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
