import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to wrap your app with theme logic
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default theme is dark
  const [font, setFont] = useState('Poppins, sans-serif'); // Default font

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedFont = localStorage.getItem('font');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem('theme', 'dark');  // Default to dark theme
    }

    if (savedFont) {
      setFont(savedFont);
    } else {
      localStorage.setItem('font', 'Poppins, sans-serif'); // Default to Poppins
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      setFont(newTheme === 'light' ? 'Roboto, sans-serif' : 'Poppins, sans-serif'); // Change font based on theme
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, font, toggleTheme }}>
      <div style={{ fontFamily: font, transition: 'all 0.3s ease-in-out' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
