import React from "react";
import { Router } from "@reach/router";

// Components
import Home from "./components/home";
import NotFound from "./components/not-found";
import About from "./components/about";

function App() {
  return (
    <Router>
      <Home path="/" exact />
      <About path="/whoami" exact />
      <NotFound default />
    </Router>
  );
}

export default App;
