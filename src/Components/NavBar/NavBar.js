import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';


class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="logo"><p>LOGO</p></div>
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/ski-cams">Ski Cams</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;
