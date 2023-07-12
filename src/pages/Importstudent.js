
import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Paddstudents from '../components/Paddstudents.js'
import Phomecoordinator from '../components/Phomecoordinator.js'
import '../components/Phomecoordinator.js'
import './importstudent.css'

import {  Link} from 'react-router-dom';

export default function Importmarks() {
  return (
    <div>
       <Header/>
       <Phomecoordinator/>
       <Paddstudents/>
       
       <Link to="/Importstudentlist">
       <button className="importexcelsheet">Import Excel Sheet</button>
            </Link>
            <Link to="/Addstudents">
      <button className="viewimporteddata">View Imported Data</button>
      </Link>
<span className="coordinatorname">Dr.Chathura Seneviratne</span>
      <Footer/>
    </div>
  )
}