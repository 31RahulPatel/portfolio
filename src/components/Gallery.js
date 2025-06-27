import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: 'AWS Community Meetup', description: 'Networking at AWS Vadodara meetup', icon: '🤝' },
    { id: 2, title: 'Tech Conference 2024', description: 'Speaking at cloud computing conference', icon: '🎤' },
    { id: 3, title: 'Certification Achievement', description: 'Receiving AWS Solutions Architect certificate', icon: '🏆' },
    { id: 4, title: 'Team Collaboration', description: 'Working with development team', icon: '👥' },
    { id: 5, title: 'Workshop Session', description: 'Conducting DevOps workshop', icon: '📚' },
    { id: 6, title: 'Project Demo', description: 'Demonstrating cloud solution', icon: '💻' }
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title fade-in-up">Gallery</h2>
        
        <div className="gallery-intro fade-in-up">
          <p>
            Moments from meetups, conferences, and professional events. 
            These photos capture my journey in the tech community and professional growth.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="gallery-item fade-in-up">
              <div className="gallery-placeholder">
                <div className="placeholder-icon">{item.icon}</div>
                <div className="placeholder-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note fade-in-up">
          <p>📸 Photos will be added soon! Stay tuned for updates from upcoming events and meetups.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;