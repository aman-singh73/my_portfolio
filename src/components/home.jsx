import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import NeuralNetworkBackground from "./neural-animation.jsx";
import Image from "../assets/mine.jpg"

const Home = () => {
  return (
    <div
      id="home"
      className="h-[90vh] w-full flex items-start text-[#1e293b] bg-cover bg-center pt-6 bg-[#f0fdf4]"
    >
      <NeuralNetworkBackground />
      
      <div className="z-10 flex flex-col items-center sm:items-start w-full max-w-4xl px-4 sm:ml-20 md:ml-20 lg:ml-48 ml-0 pt-40 sm:pt-60">
        <div className="flex flex-col items-center sm:ml-40 sm:items-start mb-2">
          <div className="flex gap-4 mb-4 sm:mb-2">
            <a
              href="https://github.com/aman-singh73"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e293b] hover:text-[#16a34a] text-3xl transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-singh-878b32289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e293b] hover:text-[#16a34a] text-3xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          <div className="rounded-full overflow-hidden w-30 h-30 sm:w-32 sm:h-32 border-4 border-[#16a34a]">
            <img
              src={Image}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e293b]">
              Aman Kr Singh
            </h1>
            <p className="text-2xl sm:text-2xl lg:text-4xl mt-2 sm:mt-4">
              <span className="text-[#16a34a]">
                <Typewriter
                  words={[
                    "Backend Developer",
                    "ML Engineer",
                    "Software Developer",
                    "Problem Solver",
                    "Debugger-Tester"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
