import React from "react";
import { Link } from "@reach/router";

import "./home.css";

const LINKS = [
  ["ls ", "blog", "/blog"],
  ["ls ", "projects", "/projects"],
  ["cat ", "contact", "/contact"],
  ["", "whoami", "/whoami"],
];

function Home() {
  const toggleTheme = (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark");
  };

  return (
    <div className="home">
      <header>
        <h1 className="home-title">
          <span onClick={toggleTheme} className="home-icon">
            🏕
          </span>{" "}
          digi0ps
        </h1>
      </header>
      <section>
        {LINKS.map(([light, bold, url]) => (
          <li className="home-link">
            <Link to={url}>
              <span className="light">{light}</span>
              {bold}
            </Link>
          </li>
        ))}
      </section>
    </div>
  );
}

export default Home;
