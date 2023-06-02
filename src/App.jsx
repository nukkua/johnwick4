import { useEffect, useReducer, useState } from "react";
import "./App.css";

import MovieSelected from "./views/MovieSelected";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <MovieSelected /> */}
    </div>
  );
}

export default App;
