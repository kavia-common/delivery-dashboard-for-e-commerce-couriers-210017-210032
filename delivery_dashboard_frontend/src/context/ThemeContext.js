import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

// PUBLIC_INTERFACE
/**
 * Custom hook to use theme context
 * @returns {Object} Theme context value with theme and toggleTheme function
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// PUBLIC_INTERFACE
/**
 * ThemeProvider component
 * Manages theme state and persists to localStorage
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('delivery-dashboard-theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.setAttribute('data-theme', theme);
    // Persist theme to localStorage
    localStorage.setItem('delivery-dashboard-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
