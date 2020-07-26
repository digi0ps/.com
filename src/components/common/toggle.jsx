import React from "react";
import { THEME_KEY } from "../../constants";

function Toggle() {
  const [mode, setMode] = React.useState(localStorage[THEME_KEY] || "light");

  const toggleTheme = (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark");

    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem(THEME_KEY, newMode);
  };

  return (
    <span className="pointer no-select" onClick={toggleTheme}>
      {mode === "light" ? "⛅" : "✨"}
    </span>
  );
}

export default Toggle;
