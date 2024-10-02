import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiJest,
  SiSqlite,
  SiHibernate,
  SiSpringsecurity,
  SiJunit5,
  SiThymeleaf,
} from "react-icons/si";

// Skills data array with icons
const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "DSA", icon: <SiJest /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQL", icon: <SiSqlite /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Hibernate", icon: <SiHibernate /> },
  { name: "JUnit5", icon: <SiJunit5 /> },
  { name: "Thymeleaf", icon: <SiThymeleaf /> },
  { name: "Spring Security", icon: <SiSpringsecurity /> },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold neon-glow mb-8 text-center">Skills</h2>
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .cube {
          width: 160px;
          height: 160px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }
        .cube:hover {
          transform: rotateY(180deg);
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .front {
          background-color: #2d3748;
        }
        .back {
          background: linear-gradient(45deg, #6b46c1, #e53e3e);
          transform: rotateY(180deg);
        }
      `}</style>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="perspective flex justify-center">
            <div className="cube">
              {/* Front Face */}
              <div className="face front">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl text-primary">{skill.icon}</div>
                  <p className="text-center text-lg font-semibold mt-4">
                    {skill.name}
                  </p>
                </div>
              </div>
              {/* Back Face */}
              <div className="face back">
                <p className="text-center text-lg font-bold text-white">
                  Mastered
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
