import * as React from "react";

import "./NavBar.css";

export const NavBar = () => (
  <div className="nav">
    <div className="nav-wrapper">
      <ul className="left nav-group">
        <li>
          <a className="nav-item">
            <i className="material-icons icon">home</i>Home
          </a>
        </li>
        <li>
          <a className="nav-item">
            <i className="material-icons icon">wb_sunny</i> Moments
          </a>
        </li>
      </ul>
      <ul className="right nav-group">
        <li className="search-bar nav-item">search bar</li>
        <li className="nav-item">log in</li>
      </ul>
    </div>
  </div>
);

export default NavBar;
