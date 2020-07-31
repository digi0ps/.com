import React from "react";
import "./contact.sass";
import { BackToHome, OLA } from "../common";
import { Mail, Twitter, GitHub, Linkedin } from "react-feather";

function Contact() {
  return (
    <main className="contact">
      <header>
        <BackToHome />
        <h1 className="standard">Contact</h1>
      </header>
      <section>
        <p>
          Interested in talking with me or just want to follow me? Here are the
          places I'm active at
        </p>
        <div className="list">
          <div className="list-item">
            <span className="list-icon">
              <Mail color="currentcolor" size={"1.8rem"} />
            </span>
            You can drop me a mail at{" "}
            <OLA color="gmail" href="mailto:sriru1998@gmail.com">
              sriru1998 at gmail.com
            </OLA>
          </div>

          <div className="list-item">
            <span className="list-icon">
              <Twitter color="currentcolor" size={"1.8rem"} />
            </span>
            I retweet mostly and seldom drop original thoughts{" "}
            <OLA color="twitter" href="https://twitter.com/digi0ps">
              @digi0ps
            </OLA>
          </div>

          <div className="list-item">
            <span className="list-icon">
              <GitHub color="currentcolor" size={"1.8rem"} />
            </span>
            You can see me write all sorts of code in{" "}
            <OLA color="github" href="https://github.com/digi0ps">
              {" "}
              github/digi0ps{" "}
            </OLA>
          </div>

          <div className="list-item">
            <span className="list-icon">
              <Linkedin color="currentcolor" size={"1.8rem"} />
            </span>
            Find a more descriptive version of my resume in{" "}
            <OLA color="linkedin" href="https://linkedin.com/in/digi0ps">
              LinkedIn
            </OLA>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
