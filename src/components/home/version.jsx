import React from "react";

function Version() {
  const codedVersion = "0.2.3";
  const envVersion = process.env.REACT_APP_VERSION || "0.1.0";
  const version = envVersion > codedVersion ? envVersion : codedVersion;

  return <div className="version no-select pointer hide-1120">v{version}</div>;
}

export default Version;
