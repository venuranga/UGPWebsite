import React from 'react'
import './criteria.css';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';

import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {useState} from 'react';

const CreateFormP2 = () => {
  const [NewCriteria, setNewCriteria] = useState("");
  const [RelatedMark, setRelatedMark] = useState("");
  

  const navigate =useNavigate()

  const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
		  const res = await axios.post("http://localhost:8000/Criterias", {
            NewCriteria,
            RelatedMark,
			
		  });

		  if (res && res.data.success) {
			//toast.success(res.data && res.data.message);
      console.log("Criterias successfully added by coordinator");
		  } else {
			//toast.error(res.data.message);
      console.log("Criterias was not added");
		  }
			
        navigate("/get");
      
		} catch (error) {
		  console.log(error);
      console.log("Something went wrong");
		  //toast.error("Something went wrong");
		}
	  };


    return (
        
			<div>
                 <Header/>
        <div className="form-container" >
            <h4>Add New Criteria</h4>
<br/>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleNewCriteria">Criteria Name:</label>
                    <input type="NewCriteria" value={NewCriteria} onChange={(e) => setNewCriteria(e.target.value)} className="form-control" id="exampleNewCriteria" required></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleRelatedMark">Marks: </label>
                    <input type="RelatedMark" value={RelatedMark} onChange={(e) => setRelatedMark(e.target.value)} className="form-control" id="exampleRelatedMark" required></input>
                </div>
                

                <button type="submit" className="btn btn-primary">Add Criteria </button>


            </form>
        </div>
        <Footer/>
        </div>
    )
  
}
export default CreateFormP2