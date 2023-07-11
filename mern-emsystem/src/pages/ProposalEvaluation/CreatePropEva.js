
import React, { Component, useEffect } from 'react';
import './createpropeva.css';
import Footer from '../../components/Footer.js'
import Header from '../../components/Header.js'

import {useState} from 'react';
//import toast from 'react-hot-toast';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { URL } from '../../env';



const CreatePropEvaForm = () => {
	
	const [GrpNo, setGrpNo] = useState("");
	const [RegNo, setRegNo] = useState("");
	const [criteriaProp1, setcriteriaProp1] = useState("");
	const [criteriaProp2, setcriteriaProp2] = useState("");
	
	

  const navigate =useNavigate()

  const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
		  const res = await axios.post(URL+ "/propevaluations", {
			GrpNo,	
		    RegNo,
			criteriaProp1,
			criteriaProp2,
			
		  });

		  if (res && res.data.success) {
			//toast.success(res.data && res.data.message);
      console.log("Results successfully added by evaluator");
		  } else {
			//toast.error(res.data.message);
      console.log("Results was not added");
		  }
			
      navigate("/propevaluations/get");
      
		} catch (error) {
		  console.log(error);
      console.log("Something went wrong");
		  //toast.error("Something went wrong");
		}
	  };


//form-group

  return (
    
	<div>
		<Header/>
        <div className="form-container" style={{ minHeight: "150vh" }}>
				<h4>Proposal Evalution</h4>

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
						<label htmlFor="exampleInputcriteriaProp1">Report (Group)</label>
						<input type="criteriaProp1" value={criteriaProp1} onChange={(e) => setcriteriaProp1(e.target.value)} className="form-control" id="exampleInputcriteriaProp1" required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputcriteriaProp2">Presentation and Viva (Individual)</label>
						<input type="criteriaProp2" value={criteriaProp2} onChange={(e) => setcriteriaProp2(e.target.value)} className="form-control" id="exampleInputcriteriaProp2"  required></input>
					</div>
					
          
          <button type="submit" className="btn-btn-primary">Submit</button>
          
					
				</form>
        </div>
		<Footer />	
		</div>
		
  )
}
export default CreatePropEvaForm
