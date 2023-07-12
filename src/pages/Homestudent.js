import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './homestudent.css'
import React from 'react'
import {  Link} from 'react-router-dom';

export default function Homestudent() {
  return (
    <div>
       <Header/>
      
      <Link to="/StudentSubmissions">
       <button className="viewsubmission">View Submissions</button>
            </Link>

      <button className="evaluationdetails">Evaluation Details</button>

<span className="studentname">Thanthriwatta T.P.S.</span>
      <Footer/>
    </div>
  )
}
