import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import {  Link } from 'react-router-dom';
import './Header.css'

export default function Header() {

  const [headerStyle, setHeaderStyle] = useState({
    // Set initial header style
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: 100, // Assuming header height is 100px
    backgroundColor: "#4390bc",
    color: "#000000",
    zIndex: 99, // Make sure the header is behind the navbar
    transition: "top 1s ease", // Add transition for smooth effect
    borderRadius: '0'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPosition = scrollPosition > 100 ? "-100px" : "0px";

      setHeaderStyle((prevState) => ({
        ...prevState,
        top: newPosition
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="card" style={headerStyle}>
        <div className="card-shadow">
            <span className="UPP1">UNDERGRADUATE PROJECT </span>
            <span className="UPP2">PORTAL</span>
            <button className="notlogged" >You are not logged in</button>
            <Link to="/Homepage">
                <img src={logo} alt="" className="logo" />
            </Link>
        </div>
    </div>
  );
}

