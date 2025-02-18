import { useEffect } from "react";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [isDarkMode, setIsDarkMode] = useState();

  // const isDarkMode = return theme === "dark" ||
  // (theme === "system" &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const bool =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(bool);
  }, [theme]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    return () => {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}
