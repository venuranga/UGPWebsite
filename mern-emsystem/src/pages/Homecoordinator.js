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
      <Link to = "/AnalyzedData">
      <button className="viewdata">View Analyzed Data</button>
      </Link>
      <Link to="/Importstudent">
        <button className="addstudents">Add Students</button>
      </Link>
      <Link to="/Importmarks">
        <button className="importmarks">Import Marks</button>
      </Link>
      <span className="coordinatorname">{user?.fullname}</span>
      <Footer />
    </div>
  )
}
