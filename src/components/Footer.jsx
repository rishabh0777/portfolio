import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f5f5f5] text-sm text-gray-700 py-6 px-10 flex items-center justify-between shadow-md rounded-t-xl">
      {/* Left */}
      <div>
        © {new Date().getFullYear()} All Rights Reserved. Designed & Coded with <span className="text-red-500">❤️</span>
      </div>

      {/* Center */}
      <div className="flex gap-4">
        
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        <a href="mailto:rishabhsrivastava7777@gmail.com" className="hover:underline">Email</a>
      </div>

      {/* Right */}
      <button onClick={scrollToTop} className="hover:underline">Back to top ↑</button>
    </footer>
  );
};

export default Footer;
