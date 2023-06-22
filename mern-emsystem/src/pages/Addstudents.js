import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js'
import './addstudents.css'
import React from 'react'

export default function Addstudents() {
  return (
    <div>
       <Header/>
       <Navbar />
      <button className="importexcelsheet">Import Excel Sheet</button>
      <button className="viewimporteddata">View Imported Data</button>

<span className="coordinatorname">Dr.Chathura Seneviratne</span>
      <Footer/>
    </div>
  )
}
