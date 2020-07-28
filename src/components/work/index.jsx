import React from "react";
import { BackToHome } from "../common";
import { WORK, PROJECTS } from "./stuff";
import Item from "./item";

import "./work.sass";

function Work() {
  return (
    <main className="work">
      <header>
        <BackToHome />
      </header>
      <h2 className="standard">Work</h2>
      <section>
        {WORK.map((exp) => (
          <Item {...exp} />
        ))}
      </section>
      <h2 className="standard">Projects</h2>
      <section>
        {PROJECTS.map((exp) => (
          <Item {...exp} />
        ))}
      </section>
    </main>
  );
}

export default Work;
