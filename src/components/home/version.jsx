import React from "react";
import { Link } from "@reach/router";

function Version() {
  const codedVersion = "0.3.0";
  const envVersion = process.env.REACT_APP_VERSION || "0.1.0";
  const version = envVersion > codedVersion ? envVersion : codedVersion;

  const z = process.env.REACT_APP_ZL || "2020-07-26T22:00:00";
  const l = new Date(z).getTime();
  const n = new Date().getTime();
  const d = Math.floor((n - l) / 1000 / 60 / 60 / 24);

  return (
    <Link to="/changelog" className="version no-select pointer hide-1120">
      v{version}#{d}
    </Link>
  );
}

export default Version;
