import React, { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify';
import './loginform.css';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import { URL } from '../env';
//import { useAuth } from '../context/auth';
//import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

 const LoginForm = ( {setIsAuthenticated1}) => {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [auth, setAuth] = useState(null);

  const IsAuthenticated0 = useState(null);
  const IsAuthenticated2 = useState(null);
  const IsAuthenticated3 = useState(null);
  const navigate = useNavigate();
    const location = useLocation();



    const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(URL + "/api/v1/auth/login", {
      username,
      password,
      });
      if (res && res.data.success) {
      toast.success('Login successful',{
        position: 'top-center',
        color: 'blue'
      }
      
      );
      const role = res.data.user.role;
      setAuth((auth) => ({
        ...auth,
        user: {
          ...res.data.user.username,
          role: res.data.user.role,
        },
        token: res.data.token,
      }));
            localStorage.setItem('auth',JSON.stringify(res.data));
      //navigate(location.state || "/Homecoordinator");

       if(res.data.user.role === 1) {
        navigate('/Homecoordinator');
        console.log(setIsAuthenticated1);
       }
      else if(res.data.user.role === 3) {
        navigate('/Homedepthead');
        IsAuthenticated3(true);
      }
       else if(res.data.user.role === 2) {
        navigate('/Homeevaluator');
        IsAuthenticated2(true);
      }
      else if(res.data.user.role === 0) {
        navigate('/Homestudent')
        IsAuthenticated0(true);
      }

      console.log(auth);
      console.log(auth.user.role);
            
      }
      
      else {
        
          toast.error("Incorrect credentials",{
            position: 'top-center'
          });
     
      }

    } catch (error) {
      console.log(error);
     
      //toast.error("Something went wrong");
      console.log(auth);
    }




    };






  return (
    <div className="login-form-container">

    <ToastContainer />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange= {(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange= {(e) => setPassword(e.target.value)} />
        </div>
        <br />
      
        <button type="submit" className="login-btn">Login</button>
      </form>

      <br />
      <br />
    
      <div className="forgot-password-container">
        <br />
        <br />
        <span className="forgot-password-text">Forgot Password?</span>
      </div>
     
    </div>
  );
 };

export default LoginForm;
