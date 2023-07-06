import React, { useEffect, useState } from "react";

function Navbar() {

  const [navbarStyle, setNavbarStyle] = useState({
    position: "fixed",
    top: 100,
    left: 0,
    width: "100%",
    backgroundColor: "#4390bc",
    color: "#ffffff",
    border: "0px solid #ffffff",
    zIndex: 100,
    transition: "top 1s ease" // Add transition for smooth effect
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPosition = scrollPosition > 100 ? "0px" : "100px";
      setNavbarStyle((prevState) => ({
        ...prevState,
        top: newPosition
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <a className="nav-link active" aria-current="page" href="#" style={linkStyle}>Home</a>
            </li>
            <li class="nav-item dropdown" >
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={linkStyle}>
              Year
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">2023</a></li>
                <li><a class="dropdown-item" href="#">2022</a></li>
                <li><a class="dropdown-item" href="#">2021</a></li>
            </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={linkStyle}>Login</a>
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
