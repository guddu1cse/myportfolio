import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contact" className="text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold neon-glow mb-8 text-center">Contact</h2>
      <style jsx>{`
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          border-radius: 8px;
          background-color: #2d3748;
          color: white;
          font-size: 1.25rem;
          text-decoration: none;
          transition: background-color 0.3s, transform 0.2s;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .button:hover {
          background-color: rgba(45, 55, 72, 0.8);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        .icon {
          margin-right: 8px; /* Space between icon and text */
        }
      `}</style>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
        <a
          href="https://www.linkedin.com/in/guddu1cse/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/guddu1cse"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="mailto:guddu.javadev@gmail.com" className="button">
          <FaEnvelope className="icon" />
          Email
        </a>
        <a href="tel:+918084166187" className="button">
          <FaPhone className="icon" />
          Phone
        </a>
      </div>
    </section>
  );
};

export default Contacts;
