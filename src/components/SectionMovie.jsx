import React from "react";
import "./SectionMovie.css";

const SectionMovie = ({movie, title}) => {
  return (
    <div className="section-container">
      <span>{title}</span>
      <div className="movies-container">
        {
          movie.map((movie)=>{
            <img src={movie.url} alt="" />
          })
        }

      </div>
    </div>
  );
};

export default SectionMovie;
