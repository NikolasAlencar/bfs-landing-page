"use client";

import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "./theme-toggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span
          className="icon"
          style={theme === "light" ? { left: "0.5rem" } : undefined}
        >
          {theme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
        </span>
      </span>
    </label>
  );
}
