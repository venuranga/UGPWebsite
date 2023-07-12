import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
//import Navbar from '../components/Navbar.js'
import uni from '../assests/uni.jpg'
import './homepage.css'
import '../components/homerectangle.css'
import { Link  } from 'react-router-dom';

export default function Homepage() {
  return (
    <div >
    <Header />
    
     
   <img src={uni} alt="" className="homeimg" />
   <div className="homerectangle"/>
   <span className="sitename1">UNDERGRADUATE PROJECT</span>
   <span className="sitename2">PORTAL</span>
   <button className="login">Log In</button>
   <Link to="/loginpage">
              <button className="notlogged">You are not logged in</button>
            </Link>
            <Link to="/loginpage">
              <button className="login">Log In</button>
            </Link>
   <Footer/>
    </div>
  )
}
