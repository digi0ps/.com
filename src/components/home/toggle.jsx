import React from "react";

function Toggle() {
  const [mode, setMode] = React.useState("light");

  const toggleTheme = (e) => {
    e.preventDefault();
    mode === "light" ? setMode("dark") : setMode("light");
    document.body.classList.toggle("dark");
  };

  return (
    <span classname="pointer no-select" onClick={toggleTheme}>
      {/* {mode === "light" ? "🌋" : "🗻"} */}
      {mode === "light" ? "⛅" : "✨"}
    </span>
  );
}

export default Toggle;
