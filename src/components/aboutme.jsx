import { useState, useEffect, useRef } from "react";
import { FaReact, FaPython, FaGit, FaFigma, FaNode, FaDatabase, FaDev, FaJava } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiJavascript, SiFastapi, SiTensorflow, SiKeras, SiQgis, SiLatex } from "react-icons/si";
import Popup from "./popup";
import image1 from "../assets/sih.jpg";
import image3 from "../assets/isro.png";
import image5 from "../assets/leetcodelogo.webp";
import NeuralNetworkBackground from "./neural-animation.jsx";

const skillsData = [
  {
    category: "Core Technical Expertise",
    skills: [
      { label: "Python", icon: <FaPython /> },
      // { label: "TensorFlow", icon: <SiTensorflow /> },
      // { label: "Keras", icon: <SiKeras /> },
      { label: "Computer Vision", icon: <SiTailwindcss /> },
      { label: "NLP", icon: <FaFigma /> },
      { label: "Machine Learning", icon: <SiTensorflow /> },
      { label: "Streamlit", icon: <FaPython /> },
      { label: "Data Analysis", icon: <FaPython /> },
      // { label: "Data Science", icon: <FaPython /> },
      // { label: "Fine-tuning LLMs", icon: <FaPython /> },
      { label: "Prompt Engineering", icon: <FaReact /> }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { label: "Git", icon: <FaGit /> },
      { label: "GitHub", icon: <FaGit /> },
      { label: "Latex", icon: <SiLatex /> },
      { label: "Vercel", icon: <FaDev /> },
      { label: "Render", icon: <FaDev /> }
    ]
  },
  {
    category: "Familiar Technologies",
    skills: [
      { label: "React.js", icon: <FaReact /> },
      { label: "Node.js", icon: <FaNode /> },
      { label: "C", icon: <SiCplusplus /> },
      { label: "Java", icon: <FaJava /> },
      { label: "FastAPI", icon: <SiFastapi /> },
      { label: "MySQL", icon: <FaDatabase /> },
      { label: "MongoDB", icon: <FaDatabase /> },
      { label: "PostgreSQL", icon: <FaDatabase /> }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { label: "Teamwork" },
      { label: "Leadership" },
      { label: "Problem-Solving" },
      { label: "Communication" },
      { label: "Adaptability" }
    ]
  }
];

const AboutMe = () => {
  const [headingText, setHeadingText] = useState("About Me");
  const [showIcons, setShowIcons] = useState(false);
  const aboutMeRef = useRef(null);
  const [popupData, setPopupData] = useState({
    isOpen: false,
    title: "",
    image: "",
    details: "",
  });

  const handleMouseLeave = () => {
    setHeadingText("About Me");
  };

  const openPopup = (title, image, details) => {
    setPopupData({
      isOpen: true,
      title,
      image,
      details,
    });
  };

  const closePopup = () => {
    setPopupData({ ...popupData, isOpen: false });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowIcons(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }
    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutMeRef}
      className="min-h-screen w-full flex flex-col items-center justify-center lg:flex-row mt-20 mb-20 bg-[#f0fdf4] text-[#1e293b] py-10 px-10"
    >
      <div className="z-10 lg:w-[80%] md:w-[90%] sm:w-full w-full p-8 border border-[#16a34a] rounded-lg shadow-lg bg-white">
        <h1
          className="text-2xl sm:text-4xl font-bold mb-4 cursor-pointer animate-fadeIn text-[#16a34a]"
          onMouseLeave={handleMouseLeave}
        >
          {headingText}
        </h1>

        <div className="space-y-4 mb-8">
          <div className="pl-7">
            <p className="text-lg font-medium text-[#1e293b]">
              B.Tech in Artificial Intelligence & Data Science
            </p>
            <div className="flex items-center gap-2 text-[#4b5563]">
              <span>ADGIPS</span>
              <span>•</span>
              <span>2022-2026</span>
              <span>•</span>
              <span>SGPA: 8.8</span>
            </div>
          </div>

          <div className="achievements-container p-6 rounded-xl bg-gradient-to-br from-white to-[#f0fdf4] shadow-lg">
  <ul className="space-y-6">
    {/* Internship Achievement */}
    <li className="achievement-card p-5 rounded-lg bg-white border-l-4 border-[#16a34a] shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#1e293b] mb-2">Full Stack Development Internship</h3>
          <p className="text-[#4b5563] leading-relaxed">
            Frontend and Backend Developer Intern at Untitled Ventures, contributing to Lagoon, a recruiting software, by developing scalable microservices and integrating key functionalities. Designed and implemented a custom, flexible PayPal-integrated billing system, enabling seamless subscription management. Additionally, worked on LinkedIn automation using web scraping and bot features to enhance recruitment workflows.
          </p>
        </div>
      </div>
    </li>

    {/* Hackathon Achievement */}
    <li className="achievement-card p-5 rounded-lg bg-white border-l-4 border-[#16a34a] shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#1e293b] mb-2">National Recognition</h3>
          <p className="text-[#4b5563] leading-relaxed">
            Finalist in Smart India Hackathon 2024, ranked Top 12 nationwide in the ISRO Bhartiya Antariksh Hackathon 2024.
          </p>
        </div>
      </div>
    </li>

    {/* Certifications Achievement */}
    <li className="achievement-card p-5 rounded-lg bg-white border-l-4 border-[#16a34a] shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#1e293b] mb-2">Technical Certifications</h3>
          <p className="text-[#4b5563] leading-relaxed">
            Earned OpenCV certification from Coursera, mastering computer vision techniques, and completed IBM Cloud Computing certification during internship, demonstrating expertise in both AI applications and cloud technologies.
          </p>
        </div>
      </div>
    </li>
  </ul>
</div>

        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl mb-6 border-b border-[#dcfce7] pb-2 text-[#16a34a]">
            Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard
              title="ISRO BAH '24 Grand Finalist"
              description="Secured Top 10 among 44,000+ participants"
              onSeeMore={() =>
                openPopup(
                  "ISRO BAH '24 Grand Finalist",
                  image3,
                  "I, along with my team, proudly secured a spot in the top 10 of the ISRO Bhartiya Antariksh Hackathon among 34,000+ students. Our project on rooftop solar energy potential mapping using AI showcased our advanced technical skills and innovative approach."
                )
              }
            />
            <AchievementCard
              title="SIH '24 Grand Finalist"
              description="Grand Finalist among 3+ lakh students"
              onSeeMore={() =>
                openPopup(
                  "SIH '24 Grand Finalist",
                  image1,
                  "As Grand Finalists of the Smart India Hackathon 2024, our team stood out among 3+ lakh participants. Our solution for automatic road extraction and alert generation demonstrated our ability to apply AI techniques to real-world problems."
                )
              }
            />
            <AchievementCard
              title="DSA Mastery"
              description="Solved 300+ problems on LeetCode & excelled in competitive programming"
              onSeeMore={() =>
                openPopup(
                  "DSA Mastery",
                  image5,
                  <>
        <p>I have successfully solved over 324 problems in data structures and algorithms using Java, reflecting my strong problem-solving skills and competitive programming expertise.</p>
        <div className="mt-4">
          <a 
            href="https://leetcode.com/u/Aman303/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#16a34a] hover:text-[#15803d] font-medium underline"
          >
            View My LeetCode Profile →
          </a>
        </div>
      </>
                )
              }
            />
            <AchievementCard
              title="IBM Coursera OpenCV Certificate"
              description="Obtained Data Science Professional Certificate from IBM"
              onSeeMore={() => window.open("https://www.coursera.org/account/accomplishments/verify/KW80MWVP8L0E", "_blank")}
            />
          </div>
        </div>

        <div className="w-full mt-10">
          <h2 className="text-2xl sm:text-3xl mb-4 text-[#16a34a] border-b border-[#dcfce7] pb-2">
            Skills
          </h2>
          <div className="space-y-6">
            {skillsData.map((category, idx) => (
              <div key={idx} className="animate-fadeInUp">
                <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1 bg-[#dcfce7] rounded-full transition-transform duration-300 hover:scale-105"
                    >
                      {skill.icon && <div className="text-xl text-[#16a34a]">{skill.icon}</div>}
                      <span className="text-sm text-[#1e293b]">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {popupData.isOpen && (
        <Popup
          title={popupData.title}
          image={popupData.image}
          details={popupData.details}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

const AchievementCard = ({ title, description, onSeeMore }) => {
  return (
    <div
      className="p-4 bg-[#dcfce7] border border-[#16a34a] rounded-lg shadow-md transform transition-transform duration-300 ease-in-out group hover:scale-105 hover:bg-[#f0fdf4] hover:border-[#15803d] animate-fadeInUp cursor-pointer"
      onClick={onSeeMore}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-[#1e293b] group-hover:text-[#16a34a]">
        {title}
      </h3>
      <p className="text-sm sm:text-md text-[#4b5563] mt-2">{description}</p>
    </div>
  );
};

export default AboutMe;
