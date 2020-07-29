import React from "react";
import "./whoami.sass";
import { BackToHome } from "../common";

function About() {
  return (
    <div className="whoami">
      <header>
        <BackToHome />
        <h1 className="standard">About</h1>
      </header>
      <article>
        <p>
          Hello there stranger. Thank you for coming here to read about it me.
          My name is Sriram and I come from the wonderful city of Chennai in
          India. I’m graduating this year with a major in Computer Science from
          Vellore Institute of Technology, Chennai. I began programming in high
          school with some web development and C++. However, through my college
          years, I deep dived into full stack development with Django and React
          as my go to choice of frameworks.
        </p>
        <p>
          Currently I'm at gojek where we try to provide the best pickup
          experience for the customer, which means I look at latitudes and
          longitudes everyday. My daily work includes dealing with numerous
          distributed systems written in Clojure, Golang, and Ruby, pulling
          messages from Kafka, looking at graphs crossing 100k rpm and writing
          clean readable code.
        </p>
        <p>
          Apart from work, I love COFFEE ☕️. I love to savour and make various
          varieties of coffee but filter coffee is the best. I also love not
          just driving but also reading about Cars. Sometimes I wander off in
          the internet, learning about topics ranging from biology to space.
          (cue: kurzegast)
        </p>
        <p>
          There is something about simple and efficient things which fascinate
          me. Like how using the exhaust gas to increase the combustion in a
          turbocharger, or how{" "}
        </p>
      </article>
    </div>
  );
}

export default About;
