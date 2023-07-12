import React from 'react'
import {  Link} from 'react-router-dom';
import './paddstudents.css'

export default function Phomecoordinator() {
  return (
    <div>
         <Link to="/Importstudent">
         <button className="paddstudent"> / Add Students</button>
            </Link>
      
    </div>
  )
}
