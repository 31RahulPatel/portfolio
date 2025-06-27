import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with AWS Lambda',
      excerpt: 'Learn how to build serverless applications using AWS Lambda functions.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AWS',
      image: '⚡'
    },
    {
      id: 2,
      title: 'DevOps Best Practices',
      excerpt: 'Essential practices for implementing effective DevOps workflows.',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'DevOps',
      image: '🔧'
    },
    {
      id: 3,
      title: 'Infrastructure as Code with Terraform',
      excerpt: 'Automate your infrastructure deployment using Terraform.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'IaC',
      image: '🏗️'
    }
  ];

  return (
    <section id="blog" className="section blog">
      <div className="container">
        <h2 className="section-title fade-in-up">AWS Blogs</h2>
        
        <div className="blog-intro fade-in-up">
          <p>
            Sharing knowledge and insights about AWS, DevOps, and cloud technologies. 
            Stay updated with the latest trends and best practices in cloud computing.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="blog-card fade-in-up">
              <div className="blog-image">
                <span className="blog-icon">{post.image}</span>
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta fade-in-up">
          <h3>Want to read more?</h3>
          <p>Follow my blog for regular updates on AWS and DevOps topics</p>
          <a href="#" className="btn">View All Posts</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;