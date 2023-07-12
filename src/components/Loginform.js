import React, { useState } from 'react';
import './loginform.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

 const LoginForm = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleUsernameChange = (e) => {
     setUsername(e.target.value);
   };

   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Username: ', username);
     console.log('Password: ', password);
   };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
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
