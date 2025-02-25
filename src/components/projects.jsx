import React from "react";
import KISAN from "../assets/kisan.jpg"
import Rooftop from "../assets/123456.png"
import AGE from "../assets/age.png"
import GENai from "../assets/genai.jpeg"

const projects = [
  {
    id: 2,
    name: "Kisan Seva",
    description:
      "An innovative app designed to empower farmers with advanced technology. Key features include real-time monitoring of soil conditions, automated irrigation based on machine learning predictions, access to up-to-date agricultural news, a personalized chatbot for farming advice, real-time weather updates, and AI-powered plant disease diagnosis through camera technology. This comprehensive app offers farmers a range of tools to optimize their farming practices and improve yields.",
    img:KISAN,
    link: "https://github.com/aman-singh73/farmer_app",
    techStack: ["React-Native", "Gen-AI", "Machine Learning", "IOT"],
  },
  {
    id: 3,
    name: "Rooftop solar energy potential map",
    description:
      "The Rooftop Solar Energy Potential Map project is a comprehensive initiative aimed at identifying and visualizing the potential for solar energy generation on rooftops within a specific geographic area. By leveraging advanced geospatial analysis and data-driven modeling, the project creates automatic solar energy consumption for the specific geographical area helping government decide where to plant solar planels",
    img:Rooftop,
    link: "https://github.com/aman-singh73/Rooftop-Solar-Energy-Potential-Map",
    techStack: ["Python", "Tensorflow", "CNN", "YOLOv8-seg"],
  },
  {
    id: 4,
    name: "MERN GenAI",
    description:
      "Built a dynamic AI image generation platform using DALL-E API, featuring a vibrant community space where users can create, share, and discover AI-generated artwork, complete with seamless image storage and social interaction capabilities",
    img:GENai,
    link: "https://github.com/aman-singh73/MERN_genai",
    techStack: [" MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API"],
  },
  {
    id: 5,
    name: "Age & Gender detection",
    description:
      "Engineered a real-time facial analysis system that accurately detects age and gender from live video feeds, achieving 92% accuracy in diverse lighting conditions and multiple face scenarios.",
    img:AGE,
    link: "https://github.com/aman-singh73/Age_Gender_detection",
    techStack: ["Python", "OpenCV", "Pre-trained CNN Models", "CUDA (for GPU acceleration)"],
  },
];

const ProjectsGrid = () => {
  return (
    <div
      id="projects"
      className="bg-[#f0fdf4] min-h-screen flex justify-center items-center px-4 py-10"
    >
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#16a34a] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-xl p-6 overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl border border-[#dcfce7] group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative">
                  {project.img && (
                    <img
                      src={project.img}
                      alt={project.name}
                      className={`w-full rounded-lg transition-all duration-300 group-hover:opacity-90 
                        ${project.id === 5 ? 'h-80 object-contain' : 'h-84 object-cover'}`}
                    />
                  )}
                </div>

                <div className="mt-6 text-left">
                  <h3 className="text-2xl font-semibold text-[#1e293b] group-hover:text-[#16a34a] transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#dcfce7] text-[#16a34a] px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#16a34a] hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#4b5563] mt-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex justify-end">
                    <span className="text-[#16a34a] font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                      View Project
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
