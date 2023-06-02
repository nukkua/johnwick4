export const getMovies = async (title = "") => {
  const movieKey = import.meta.env.VITE_MOVIE_KEY;
  const formatTitle = titlePlus(title);
  const apiURL = "http://www.omdbapi.com/";
  const apiTitle = `${apiURL}?t=${formatTitle}&apikey=${movieKey}`;
  console.log(apiTitle);
  const response = await fetch(apiTitle);
  const data = await response.json();
  return data;
};

export const getMoviesPage1 = async (title = "", genre = "") => {
  const movieKey = import.meta.env.VITE_MOVIE_PAGE1_KEY;
  const formatTitle = title;
  const apiURL = "https://api.themoviedb.org/3/movie/";
  if (genre == "") {
    const apiTitle = `${apiURL}${formatTitle}?api_key=${movieKey}`;
    console.log(apiTitle);
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
  }
  else {
    const apiURL = "https://api.themoviedb.org/3/";
    const formatTitle = `${title}/movie`;
    const apiTitle = `${apiURL}${formatTitle}?api_key=${movieKey}&with_genres=${genre}`;
    console.log(apiTitle);
    const response = await fetch(apiTitle);
    const data = await response.json();
    return data;
  }
};

const titlePlus = (title = "") => {
  const resultado = title.replace(" ", "+");
  return resultado;
};
