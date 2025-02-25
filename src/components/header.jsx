import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/aman.pdf';
    link.download = 'aman.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoAnimated(true);
    }, 100);

    const handleScroll = () => {
      const sections = ['home', 'aboutme', 'history', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = ({ href, children }) => {
    const isActive = activeSection === href.slice(1);
    
    return (
      <a href={href} className="relative text-lg group overflow-hidden">
        <span className={`
          inline-block transform transition-all duration-300
          group-hover:translate-y-[-100%] group-hover:opacity-0
          ${isActive ? 'text-[#16a34a]' : 'text-[#1e293b]'}
        `}>
          {children}
        </span>
        <span className={`
          absolute top-0 left-0 transform translate-y-full
          transition-all duration-300 group-hover:translate-y-0
          bg-clip-text text-transparent bg-gradient-to-r
          from-[#16a34a] to-[#15803d]
        `}>
          {children}
        </span>
        <span className={`
          absolute bottom-0 left-0 w-full h-0.5
          transform scale-x-0 transition-transform duration-300
          bg-gradient-to-r from-[#16a34a] to-[#15803d]
          group-hover:scale-x-100 origin-left
          ${isActive ? 'scale-x-100' : ''}
        `}></span>
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f0fdf4] bg-opacity-90 text-[#1e293b] shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 md:py-4">
        <div className="flex items-center space-x-2">
          <a href="#home" className="group relative">
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <NavLink href="#aboutme">About me</NavLink>
            <NavLink href="#history">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          <button onClick={handleDownload} className="
            relative overflow-hidden px-6 py-2 
            border-2 border-[#16a34a] rounded-md
            transition-all duration-300 
            hover:shadow-[0_0_15px_rgba(22,163,74,0.3)]
            group
          ">
            <span className="
              relative z-10 
              transition-colors duration-300
              group-hover:text-white
            ">
              Resume
            </span>
            <span className="
              absolute inset-0 w-full h-full 
              bg-gradient-to-r from-[#16a34a] to-[#15803d]
              transform translate-y-full transition-transform duration-300
              group-hover:translate-y-0
            "></span>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#1e293b] focus:outline-none transform transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#f0fdf4] bg-opacity-20 backdrop-blur-md z-40">
          <div className="fixed top-0 right-0 h-screen w-3/4 bg-[#f0fdf4] text-[#1e293b] z-50 shadow-lg transform transition-transform duration-300">
            <div className="flex flex-col justify-start items-start p-8 space-y-6">
              <button
                onClick={toggleMenu}
                className="absolute top-8 sm:top-6 right-6 text-[#1e293b] hover:text-[#16a34a] transition duration-300 transform hover:rotate-90"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <nav className="flex flex-col space-y-6 text-left w-full">
                {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-md sm:text-lg text-[#4b5563] hover:text-[#16a34a] transition-all duration-300 transform hover:translate-x-2"
                    onClick={toggleMenu}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
                <button onClick={handleDownload} className="
                  mt-4 px-6 py-2 border-2 border-[#16a34a] 
                  text-[#16a34a] rounded-md transition-all duration-300
                  hover:bg-[#16a34a] hover:text-white
                  hover:shadow-[0_0_15px_rgba(22,163,74,0.3)]
                ">
                  Resume
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
