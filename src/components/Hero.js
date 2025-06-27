import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/img.jpeg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['DevOps Engineer', 'AWS Cloud Expert', 'Automation Specialist', 'Solutions Architect'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const downloadResume = () => {
    // Placeholder for resume download
    alert('Resume download functionality - Add your resume PDF to public folder');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting fade-in-up">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-name fade-in-up">
              Rahul <span className="highlight">Patel</span>
            </h1>
            
            <div className="hero-role fade-in-up">
              <span className="role-prefix">I'm a </span>
              <span className="role-text">{roles[currentRole]}</span>
            </div>
            
            <p className="hero-description fade-in-up">
              I am a DevOps Engineer with expertise in AWS cloud services. 
              I build automation for applications and hold multiple AWS certifications 
              including Cloud Practitioner and Solutions Architect Associate.
            </p>
            
            <div className="hero-actions fade-in-up">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <button onClick={downloadResume} className="btn btn-outline">
                Download Resume
              </button>
            </div>
            
            <div className="hero-stats fade-in-up">
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">AWS Certifications</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image fade-in-right">
            <div className="image-container">
              <img src={profileImg} alt="Rahul PATEL" className="profile-image" />
              <div className="image-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-dots"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <span>↓</span>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;