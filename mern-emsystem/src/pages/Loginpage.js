import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Loginform from '../components/Loginform.js'
import './loginpage.css'
import {  Link } from 'react-router-dom';


export default function Loginpage() {



  return (
    <div>
      <Header/>
      <button className="notlogged">You are not logged in</button>
<Loginform/>
      <Footer/>
      <Link to="/loginpage">
              <button className="notlogged">You are not logged in</button>
            </Link>

           <Link to="/Homedepthead">
              <button className="depthead">depthead</button>
            </Link>
            <Link to="/Homecoordinator">
              <button className="coordinator">coordinator</button>
            </Link>
            <Link to="/Homestudent">
              <button className="student">student</button>
            </Link>
    </div>
  )
}
