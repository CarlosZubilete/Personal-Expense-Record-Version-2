import { useState, useEffect } from "react";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark";
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDartMode] = useState(getInitialTheme);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDartMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
};
