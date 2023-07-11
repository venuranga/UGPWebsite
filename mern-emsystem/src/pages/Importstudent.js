
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

import './importstudent.css'
import {  Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';




const Importmarks = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

const handleclick = () => {
  navigate("/Viewmarks");
};
  return (
    <div>
       <Header/>
       <Navbar />
       <br />
       <br />
       <br />
       <br />
       <Link to="/Importstudentlist">
       <button className="btn btn-success" style = {{marginLeft: "600px", width:"300px", height: "50px", backgroundColor: "#1177B1"}}>Import Excel Sheet</button>
            </Link>
     <br />
     <br />
     <br />
     <Link to = "/Viewstudents">
      <button onClick={handleclick} className="btn btn-success" style = {{marginLeft: "600px", width:"300px", height: "50px", backgroundColor: "#1177B1"}}>View Imported Data</button>
      </Link>

<span className="coordinatorname">{user?.fullname}</span>
      <Footer/>
    </div>
  )
}

export default Importmarks;