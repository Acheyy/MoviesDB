import React, { useState } from "react";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunctionOnEnter = e => {
    if (e.key === "Enter") {
      callSearchFunction(e);
    }
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          placeholder="Search movies..."
          type="text"
          onKeyDown={callSearchFunctionOnEnter}
        />
        <div onClick={callSearchFunction} value="SEARCH" className="button">
          <div className="search-icon"> </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
