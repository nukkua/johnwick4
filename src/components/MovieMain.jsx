import React from 'react'
import { Gender } from './Gender'
import "./MovieMain.css"

export const MovieMain = ({movies}) => {
  return (
    <div className='movie-main-container'>
        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
        {/* <Gender movies={movies}/> */}
        <span>
            {
                movies.overview
            }
        </span>
    </div>
  )
}