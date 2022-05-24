import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieInfo = () => {
  const [movieData, setMovieData] = useState([]);

  const { id } = useParams();
  const movieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=652c993ee7462e9af57499898e2286c4&language=en-US`;
  // fetch(movieApi)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setMovieData(data);
  //   });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(movieApi);
      const data = await response.json();
      console.log(data);
      setMovieData(data);
    };
    fetchData();
  }, []);


  return (
    <div className="card">
      <div className="card--poster">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={movieData.title}
        />
        <h1 className="card--title">{movieData.title}</h1>
        <div className="card--set">
            <label>
              RELEASE DATE:<span> {movieData.release_date}</span>
            </label>
        </div>
        <div className="card--set">
            <label>
              STATUS:<span> {movieData.status}</span>
            </label>
          </div>
          <div className="card--set">
            <label>
              RATING:<span> {movieData.vote_average}</span>
            </label>
          </div>

          <div className="card--description">
            <p className="card--desc">{movieData.overview}</p>
          </div>
      <div className="card--info">
        <div className="card--title">
          
        </div>
        <div className="card--details">
          
          </div>

          
        </div>
      </div>
    </div>
  );
};
