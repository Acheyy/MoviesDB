import React, {useReducer} from "react";
import Search from "./Search";
import reducer from "../reducers/movies";
import { getMoviesBySearch } from './../actions/movies';


const Header = props => {
  const [_, dispatch] = useReducer(reducer);

  const search = searchValue => {
    getMoviesBySearch(searchValue, dispatch);
  };

  return (
    <header className="App-header">
      <h2>{props.text}</h2>
      <Search search={search} />
    </header>
  );
};

export default Header;
