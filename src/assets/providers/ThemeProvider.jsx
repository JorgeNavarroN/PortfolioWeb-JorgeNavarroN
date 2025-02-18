import { useEffect } from "react";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add(theme);
    }
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme, isDarkMode]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}
