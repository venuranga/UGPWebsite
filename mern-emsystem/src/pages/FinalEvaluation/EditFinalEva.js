import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { URL } from '../../env';

const EditFinalEva = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    GrpNo: '',
    RegNo: '',
    criteria1: '',
    criteria2: '',
    criteria3: '',
    criteria4: '',
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
    const { GrpNo, RegNo, criteria1, criteria2, criteria3, criteria4 } = state;
    const data = {
      GrpNo: GrpNo,
      RegNo: RegNo,
      criteria1: criteria1,
      criteria2: criteria2,
      criteria3: criteria3,
      criteria4: criteria4,
    };
    console.log(data);
    axios
      .put( URL +  '/evaluations/edit/' + id, data)
      .then((res) => {
        setState({
          GrpNo: '',
          RegNo: '',
          criteria1: '',
          criteria2: '',
          criteria3: '',
          criteria4: '',
        });
        alert('Result updated successfully');
        navigate("/get");
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred while updating the result');
      });
  };

  useEffect(() => {
    axios
      .get(URL + '/evaluations/get/' + id)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          const finalResult = res.data.finalResult;
          setState({
            GrpNo: finalResult.GrpNo,
            RegNo: finalResult.RegNo,
            criteria1: finalResult.criteria1,
            criteria2: finalResult.criteria2,
            criteria3: finalResult.criteria3,
            criteria4: finalResult.criteria4,
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
            <label htmlFor="exampleInputcriteria1">Presentation and/or Demonstration (Group)</label>
            <input
              type="text"
              name="criteria1"
              value={state.criteria1}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteria1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcriteria2">Viva (Individual)</label>
            <input
              type="text"
              name="criteria2"
              value={state.criteria2}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteria2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcriteria3">Report (Group)</label>
            <input
              type="text"
              name="criteria3"
              value={state.criteria3}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteria3"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputcriteria4">Contribution (Individual)</label>
            <input
              type="text"
              name="criteria4"
              value={state.criteria4}
              onChange={handleInputChange}
              className="form-control"
              id="exampleInputcriteria4"
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

export default EditFinalEva;