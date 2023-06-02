import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { BookingButton } from "./components/BookingButton";
import { MovieMain } from "./components/MovieMain";
import { TopCastContainer } from "./components/TopCastContainer";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import SectionMovie from "./components/SectionMovie";
import { getMovies } from "./services/Movies";

function App() {
  const [movies, setMovies]= useState("");
  useEffect(()=>{
    getMovies("Spider Man").then((data) => {setMovies(data)})
  }, [])
  return (
    <div className="App">
      <MovieMain movies={movies} />
      <TopCastContainer movies={movies} />
      <BookingButton />
      
    </div>
  );
}

export default App;
