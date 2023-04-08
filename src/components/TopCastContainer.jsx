import React from "react";
import ActorCard from "./ActorCard";
import actors from "../assets/actor.json"
import './TopCastContainer.css'
export const TopCastContainer = () => {
  return (
    <section className="top-cast-container">
      <h6>Top cast</h6>
      <div className="card-container">
        {
          actors.map((actor)=>{
            return <ActorCard actor={actor} key={actor.id} />
          })
        }
      </div>
    </section>
  );
};

export default TopCastContainer;
