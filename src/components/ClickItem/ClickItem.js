import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImate: `url("${props.image}")` }}
    className={`click-Item${props.shake ? " shake" : ""}`}
  />
);

export default ClickItem;
