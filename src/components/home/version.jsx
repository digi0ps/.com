import React from "react";
import { Link } from "@reach/router";

function Version() {
  const codedVersion = "0.2.3";
  const envVersion = process.env.REACT_APP_VERSION || "0.1.0";
  const version = envVersion > codedVersion ? envVersion : codedVersion;

  return (
    <Link to="/changelog" className="version no-select pointer hide-1120">
      v{version}
    </Link>
  );
}

export default Version;
