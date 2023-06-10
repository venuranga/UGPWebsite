import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './homestudent.css'
import React from 'react'

export default function Homestudent() {
  return (
    <div>
       <Header/>
      <button className="viewsubmission">View Submission</button>
      <button className="evaluationdetails">Evaluation Details</button>

<span className="studentname">Thanthriwatta T.P.S.</span>
      <Footer/>
    </div>
  )
}
