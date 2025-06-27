import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'AWS Cloud Intern',
      company: 'F13 Technologies',
      period: 'March 2025 – Present',
      location: 'Remote',
      type: 'Internship',
      description: 'Working on AWS cloud projects and pursuing additional certifications. Gaining hands-on experience with cloud infrastructure, DevOps practices, and automation tools.',
      responsibilities: [
        'Implementing AWS cloud solutions for various projects',
        'Working with DevOps tools and automation frameworks',
        'Pursuing additional AWS certifications',
        'Collaborating with senior engineers on cloud architecture',
        'Contributing to infrastructure as code initiatives'
      ],
      technologies: ['AWS', 'DevOps', 'Cloud Architecture', 'Automation'],
      current: true
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title fade-in-up">Work Experience</h2>
        
        <div className="experience-intro fade-in-up">
          <p>
            My professional journey in cloud computing and DevOps, where I apply my technical 
            skills to real-world projects and continue to grow my expertise in AWS technologies.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item fade-in-up">
              <div className="timeline-marker">
                <div className={`marker-dot ${exp.current ? 'current' : ''}`}></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-meta">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <div className="experience-details">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <div className="current-badge">
                      <span>Current</span>
                    </div>
                  )}
                </div>

                <div className="experience-description">
                  <p>{exp.description}</p>
                </div>

                <div className="experience-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary fade-in-up">
          <div className="summary-content">
            <h3>Professional Growth</h3>
            <p>
              Currently building my professional experience through hands-on work with AWS cloud 
              technologies and DevOps practices. My internship at F13 Technologies provides valuable 
              real-world experience that complements my academic learning and certification achievements.
            </p>
            
            <div className="growth-metrics">
              <div className="metric">
                <span className="metric-number">1+</span>
                <span className="metric-label">Years in Cloud</span>
              </div>
              <div className="metric">
                <span className="metric-number">8+</span>
                <span className="metric-label">AWS Certifications</span>
              </div>
              <div className="metric">
                <span className="metric-number">10+</span>
                <span className="metric-label">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;