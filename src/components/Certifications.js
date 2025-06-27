import React, { useState } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('aws');

  const certifications = {
    aws: [
      {
        name: 'AWS Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2024',
        status: 'Certified',
        description: 'Foundational understanding of AWS Cloud concepts, services, and terminology',
        badge: '☁️'
      },
      {
        name: 'AWS Solutions Architect Associate',
        issuer: 'Amazon Web Services',
        date: '2024',
        status: 'Certified',
        description: 'Design and deploy scalable, highly available systems on AWS',
        badge: '🏗️'
      }
    ],
    other: [
      {
        name: 'DevOps Foundation',
        issuer: 'Various Platforms',
        date: '2024',
        status: 'Certified',
        description: 'Understanding of DevOps principles and practices',
        badge: '⚙️'
      },
      {
        name: 'Docker Certified',
        issuer: 'Docker Inc.',
        date: '2024',
        status: 'Certified',
        description: 'Container technology and orchestration expertise',
        badge: '🐳'
      },
      {
        name: 'Kubernetes Administrator',
        issuer: 'CNCF',
        date: '2024',
        status: 'In Progress',
        description: 'Container orchestration and cluster management',
        badge: '⚓'
      },
      {
        name: 'Terraform Associate',
        issuer: 'HashiCorp',
        date: '2024',
        status: 'In Progress',
        description: 'Infrastructure as Code using Terraform',
        badge: '🏭'
      }
    ]
  };

  const allCertifications = [...certifications.aws, ...certifications.other];

  const getCurrentCertifications = () => {
    switch (activeTab) {
      case 'aws':
        return certifications.aws;
      case 'other':
        return certifications.other;
      case 'all':
        return allCertifications;
      default:
        return certifications.aws;
    }
  };

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title fade-in-up">Certifications</h2>
        
        <div className="certifications-intro fade-in-up">
          <p>
            My commitment to continuous learning is reflected in my growing collection of 
            professional certifications. I hold multiple AWS certifications and am actively 
            pursuing additional credentials in DevOps and cloud technologies.
          </p>
        </div>

        <div className="certifications-tabs fade-in-up">
          <button 
            className={`tab-button ${activeTab === 'aws' ? 'active' : ''}`}
            onClick={() => setActiveTab('aws')}
          >
            AWS Certs ({certifications.aws.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'other' ? 'active' : ''}`}
            onClick={() => setActiveTab('other')}
          >
            Other Certs ({certifications.other.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All ({allCertifications.length})
          </button>
        </div>

        <div className="certifications-grid fade-in-up">
          {getCurrentCertifications().map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-badge">
                <span className="badge-icon">{cert.badge}</span>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-description">{cert.description}</p>
                
                <div className={`cert-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                  {cert.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-summary fade-in-up">
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Total Certifications</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">AWS Certified</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Accredited AWS Certs</span>
            </div>
            <div className="stat">
              <span className="stat-number">2024</span>
              <span className="stat-label">Latest Achievement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;