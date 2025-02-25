import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import AboutMe from "./components/aboutme";
import Timeline from "./components/history";
import ProjectsGrid from "./components/projects";
import Contact from "./components/contact";
import KnowMore from "./components/knowmore";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-[#f0fdf4]">
      <Header />
      <Home />
      <div id="aboutme" className="bg-[#dcfce7] h-[10px]"></div>
      <AboutMe />
      <h2 
        id="history" 
        className="text-4xl md:text-5xl font-bold lg:ml-36 md:ml-10 sm:ml-10 ml-10 text-[#1e293b] scroll-offset"
      >
        Experience
      </h2>
      <Timeline />
      <h1 
        id="projects" 
        className="text-4xl md:text-5xl font-bold mt-28 lg:ml-36 md:ml-10 sm:ml-10 ml-6 text-[#1e293b] scroll-offset"
      >
        Projects & Publications
      </h1>
      <ProjectsGrid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
