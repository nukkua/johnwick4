import React from "react";
import { Chip } from "./Chip";
import "./Gender.css"

const Gender = ({ gender }) => {
  return (
    <div className="gender-container">
      {gender.map((genre, index) => (
        <Chip key={index} genre={genre} />
      ))}
    </div>
  );
};

export default Gender;
