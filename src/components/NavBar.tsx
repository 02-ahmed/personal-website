import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top bg-body-light" style={{backgroundColor:"white"}}>
        <div className="container-fluid pt-2 pb-2">
          <a className="navbar-brand ps-5" href="#">Ahmed</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5 ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#skills' >Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#works' >My Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#contact'>Contact Me</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar