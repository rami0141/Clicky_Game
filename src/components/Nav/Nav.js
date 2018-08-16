import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar
const Nav = props => (
  <nav className="navbar navbar-expand-lg bg-info text-white">
    <a className="navbar-brand">ClickyG</a>
      <ul className="navbar-nav mr-auto">
        <NavMessage score={props.score} topScore={props.topScore} />
      </ul>
      <li className="navbar-text">
        Score: {props.score} | Top Score: {props.topScore}
      </li>
  </nav>
);

export default Nav;
