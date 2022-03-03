import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../CSS/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const tmdbURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // const movie = instance.get(fetchURL).then(res=>res.json()).then(data=>);
    // setmovies([...movies, movie]);
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "360",
    width: "100%",
    playVars: {
      // https://developers.google.com/youtube/player_parameters\
    },
    autoplay: 1,
  };

  const handleClick = (movie) => {
    console.log(movie?.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterlarge"}`}
              src={
                isLargeRow
                  ? tmdbURL + movie.poster_path
                  : tmdbURL + movie.backdrop_path
              }
              alt={movie.name}
            />
          </>
        ))}
      </div>
      {trailerUrl && (
        <Youtube
          className="youtube__trailer"
          videoId={trailerUrl}
          opts={opts}
        />
      )}
    </div>
  );
};

export default Row;
