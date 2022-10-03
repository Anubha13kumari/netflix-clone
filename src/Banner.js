import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './request';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const apiUrl = 'https://api.themoviedb.org/3' + requests.fetchNetflixOriginals;
            const request = await axios.get(apiUrl);
            console.log("response", request);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();
    }, []);
    console.log("movie", movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className='banner'

            style={{

                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='bannercontent__container'>
                <div className='banner__contents'>
                    <h1 className="banner_title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>

                    <h1 className="banner_description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>
            </div>

            <div className="banner_fadeBottom" />



        </header>
    )
}

export default Banner