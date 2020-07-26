import React from "react";
import { ThemeToggle } from ".";
import { Link } from "@reach/router";

function BackToHome() {
  return (
    <h3 className="back-home">
      <ThemeToggle /> <Link to="/">/..</Link>
    </h3>
  );
}

export default BackToHome;
