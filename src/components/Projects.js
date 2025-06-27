import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Cloud-Based Resume Builder',
      category: 'Full Stack Application',
      description: 'A comprehensive cloud-based resume builder where users can create profiles, generate and download PDF resumes, and store them securely in the cloud.',
      longDescription: 'This project demonstrates a complete serverless architecture using AWS services. Users can register, create detailed profiles, and generate professional PDF resumes. The application features secure authentication, real-time data synchronization, and automated PDF generation.',
      technologies: ['ReactJS', 'AWS Lambda', 'DynamoDB', 'S3', 'Cognito', 'CloudFront', 'Puppeteer', 'CloudWatch'],
      features: [
        'User authentication with AWS Cognito',
        'Profile management and data storage',
        'PDF generation using Puppeteer',
        'Secure file storage in S3',
        'CloudFront CDN for fast delivery',
        'Real-time monitoring with CloudWatch'
      ],
      image: '📄',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Inventory Management System',
      category: 'Enterprise Application',
      description: 'A robust inventory management system with email notifications for low stock, comprehensive sales analytics, and detailed transaction history.',
      longDescription: 'An enterprise-grade inventory management solution built with serverless architecture. Features automated stock monitoring, sales analytics dashboard, and comprehensive reporting capabilities for business insights.',
      technologies: ['ReactJS', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'SES', 'Cognito'],
      features: [
        'Real-time inventory tracking',
        'Automated low-stock email alerts',
        'Sales analytics and reporting',
        'Transaction history management',
        'Multi-user access control',
        'RESTful API architecture'
      ],
      image: '📦',
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'DevOps Automation Pipeline',
      category: 'DevOps Infrastructure',
      description: 'Automated CI/CD pipeline with infrastructure as code, containerization, and comprehensive monitoring for scalable application deployment.',
      longDescription: 'A complete DevOps automation solution featuring CI/CD pipelines, infrastructure provisioning, and monitoring. Demonstrates best practices in modern software delivery and operations.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Grafana', 'Prometheus'],
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure as Code with Terraform',
        'Container orchestration with Kubernetes',
        'Comprehensive monitoring and alerting',
        'Automated testing and deployment',
        'Scalable architecture design'
      ],
      image: '⚙️',
      demoUrl: '#',
      githubUrl: '#',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title fade-in-up">Featured Projects</h2>
        
        <div className="projects-intro fade-in-up">
          <p>
            Here are some of my key projects that showcase my expertise in cloud architecture, 
            DevOps automation, and full-stack development. Each project demonstrates practical 
            application of modern technologies and best practices.
          </p>
        </div>

        <div className="projects-container">
          <div className="projects-sidebar fade-in-left">
            <div className="project-tabs">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`project-tab ${activeProject === index ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="tab-icon">{project.image}</div>
                  <div className="tab-content">
                    <h4>{project.title}</h4>
                    <span className="tab-category">{project.category}</span>
                  </div>
                  <div className={`tab-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="project-details fade-in-right">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {projects[activeProject].image}
                </div>
                <div className="project-meta">
                  <h3>{projects[activeProject].title}</h3>
                  <span className="project-category">{projects[activeProject].category}</span>
                </div>
              </div>

              <div className="project-description">
                <p>{projects[activeProject].longDescription}</p>
              </div>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a href={projects[activeProject].demoUrl} className="btn btn-primary">
                  View Demo
                </a>
                <a href={projects[activeProject].githubUrl} className="btn btn-outline">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-stats fade-in-up">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;