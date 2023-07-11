import React, {useEffect, useState}from "react";
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import './Viewstudents.css'
import Navbar from "../components/Navbar.js";
import { URL } from "../env.js";

function Viewstudents() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL + '/api/students/view');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function renderTable() {
    return (
      <table style = {{border: "1px solid white"}} className = 'table table-striped table-hover'>
        <thead class ="thead-dark">
          <tr>
            <th >Group_ID</th>
            <th >Project_Title</th>
            <th  >Main_supervisor's_name</th>
            <th  >Co-supervisor's_name(s)</th>
            <th >Reg_No</th>
            <th >Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Group_ID}</td>
              <td>{item.Project_Title}</td>
              <td>{item["Main_supervisor's_name"]}</td>
              <td>{item["Co-supervisor's_name(s)"]}</td>
              <td>{item.Reg_No}</td>
              <td>{item.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      {data.length > 0 ? (
        <div>
         
            <Header />
            <Navbar />
            <span className="coordinatorname"> {user?.fullname} </span>
            {/* <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </head> */}
      <br />
      <br />
   
          <h2 style = {{marginLeft: "650px"}}>View Students</h2>
          <br />
          <br />
          {renderTable()}
          <Footer />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}


export default Viewstudents;
