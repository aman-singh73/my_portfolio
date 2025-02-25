import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full flex flex-col items-center justify-center mt-10 py-20 bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] text-[#1e293b] overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-36 h-36 bg-[#16a34a] opacity-20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute top-20 right-5 w-24 h-24 bg-[#16a34a] opacity-10 blur-2xl rounded-full animate-bounce-slow pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#16a34a] opacity-15 blur-3xl rounded-full animate-spin-slow pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#16a34a] opacity-10 blur-3xl rounded-full animate-pulse pointer-events-none"></div>

      <h4 className="text-[#16a34a] text-lg tracking-widest mb-4 uppercase animate-fadeIn">
        Stay Connected
      </h4>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e293b] mb-6 drop-shadow-lg animate-fadeIn">
        Reach Out
      </h1>
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#dcfce7]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-gradient-to-br from-[#dcfce7] to-white rounded-lg">
        <h4 className="text-[#16a34a] font-semibold mb-3">Technical Excellence</h4>
        <p className="text-[#4b5563]">
          Driving innovation through full-stack development, AI integration, and cloud solutions. Committed to building scalable, cutting-edge applications.
        </p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-[#dcfce7] to-white rounded-lg">
        <h4 className="text-[#16a34a] font-semibold mb-3">Creative Solutions</h4>
        <p className="text-[#4b5563]">
          Transforming complex challenges into elegant solutions. Focused on delivering high-performance, user-centric experiences.
        </p>
      </div>
    </div>
    
    <div className="mt-8 p-6 bg-gradient-to-br from-[#dcfce7] to-white rounded-lg">
      <h4 className="text-[#16a34a] font-semibold mb-3">Vision & Impact</h4>
      <p className="text-[#1e293b]">
        Dedicated to creating meaningful technological solutions that drive business growth and user satisfaction. Let's build something exceptional together.
      </p>
    </div>
  </div>
</div>

      <a
        href="mailto:amansinghrajput8287@gmail.com"
        className="border-2 border-[#16a34a] text-[#16a34a] px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#16a34a] hover:text-white transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 animate-bounce delay-300"
      >
        Contact Me
      </a>

      <div className="flex z-50 items-center justify-center gap-8 mt-12 animate-fadeIn delay-300">
        <a
          href="mailto:amansinghrajput8287@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1e293b] hover:text-[#16a34a] transition-transform duration-300 text-4xl transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/aman-singh73"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1e293b] hover:text-[#16a34a] transition-transform duration-300 text-4xl transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-kumar-singh-878b32289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1e293b] hover:text-[#16a34a] transition-transform duration-300 text-4xl transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="absolute bottom-0 w-full mt-16">
        <div className="absolute bottom-10 right-10 transform -translate-x-1/2 w-28 h-28 bg-[#16a34a] opacity-10 blur-3xl rounded-full animate-pulse"></div>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#16a34a] to-transparent absolute bottom-0"></div>
      </div>
    </section>
  );
};

export default Contact;
