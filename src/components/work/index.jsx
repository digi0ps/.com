import React from "react";
import { BackToHome, OLA } from "../common";
import { WORK, PROJECTS } from "./stuff";
import Item from "./item";

import "./work.sass";

const LINK =
  process.env.REACT_APP_RESUME_URL ||
  "https://drive.google.com/file/d/1M2GepW2Uibq231T7aFsctMxJU77miVBr/view?usp=sharing";

function Work() {
  return (
    <main className="work">
      <header>
        <BackToHome />
        <h1 className="standard">Work</h1>
      </header>
      <p className="small-talk gray">
        Want to skip the small talk and grab my <OLA href={LINK}>resume</OLA>?
      </p>
      <h2 className="standard">Experience</h2>
      <section>
        {WORK.map((exp) => (
          <Item {...exp} />
        ))}
      </section>

      <h2 className="standard" id="projectsHeader">
        Projects
      </h2>
      <section>
        {PROJECTS.map((exp) => (
          <Item {...exp} />
        ))}
      </section>
    </main>
  );
}

export default Work;
