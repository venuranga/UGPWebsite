import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

//import './homeevaluator.css'
import {  Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';

export default function Homeevaluator() {
  return (
    <div>
      <Header/>
      <Navbar />
       {/* <Link to="/EProposalMarks">
      <button class="btn btn-primary"  style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>Proposal Marks</button>
      </Link>

      <Link to="/EProgressEvaluationMarks">
      <button class="btn btn-primary"  style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>Progress Evaluation Marks</button>
      </Link>

      <Link to="/EFinalEvaluationMark">
      <button class="btn btn-primary"  style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>Final Evaluation Marks</button>
      </Link> */}
<br />
<br />
<br />
      <Link to = "/propevaluations/add">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Add Proposal Results
          </button>
          </Link>

        <br />
<br />
        <Link to = "/propevaluations/get">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Get all proposal results
          </button>
          </Link>


        <br />
        <br />
        <br />

        {/* <h4 style = {{marginLeft: "600px"}}>Changing and view progress results</h4> */}
        

       <Link to = "/progevaluations/add">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Add Progress Results
          </button>
          </Link>
 <br />
        <br />
        <Link to = "/progevaluations/get" >
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Get all progress results
          </button>
          </Link>


        <br />
        <br />
        <br />

{/* 
        <h4 style = {{marginLeft: "600px"}}>Changing and view final results</h4> */}
      

 
            <Link to = "/add">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Add Final Results
          </button>
          </Link>


        <br />
        <br />
        <Link to = "/get">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>

              Get all final results

          </button>
          </Link>




<Footer />
          
    </div>
  )
}