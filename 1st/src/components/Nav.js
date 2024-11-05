import React from 'react'
import logo from '../assets/logo.png'
import "../css/Nav.css"

export const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#6A1E55',height:"90px" }}>
    <div class="container-fluid"  >
      <img src={logo} alt="logo"  style={{ marginTop:'30px', height:"140px" }}/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{justifyContent:"center"}} >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{ color:"#FF9C73"}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color:"#FF9C73"}}>Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color:"#FF9C73"}}>Contact</a>
          </li>
          
        </ul>
        </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn custom-outline" type="submit">Search</button>
        </form>
      </div>
  
  </nav>
  )
}

export default Nav;