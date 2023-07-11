import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import { URL } from '../../env';



const AddProject = () => {
    const [GroupNo, setGroupNo] = useState("");
    const [StudentDetails, setStudentDetails] = useState("");
    const [ProjName, setProjName] = useState("");
    const [ProjDetails, setProjDetails] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        if (storedAuth && storedAuth.success) {
            setUser(storedAuth.user);
        }
    }, []);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(URL + "/projects", {
                GroupNo,
                StudentDetails,
                ProjName,
                ProjDetails
            });

            if (res && res.data.success) {
                //toast.success(res.data && res.data.message);
                console.log("Projects successfully added by coordinator");
            } else {
                //toast.error(res.data.message);
                console.log("Projects was not added");
            }

            navigate("/projects/get");

        } catch (error) {
            console.log(error);
            console.log("Something went wrong");
            //toast.error("Something went wrong");
        }
    };


    return (
        <div>
            <Header />
            <Navbar />

            <span className="coordinatorname" style={{
                position: "absolute",
                width: "264.83px",
                height: "16.79px",
                left: "1300px",
                top: " 60px",
                backgroundcolor: "transparent",
                bordercolor: "transparent",

                fontfamily: 'Inter',
                fontstyle: "normal",
                fontweight: "700",
                fontsize: "20px",
                lineheight: "24px",
                display: "flex",
                alignitems: "center",
                color: "#FFFFFF"
            }}> {user?.fullname} </span>

            <div className="form-container" style={{ minHeight: "150vh" }}>
                <h4>Undergraduate Projects</h4>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleGroupNo">Group Number</label>
                        <input type="GroupNo" value={GroupNo} onChange={(e) => setGroupNo(e.target.value)} className="form-control" id="exampleGroupNo" required></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleStudentDetails">Student Details </label>
                        <textarea type="StudentDetails" value={StudentDetails} onChange={(e) => setStudentDetails(e.target.value)} className="form-control" id="exampleStudentDetails" required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleProjName">Project Name</label>
                        <textarea type="ProjName" value={ProjName} onChange={(e) => setProjName(e.target.value)} className="form-control" id="exampleProjName" required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleProjDetails">Project Description </label>
                        <textarea type="ProjDetails" value={ProjDetails} onChange={(e) => setProjDetails(e.target.value)} className="form-control" id="exampleProjDetails" required></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary" style ={{backgroundColor: "#1177B1"}}>Add Project</button>


                </form>
            </div>
            <Footer />
        </div>
    )

}
export default AddProject