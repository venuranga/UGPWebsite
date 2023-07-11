import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { URL } from '../../env';

const EditProgEva = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    GrpNo: '',
    RegNo: '',
    criteriaProg1: '',
    criteriaProg2: '',

  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { GrpNo, RegNo, criteriaProg1, criteriaProg2 } = state;
    const data = {
      GrpNo: GrpNo,
      RegNo: RegNo,
      criteriaProg1: criteriaProg1,
      criteriaProg2: criteriaProg2,
    };
    console.log(data);
    axios
      .put(URL + '/progevaluations/edit/' + id, data)
      .then((res) => {
        setState({
          GrpNo: '',
          RegNo: '',
          criteriaProg1: '',
          criteriaProg2: '',

        });
        alert('Result updated successfully');
        navigate("/progevaluations/get");
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while updating the result');
      });
  };

  useEffect(() => {
    axios
      .get( URL +'/progevaluations/get/' + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          const progResult = res.data.progResult;
          setState({
            GrpNo: progResult.GrpNo,
            RegNo: progResult.RegNo,
            criteriaProg1: progResult.criteriaProg1,
            criteriaProg2: progResult.criteriaProg2,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while retrieving the result');
      });
  }, [id]);

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
        <h4>Edit Final Results</h4>
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
              name="criteriaProg1"
              value={state.criteriaProg1}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteriaProg1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcriteria2">Presentation and Viva (Individual)</label>
            <input
              type="text"
              name="criteriaProg2"
              value={state.criteriaProg2}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteriaProg2"
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

export default EditProgEva;