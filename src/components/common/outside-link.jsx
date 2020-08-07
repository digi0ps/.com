import React from "react";

const COLORS = {
  gmail: "#D93024",
  twitter: "#1DA1F2",
  github: "#199B3D",
  linkedin: "#006097",
  kurzgesagt: "#843FCB",
  chennai: "#ffa931",
  coffee: "#9c5518",
  gojek: "#218838",
  resume: "#000",
};

function OutsideLink({ href, children, color }) {
  const style = {
    color: COLORS[color || children.toLowerCase()],
  };

  return (
    <a
      className="outside-link pointer"
      href={href}
      target="_blank"
      style={style}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default OutsideLink;
