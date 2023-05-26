import { useEffect, useState } from "react";
import "./App.css";
import { BookingButton } from "./components/BookingButton";
import { MovieMain } from "./components/MovieMain";
import { TopCastContainer } from "./components/TopCastContainer";

function App() {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt2911666&apikey=4a9f0858")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
      <MovieMain movies={movies} />
      <TopCastContainer movies={movies} />
      <BookingButton />
    </div>
  );
}

export default App;
