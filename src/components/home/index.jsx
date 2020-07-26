import React from "react";
import { Link } from "@reach/router";

import { ThemeToggle } from "../common";
import "./home.css";

const LINKS = [
  ["open ", "blog", "/blog"],
  ["ls ", "projects", "/projects"],
  ["cat ", "contact", "/contact"],
  ["", "whoami", "/whoami"],
];

function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="home-title no-select standard">
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
