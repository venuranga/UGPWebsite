import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

import './homedepthead.css'
import {  Link } from 'react-router-dom';

export default function Loginpage() {
  return (
    <div>
      <Header/>
      <button className="projects">View Projects</button>
      <button className="analyzed">View Analyzed Data</button>

<span className="headname">Dr.Rajitha Udawalpola</span>
      <Footer/>
      <Link to="/Deptheadprojects">
              <button className="projects">View Projects</button>
            </Link>

            <Link to="/Deptheadanalyzeddata">
              <button className="analyzed">View Analyzed Data</button>
            </Link>
    </div>
  )
}