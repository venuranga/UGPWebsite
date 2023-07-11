import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { URL } from '../../env';


const EditPropEva = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    GrpNo: '',
    RegNo: '',
    criteriaProp1: '',
    criteriaProp2: '',

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
    const { GrpNo, RegNo, criteriaProp1, criteriaProp2 } = state;
    const data = {
      GrpNo: GrpNo,
      RegNo: RegNo,
      criteriaProp1: criteriaProp1,
      criteriaProp2: criteriaProp2,
    };
    console.log(data);
    axios
      .put( URL +'/propevaluations/edit/' + id, data)
      .then((res) => {
        setState({
          GrpNo: '',
          RegNo: '',
          criteriaProp1: '',
          criteriaProp2: '',

        });
        alert('Result updated successfully');
        navigate("/propevaluations/get");
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while updating the result');
      });
  };

  useEffect(() => {
    axios
      .get( URL +'/propevaluations/get/' + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          const propResult = res.data.propResult;
          setState({
            GrpNo: propResult.GrpNo,
            RegNo: propResult.RegNo,
            criteriaProp1: propResult.criteriaProp1,
            criteriaProp2: propResult.criteriaProp2,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while retrieving the result');
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
        <h4>Edit Proposal Results</h4>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputGrpNo">Group Number</label>
            <input
              type="text"
              name="GrpNo"
              value={state.GrpNo}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputGrpNo"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputRegNo">Registration Number</label>
            <input
              type="text"
              name="RegNo"
              value={state.RegNo}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputRegNo"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcriteria1">Report (Group)</label>
            <input
              type="text"
              name="criteriaProp1"
              value={state.criteriaProp1}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteriaProp1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcriteria2">Presentation and Viva (Individual)</label>
            <input
              type="text"
              name="criteriaProp2"
              value={state.criteriaProp2}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteriaProp2"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPropEva;