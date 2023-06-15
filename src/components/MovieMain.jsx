import React, { useState } from 'react'
import { Gender } from './Gender'
import "./MovieMain.css"
import { useParams } from 'react-router-dom'

export const MovieMain = ({movies, genre}) => {
  
  return (
    <div className='movie-main-container'>
        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
        <Gender movies={genre}/>
        <span>
            {
                movies.overview
            }
        </span>
    </div>
  )
}