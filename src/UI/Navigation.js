import React from "react";
import "./Navigation.css";
import Home from "../Layout/Home";
import { Link } from "react-scroll";
function Navigation() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container container">
          <div>
            <h1 className="navbar-brand">Sanket Bodake</h1>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#my-works">Portfolio</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <Home />
    </header>
  );
}

export default Navigation;
