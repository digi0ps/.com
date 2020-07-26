import React from "react";
import "./contact.sass";
import { BackToHome } from "../common";

function Contact() {
  return (
    <main className="contact">
      <header>
        <BackToHome />
        <h1 className="standard">Contact</h1>
      </header>
      <section>
        <p>
          Interested in talking with me or just want to see me preach? Here are
          the places I'm active at :man_shrugging: -
        </p>
        <ul>
          <li>You can drop me a mail at sriru1998 at gmail.com </li>
          <li>I retweet mostly and seldom drop original thoughts @digi0ps</li>
          <li>You can see me write all sorts of code in Github</li>
          <li> For those random runs I take, follow me on strava</li>
        </ul>
      </section>
    </main>
  );
}

export default Contact;
