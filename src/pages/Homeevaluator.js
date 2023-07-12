import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

import './homeevaluator.css'
import {  Link } from 'react-router-dom';

export default function Loginpage() {
  return (
    <div>
      <Header/>
       <Link to="/EProposalMarks">
      <button className="ProposalMarks">Proposal Marks</button>
      </Link>

      <Link to="/EProgressEvaluationMarks">
      <button className="ProgressEvaluationMarks">Progress Evaluation Marks</button>
      </Link>

      <Link to="/EFinalEvaluationMark">
      <button className="FinalEvaluationMarks">Final Evaluation Marks</button>
      </Link>


          
    </div>
  )
}