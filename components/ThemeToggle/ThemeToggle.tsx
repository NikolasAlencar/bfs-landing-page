"use client";

import { useTheme } from "@/hooks/use-theme";
import "./theme-toggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
}
