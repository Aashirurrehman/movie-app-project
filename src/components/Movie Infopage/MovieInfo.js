import React from "react";
import { useParams } from "react-router-dom";


export const MovieInfo = (movie={}) => {
  

  const { id } = useParams();
  const movieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=652c993ee7462e9af57499898e2286c4&language=en-US`;
  fetch(movieApi)
    .then((res) => res.json())
    .then((data) => {
      console.log(movie.movie);
    });

  return (
    <>
      <h1>Hello</h1>

      <div>
        <h1>Now showing {id}</h1>
        <div className="card--content">
          <h1 className="card--title">{movie.movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original/{movie.movie.poster_path}`}
            alt={movie.title}
          />
          <p>
            <small>RELEASE DATE:{movie.movie.release_date}</small>
          </p>
          <p>
            <small>RATING::{movie.movie.vote_average}</small>
          </p>
          <p className="card--desc">{movie.movie.overview}</p>
        </div>
      </div>
      </>
    
  );
};
