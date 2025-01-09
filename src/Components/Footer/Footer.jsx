import React from "react";
import { useTheme } from "../ThemeContext"; // Importing the theme context
import "./Footer.css";

const Footer = () => {
  const { theme } = useTheme(); // Access the current theme

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p className="footer-text">© {currentYear} Your Name. All Rights Reserved.</p>
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="footer-icon"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Instagram"
              className="footer-icon"
              title="Instagram"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="footer-icon"
              title="Twitter"
            />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
              alt="Medium"
              className="footer-icon"
              title="Medium"
            />
          </a>
          <a
            href="https://dev.to"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"
              alt="Dev Community"
              className="footer-icon"
              title="Dev Community"
            />
          </a>
          <a
            href="https://hashnode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968933.png"
              alt="Hashnode"
              className="footer-icon"
              title="Hashnode"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
