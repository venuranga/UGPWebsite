import React from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import uni2 from '../assests/uni2.jpg'
import './homepage.css'
import '../components/homerectangle.css'
import { Link  } from 'react-router-dom';
import Navbar from '../components/Navbar.js'
import Slider from '../components/slider.js'

export default function Homepage() {
  return (
    <div >
    <Header />
    <button className="notlogged">You are not logged in</button>
    <Navbar />
    <Slider />
     
   {/* <img src={uni2} alt="" className="homeimg" /> */}
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
