import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      content: 'Rahul demonstrates exceptional skills in AWS cloud architecture and DevOps automation. His attention to detail and problem-solving abilities are outstanding.',
      rating: 98,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Cloud Solutions Architect',
      company: 'CloudTech Inc',
      content: 'Working with Rahul on cloud infrastructure projects has been a great experience. His expertise in AWS services and automation tools is impressive.',
      rating: 95,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'InnovateLabs',
      content: 'Rahul consistently delivers high-quality solutions on time. His communication skills and technical expertise make him a valuable team member.',
      rating: 97,
      avatar: '👩‍🚀'
    },
    {
      id: 4,
      name: 'David Kumar',
      role: 'Lead Developer',
      company: 'StartupHub',
      content: 'Rahul\'s knowledge of DevOps best practices and cloud technologies helped streamline our deployment processes significantly.',
      rating: 94,
      avatar: '👨‍🔬'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'CTO',
      company: 'FutureTech',
      content: 'Exceptional work on our cloud migration project. Rahul\'s expertise in AWS and automation saved us both time and costs.',
      rating: 96,
      avatar: '👩‍💼'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      role: 'Infrastructure Lead',
      company: 'ScaleUp Solutions',
      content: 'Rahul\'s approach to infrastructure as code and monitoring solutions is methodical and effective. Highly recommended!',
      rating: 99,
      avatar: '👨‍⚕️'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title fade-in-up">Client Testimonials</h2>
        
        <div className="testimonials-intro fade-in-up">
          <p>
            What colleagues and clients say about working with me. 
            These testimonials reflect my commitment to delivering quality solutions.
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-main fade-in-up">
            <div className="testimonial-card active">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].content}
                </p>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                    <p className="author-role">{testimonials[currentTestimonial].role}</p>
                    <p className="author-company">{testimonials[currentTestimonial].company}</p>
                  </div>
                  <div className="testimonial-rating">
                    <span className="rating-number">{testimonials[currentTestimonial].rating}%</span>
                    <div className="rating-stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-nav fade-in-up">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-grid fade-in-up">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-mini">
              <div className="mini-avatar">{testimonial.avatar}</div>
              <div className="mini-content">
                <div className="mini-name">{testimonial.name}</div>
                <div className="mini-rating">{testimonial.rating}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;