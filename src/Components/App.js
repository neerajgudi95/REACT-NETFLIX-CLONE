import React from "react";
import "../CSS/App.css";
import Row from "./Row";
import requests from "../request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
