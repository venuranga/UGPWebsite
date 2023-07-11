import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

import './homedepthead.css'
import {  Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import { useState, useEffect } from 'react';



export default function Homedepthead() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);
  return (
    <div>
      <Header/>
      <Navbar />

      <span className="coordinatorname" style={{
        position: "absolute",
        width: "264.83px",
        height: "16.79px",
        left: "1300px",
        top: " 60px",
        backgroundcolor: "transparent",
        bordercolor: "transparent",

        fontfamily: 'Inter',
        fontstyle: "normal",
        fontweight: "700",
        fontsize: "20px",
        lineheight: "24px",
        display: "flex",
        alignitems: "center",
        color: "#FFFFFF"
      }}> {user?.fullname} </span>

      <Footer/>
      <Link to="/GetProjecthod">
              <button className="projects">View Projects</button>
            </Link>

            <Link to="/Deptheadanalyzeddata">
              <button className="analyzed">View Analyzed Data</button>
            </Link>
    </div>
  )
}