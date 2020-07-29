import React from "react";
import { GitHub } from "react-feather";

function Item(props) {
  const meta = [props.position, props.duration].filter((x) => x);
  return (
    <div className="item">
      <p className="title">{props.company}</p>
      <p className="meta">
        {meta.join(" / ")}
        {props.github ? (
          <a href={props.github}>
            <GitHub color="currentColor" size={14} />
          </a>
        ) : null}
      </p>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Item;
