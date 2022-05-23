import React, { Component } from 'react'
import ProductItem from './ProductItem'
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';

class Products extends Component {
  render() {
    return (
      <div className='container'>
          <div className="row">
              <ProductItem photo={img1} colorBtn="btn btn-danger" title="Asus"/>
              <ProductItem photo={img2} colorBtn="btn btn-warning" title="Acer"/>
              <ProductItem photo={img3} colorBtn="btn btn-outline-dark" title="Lenovo"/>
              <ProductItem photo={img4} colorBtn="btn btn-primary" title="Apple"/>
          </div>
      </div>
    )
  }
}

export default Products