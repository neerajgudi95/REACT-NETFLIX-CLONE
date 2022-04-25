import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "../CSS/Banner.css";

const Banner = () => {
  const [randomMovie, setRandomMovie] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setRandomMovie(
        request.data.results[
          [Math.floor(Math.random() * request.data.results.length)]
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}")`,
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {randomMovie?.name ||
            randomMovie?.title ||
            randomMovie?.original_name}
        </h1>
        <div className="banner__btns">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h1 className="banner__desc">
          {randomMovie?.overview.slice(0, 250) + "..."}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
