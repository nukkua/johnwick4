import React from 'react';
import MovieCard from './MovieCard';
import './SectionMovie.css';
import { NavLink } from 'react-router-dom';

const SectionMovie = ({ title, movies }) => {
    return (
        <div className="section-container">
            <span>{title}</span>
            <div className="movies-container">
                {movies.map((movie) => {
                    return <NavLink to={`/peliculas/${movie.id}`}>
                        <MovieCard key={movie.id} movie={movie} />
                    </NavLink> 
                })}
            </div>
        </div>
    )
}

export default SectionMovie;
