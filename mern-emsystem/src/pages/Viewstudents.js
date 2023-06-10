import React, {useEffect, useState}from "react";
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import './Viewstudents.css'

function Viewstudents() {
  const [data, setData] = useState([]);

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
      <table style = {{border: "1px solid white", alignContent: "center", marginLeft:"500px", backgroundColor: "#b2d3e6"}} >
        <thead>
          <tr>
            <th style = {{border: "1px solid white", backgroundColor: "#8dbdd8"}}>Student Name</th>
            <th style = {{border: "1px solid white", backgroundColor: "#8dbdd8"}}>Reg No</th>
            <th style = {{border: "1px solid white", backgroundColor: "#8dbdd8"}} >Project No</th>
            <th style = {{border: "1px solid white", backgroundColor: "#8dbdd8"}} >Project Title</th>
            <th style = {{border: "1px solid white", backgroundColor: "#8dbdd8"}}>Evaluator</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style = {{border: "1px solid white"}}>{item.Student_Name}</td>
              <td style = {{border: "1px solid white"}}>{item.Reg_No}</td>
              <td style = {{border: "1px solid white"}}>{item.Project_No}</td>
              <td style = {{border: "1px solid white"}}>{item.Project_Title}</td>
              <td style = {{border: "1px solid white"}}>{item.Evaluator}</td>
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
            <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </head>
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
