import React from "react";
import { Link } from "@reach/router";

import ThemeToggle from "./toggle";
import "./home.css";

const LINKS = [
  ["ls ", "blog", "/blog"],
  ["ls ", "projects", "/projects"],
  ["cat ", "contact", "/contact"],
  ["", "whoami", "/whoami"],
];

function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="home-title">
          <ThemeToggle /> digi0ps
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
