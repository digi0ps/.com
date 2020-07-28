import React from "react";
import { Router } from "@reach/router";

// Components
import Home from "./components/home";
import NotFound from "./components/not-found";
import WhoAmI from "./components/whoami";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Work from "./components/work";

function App() {
  return (
    <Router>
      <Home path="/" exact />
      <WhoAmI path="/whoami" exact />
      <Contact path="/contact" exact />
      <Work path="/work" exact />
      <Blog path="/blog" exact />
      <NotFound default />
    </Router>
  );
}

export default App;
