import React from 'react'
import './rectangleheader.css'
import './header.css'
import logo from '../assests/logo.png'
import {  Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="rectangleheader">
     
      <span className="UPP1">UNDERGRADUATE PROJECT </span>
      <span className="UPP2">PORTAL</span>

      <Link to="/Homepage">
      <img src={logo} alt="" className="logo" />
            </Link>
    </div>
  )
}