import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './loginform.css';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
//import { useAuth } from '../context/auth';
//import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

 const LoginForm = () => {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [auth, setAuth] = useState(null);
 
  const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
      username,
      password,
      });
      if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
        
    });
            localStorage.setItem('auth',JSON.stringify(res.data));
      navigate(location.state || "/Homecoordinator");
      console.log(auth);
            
      }
      
      else {
        
          alert("Incorrect credentials");
     
      }

    } catch (error) {
      console.log(error);
     
      toast.error("Something went wrong");
      console.log(auth);
    }




    };






  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange= {(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange= {(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="forgot-password-container">
        <span className="forgot-password-text">Forgot Password?</span>
      </div>
     
    </div>
  );
 };

export default LoginForm;
