import React from 'react'
import { Chip } from './Chip'
import "./Gender.css"

export const Gender = ({movies}) => {
  /*const movie = props.movie */
  
  return (
    <div className='gender-container'>
    {
      movies.map((genero)=>(
        <Chip genero={genero.name} key= {genero.id}/>

        ))
    } 
    </div>
  )
}
