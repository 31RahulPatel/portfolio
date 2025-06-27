import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title fade-in-up">Education</h2>
        
        <div className="education-content fade-in-up">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <h3>BTech in CSE with Specialization in Cloud Computing</h3>
              <p className="education-status">Currently Pursuing • Graduating 2026</p>
              <p className="education-description">
                Focused on advanced cloud technologies, distributed systems, and modern 
                infrastructure management. Gaining deep knowledge in cloud architecture, 
                DevOps practices, and enterprise-scale solutions.
              </p>
              <div className="education-highlights">
                <div className="highlight">
                  <span className="highlight-label">Focus Areas:</span>
                  <span>Cloud Architecture, DevOps, Infrastructure as Code</span>
                </div>
                <div className="highlight">
                  <span className="highlight-label">Key Skills:</span>
                  <span>AWS Services, Automation, System Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;