import React from 'react'

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-white nav-js shadow-lg sticky-top w-100 h-25">
            <div className="container-fluid bg-white">
                <a className="navbar-brand" href="#">
                    <img className='sqi-img' src={require('../sqi logo.jpg')} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse big navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="dropdown-nam navbar-nav">
                        <li className='dropdown nav-item' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='d-flex align-items-center gap-3'>
                                <a href="#" className="dropdown-name">About</a>
                                <i className="fa icon fa-chevron-down"></i>
                            </div>
                            <ul className="drop-name dropdown-menu">
                                <li><a className="dropdown-item" href="#">Our Story</a></li>
                                <li><a className="dropdown-item" href="#">Our Team</a></li>
                                <li><a className="dropdown-item" href="#">Campus info</a></li>
                            </ul>
                        </li>
                        <li className='dropdown nav-item' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='d-flex align-items-center gap-3'>
                                <a href="#" className="dropdown-name">Programmes</a>
                                <i className="fa icon fa-chevron-down"></i>
                            </div>
                            <ul className="drop-name dropdown-menu">
                                <li><a className="dropdown-item" href="#">Our Story</a></li>
                                <li><a className="dropdown-item" href="#">Our Team</a></li>
                                <li><a className="dropdown-item" href="#">Campus info</a></li>
                            </ul>
                        </li>
                        <li className='dropdown nav-item' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='d-flex align-items-center gap-3'>
                                <a href="#" className="dropdown-name">Admissions</a>
                                <i className="fa icon fa-chevron-down"></i>
                            </div>
                            <ul className="drop-name dropdown-menu">
                                <li><a className="dropdown-item" href="#">Our Story</a></li>
                                <li><a className="dropdown-item" href="#">Our Team</a></li>
                                <li><a className="dropdown-item" href="#">Campus info</a></li>
                            </ul>
                        </li>
                        <li className='dropdown nav-item' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='d-flex align-items-center gap-3'>
                                <a href="#" className="dropdown-name">E-portal</a>
                                <i className="fa icon fa-chevron-down"></i>
                            </div>
                            <ul className="drop-name dropdown-menu">
                                <li><a className="dropdown-item" href="#">Our Story</a></li>
                                <li><a className="dropdown-item" href="#">Our Team</a></li>
                                <li><a className="dropdown-item" href="#">Campus info</a></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className="dropdown-name">Sqi Scholarship</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className="dropdown-name">News</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div>
            <div className='face'>
                <i class="fa fa-facebook-f"></i>
            </div>
            <div className="twit">
                <i class="fa fa-twitter"></i>
            </div>
            <div className="linkin">
                <i class="fa fa-linkedin-in"></i>
            </div>
        </div>
    </>
  )
}

export default Nav