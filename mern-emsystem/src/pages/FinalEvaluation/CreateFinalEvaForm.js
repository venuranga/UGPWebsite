import React, { Component } from 'react';
import './createfinalevaform.css';
import Footer from '../../components/Footer.js'
import Header from '../../components/Header.js'

import {useState} from 'react';
//import toast from 'react-hot-toast';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { useEffect } from 'react';
import { URL } from '../../env';


const Form = () => {
	
	const [GrpNo, setGrpNo] = useState("");
	const [RegNo, setRegNo] = useState("");
	const [criteria1, setcriteria1] = useState("");
	const [criteria2, setcriteria2] = useState("");
	const [criteria3, setcriteria3] = useState("");
	const [criteria4, setcriteria4] = useState("");

  const navigate =useNavigate()

  const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
		  const res = await axios.post( URL + "/evaluations", {
			GrpNo,	
		    RegNo,
			criteria1,
			criteria2,
			criteria3,
			criteria4,
		  });

		  if (res && res.data.success) {
			//toast.success(res.data && res.data.message);
      console.log("Results successfully added by evaluator");
		  } else {
			//toast.error(res.data.message);
      console.log("Results was not added");
		  }
			
      navigate("/get");
      
		} catch (error) {
		  console.log(error);
      console.log("Something went wrong");
		  //toast.error("Something went wrong");
		}
	  };

	  const [user, setUser] = useState(null);

	  useEffect(() => {
		  const storedAuth = JSON.parse(localStorage.getItem('auth'));
		  if (storedAuth && storedAuth.success) {
			  setUser(storedAuth.user);
		  }
	  }, []);

//form-group

  return (
    
	<div>
		<Header/>
        <div className="form-container" style={{ minHeight: "150vh" }}>
				<h4>Final Evalution</h4>

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
						<label htmlFor="exampleInputcriteria1">Presentation and/or Demonstration (Group)</label>
						<input type="criteria1" value={criteria1} onChange={(e) => setcriteria1(e.target.value)} className="form-control" id="exampleInputcriteria1" required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputcriteria2">Viva (Individual)</label>
						<input type="criteria2" value={criteria2} onChange={(e) => setcriteria2(e.target.value)} className="form-control" id="exampleInputcriteria2"  required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputcriteria3">Report (Group)</label>
						<input type="criteria3" value={criteria3} onChange={(e) => setcriteria3(e.target.value)} className="form-control" id="exampleInputcriteria3" required></input>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputcriteria4">Contribution (Individual)</label>
						<input type="criteria4" value={criteria4} onChange={(e) => setcriteria4(e.target.value)} className="form-control" id="exampleInputcriteria4" required></input>
					</div>
          
          <button type="submit" className="btn-btn-primary">Submit</button>
          
					
				</form>
        </div>
		<Footer />	
		</div>
		
  )
}
export default Form


// import React, { useState, useEffect } from 'react';
// import './form.css';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Form = () => {
//   const [GrpNo, setGrpNo] = useState("");
//   const [RegNo, setRegNo] = useState("");
//   const [criteriaValues, setCriteriaValues] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch criteria values from the server
//     axios.get("http://localhost:8000/criterias")
//       .then(response => {
//         setCriteriaValues(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:8000/evaluations", {
//         GrpNo,
//         RegNo,
//         ...criteriaValues.reduce((acc, { NewCriteria }) => ({ ...acc, [NewCriteria]: criteriaValues[NewCriteria] }), {})
//       });

//       if (res && res.data.success) {
//         console.log("Results successfully added by evaluator");
//       } else {
//         console.log("Results were not added");
//       }

//       navigate("/get");

//     } catch (error) {
//       console.log(error);
//       console.log("Something went wrong");
//     }
//   };

//   return (
//     <div className="form-container" style={{ minHeight: "150vh" }}>
//       <h4>Evaluations</h4>
//       <form className="eve-form" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputGrpNo">Group Number</label>
//           <input type="GrpNo" value={GrpNo} onChange={(e) => setGrpNo(e.target.value)} className="form-control" id="exampleInputGrpNo" required></input>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputRegNo">Registration Number</label>
//           <input type="RegNo" value={RegNo} onChange={(e) => setRegNo(e.target.value)} className="form-control" id="exampleInputRegNo" required></input>
//         </div>
//         {criteriaValues.map(criteria => (
//           <div className="mb-3" key={criteria._id}>
//             <label htmlFor={`exampleInput${criteria.NewCriteria}`}>{criteria.NewCriteria}</label>
//             <input type={criteria.NewCriteria} value={criteria[criteria.NewCriteria]} onChange={(e) => setCriteriaValues([...criteriaValues, { ...criteria, [criteria.NewCriteria]: e.target.value }])} className="form-control" id={`exampleInput${criteria.NewCriteria}`} required></input>
//           </div>
//         ))}
//         <button type="submit" className="btn-btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// };

// export default Form;
