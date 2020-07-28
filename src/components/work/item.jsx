import React from "react";

function Item(props) {
  return (
    <div className="item">
      <p className="title">{props.company}</p>
      <p className="meta">
        {props.position} / {props.duration}
      </p>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Item;
