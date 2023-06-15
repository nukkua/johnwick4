import { useEffect, useReducer, useState } from "react";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import SectionMovie from "../components/SectionMovie";
import { getMoviesPage1 } from "../services/Movies";
const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  

  useEffect(() => {
    getMoviesPage1("now_playing", "").then((data) => {
      setNowPlayingMovies(data.results);
    });
  }, []);
  console.log(nowPlayingMovies);

  useEffect(() => {
    getMoviesPage1("upcoming", "").then((data) => {
      setUpcomingMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesPage1("top_rated", "").then((data) => {
      setTopRatedMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesPage1("discover", "28").then((data) => {
      setActionMovies(data.results);
    });
  }, []);
  const nowPlayingMoviesSlice = nowPlayingMovies.slice(0, 5);
  const upcomingMoviesSlice = upcomingMovies.slice(0, 5);
  const topRatedMoviesSlice = topRatedMovies.slice(0, 5);
  const actionMoviesSlice = actionMovies.slice(0, 5);

  return (
    <div className="home-container">
      <SearchBar />
      <SectionMovie title={""} movies={nowPlayingMovies} />
      <SectionMovie title={"Comming Soon"} movies={upcomingMovies} />
      <SectionMovie title={"Top Movies"} movies={topRatedMovies} />
      <SectionMovie title={"Action Movies"} movies={actionMovies} />
      <NavigationBar />
    </div>
  );
};

export default Home;
