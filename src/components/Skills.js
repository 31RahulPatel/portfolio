import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skillCategories = [
    {
      title: 'DevOps Tools',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 88 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Terraform', level: 82 },
        { name: 'Ansible', level: 80 }
      ]
    },
    {
      title: 'AWS Services',
      skills: [
        { name: 'EC2', level: 92 },
        { name: 'S3', level: 95 },
        { name: 'Lambda', level: 88 },
        { name: 'CloudFormation', level: 85 },
        { name: 'API Gateway', level: 83 },
        { name: 'DynamoDB', level: 87 }
      ]
    },
    {
      title: 'Monitoring & Analytics',
      skills: [
        { name: 'Grafana', level: 85 },
        { name: 'CloudWatch', level: 90 },
        { name: 'Prometheus', level: 78 },
        { name: 'ELK Stack', level: 75 }
      ]
    },
    {
      title: 'Development',
      skills: [
        { name: 'ReactJS', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Project Management',
      skills: [
        { name: 'JIRA', level: 85 },
        { name: 'Notion', level: 92 },
        { name: 'Agile/Scrum', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill;
            setVisibleSkills((prev) => [...prev, skillName]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title fade-in-up">Skills & Expertise</h2>
        
        <div className="skills-intro fade-in-up">
          <p>
            My technical expertise spans across various DevOps tools, AWS cloud services, 
            and modern development technologies. I'm passionate about automation, 
            infrastructure as code, and building scalable solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category fade-in-up">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        data-skill={`${category.title}-${skill.name}`}
                      >
                        <div 
                          className="skill-progress"
                          style={{
                            width: visibleSkills.includes(`${category.title}-${skill.name}`) 
                              ? `${skill.level}%` 
                              : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary fade-in-up">
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-icon">🛠️</div>
              <h4>DevOps Expertise</h4>
              <p>Comprehensive knowledge of CI/CD pipelines, containerization, and infrastructure automation</p>
            </div>
            
            <div className="summary-item">
              <div className="summary-icon">☁️</div>
              <h4>Cloud Architecture</h4>
              <p>Designing and implementing scalable, secure, and cost-effective cloud solutions on AWS</p>
            </div>
            
            <div className="summary-item">
              <div className="summary-icon">📊</div>
              <h4>Monitoring & Analytics</h4>
              <p>Setting up comprehensive monitoring solutions and performance analytics dashboards</p>
            </div>
            
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <h4>Automation</h4>
              <p>Building automated workflows and processes to improve efficiency and reduce manual errors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;