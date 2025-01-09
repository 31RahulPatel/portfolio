import React from "react";
import { useTheme } from "../ThemeContext"; // Correct path to ThemeContext
import { motion } from "framer-motion";
import "./Profile.css";
import img from "../Assets/img.jpg";

const Profile = () => {
  const { theme } = useTheme(); // Access the current theme (light or dark)

  return (
    <motion.section
      className={`profile ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="profile-container">
        <motion.div
          className="qoutes"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1>Innovating Future with Cloud and Creativity</h1>
        </motion.div>
        <motion.div
          className="profile-image"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="image-background">
            <img src={img} alt="Profile" />
          </div>
        </motion.div>
        <motion.div
          className="profile-info"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h1>
            Hello, I'm <span>Rahul Patel</span>
          </h1>
          <p>
            A passionate <strong>Cloud Engineer</strong> and{" "}
            <strong>Web Developer</strong>
          </p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
          <a href="#contact" className="btn">
            Download CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Profile;
