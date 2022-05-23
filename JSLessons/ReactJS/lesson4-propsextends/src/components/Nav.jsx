import React, { Component } from 'react';


class Dropdown extends Component{
  render(){
    return(
      <li className="nav-item dropdown">
      <p className="my-link nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {this.props.menu}
      </p>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><p className="dropdown-item" href="#">{this.props.model1}</p></li>
        <li><p className="dropdown-item" href="#">{this.props.model2}</p></li>
       
      </ul>
    </li>
    )
  }
}

class Nav extends Component{
    render(){
        return(
            
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-brand" href="#">Logo</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page" href="#">Home</p>
            </li>
           
        <Dropdown menu="Acer" model1="Predator" model2="Aspire" />
        <Dropdown menu="Asus" model1="Rog" model2="Tuf" />
        <Dropdown menu="Lenovo" model1="ThinkPad" model2="Legion" />
          
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
        )
    }
}
export default Nav;