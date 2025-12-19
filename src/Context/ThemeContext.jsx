// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [Themes, setThemes] = useState(
//     JSON.parse(localStorage.getItem("Themes")) || false
//   );

//   useEffect(() => {
//     localStorage.setItem("Themes", JSON.stringify(Themes));
//   }, [Themes]);

//   const toggleTheme = () => setThemes(!Themes);

//   return (
//     <ThemeContext.Provider value={{ Themes, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// src/Context/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
