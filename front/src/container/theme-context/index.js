import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
