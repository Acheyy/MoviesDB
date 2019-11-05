import React from "react";
import Search from "./Search";

const Header = ({ search, text }) => {
  return (
    <header className="App-header">
      <h2>{text}</h2>
      <Search search={search} />
    </header>
  );
};

export default Header;
