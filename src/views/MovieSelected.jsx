import { useEffect, useReducer, useState } from "react";
import { getMovies, getMoviesPage1, getActors } from "../services/Movies";
import { BookingButton } from "../components/BookingButton";
import { MovieMain } from "../components/MovieMain";
import { TopCastContainer } from "../components/TopCastContainer";
import { Gender } from "../components/Gender";

const MovieSelected = () => {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [actors, setActors]=  useState([]);

  useEffect(() => {
    getMovies("502356").then((data) => {
      setMovie(data);
    });
  }, []);

  useEffect(() => {
    getMovies("502356").then((data) => {
      setGenre(data.genres);
    });
  }, []);
  
  useEffect(() => {
    getActors("502356").then((data) => {
      setActors(data.cast);
    });
  }, []);

  return (
    <div className="movie-selected-container">
      <MovieMain movies={movie} genre={genre} />
      <TopCastContainer movies={actors} />
      <BookingButton />
    </div>
  );
};

export default MovieSelected;
