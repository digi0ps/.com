import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import changelog from "../CHANGELOG.md";
import { BackToHome } from "./common";

function Changelog() {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    fetch(changelog)
      .then((res) => res.text())
      .then((text) => setMdText(text));
  }, []);

  return (
    <main className="changelog">
      <BackToHome />
      {mdText ? <Markdown source={mdText} /> : "..."}
    </main>
  );
}

export default Changelog;
