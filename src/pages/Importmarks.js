
import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './importmarks.css'
import {  Link} from 'react-router-dom';

export default function Importmarks() {
  return (
    <div>
       <Header/>
       <Link to="/Importmarksheet">
       <button className="importexcelsheet2">Import Excel Sheet</button>
            </Link>
     
      <button className="viewimporteddata2">View Imported Data</button>

<span className="coordinatorname">Dr.Chathura Seneviratne</span>
      <Footer/>
    </div>
  )
}