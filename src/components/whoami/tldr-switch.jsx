import React from "react";

function Switch({ handleChange }) {
  return (
    <div>
      <label htmlFor="tldr">tldr;</label>
      <input type="checkbox" name="tldr" onChange={handleChange} />
    </div>
  );
}

export default Switch;
