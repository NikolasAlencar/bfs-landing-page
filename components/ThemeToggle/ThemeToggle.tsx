import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "./theme-toggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Toggle Desktop */}
      <label className="switch theme-toggle-desktop">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider">
          <span className="icon">
            {theme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
          </span>
        </span>
      </label>

      {/* Botão Mobile */}
      <button className="theme-toggle-mobile" onClick={toggleTheme}>
        {theme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
      </button>
    </>
  );
}
