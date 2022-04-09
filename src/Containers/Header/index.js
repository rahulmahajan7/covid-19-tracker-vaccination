import React from "react";
// import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <>
      <div className="main-nav">
          <div className="logo">
          <h2>
            <span>C</span>ovid
            <span>V</span>accine
          </h2>
        </div>
          <div className="menu-link">
            <ul>
              <li className="nav__contents">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav__contents">
                <NavLink to="/covid19/news">News</NavLink>
              </li>
              <li className="nav__contents">
                <NavLink to="/Covid-19/vaccineSlots">Vaccine</NavLink>
              </li>
              {/* <li className="nav__contents">
                <NavLink to="/contact">Guidelines</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
    </>
  );
};

export default Header;
