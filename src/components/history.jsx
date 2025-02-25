import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    role: "Full-stack Developer Intern",
    location: "Lagoon",
    duration: "Sept 2024 - Present",
    description:
      "Currently working with Lagoon, a startup focused on building an innovative hiring software platform. Gained valuable knowledge and production-ready experience while developing and maintaining scalable features, contributing to a 25% improvement in system performance.",
  },
  {
    role: "Hackathon Finalist",
    location: "ISRO BAH'24 - NRSC Hyderabad",
    duration: "July 2024 - Aug 2024",
    description:
      "Selected in the top 12 teams and winner of problem statement (PS-2) by applying Machine Learning and Deep Learning to generate a rooftop solar energy potential map. Collaborated with teammates Abhigyan Ranjan, Yash Pandey, and Rakshit Dabral, with mentorship from Siddhartha Bhuyan and Avinash Sir. Gained recognition and valuable learning from a prestigious hackathon, enhancing technical skills, networking, and industry insights.",
  },
  {
    role: "AI and Cloud Intern",
    location: "AICTE (IBM) - Edunet Foundation",
    duration: "June 2024 - July 2024",
    description:
      "Interned with IBM Cloud Tools and Platform, gaining hands-on experience with cutting-edge cloud technologies. Enhanced proficiency in IBM's suite of cloud services, tools, and platforms, contributing to IT modernization and digital transformation initiatives. Applied learned concepts to real-world situations, analyzed problems, and collaborated with teams to develop solutions.",
  }
  
];


const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const target = document.querySelector("#experience-section");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="experience-section"
      className="relative max-w-6xl mx-auto min-h-screen pt-20 lg:pt-28 pb-10 sm:pb-14 lg:pb-10 bg-[#f0fdf4]"
    >
      <div className="absolute top-0 bottom-0 w-1 bg-[#16a34a] left-1/2 transform -translate-x-1/2"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex items-center justify-between w-full mb-10 ${
            index % 2 === 0 ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
          }`}
        >
          <div
            className={`w-4/5 lg:w-1/2 px-4 text-[#4b5563] mb-4 lg:mb-14 text-sm opacity-0 ${
              isVisible ? `animate-fadeInLeft` : ""
            } ${index % 2 === 0 ? "text-center lg:text-left" : "text-center lg:text-right"}`}
            style={{
              animationDelay: `${index === 0 ? "0.2s" : index * 0.1 + 0.2}s`,
            }}
          >
            {exp.duration}
          </div>

          <div
            className={`w-16 h-16 bg-[#16a34a] mb-4 sm:mb-16 text-white rounded-full flex items-center justify-center border-4 border-white z-10 opacity-0 group ${
              isVisible ? `animate-fadeInCircle` : ""
            } hover:bg-white hover:border-[#16a34a] hover:text-[#16a34a] transform transition-all duration-300`}
            style={{
              animationDelay: `${index === 0 ? "0.2s" : index * 0.1 + 0.2}s`,
              marginBottom: "30px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <MapPinIcon className="w-8 h-8" />
          </div>

          <div
            className={`w-4/5 lg:w-1/2 bg-white rounded-lg shadow-lg p-8 relative opacity-0 ${
              isVisible ? `animate-fadeInBox` : ""
            } ${
              index % 2 === 0
                ? "text-center lg:text-left ml-0 lg:ml-0"
                : "text-center lg:text-right mr-0 lg:mr-0"
            } hover:bg-[#dcfce7] hover:scale-105 transform transition-all duration-300 ease-in-out group`}
            style={{
              animationDelay: `${index === 0 ? "0.1s" : index * 0.1 + 0.1}s`,
              marginTop: "20px",
            }}
          >
            <div
              className={`absolute w-0 h-0 border-solid border-t-[8px] border-t-transparent border-b-[16px] border-b-transparent ${
                index % 2 === 0
                  ? "border-l-[20px] border-l-white -right-5 top-6 group-hover:border-l-[#dcfce7]"
                  : "border-r-[20px] border-r-white -left-5 top-6 group-hover:border-r-[#dcfce7]"
              } hidden lg:block`}
            ></div>
            <h3 className="text-xl font-bold text-[#1e293b]">{exp.role}</h3>
            <p className="text-[#16a34a] font-semibold">{exp.location}</p>
            <p className="text-[#4b5563] mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
