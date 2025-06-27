import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'onlinerahulpatel@gmail.com',
      link: 'mailto:onlinerahulpatel@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8639660224',
      link: 'tel:+918639660224'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'rahul-patel3105',
      link: 'https://www.linkedin.com/in/rahul-patel3105/'
    },
    {
      icon: '🌍',
      label: 'Location',
      value: 'India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        
        <div className="contact-intro fade-in-up">
          <p>
            Ready to discuss your next cloud project or DevOps automation needs? 
            I'm always excited to work on challenging projects and help businesses scale.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <h3>Let's Connect</h3>
            <p>
              Whether you need cloud architecture consultation, DevOps automation, 
              or AWS expertise, I'm here to help bring your ideas to life.
            </p>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-method">
                  <div className="method-icon">{info.icon}</div>
                  <div className="method-details">
                    <span className="method-label">{info.label}</span>
                    <span className="method-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <h4>Availability</h4>
              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Available for new projects</span>
              </div>
              <p>Response time: Usually within 24 hours</p>
            </div>
          </div>

          <div className="contact-form-container fade-in-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;