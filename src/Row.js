import React, { useState, useEffect } from 'react'
import axios from "./axios"
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])
  return (
    <div className='row__container'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          <img key={movie.id} className="row__poster" src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt={movie.name}></img>
        ))}
      </div>
    </div>
  )
}

export default Row