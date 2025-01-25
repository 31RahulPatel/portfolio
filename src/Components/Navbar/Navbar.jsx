import React, { useState } from "react";
import { useTheme } from "../ThemeContext";  // Correct path to ThemeContext
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();  // Access the current theme (light or dark)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <h1 className="logo">Rahul Patel</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#Contact me">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
