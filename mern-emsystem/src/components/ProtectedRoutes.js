import React, { useState, useEffect } from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import LoginForm from './Loginform';
import Homecoordinator from '../pages/Homecoordinator';
import { useAuth } from '../context/auth';
//import Homestudent from './pages/Homestudent';

// Custom ProtectedRoute component
const ProtectedRoute = () => {
  // Add your authentication logic here
  //const isAuthenticated = true; // Replace with your authentication check

 // const [IsAuthenticated1, setIsAuthenticated1] = useState(false);
 const [auth, setAuth] = useState(null);
const location = useLocation();




  return  (
    auth?.user?.role ==1 ? <Outlet />
    : auth?.user
    ? <Navigate to = "/Unauthorized" state = {{from: location}} replace />
    : <Navigate to = "/loginpage" state = {{from : location}} replace />
    
  );
}

export default ProtectedRoute;
