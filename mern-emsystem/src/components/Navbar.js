


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#1177B1",
    color: "#ffffff",
    border: "1px solid #ffffff"
  };

  const linkStyle = {
    color: "#ffffff"
  };

  const toggleIconStyle = {
    filter: "invert(1)",
    fill: "#ffffff"
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={toggleIconStyle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to = "/Homepage">
              <a className="nav-link active" aria-current="page" href="#" style={linkStyle}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
                <Link to = "/Loginpage">
              <a className="nav-link" href="#" style={linkStyle}>Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">View Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">View Analyzed Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Add Students</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Import Marks</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ color: '#ffffff', border: '1px solid #ffffff' }} />
            <button className="btn btn-outline-success white-border" type="submit" style={{ color: '#ffffff', border: '1px solid #ffffff' }} >Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
