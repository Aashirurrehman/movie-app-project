import React from "react";
import Moment from "react-moment";
import { useLocation, useParams } from "react-router-dom";



export const MovieInfo = (movie) => {

  const {title, poster_path} = useParams();
  const location = useLocation();
  console.log(location)

  
  return (
    <div>
      <h1>Movie detail page</h1>
      <div>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
      
      </div>  
    </div>
  );
};
