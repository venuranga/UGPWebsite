import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js';
import './homecoordinator.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Homecoordinator() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <br />
      <br />
      <br />
      <Link to = "/AnalyzedData">
      <button class="btn btn-primary"  style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>View Analyzed Data</button>
      </Link>
      <br />
      <br />
      <Link to="/Importstudent">
        <button class="btn btn-primary "  style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>Add Students</button>
      </Link>
      <br />
      <br />
      <Link to="/Importmarks">
        <button class="btn btn-primary "  style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>Import Marks</button>
      </Link>
      <br />
      <br />
          <Link to = "/criterias/add">
          <button class="btn btn-primary "  style={{marginLeft:"600px" , width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Add New Criterias
            </button>
            </Link>
            <br />
            <br />
         <Link to = "/criterias/get">
          <button class="btn btn-primary  " style={{marginLeft:"600px", width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
              Get all criterias
          </button>
          </Link>
          <br />
          <br />
      <span className="coordinatorname">{user?.fullname}</span>
      <Footer />
    </div>
  )
}
