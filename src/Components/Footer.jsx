import React from "react";
import {
  contact,
  email,
  github,
  instagram,
  linkedin,
  name,
} from "../config/config";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    color: "#ffffff",
    padding: "2rem 0",
    textAlign: "center",
    borderTop: "1px solid #e0e0e0",
    transition: "all 0.3s ease-in-out",
  };

  const footerContentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  const sectionStyle = {
    margin: "0.3rem 0",
    color: "#555",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  };

  const sectionTitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#969696", // Light white color
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const linkStyle = {
    color: "#007acc",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#005bb5",
    transform: "scale(1.05)",
  };

  const socialLinksContainerStyle = {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "1rem",
  };

  const footerBottomStyle = {
    marginTop: "1rem",
    fontSize: "0.85rem",
    color: "#777",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={sectionStyle}>
          <h2
            style={sectionTitleStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            About Me
          </h2>
          <p>
            I'm a dedicated software developer skilled in React.js, Spring Boot,
            and Salesforce, passionate about building impactful projects and
            solving complex problems.
          </p>
        </div>
        <div style={sectionStyle}>
          <h2
            style={sectionTitleStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Contact
          </h2>
          <p>
            {/*Email:{" "}*/}
            <a
              href={`mailto:${email}`}
              style={linkStyle}
              onMouseOver={(e) => {
                e.target.style.color = linkHoverStyle.color;
                e.target.style.transform = linkHoverStyle.transform;
              }}
              onMouseOut={(e) => {
                e.target.style.color = linkStyle.color;
                e.target.style.transform = "scale(1)";
              }}
            >
              {email}
            </a>
          </p>
          <p>{`+91 ${contact}`}</p>
        </div>
        <div style={sectionStyle}>
          <h2
            style={sectionTitleStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Follow Me
          </h2>
          <div style={socialLinksContainerStyle}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseOver={(e) => {
                e.target.style.color = linkHoverStyle.color;
                e.target.style.transform = linkHoverStyle.transform;
              }}
              onMouseOut={(e) => {
                e.target.style.color = linkStyle.color;
                e.target.style.transform = "scale(1)";
              }}
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseOver={(e) => {
                e.target.style.color = linkHoverStyle.color;
                e.target.style.transform = linkHoverStyle.transform;
              }}
              onMouseOut={(e) => {
                e.target.style.color = linkStyle.color;
                e.target.style.transform = "scale(1)";
              }}
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseOver={(e) => {
                e.target.style.color = linkHoverStyle.color;
                e.target.style.transform = linkHoverStyle.transform;
              }}
              onMouseOut={(e) => {
                e.target.style.color = linkStyle.color;
                e.target.style.transform = "scale(1)";
              }}
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>
          &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
