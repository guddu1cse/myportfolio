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
export const PAGE_TITLE = `${name} | Member of Technical Staff at Vymo`;
export const organization = `Vymo`;
export const role = `Member of Technical Staff at ${organization}`;
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


export const aboutMe = `Hello, I’m ${name}, a Backend Engineer with 1+ year of experience
in building scalable and high-performance backend systems. I graduated in 2024
with a B.Tech in Computer Science Engineering from Lakshmi Narain College of Technology (LNCT),
Bhopal. I have a strong foundation in Data Structures and Algorithms, having solved
800+ LeetCode problems. Currently working as a Member of Technical Staff at Vymo Asia,
I specialize in Java, Spring Boot, REST APIs, microservices, and database optimization.
I enjoy solving complex engineering problems and building reliable systems that
operate at scale in real-world production environments.`;

export const footerAbout = `Backend Engineer skilled in Java, Spring Boot, Microservices,
MySQL, Redis, and AWS, passionate about building scalable systems and solving
complex backend and distributed system challenges.`;


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
        title: "React.js",
        url: "https://www.mygreatlearning.com/certificate/PLWQVOVE",
        icon: <FaReact style={{ color: '#6ccff6' }} />, // Frontend Mentor icon
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
        year: 2025,
        company: "Vymo Asia",
        duration: "Jan 2025 - Present",
        role: "Member of Technical Staff (Backend Engineer)",
        link: "https://www.vymo.com/",
        description: `• Designed, developed, and maintained scalable backend microservices using Java and Spring Boot for authentication, workflow orchestration, and internal business logic.
• Built and optimized event-driven data workflows leveraging Kafka, Airflow, Redis, Elasticsearch, SFTP, and scheduled jobs, improving system reliability, throughput, and latency.
• Contributed to distributed system design, production debugging, and performance optimization in high-availability environments.
• Worked on product-critical features and services used by enterprise customers at scale.`,
    },
    {
        year: 2024,
        company: "MountBlue Technologies",
        duration: "Oct 2024 - Dec 2024",
        role: "Software Development Engineer Intern (Backend)",
        link: "https://www.mountblue.io/",
        description: `• Completed intensive backend engineering training focused on Java, Spring Boot, REST API design, and microservices fundamentals.
• Implemented backend features involving API development, database schema design, and query optimization using MySQL and PostgreSQL.
• Strengthened foundations in data structures, OOP principles, and backend system design through hands-on assignments and code reviews.`,
    },
    {
        year: 2024,
        company: "Ekloud Inc",
        duration: "Feb 2024 - Apr 2024 (3 Months)",
        role: "Backend Developer Intern",
        link: "https://ekloudservices.com/",
        description: `• Implemented REST API endpoints and backend data processing pipelines.
• Improved backend functionality, data integrity, and reliability across multiple client-facing projects.`,
    },
];