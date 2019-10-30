import React, { useState, useEffect, useReducer } from "react";
import "../App.scss";
import Header from "./Header";
import MovieList from "./MovieList";
import reducer from "../reducers/movies";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=toe&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "GET_INITIAL_MOVIES",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const { movies, loading } = state;
  console.log("---", movies);

  return (
    <main className="App">
      <Header text="MovieDB" />

      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </main>
  );
};

export default App;
