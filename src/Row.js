import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from "./axios"
import './Row.css';


const base_url = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const apiUrl = 'https://api.themoviedb.org/3' + fetchUrl;
      console.log("fetch url: ", apiUrl);
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {

      autoplay: 1
    }
  }


  return (
    <div className='row__container'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          <img key={movie.id} className="row__poster" src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.name}></img>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  )
}

export default Row