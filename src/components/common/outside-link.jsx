import React from "react";

const COLORS = {
  gmail: "#D93024",
  twitter: "#1DA1F2",
  github: "#199B3D",
  linkedin: "#006097",
};

function OutsideLink({ href, children, color }) {
  return (
    <a
      className="outside-link"
      href={href}
      target="_blank"
      style={{ color: COLORS[color] }}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default OutsideLink;
