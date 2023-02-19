import React from "react";

import "./Search.scss";

const Search = ({ fetchData, onInputChange }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      fetchData();
    }
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
          placeholder="Type any word then press ENTER..."
        />
      </div>
    </div>
  );
};

export default Search;
