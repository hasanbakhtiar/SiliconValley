import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
     
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" href={this.props.url} rel="noreferrer"><i class="fa-brands fa-github"></i>{this.props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav