
import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import '../components/rectangleimport1.css'

import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './importProposalMarks.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'



export default function ImportProposalMarks() {

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
          toast.success('Results added successfully',{
            position: 'top-center'
          });
        } else {
          // Show error toast notification
          toast.error('Failed to add results');
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
    <span className="coordinatorname"> {user?.fullname}</span>
    <span className="marksheet" style ={{color: 'black'}}>Add Mark Sheet</span>
    <div className="rectangleimport1">
      <ToastContainer />
   
<script>
  var url = "http:localhost:5000"
       <form enctype="multipart/form-data" action="url/api/proposal/add" method="POST">
<input type="file" name="csv" />
<input type="submit" value="Add File" onClick={handleFormSubmit} />
</form>
</script>

    </div>
     <Footer />
     </div>
  )
}
