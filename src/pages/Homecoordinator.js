import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './homecoordinator.css'
import React from 'react'
import {  Link} from 'react-router-dom';

import Phomecoordinator from '../components/Phomecoordinator.js';

export default function Homecoordinator() {
  return (
    <div>
       <Header/>
       <Phomecoordinator/>
      <button className="viewdata">View Analyzed Data</button>
      
      <button className="addstudents">Add Students</button>
      <Link to="/Importstudent">
       <button className="addstudents">Add Students</button>
            </Link>
      <Link to="/Importmarks">
       <button className="importmarks">Import Marks</button>
            </Link>
     
<span className="coordinatorname">Dr.Chathura Seneviratne</span>
      <Footer/>
    </div>
  )
}