import React from 'react'

const MovieCard = ({title,budget,year}) => {
  return (

        <div className="card col-12 col-sm-12 col-md-4">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{year}</p>
    <p className="card-text">{budget}$</p>
  </div>
</div>
  
  )
}

export default MovieCard