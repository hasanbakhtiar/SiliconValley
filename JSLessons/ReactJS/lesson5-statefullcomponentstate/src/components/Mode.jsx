import React, { Component } from 'react'
 class Mode extends Component {
     constructor(props){
         super(props);
         this.lightMode = this.lightMode.bind(this);
         this.darkMode = this.darkMode.bind(this);
         this.state={
             mode: "navbar navbar-expand-lg navbar-light bg-light"
         }
     }

     lightMode(){
        this.setState({
            mode: "navbar navbar-expand-lg navbar-light bg-light"

        })
     }
     darkMode(){
        this.setState({
            mode: "navbar navbar-expand-lg navbar-dark bg-dark"

        })
     }
  render() {
    return (
      <div>
            <nav className={this.state.mode}>
        <div className="container-fluid">
          <p className="navbar-brand" href="#">Navbar</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page" href="#">Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" href="#">Link</p>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><p className="dropdown-item" href="#">Action</p></li>
                  <li><p className="dropdown-item" href="#">Another action</p></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><p className="dropdown-item" href="#">Something else here</p></li>
                </ul>
              </li>
              <li className="nav-item">
                <p className="nav-link disabled">Disabled</p>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-outline-success mx-3" type="button" onClick={this.lightMode}>Light</button>
              <button className="btn btn-outline-primary" type="button" onClick={this.darkMode}>Dark</button>
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Mode