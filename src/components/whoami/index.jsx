import React from "react";
import "./whoami.sass";
import TLDRSwitch from "./tldr-switch";
import LongArticle from "./long-article";
import ShortArticle from "./short-article";
import { BackToHome } from "../common";

function About() {
  const [tldrMode, setTldrMode] = React.useState(false);
  const handleChange = (e) => {
    setTldrMode(!tldrMode);
  };

  return (
    <main className="whoami">
      <header>
        <BackToHome />
        <h1 className="standard">About</h1>
        <TLDRSwitch handleChange={handleChange} isChecked={tldrMode} />
      </header>
      {tldrMode ? <ShortArticle /> : <LongArticle />}
    </main>
  );
}

export default About;
