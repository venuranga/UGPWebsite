// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../components/Header.js'
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// const EditProject = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [state, setState] = useState({

//     GrpNo: '',
//     StudentDetails: '',
//     ProjName: '',
//     ProjDetails: '',

//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedAuth = JSON.parse(localStorage.getItem('auth'));
//     if (storedAuth && storedAuth.success) {
//       setUser(storedAuth.user);
//     }
//   }, []);
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { GrpNo, StudentDetails, ProjName, ProjDetails } = state;
//     const data = {
//       GrpNo: GrpNo,
//       StudentDetails: StudentDetails,
//       ProjName: ProjName,
//       ProjDetails: ProjDetails,
//     };
//     console.log(data);
//     axios
//       .put('http://localhost:5000/projects/edit/' + id, data)
//       .then((res) => {
//         setState({
//           GrpNo: '',
//           StudentDetails: '',
//           ProjName: '',
//           ProjDetails: '',
//         });
//         alert('Project updated successfully');
//         navigate("/projects/get");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Error occurred while updating the project');
//       });
//   };

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/projects/get/' + id)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.success) {
//           const progResult = res.data.progResult;
//           setState({
//             GrpNo: progResult.GrpNo,
//             StudentDetails: progResult.StudentDetails,
//             ProjName: progResult.ProjName,
//             ProjDetails: progResult.ProjDetails,
//           });
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Error occurred while retrieving the projects');
//       });
//   }, [id]);

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <span className="coordinatorname" style={{
//         position: "absolute",
//         width: "264.83px",
//         height: "16.79px",
//         left: "1300px",
//         top: " 60px",
//         backgroundcolor: "transparent",
//         bordercolor: "transparent",

//         fontfamily: 'Inter',
//         fontstyle: "normal",
//         fontweight: "700",
//         fontsize: "20px",
//         lineheight: "24px",
//         display: "flex",
//         alignitems: "center",
//         color: "#FFFFFF"
//       }}> {user?.fullname} </span>
//       <div className="form-container" style={{ minHeight: '150vh' }}>
//         <h4>Edit Project</h4>
//         <form onSubmit={onSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputGrpNo">Group Number</label>
//             <input
//               type="text"
//               name="GrpNo"
//               value={state.GrpNo}
//               onChange={handleInputChange}
//               className="form-control"
//               id="exampleInputGrpNo"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputStudentDetails">Registration Number</label>
//             <input
//               type="text"
//               name="StudentDetails"
//               value={state.StudentDetails}
//               onChange={handleInputChange}
//               className="form-control"
//               id="exampleInputStudentDetails"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputProjName">Report (Group)</label>
//             <input
//               type="text"
//               name="ProjName"
//               value={state.ProjName}
//               onChange={handleInputChange}
//               className="form-control"
//               id="exampleInputProjName"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputProjDetails">Presentation and Viva (Individual)</label>
//             <input
//               type="text"
//               name="ProjDetails"
//               value={state.ProjDetails}
//               onChange={handleInputChange}
//               className="form-control"
//               id="exampleInputProjDetails"
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Update
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EditProject;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { URL } from '../../env';

const EditProject = () => {
  const { id } = useParams();
  const navigate =useNavigate();
  const [state, setState] = useState({

    GroupNo: '',
    StudentDetails: '',
    ProjName: '',
    ProjDetails: '',
  
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { GroupNo, StudentDetails,ProjName, ProjDetails } = state;
    const data = {
      GroupNo: GroupNo,
      StudentDetails: StudentDetails,
      ProjName: ProjName,
      ProjDetails: ProjDetails,
    };
    console.log(data);
    axios
      .put( URL +'/projects/edit/' + id, data)
      .then((res) => {
        setState({
          GroupNo: '',
          StudentDetails: '',
          ProjName: '',
          ProjDetails: '',
        });
        alert('Project updated successfully');
        navigate("/projects/get");
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while updating the project');
      });
  };

  useEffect(() => {
    axios
      .get( URL +'/projects/get/' + id)
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

    const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

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
    <div className="form-container" style={{ minHeight: '150vh' }}>
      <h4>Edit Project</h4>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputGroupNo">Group Number</label>
          <input
            type="text"
            name="GroupNo"
            value={state.GroupNo}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputGroupNo"
            required
          />
        </div>
        <div className="mb-3">
      <label htmlFor="exampleInputStudentDetails">Student Details</label>
        <input
            type="text"
            name="StudentDetails"
            value={state.StudentDetails}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputStudentDetails"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputProjName">Project Name</label>
          <input
            type="text"
            name="ProjName"
            value={state.ProjName}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputProjName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputProjDetails">Project Details</label>
          <input
            type="text"
            name="ProjDetails"
            value={state.ProjDetails}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputProjDetails"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary" style={{ width: "300px", height: "50px", backgroundColor: "#1177B1"}}>
          Update
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default EditProject;