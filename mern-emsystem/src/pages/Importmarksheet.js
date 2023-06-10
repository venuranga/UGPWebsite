
import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import '../components/rectangleimport1.css'

import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './importmarksheet.css'



export default function Importmarksheet() {

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
    <span className="coordinatorname"> {user?.fullname}</span>
    <span className="marksheet">Add Mark Sheet</span>
    <div className="rectangleimport1">
      
   

       <form enctype="multipart/form-data" action="http://localhost:5000/api/results/add" method="POST">
<input type="file" name="csv" />
<input type="submit" value="Add File" />
</form>

    </div>
     <Footer />
     </div>
  )
}
