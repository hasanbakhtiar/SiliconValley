import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <div className="card col-12 col-sm-12 col-md-4">
        <img src={this.props.photo} height="300" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className={this.props.colorBtn}>Go somewhere</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
