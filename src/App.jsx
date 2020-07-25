import React from "react";
import { Router } from "@reach/router";

// Components
import Home from "./components/home";
import NotFound from "./components/not-found";
import WhoAmI from "./components/whoami";

function App() {
  return (
    <Router>
      <Home path="/" exact />
      <WhoAmI path="/whoami" exact />
      <NotFound default />
    </Router>
  );
}

export default App;
