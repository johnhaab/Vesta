import React from "react";

import "./Search.scss";
import { HiSearch } from "react-icons/hi";

const Search = ({ fetchData, onInputChange, validateInput }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      validateInput();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    validateInput();
  };

  return (
    <div className="container-search">
      <div className="wrapper">
        <input
          type="text"
          className="search-input"
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          id="search"
          placeholder="Type anything..."
        />
        <button className="search-btn" onClick={handleClick}>
          <HiSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
