import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.jpg'

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="nav">
          <div className="nav-logo">
            <img src={logo} alt="pgs" title="psg logo" />
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <NavLink to="/about-us" activeClassName="active">About us</NavLink>
              </li>
              <li>
                <NavLink to="/ski-cams">Ski Cams</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
