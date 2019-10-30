import React from "react";
import Movie from "./Movie";

export const MovieList = ({movies}) => {
  return movies && movies.map((movie, index) => (
    <Movie key={`${index}-${movie.Title}`} movie={movie} />
  ));
};

export default MovieList;
