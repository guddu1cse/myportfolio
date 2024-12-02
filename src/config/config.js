import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaAws,
    FaGitAlt,
    FaDatabase
} from "react-icons/fa";

import {
    SiLeetcode,
    SiJavascript,
    SiJest,
    SiTailwindcss,
    SiMysql,
    SiSqlite,
    SiHibernate,
    SiJunit5,
    SiThymeleaf,
    SiSpringsecurity,
    SiSpringboot,
    SiIntellijidea,
    SiEclipseide,
    SiVisualstudiocode,
    SiPostman,
    SiAndroidstudio,
    SiGit
} from "react-icons/si";

import { MdArchitecture } from "react-icons/md";

export const username = `guddu1cse`;
export const name = "Guddu Kumar";
export const organization = `MountBlue Technologies`;
export const role = `SDE-1 at ${organization}`;
export const profileLink = `https://leetcode.com/LC-${username}/`;
export const leetcodeApi = `https://leetcode-stats-api.herokuapp.com/LC-${username}`;
export const gitHubApi = `https://api.github.com/users/${username}/repos`;
export const linkedin = `https://www.linkedin.com/in/${username}`;
export const github = `https://github.com/${username}`;
export const profileImage = "https://avatars.githubusercontent.com/u/73424882?s=400&u=56dc45a1f9f667ae77bce3faac22a7ee73d68a94&v=4";
export const resume = "https://hackerrank-resume.s3.us-east-1.amazonaws.com/uploads/9758288/OTc1ODI4OA==.pdf";
export const leetcodeProfile = `https://www.leetcode.com/LC-${username}`;
export const instagram = `https://instagram.com/${username}`;
export const email = "guddu.javadev@gmail.com";
export const contact = "8084166187";


export const aboutMe = `Hello, I’m ${name}, a software engineer who graduated in 2024
            with a strong foundation in Computer Science Engineering. I
            completed my B.Tech at Lakshmi Narain College of Technology (LNCT)
            in Bhopal, where I gained in-depth knowledge of Data Structures and
            Algorithms (DSA). I excel at solving complex problems and have
            expertise in various technologies, including React.js, Spring Boot,
            and MySQL. I have experience in developing software applications and
            a keen interest in leveraging my skills in real-world projects to
            contribute to the technology industry.`;

export const footerAbout = `I'm a dedicated software developer skilled in React.js, Spring Boot,
            and Salesforce, passionate about building impactful projects and
            solving complex problems.`;

// list of skills
export const skills = [
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

//list of tools
export const toolsList = [
    { name: "SQL Workbench", icon: <FaDatabase /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
    { name: "Eclipse", icon: <SiEclipseide /> },
    { name: "Spring Boot Tool Suite", icon: <SiSpringboot /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Git", icon: <SiGit /> },
];

//list of certifications
export const certifications = [
    {
        title: "Spring Boot",
        url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/137927/certificates/137999/7662983_137999.pdf?1680688572",
        icon: <SiSpringboot style={{ color: '#6DB33F' }} />, // Spring icon
    },
    {
        title: "Data Structures and Algorithms",
        url: "https://assets.nextleap.app/certificate/Cohort-5-9faa98583d17fdf3d8c761fba59ddd14.pdf",
        icon: <SiLeetcode className="text-yellow-600" />, // LeetCode icon
    },
    {
        title: "System Design",
        url: "https://d3r0n59fu7ub44.cloudfront.net/certificates/courseCertificate/2024-02-02/course_64e39613c899c20312714e9e_user_64f82ae8af97410c0679de08.pdf",
        icon: <MdArchitecture className="text-purple-600" />, // System Design icon
    },
    {
        title: "Frontend Developer Program",
        url: "https://www.edyoda.com/public-certificate/guddu1cse/1482",
        icon: <FaReact style={{ color: '#6ccff6' }} />, // Frontend Mentor icon
    },
];

//list of experiences
export const experiences = [
    {
        year: "2024",
        company: "MountBlue Technologies",
        duration: "November 2024 - Present",
        role: "Software Developer Engineer (SDE-1)",
        description:
            "",
    },
    {
        year: "2024",
        company: "Ekloud Inc",
        duration: "February 2024 - April 2024 (3 Months)",
        role: "Backend Developer Intern",
        description:
            "Implemented API endpoints and data processing pipelines, enhancing the back-end functionality and ensuring data integrity for various client projects.",
    },
];