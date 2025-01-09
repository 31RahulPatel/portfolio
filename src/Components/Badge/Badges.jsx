import React from 'react';
import { useTheme } from '../ThemeContext';  // Correct path to ThemeContext
import './Badges.css';
import badge1 from "../Assets/aws-knowledge-cloud-essentials.png";
import badge2 from "../Assets/aws-knowledge-architecting.png";
import badge3 from "../Assets/educat01.png";
import provider1 from "../Assets/aws.png";

const badges = [
  { id: 1, name: "Cloud Essentials", image: badge1, providerImage: provider1 },
  { id: 2, name: "Cloud Architecting", image: badge2, providerImage: provider1 },
  { id: 3, name: "Educate Cloud 101", image: badge3, providerImage: provider1 },
];

const Badges = () => {
  const { theme } = useTheme();  // Access the current theme (light or dark)

  return (
    <div className={`badges-section ${theme}`}>
      <h1 className="heading">Skill Badges</h1>
      
      <div className="badge-container-wrapper">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`badge-container ${badge.id % 2 === 0 ? "left" : "right"}`}
          >
            <div className="badge-content">
              <img src={badge.image} alt={`Badge ${badge.id}`} className="badge-image" />
              <div className="badge-name">{badge.name}</div>
              <div className="provider-image-container">
                <img src={badge.providerImage} alt={`Provider ${badge.id}`} className="provider-image" />
              </div>
              <a href="https://www.credly.com/users/rahul-patel.e0726eee" className="verify-button">Verify</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
