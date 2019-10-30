import React, { useState } from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


  
const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  const [hovered, setHovered] = useState(false);
  
  function toggleHover (){
    setHovered(!hovered);
  }

  return (
    <div className={`movie ${        
      hovered ? "active" : "" }`} onMouseOver={toggleHover} onMouseOut={toggleHover}>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <h2 className="movie-title">{movie.Title}</h2>
      <p className="movie-details">({movie.Year})</p>
    </div>
  );
};


export default Movie;
