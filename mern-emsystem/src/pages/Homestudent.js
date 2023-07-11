import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js'
import './homestudent.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Homestudent() {
  return (
    <div>
       <Header/>
       <Navbar />

<br />
<br />
<br />
       <Link to = "/projects/add">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Add Projects
          </button>
          </Link>
        <br />
        <br />

        <Link to = "/projects/get">
          <button className='btn btn-success' style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>

              Get all project
          </button>
          </Link>

      <Footer/>
    </div>
  )
}


