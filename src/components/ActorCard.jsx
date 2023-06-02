import React from 'react'
import "./ActorCard.css"

export const ActorCard = (props) => {
  const actor = props.actor
  return (
    <div className='actor-container'>
        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
        <span>{actor.original_name}</span>
    </div>
  )
}
