
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './importmarks.css'
import {  Link} from 'react-router-dom';

export default function Importmarks() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  return (
    <div>
       <Header/>
       <Link to="/Importmarksheet">
       <button className="importexcelsheet2">Import Excel Sheet</button>
            </Link>
     <Link to = "/Viewmarks">
      <button className="viewimporteddata2">View Imported Data</button>
      </Link>

<span className="coordinatorname"> {user?.fullname}</span>
      <Footer/>
    </div>
  )
}