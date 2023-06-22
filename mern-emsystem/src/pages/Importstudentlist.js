
//import axios from 'axios';
import '../components/rectangleimport1.css'

import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './importstudentlist.css'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'



export default function Importmarksheet() {

  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target.form;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          // Show success toast notification
          toast.success('Students added successfully',{
            position: 'top-center'
          });
        } else {
          // Show error toast notification
          toast.error('Failed to add students', {
            position: 'top-center'
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Something went wrong');
      });
  };



  return (
    <div>
    <Header />

    <Navbar />
  

    <span className="coordinatorname"> {user?.fullname} </span>
  
    <span className="title">Add Student List </span>
    
      <ToastContainer />
      <br />
      
      <div className="rectangleimport1">
   

  <form enctype="multipart/form-data" action="http://localhost:5000/api/students/add" method="POST">
    <br />
    <br />
<input type="file" name="csv" />
<input type="submit" value="Add File" onClick={handleFormSubmit} />
</form>

    </div>
     <Footer />
     </div>
  )
}