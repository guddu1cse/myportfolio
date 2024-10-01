import React from "react";
import {
  FaDatabase,
  FaLaptopCode,
  FaCodeBranch,
  FaTools,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiIntellijidea,
  SiEclipseide,
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
  SiGit,
} from "react-icons/si";

const Tools = () => {
  return (
    <section id="tools" className="text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold neon-glow mb-8 text-center">Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
        {/* SQL Workbench */}
        <div className="flex flex-col items-center">
          <FaDatabase className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>SQL Workbench</p>
        </div>
        {/* IntelliJ */}
        <div className="flex flex-col items-center">
          <SiIntellijidea className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>IntelliJ IDEA</p>
        </div>
        {/* Eclipse */}
        <div className="flex flex-col items-center">
          <SiEclipseide className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>Eclipse</p>
        </div>
        {/* Spring Boot Tool Suite */}
        <div className="flex flex-col items-center">
          <SiSpringboot className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>Spring Boot Tool Suite</p>
        </div>
        {/* VS Code */}
        <div className="flex flex-col items-center">
          <SiVisualstudiocode className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>VS Code</p>
        </div>
        {/* Postman */}
        <div className="flex flex-col items-center">
          <SiPostman className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>Postman</p>
        </div>
        {/* Android Studio */}
        <div className="flex flex-col items-center">
          <SiAndroidstudio className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>Android Studio</p>
        </div>
        {/* Git */}
        <div className="flex flex-col items-center">
          <SiGit className="text-5xl hover:text-neon transition-all duration-300 mb-2" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
