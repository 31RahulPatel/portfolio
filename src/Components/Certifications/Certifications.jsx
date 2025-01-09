import React from "react";
import { useTheme } from "../ThemeContext"; // Assuming ThemeContext is used for theme management
import "./Certifications.css";
import certi1 from "../Assets/certi1_page-0001.jpg";
import certi2 from "../Assets/certi2_page-0001.jpg";
import certi3 from "../Assets/certi3_page-0001.jpg";
import certi4 from "../Assets/certi4_page-0001.jpg";


const certifications = [
  { id: 1, image: certi1 , title: "AWS Certified Solutions Architect" },
  { id: 2, image: certi2 , title: "React Developer Certification" },
  { id: 3, image: certi3 , title: "Python for Data Science" },
  { id: 4, image: certi4 , title: "Docker Essentials" },
  { id: 5, image: certi1 , title: "Full Stack Web Development" },
];

const Certifications = () => {
  const { theme } = useTheme(); // Access current theme

  return (
    <section className={`certifications-section ${theme}`}>
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div key={cert.id} className="cert-card">
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <p className="cert-title">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
