import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
        return <>
        
        <nav className="navbar navbar-expand-lg fw-bold py-4">
          <div className="container">
            <Link className="navbar-brand text-white" to="/home">START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item px-3">
                  <Link className="nav-link text-white" aria-current="page" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link text-white" to="/portfolio">PORTFOLIO</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link text-white" to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        
        
        </>
    }
}

export default Navbar;
