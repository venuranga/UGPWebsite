import React, {useEffect, useState}from "react";
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Navbar from "../components/Navbar.js";

function Viewmarks() {
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
        const response = await fetch('http://localhost:5000/api/results/grades');
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

      
      <table style = {{border: "0.5px solid white", alignContent: "center", position: "relative"}} class = "table table-striped">
        <thead>
          <tr>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}}>Group ID</th>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}}>Project_Title</th>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}}>Introduction_Background_and_Problem_statement</th>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}} >Knowledge_on_related_existing_work</th>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}} >Objectives_Scope_and_Methodology</th>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}}>Examiner_overall_assessment</th>
            <th style = {{border: "0.5px solid white", backgroundColor: "#1177B1"}}>Mechanics_of_writing</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style = {{border: "0.5px solid white"}}>{item.Group_ID}</td>
              <td style = {{border: "0.5px solid white"}}>{item.Project_Title}</td>
              <td style = {{border: "0.5px solid white"}}>{item.Introduction_Background_and_Problem_statement}</td>
              <td style = {{border: "0.5px solid white"}}>{item.Knowledge_on_related_existing_work}</td>
              <td style = {{border: "0.5px solid white"}}>{item.Objectives_Scope_and_Methodology}</td>
              <td style = {{border: "0.5px solid white"}}>{item.Examiners_overall_assessment}</td>
              <td style = {{border: "0.5px solid white"}}>{item.Mechanics_of_writing}</td>
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

           
<br />
<br />
          <h2 style ={{marginLeft: '650px'}}>View Marks</h2>

          {renderTable()}
          <Footer />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}


export default Viewmarks;
