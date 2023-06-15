import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/Home";
import MovieSelected from "./views/MovieSelected";
import NavigationBar from "./components/NavigationBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas/:slug" element={<MovieSelected />} />
        <Route path="*" element={<p>Not Found!</p>} />
      </Routes>
      <NavigationBar />
    </BrowserRouter>
    
  </React.StrictMode>
);
