import React from "react";
import ActorCard from "./ActorCard";

export const TopCastContainer = () => {
  return (
    <section className="top-cast-container">
      <h6>Top Cast</h6>
      <div className="card-container">
        <ActorCard/>
      </div>
    </section>
  );
};

export default TopCastContainer;
