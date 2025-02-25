import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f0fdf4] border-t border-[#dcfce7]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-[#1e293b]">Aman Kumar Singh</h3>
            <p className="text-[#4b5563] mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 text-[#4b5563]">
              <span>Made with</span>
              <FaHeart className="text-[#16a34a] animate-pulse" />
              <span>using React & Tailwind</span>
            </div>
            <p className="text-sm text-[#4b5563] mt-1">© {new Date().getFullYear()} All rights reserved</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-[#4b5563]">Let's build something amazing together</p>
            <a 
              href="mailto:amansinghrajput8287@gmail.com"
              className="text-[#16a34a] hover:text-[#15803d] transition-colors duration-300 mt-1"
            >
              amansinghrajput8287@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
