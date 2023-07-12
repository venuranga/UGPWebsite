import React from 'react'
import {  Link} from 'react-router-dom';
import './phomecoordinator.css'

export default function Phomecoordinator() {
  return (
    <div>
         <Link to="/Homecoordinator">
         <button className="pathhomecoordinator">Home</button>
            </Link>
      
    </div>
  )
}