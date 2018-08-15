import React from "react";
import "./Nav.css";

// Component for the Navbar
const Nav = props => (
  <nav className="navbar navbar-expand-lg bg-info text-white">
    <a className="navbar-brand">Clicky Game</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        Your Guess Is
        </li>
      </ul>
      <span className="navbar-text">
        Score:
      </span>
  </nav>
);
  // <nav className="navbar">
  //   <ul>
  //     <li className="brand">
  //       <a href="/">Clicky Game</a>
  //     </li>
  //
  //     <li>
  //       Score: {props.score} | Top Score: {props.topScore}
  //     </li>
  //   </ul>
  // </nav>


export default Nav;
