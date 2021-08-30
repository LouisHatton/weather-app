import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav({ handleClick, searchTextChange }) {
  return (
    <div className="Nav">
      <h1>My App</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={searchTextChange}
        />
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default Nav;
