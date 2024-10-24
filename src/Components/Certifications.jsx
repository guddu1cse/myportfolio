import React from "react";
import { certifications } from "../config/config";

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
