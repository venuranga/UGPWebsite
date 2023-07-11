import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { URL } from '../../env';



const GetOneProject = () => {
  const { id } = useParams();
 
  const [state, setState] = useState({

    GroupNo: '',
    StudentDetails: '',
    ProjName: '',
    ProjDetails: '',
  
  });

  
  useEffect(() => {
    axios
      .get(URL + '/projects/get/' + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          const Proj = res.data.Proj;
          setState({
            GroupNo: Proj.GroupNo,
            StudentDetails: Proj.StudentDetails,
            ProjName: Proj.ProjName,
            ProjDetails: Proj.ProjDetails,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while retrieving the projects');
      });
  }, [id]);

  return (
    <div className="col-md-6" style={{ minHeight: '150vh' }} >
      <h4>Get Project</h4>
      <form >
        <div className="mb-9">
          <label htmlFor="exampleInputGroupNo">Group Number</label>
          <input
            type="text"
            name="GroupNo"
            value={state.GroupNo}
            
            className="form-control"
            id="exampleInputGroupNo"
            required
            disabled
          />
        </div>
        <div className="mb-9">
      <label htmlFor="exampleInputStudentDetails">Student details</label>
        <input
            type="text"
            name="StudentDetails"
            value={state.StudentDetails}
            
            className="form-control"
            id="exampleInputStudentDetails"
            required
            disabled
          />
        </div>
        <div className="mb-9">
          <label htmlFor="exampleInputProjName">Project Name</label>
          <input
            type="text"
            name="ProjName"
            value={state.ProjName}
            
            className="form-control"
            id="exampleInputProjName"
            required
            disabled
          />
        </div>
        <div className="mb-9">
          <label htmlFor="exampleInputProjDetails">Project Details</label>
          <textarea 
            type="text"
            name="ProjDetails"
            value={state.ProjDetails}
            
            className="form-control"
            id="exampleInputProjDetails"
            required
            disabled
          />
        </div>
        
        
      </form>
    </div>
  );
};

export default GetOneProject;