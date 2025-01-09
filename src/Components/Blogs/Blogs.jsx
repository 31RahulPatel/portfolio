import React from "react";
import { useTheme } from "../ThemeContext"; // Importing the theme context
import "./Blogs.css";
import blog1 from "../Assets/Blog1.jpg";
import blog2 from "../Assets/blog2.webp";
import blog3 from "../Assets/Blog1.jpg";


const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description:
      "A comprehensive guide to React Hooks and how they simplify state management.",
    link: "https://example.com/react-hooks",
    image: blog1,
  },
  {
    id: 2,
    title: "Introduction to AWS DevOps",
    description:
      "An overview of AWS DevOps tools for building automated CI/CD pipelines.",
    link: "https://example.com/aws-devops",
    image: blog2,
  },
  {
    id: 3,
    title: "Mastering JavaScript",
    description:
      "Advanced tips and techniques to enhance your JavaScript coding skills.",
    link: "https://example.com/mastering-js",
    image: blog3,
  },
  {
    id: 3,
    title: "Mastering JavaScript",
    description:
      "Advanced tips and techniques to enhance your JavaScript coding skills.",
    link: "https://example.com/mastering-js",
    image: blog2,
  },
];

const Blogs = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <section id="blogs" className={`blogs-section ${theme}`}>
      <h2 className="blogs-heading">Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
