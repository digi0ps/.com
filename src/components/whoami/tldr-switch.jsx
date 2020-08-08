import React from "react";

function Switch({ handleChange, isChecked }) {
  let classes = "toggle pointer no-select";
  if (isChecked) {
    classes += " checked";
  }

  return (
    <div className="tldr">
      <label>tldr?</label>
      <div className={classes} onClick={handleChange}>
        <div className="toggle-track"></div>
        <div className="toggle-thumb"></div>
      </div>
    </div>
  );
}

export default Switch;
