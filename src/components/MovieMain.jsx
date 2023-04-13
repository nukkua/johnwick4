import React from 'react'
import Gender from './Gender'
import movie from '../assets/peliculas.json'
import TopCastContainer from './TopCastContainer'
import './MovieMain.css'
const MovieMain = () => {
  return (
    <div className='movie-main-container'>
        <img src={movie.imgsrc} alt="" />
        <Gender gender={movie.gender}/>
        <span className='resumen'>
            {
                movie.resume
            }
        </span>
    </div>
  )
}

export default MovieMain