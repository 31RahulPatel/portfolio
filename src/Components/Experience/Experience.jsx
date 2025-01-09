import React from "react";
import { useTheme } from "../ThemeContext"; // Importing the theme context
import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Developed and maintained responsive web applications using ReactJS, improving user engagement by 20%.",
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Innovatech",
    duration: "Jun 2021 - Dec 2021",
    description:
      "Contributed to the development of a cloud-based platform, optimized backend services, and reduced API response time by 30%.",
  },
  {
    id: 3,
    role: "Blockchain Developer",
    company: "CryptoTech Labs",
    duration: "Mar 2020 - May 2021",
    description:
      "Designed and implemented smart contracts for decentralized applications, ensuring scalability and security.",
  },
];

const Experience = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <section id="experience" className={`experience-section ${theme}`}>
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-container">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-card">
            <h3 className="experience-role">{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-duration">{experience.duration}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
