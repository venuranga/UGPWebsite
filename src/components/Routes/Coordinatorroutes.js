

import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from 'axios'
import Spinners from "../Spinners";

export default function AdminRoute() {
    const [ok, setOk] = useState(false)
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/admin-auth'
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
    
    return ok ? <Outlet /> : <Spinners path=""/>;
}