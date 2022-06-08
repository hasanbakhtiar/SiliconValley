import React from 'react'

const ProductItem = (props) => {
  return (
    <div className="card col-12 col-sm-12 col-md-4">
    <img src={props.sekil} style={{"width":"200px"}} className="card-img-top" alt={props.sekil} />
    <div className="card-body">
      <h5 className="card-title">{props.basliq}</h5>
      <p className="card-text">{props.aciqlama}</p>
      <p className="card-text">{props.qiymet}$</p>
      <a href="#" className="btn btn-primary">Add to card</a>
    </div>
  </div>
  )
}

export default ProductItem