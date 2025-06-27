import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rahul-patel3105/', icon: '💼' },
    { name: 'Email', url: 'mailto:onlinerahulpatel@gmail.com', icon: '📧' },
    { name: 'Phone', url: 'tel:+918639660224', icon: '📱' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Rahul Patel</h3>
              <p>DevOps Engineer & AWS Cloud Expert</p>
            </div>
            <p className="footer-description">
              Passionate about cloud technologies, automation, and building scalable solutions. 
              Always ready to take on new challenges in the DevOps and cloud computing space.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-link">
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Rahul Patel. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with React & Pure CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;