import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/img.jpeg';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Rahul Patel' },
    { label: 'Email', value: 'onlinerahulpatel@gmail.com' },
    { label: 'Phone', value: '+91 8639660224' },
    { label: 'Location', value: 'India' },
    { label: 'Languages', value: 'English, Hindi, Gujarati, Telugu' }
  ];

  const hobbies = ['Cycling', 'Traveling', 'Technology', 'Cloud Computing'];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in-left">
            <div className="about-intro">
              <h3>DevOps Engineer & AWS Cloud Expert</h3>
              <p>
                I am a passionate DevOps Engineer with expertise in AWS cloud services and automation. 
                Currently pursuing specialization in Cloud Computing (graduating 2026), I bring hands-on 
                experience in building scalable cloud solutions and implementing DevOps best practices.
              </p>
            </div>

            <div className="about-details">
              <p>
                My journey in technology is driven by a passion for automation and cloud infrastructure. 
                I hold multiple AWS certifications including Cloud Practitioner and Solutions Architect 
                Associate, with 6 additional accredited AWS certifications. I specialize in creating 
                efficient, automated solutions that help businesses scale and optimize their operations.
              </p>
              
              <p>
                When I'm not working on cloud projects, you can find me cycling through scenic routes, 
                exploring new places through travel, or staying updated with the latest in cloud technology. 
                I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>

            <div className="personal-info">
              <h4>Personal Information</h4>
              <div className="info-grid">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hobbies">
              <h4>Hobbies & Interests</h4>
              <div className="hobbies-list">
                {hobbies.map((hobby, index) => (
                  <span key={index} className="hobby-tag">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image fade-in-right">
            <div className="image-wrapper">
              <img src={profileImg} alt="Rahul PATEL Professional" className="about-image" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Always Learning</h4>
                  <p>Staying updated with latest cloud technologies</p>
                </div>
              </div>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-content">
                  <h5>AWS Quiz Winner</h5>
                  <p>Won AWS Community Vadodara meetup quiz</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">📚</div>
                <div className="highlight-content">
                  <h5>Continuous Learner</h5>
                  <p>8+ AWS certifications and counting</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h5>Automation Expert</h5>
                  <p>Building efficient DevOps solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;