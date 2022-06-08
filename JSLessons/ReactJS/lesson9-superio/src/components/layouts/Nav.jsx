import React from 'react'
import logo from '../../assets/img/logo.svg'



const MenuItem =({menuitem})=>{
  return(<>
      <li className="nav-item">
        <p className="nav-link active" aria-current="page">{menuitem}</p>
      </li></>)
}



const Nav = () => {
  return (
    <div>
        
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p className="navbar-brand"   ><img src={logo} width="153" alt="" /></p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

          <MenuItem menuitem="Home1"/>
          <MenuItem menuitem="Home2"/>
          <MenuItem menuitem="Home3"/>
          <MenuItem menuitem="Home4"/>
          <MenuItem menuitem="Home5"/>
          <MenuItem menuitem="Home6"/>
           
           
            </ul>
            <div className="d-flex" >
            <button className="btn btn-outline-primary me-4" type="submit">Login/Register</button>
              <button className="btn btn-primary" type="submit">Job Post</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav