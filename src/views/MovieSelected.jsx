import { useEffect, useReducer, useState } from "react";
import { getMovies, getMoviesPage1 } from "../services/Movies";
import { BookingButton } from "../components/BookingButton";
import { MovieMain } from "../components/MovieMain";
import { TopCastContainer } from "../components/TopCastContainer";

const MovieSelected = () => {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    getMovies("502356").then((data) => {
      setMovie(data);
    });
  }, []);
  return (
    <div className="movie-selected-container">
      <MovieMain movies={movie} />
      {/* <TopCastContainer movies={movie} />
      <BookingButton /> */}
    </div>
  );
};

export default MovieSelected;
