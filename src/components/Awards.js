import React from 'react';
import '../styles/Awards.css';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'AWS Quiz Winner',
      organization: 'AWS Community Vadodara',
      date: '2024',
      description: 'Won the AWS technical quiz competition at the AWS Community Vadodara meetup, demonstrating strong knowledge of AWS services and best practices.',
      prize: '$25 AWS Credits',
      icon: '🏆',
      category: 'Technical Competition'
    }
  ];

  return (
    <section id="awards" className="section awards">
      <div className="container">
        <h2 className="section-title fade-in-up">Awards & Recognition</h2>
        
        <div className="awards-intro fade-in-up">
          <p>
            Recognition for technical expertise and active participation in the AWS community. 
            These achievements reflect my commitment to continuous learning and knowledge sharing.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={award.id} className="award-card fade-in-up">
              <div className="award-icon">
                <span>{award.icon}</span>
              </div>
              
              <div className="award-content">
                <div className="award-category">{award.category}</div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-organization">{award.organization}</p>
                <p className="award-date">{award.date}</p>
                <p className="award-description">{award.description}</p>
                
                <div className="award-prize">
                  <span className="prize-label">Prize:</span>
                  <span className="prize-value">{award.prize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="awards-summary fade-in-up">
          <div className="summary-content">
            <h3>Community Involvement</h3>
            <p>
              Active participation in AWS community events and technical meetups. 
              I believe in sharing knowledge and learning from fellow professionals 
              in the cloud computing space.
            </p>
            
            <div className="community-stats">
              <div className="community-stat">
                <span className="stat-icon">🎯</span>
                <div className="stat-info">
                  <span className="stat-title">Technical Excellence</span>
                  <span className="stat-desc">Recognized for AWS expertise</span>
                </div>
              </div>
              
              <div className="community-stat">
                <span className="stat-icon">🤝</span>
                <div className="stat-info">
                  <span className="stat-title">Community Engagement</span>
                  <span className="stat-desc">Active in local tech meetups</span>
                </div>
              </div>
              
              <div className="community-stat">
                <span className="stat-icon">📚</span>
                <div className="stat-info">
                  <span className="stat-title">Knowledge Sharing</span>
                  <span className="stat-desc">Contributing to tech community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;