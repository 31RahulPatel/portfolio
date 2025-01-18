import React from "react";
import { useTheme } from "../ThemeContext"; // Importing the theme context
import "./Blogs.css";
import blog1 from "../Assets/Blog1.jpg";
import blog2 from "../Assets/blog2.webp";
import blog3 from "../Assets/Blog1.jpg";
import blog4 from "../Assets/img101.avif";



const blogs = [
  {
    id: 1,
    title: "AWS Resources",
    description:
      "A comprehensive guide to AWS resources that will make you master the aws skills.",
    link: "https://rahulpatel.hashnode.dev/must-have-aws-resources-for-students-learning-and-growth",
    image: blog1,
  },
  {
    id: 2,
    title: "Introduction to AWS DevOps",
    description:
      "AWS Reinvest 2024.A small recape  for 2024 reinvest",
    link: "https://rahulpatel.hashnode.dev/aws-reinvent-2024-whats-different-and-what-we-learned",
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
      "How to use EC2 ? Things to remember before using EC2 , Usecase of EC2 and much more...",
    link: "https://rahulpatel.hashnode.dev/understanding-ec2-in-aws-day-1",
    image: blog4,
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
