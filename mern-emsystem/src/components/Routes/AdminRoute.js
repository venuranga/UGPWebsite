import { useState, useEffect } from "react";
//import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import Spinners from "../Spinners";


export default function AdminRoute() {
    const [ok, setOk] = useState(false)
    const [auth] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/modulecoordinator-auth'
            );
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck();

    }, [auth?.token]);

    useEffect(() => {
        if (ok) {
            navigate('/Homecoordinator');
        }
    }, [ok, navigate]);
    
    return ok ? <Outlet /> : <Spinners path="/Homecoordinator"/>;
}
    
