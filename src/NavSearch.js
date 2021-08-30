import React, { useEffect, useState } from "react";
import "./NavSearch.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import townsandcities from "./resources/townsandcities.js";

function NavSearch({ searchVal, handleClick }) {
  const [suggestions, setSuggestions] = useState([]);
  const [reducedSuggestions, setRedSuggestions] = useState([]);
  const [inputText, setInputText] = useState("");

  function textChange(e) {
    const value = e.target.value;
    setInputText(value);
    let suggestions = [];
    if (value.length > 0 && !value.includes("\\")) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = townsandcities.sort().filter((v) => regex.test(v));
    }
    setSuggestions(suggestions);
    //running function to update state in display screen for api call:
    searchVal(value);
  }

  useEffect(() => {
    setRedSuggestions(suggestions.slice(0, 3));
    return reducedSuggestions;
  }, [suggestions]);

  function renderSuggestions() {
    return (
      <>
        {reducedSuggestions.length !== 0 && (
          <ul>
            {reducedSuggestions.map((item) => (
              <li
                onClick={(e) => {
                  let value = e.target.textContent;
                  setInputText(value);
                  searchVal(value);
                }}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  function suggestionClick(e) {
    console.log(e.target.textContent);
  }

  return (
    <div className="NavSearch">
      <form>
        <div className="NavSearch__searchBar">
          <input
            className="NavSearch__searchBar__input"
            type="text"
            placeholder="Search..."
            onChange={textChange}
            value={inputText}
          />
          <button
            className="NavSearch__btn"
            type="submit"
            onClick={(e) => {
              handleClick(e);
              setSuggestions([]);
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="NavSearch__locationBtn" type="button">
            <FontAwesomeIcon icon={faLocationArrow} />
          </button>
        </div>
      </form>
      <div className="NavSearch__results">
        <div className="NavSearch__resultsChild">{renderSuggestions()}</div>
      </div>
    </div>
  );
}

export default NavSearch;
