import React from 'react'
import { ActorCard } from './ActorCard'
import "./TopCastContainer.css"
export const TopCastContainer = ({movies}) => {
   const actors = movies
  return (
    <section className='top-cast-container'>
        <h6>Top Cast</h6>
        <div className='cards-container'>
            {
              actors.map((actor)=>{
                return <ActorCard actor={actor} key={actor.id}/>
              })
              
              //const name=()=>{}
            }
            
        </div>
    </section>
  )
}
