import React from 'react';
import { useTheme } from '../ThemeContext';  // Correct path to ThemeContext
import './skills.css';

const skills = [
  { id: 1, name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { id: 2, name: "ReactJS", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  { id: 3, name: "NodeJS", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { id: 4, name: "AWS", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png" },
  { id: 5, name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { id: 6, name: "Docker", icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
  { id: 7, name: "Git", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
  { id: 8, name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
  { id: 9, name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png" }
];

const Skills = () => {
  const { theme } = useTheme();  // Access current theme

  return (
    <div className={`skills-section ${theme}`}>
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill.id} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
