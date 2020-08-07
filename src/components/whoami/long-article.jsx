import React from "react";
import { OLA } from "../common";

function LongArticle() {
  return (
    <article>
      <p>
        Hello there stranger. Thank you for coming here to read about it me. My
        name is Sriram and I come from the wonderful city of{" "}
        <OLA href="https://en.wikipedia.org/wiki/Chennai">Chennai</OLA> in
        India. I’m graduating this year with a major in Computer Science from
        Vellore Institute of Technology. I began programming in high school with
        some web development and C++. However, through my college years, I deep
        dived into full stack development with Django and React as my go to
        choice of frameworks.
      </p>
      <p>
        Currently I'm at <OLA href="https://www.gojek.io/">gojek</OLA> where we
        try to provide the best pickup experience for the customer, which means
        I look at latitudes and longitudes everyday. My daily work includes
        dealing with numerous distributed systems written in Clojure, Golang,
        and Ruby, pulling messages from Kafka, looking at graphs crossing 100k
        rpm and writing clean readable code.
      </p>
      <p>
        Apart from work, I love COFFEE. I love to savour and make various
        varieties of coffee but{" "}
        <OLA
          href="https://en.wikipedia.org/wiki/Indian_filter_coffee"
          color="coffee"
        >
          filter coffee
        </OLA>{" "}
        is the best. I also love not just driving but also reading about Cars.
        Sometimes I wander off in the internet, learning about topics ranging
        from biology to space (cue:{" "}
        <OLA href="https://www.youtube.com/user/Kurzgesagt">Kurzgesagt</OLA>).
        There is something about simple and efficient things which fascinate me.
      </p>
    </article>
  );
}

export default LongArticle;
