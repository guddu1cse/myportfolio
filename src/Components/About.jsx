// src/components/About.jsx
import React from "react";
import profileImage from "../assets/profile-img.jpg"; // Ensure this is the correct path

const About = () => {
  return (
    <section
      id="about"
      className=" text-white p-4 flex items-center justify-center mt-0 bg-opacity-0"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-6">
        {/* About Text Section */}
        <div className=" text-gray-200 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-4 border-transparent  md:w-1/2 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 animate-pulse text-center md:text-left">
            About Me
          </h2>
          <p className="text-lg transition duration-300  text-center md:text-left">
            Motivated final-year Computer Science Engineering student
            specializing in Java Full Stack Development. Experienced in Java,
            Spring Boot, MySQL, Data Structures and Algorithms, HTML, and CSS.
            Strong problem-solving skills with a record of solving 700+ problems
            and 1660+ contest rating at LeetCode. Eager to leverage skills in
            real-world projects and contribute to the technology industry.
          </p>
        </div>

        {/* Profile Image Section */}
        <div className="relative transition-transform duration-300 transform hover:scale-110 flex items-center justify-center">
          <div className="absolute w-48 h-48 rounded-full  animate-spin-slow"></div>
          <img
            src="https://avatars.githubusercontent.com/u/73424882?s=400&u=51551f37d5984f47268978e989304e8093442d41&v=4"
            alt="Profile"
            className="rounded-lg w-48 h-48 object-cover shadow-xl border-2 border-sky-400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
