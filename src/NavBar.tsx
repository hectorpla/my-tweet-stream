import * as React from "react";

import "./NavBar.css";

export const NavBar = () => (
  <div className="nav">
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
      <li className="search-bar nav-item">
        <div>
          <form className="nav-item">
            <input type="text" placeholder="Search" />
            <span>
              <i className="material-icons">search</i>
            </span>
          </form>
        </div>
      </li>
      <li className="nav-item">Have an account? Log in</li>
    </ul>
  </div>
);

export default NavBar;
