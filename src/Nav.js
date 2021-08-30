import React from "react";
import "./Nav.css";

import NavSearch from "./NavSearch";

function Nav({ handleClick, searchVal }) {
  return (
    <div className="Nav">
      <h1>My App</h1>
      <NavSearch searchVal={searchVal} handleClick={handleClick} />
    </div>
  );
}

export default Nav;
