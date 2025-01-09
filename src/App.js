import React from 'react';
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons
import Badges from './Components/Badge/Badges';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/skills';
import { useTheme } from './Components/ThemeContext'; // Import the useTheme hook
import Experience from './Components/Experience/Experience';
import Blogs from './Components/Blogs/Blogs';
import ContactMe from './Components/Contact/ContactMe';
import SocialMedia from './Components/SocialMedia/SocailMeadia';
import Footer from './Components/Footer/Footer';
import Certifications from './Components/Certifications/Certifications';

function App() {
  const { theme, toggleTheme } = useTheme(); // Destructure theme and toggleTheme

  return (
    <div className={`App ${theme}`}> {/* Apply the current theme */}
      <Navbar />
      <Profile />
      <Badges />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />

      <Blogs />
      <SocialMedia />
      <ContactMe />
      
     
      {/* Theme Toggle Button with Icon */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Show Moon for light mode, Sun for dark mode */}
      </button>
      <Footer />
    </div>
  );
}

export default App;
