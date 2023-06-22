
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './importmarks.css'
import {  Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { button } from 'bootstrap';
import Navbar from '../components/Navbar.js';

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
       <Navbar />
       <br />
       <br />
       <br />
       
       <Link to="/Importmarksheet">
       <button className="importexcelsheet2">Import Excel Sheet</button>
            </Link>
     <Link to = "/Viewmarks">
      <button className="viewimporteddata2">View Marks</button>
      </Link>

      <Link to = "/ImportProposalMarks">
      <button className="importexcelsheet3">Import Proposal marks</button>
      </Link>

      <Link to = "/ViewProposalMarks">
      <button className="viewimporteddata3">View Proposal Marks </button>
      </Link> 

      

<span className="coordinatorname"> {user?.fullname}</span>

      <Footer/>
    </div>
  )
}

//<button type="button" class="btn btn-primary">Primary</button>