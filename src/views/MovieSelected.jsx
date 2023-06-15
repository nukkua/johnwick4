import { useEffect, useReducer, useState } from "react";
import { getMovies, getMoviesPage1, getActors } from "../services/Movies";
import { BookingButton } from "../components/BookingButton";
import { MovieMain } from "../components/MovieMain";
import { TopCastContainer } from "../components/TopCastContainer";
import { Gender } from "../components/Gender";
import { useParams } from "react-router-dom";

const MovieSelected = () => {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [actors, setActors]=  useState([]);

  useEffect(() => {
    getMovies(slug).then((data) => {
      setMovie(data);
    });
  }, []);
  
  useEffect(() => {
    getMovies(slug).then((data) => {
      setGenre(data.genres);
    });
  }, []);
  
  useEffect(() => {
    getActors(slug).then((data) => {
      setActors(data.cast);
    });
  }, []);

  const {slug}=useParams();
  console.log(slug)

  
  return (
    <div className="movie-selected-container">
      <MovieMain movies={movie} genre={genre} />
      <TopCastContainer movies={actors} />
      <BookingButton />
    </div>
  );
};

export default MovieSelected;
