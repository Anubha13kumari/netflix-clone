import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './request';

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

    return (
        <header className='banner'

            style={{

                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center'
            }}
        >

            <div className='banner__contents'>
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

            </div>

        </header>
    )
}

export default Banner