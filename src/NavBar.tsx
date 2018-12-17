import * as React from "react";

import "./NavBar.css";

export const NavBar = () => (
  <div className="nav">
    <ul className="nav-group">
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
    {/* TODO: clipped look on small screen */}
    <ul className="nav-group">
      <li className="search-bar nav-item">
        <div>
          <div>
            <form className="search-form">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <span className="search-icon">
                <i className="material-icons">search</i>
              </span>
            </form>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <span className="login-span">
          Have an account? <strong className="drop-down">Log in</strong>
        </span>
      </li>
    </ul>
  </div>
);

export default NavBar;
