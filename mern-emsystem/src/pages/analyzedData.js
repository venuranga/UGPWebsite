import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar.js';
import _  from 'lodash';
//import BarGraph from './BarGraph'; 
import axios from 'axios';


const AnalyzedData = () => {
  
  /*
  const [data, setData] = useState([]);
  const chartRef = useRef(null); // Ref for storing the Chart instance

  useEffect(()  => {
    async function fetchData() {
    try {
      const response = await fetch('/api/results/grades');
      if (!response.ok) {
        throw new Error('Response not OK');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
    fetchData();}
  })
  

  useEffect(() => {
    if (data.length > 0) {
      const ctx = chartRef.current.getContext('2d');

      if (chartRef.current) {
        // Destroy the existing Chart instance if it exists
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        chartRef.current.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.map((item) => item.category),
            datasets: [
              {
                label: 'Dataset 1',
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                data: data.map((item) => item.value),
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          },
        });
      }
    }
  }, [data]);

  return <canvas id="chart" ref={chartRef} />;

*/
  
// const chartRef = useRef(null);

//   useEffect(() => {
//     const chartElement = chartRef.current;

//     if (chartElement) {
//       const ctx = chartElement.getContext('2d');
//       const graph = new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: ["HTML", "CSS", "JS", "CHART.JS", "JQUERY", "BOOTSTRAP"],
//           datasets: [{
//             label: "online tutorial subjects",
//             data: [9, 8, 10, 7, 6, 12],
//           }],
//         },
//         options: {
//           responsive: true,
//         },
//       });

//       return () => {
//         // Cleanup chart instance when the component is unmounted
//         graph.destroy();
//       };
//     }
//   }, []);

//   return (
//     <div>
//       <Header />
//       <canvas ref={chartRef} aria-label="chart" height="350" width="580" />
//       <Footer />
//     </div>
//   );


//   


// Import the component for rendering bar graphs

const [FinalData, setFinalData] = useState([]); // State variable to store fetched final data
  const [ProposalData, setProposalData] = useState([]); // State variable to store fetched proposal data // State variable to store fetched data
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');

  useEffect(() => {
    // Fetch data from the database
    const fetchfinalData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/results/grades');
        setFinalData(response.data);
      } catch (error) {
        console.error(error);
      }
    };


      // Fetch data from the database
      const fetchproposalData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/proposal/grades');
          setProposalData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    fetchfinalData();
    fetchproposalData();
  }, []);




  // Event handler for selecting x axis
  const handleXAxisChange = (event) => {
    setXAxis(event.target.value);
  };

  // Event handler for selecting y axis
  const handleYAxisChange = (event) => {
    setYAxis(event.target.value);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className='dropdown'>
      <label htmlFor="xAxis">Select X Axis:</label>
      <select id="xAxis" value={xAxis} onChange={handleXAxisChange}>
        {/* Render options for x axis */}
        <option value="proposal">Proposal</option>
        {/* <option value="progress">Progress</option> */}
        <option value="final">Final</option>
      </select>
      </div>

      <label htmlFor="yAxis">Select Y Axis:</label>
      <select id="yAxis" value={yAxis} onChange={handleYAxisChange}>
        {/* Render options for y axis */}
        <option value="component1">Component 1</option>
        <option value="component2">Component 2</option>
        <option value="component3">Component 3</option>
      </select>

      {/* <BarGraph finaldata = {FinalData} proposalDta = {ProposalData} xAxis={xAxis} yAxis={yAxis} /> */}
      <Footer />
    </div>
  );
};



 


export default AnalyzedData;
