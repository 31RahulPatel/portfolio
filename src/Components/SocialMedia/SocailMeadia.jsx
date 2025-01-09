import React from "react";
import { useTheme } from "../ThemeContext"; // Importing the theme context
import "./SocialMedia.css";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  },
  {
    name: "Medium",
    url: "https://www.medium.com",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png",
  },
  {
    name: "Dev Community",
    url: "https://dev.to",
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051326.png",
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968933.png",
  },
];

const SocialMedia = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <section className={`social-media-section ${theme}`}>
      <h2 className="social-media-heading">Follow Me</h2>
      <div className="social-media-icons">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <img
              src={link.icon}
              alt={link.name}
              className="social-media-icon"
              title={link.name}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
