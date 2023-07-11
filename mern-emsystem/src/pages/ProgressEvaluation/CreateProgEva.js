import React, { Component } from 'react';
import './createprogeva.css';
import Footer from '../../components/Footer.js'
import Header from '../../components/Header.js'

import { useState } from 'react';
//import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from 'react';
import { URL } from '../../env'; 



const CreateProgEvaForm = () => {

	const [GrpNo, setGrpNo] = useState("");
	const [RegNo, setRegNo] = useState("");
	const [criteriaProg1, setcriteriaProg1] = useState("");
	const [criteriaProg2, setcriteriaProg2] = useState("");

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
			const res = await axios.post(  URL +"/progevaluations", {
				GrpNo,
				RegNo,
				criteriaProg1,
				criteriaProg2,

			});

			if (res && res.data.success) {
				//toast.success(res.data && res.data.message);
				console.log("Results successfully added by evaluator");
			} else {
				//toast.error(res.data.message);
				console.log("Results was not added");
			}

			navigate("/progevaluations/get");

		} catch (error) {
			console.log(error);
			console.log("Something went wrong");
			//toast.error("Something went wrong");
		}
	};


	//form-group

	return (

		<div>
			<Header />
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
				<h4>Progress Evalution</h4>

				<form className="eve-form" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="exampleInputGrpNo">Group Number</label>
						<input type="GrpNo" value={GrpNo} onChange={(e) => setGrpNo(e.target.value)} className="form-control" id="exampleInputGrpNo" required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputRegNo">Registration Number</label>
						<input type="RegNo" value={RegNo} onChange={(e) => setRegNo(e.target.value)} className="form-control" id="exampleInputRegNo" required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputcriteriaProg1">Contribution (Individual)</label>
						<input type="criteriaProg1" value={criteriaProg1} onChange={(e) => setcriteriaProg1(e.target.value)} className="form-control" id="exampleInputcriteriaProg1" required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputcriteriaProg2">Presentation and Viva (Individual)</label>
						<input type="criteriaProg2" value={criteriaProg2} onChange={(e) => setcriteriaProg2(e.target.value)} className="form-control" id="exampleInputcriteriaProg2" required></input>
					</div>


					<button type="submit" className="btn-btn-primary">Submit</button>


				</form>
			</div>
			<Footer />
		</div>

	)
}
export default CreateProgEvaForm
