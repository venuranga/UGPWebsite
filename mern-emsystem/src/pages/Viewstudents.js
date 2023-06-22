import React, {useEffect, useState}from "react";
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import './Viewstudents.css'
import Navbar from "../components/Navbar.js";

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
        const response = await fetch('http://localhost:5000/api/students/view');
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
      <table style = {{border: "1px solid white", alignContent: "center"}} class = 'table table-striped'>
        <thead>
          <tr>
            <th style = {{border: "1px solid white", backgroundColor: "#1177B1"}}>Group_ID</th>
            <th style = {{border: "1px solid white", backgroundColor: "#1177B1"}}>Project_Title</th>
            <th style = {{border: "1px solid white", backgroundColor: "#1177B1"}} >Main_supervisor's_name</th>
            <th style = {{border: "1px solid white", backgroundColor: "#1177B1"}} >Co-supervisor's_name(s)</th>
            <th style = {{border: "1px solid white", backgroundColor: "#1177B1"}}>Reg_No</th>
            <th style = {{border: "1px solid white", backgroundColor: "#1177B1"}}>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style = {{border: "1px solid white"}}>{item.Group_ID}</td>
              <td style = {{border: "1px solid white"}}>{item.Project_Title}</td>
              <td style = {{border: "1px solid white"}}>{item["Main_supervisor's_name"]}</td>
              <td style = {{border: "1px solid white"}}>{item["Co-supervisor's_name(s)"]}</td>
              <td style = {{border: "1px solid white"}}>{item.Reg_No}</td>
              <td style = {{border: "1px solid white"}}>{item.Name}</td>
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
