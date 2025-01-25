import React, { useState, useEffect } from "react";
import "./Profile.css";
import myimg from "../Assets/img.jpg"; // Profile image
import background from "../Assets/Git.png"; // Background image
const Profile = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [spotlightSize, setSpotlightSize] = useState(100); // Spotlight radius

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setSpotlightSize((prev) => Math.min(prev + 10, 150)); // Max size
    } else {
      setSpotlightSize((prev) => Math.max(prev - 10, 30)); // Min size
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      className="profile-container"
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Spotlight overlay */}
      <div
        className="spotlight"
        style={{
          maskImage: `radial-gradient(circle ${spotlightSize}px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${spotlightSize}px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`,
        }}
      ></div>

      {/* Quote Section */}
      <div className="quote">
        "The <span className="highlight">only way</span> to do great <span className="highlight">work</span> is to love what you <span className="highlight">do</span>."
      </div>

      {/* Left Panel */}
      <div className="left-panel">
        <h1>Hello! I am <span className="highlight">Rahul patel</span></h1>
        <p>Web Developer | Cloud Engineer</p>
        <div className="buttonss">
          <button className="btn">Download CV</button>
          <button className="btn">Contact Me</button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <img src={myimg} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Profile;
