import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from'./requests';
import './banner.css';

function Banner() {
    const [movie,setmovie]= useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1 )]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie)

    function truncate(str,n){ //for reducing the description at some point
        return str && str.length > n ? str.substr(0,n-1)+"...": str;
    }

        return (
        <header className='banner' 
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path }")`,
            backgroundPosition:"center center",
        }}>{/*${movie?.backdrop_path }    ? for not crashing if movie is undefined */}
            <div className='banner-contents'>

            <h1 className='banner-title'>
                {movie.title || movie.name || movie.original_namee}
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
                <h1 className='banner-description'>
                    {truncate(movie.overview,150)}
                    {/*movie?.overview*/}

                </h1>
            </div>
            <div className='banner--fadebottom'></div>
        </header>
    )
}

export default Banner;
