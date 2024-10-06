import React from "react";
import { FaJava, FaReact } from "react-icons/fa"; // For Spring Boot
import { SiLeetcode, SiFrontendmentor } from "react-icons/si"; // For DSA and Frontend Dev

const certifications = [
  {
    title: "Spring Boot",
    url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/137927/certificates/137999/7662983_137999.pdf?1680688572",
    icon: <FaJava className="text-green-600" />, // Java icon
  },
  {
    title: "Data Structures and Algorithms",
    url: "https://assets.nextleap.app/certificate/Cohort-5-9faa98583d17fdf3d8c761fba59ddd14.pdf",
    icon: <SiLeetcode className="text-orange-600" />, // LeetCode icon
  },
  {
    title: "Frontend Developer Program",
    url: "https://www.edyoda.com/public-certificate/guddu1cse/1482",
    icon: <FaReact className="text-purple-600" />, // Frontend Mentor icon
  },
];

const Certifications = () => {
  return (
    <div className=" p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-6 text-white">Certifications</h2>
      <div className="flex justify-center space-x-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 transform transition-transform hover:-translate-y-1 duration-300"
          >
            <span>{cert.icon}</span>
            <span className="font-medium">{cert.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
