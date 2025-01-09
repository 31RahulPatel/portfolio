import React from "react";
import { useTheme } from "../ThemeContext";  // Correct path to ThemeContext
import "./Projects.css"; 
import proj1 from "../Assets/project1.jpg";
import proj2 from "../Assets/project2.webp";
import proj3 from "../Assets/project3.png";




const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme();  // Access current theme

  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "https://github.com/your-username/project1",
      image: proj1,
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      link: "https://github.com/your-username/project2",
      image: proj2,
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      link: "https://github.com/your-username/project3",
      image: proj3,
    },
    {
        title: "Project 4",
        description: "Description of Project 4",
        link: "https://github.com/your-username/project3",
        image: proj1,
      },
  ];

  return (
    <section id="projects" className={`projects-section ${theme}`}>
      <h2 className="heading">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
            image={project.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
