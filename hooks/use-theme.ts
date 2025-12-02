"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Inicializa theme do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "dark") {
      setTheme("dark");
      document.body.classList.add("dark-theme");
    } else {
      setTheme("light");
      document.body.classList.remove("dark-theme");
    }
  }, []); // <-- roda apenas 1 vez no mount

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}
