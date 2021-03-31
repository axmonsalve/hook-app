import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/login"
              className="nav-link"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
