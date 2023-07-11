import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import ReactDOM from 'react-dom';
import "./analyzedData.css";
import { URL } from '../env.js';


const Deptheadanalyzeddata = () => {
  const [FinalData, setFinalData] = useState([]);
  const [ProposalData, setProposalData] = useState([]);
  const [yAxis, setYAxis] = useState('');
  const chartRef = useRef(null);
  const summaryRef = useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  const componentMapping = {
    component1: "Introduction_Background_and_Problem_statement",
    component2: "Knowledge_on_related_existing_work",
    component3: "Objectives_Scope_and_Methodology",
    component4: "Examiners_overall_assessment",
    component5: "Mechanics_of_writing",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const finalResponse = await fetch(URL + '/api/results/grades');
        const finalData = await finalResponse.json();

        const finalDataFormatted = finalData.map(item => ({
          ...item,
          Introduction_Background_and_Problem_statement: Number(item.Introduction_Background_and_Problem_statement),
          Knowledge_on_related_existing_work: Number(item.Knowledge_on_related_existing_work),
          Objectives_Scope_and_Methodology: Number(item.Objectives_Scope_and_Methodology),
          Examiners_overall_assessment: Number(item.Examiners_overall_assessment),
          Mechanics_of_writing: Number(item.Mechanics_of_writing)

          // Add more fields here if needed
        }));
        setFinalData(finalDataFormatted);
        console.log(finalDataFormatted);

        const proposalResponse = await fetch(URL + '/api/proposal/grades');
        const proposalData = await proposalResponse.json();

        const proposalDataFormatted = proposalData.map(item => ({
          ...item,
          Introduction_Background_and_Problem_statement: Number(item.Introduction_Background_and_Problem_statement),
          Knowledge_on_related_existing_work: Number(item.Knowledge_on_related_existing_work),
          Objectives_Scope_and_Methodology: Number(item.Objectives_Scope_and_Methodology),
          Examiners_overall_assessment: Number(item.Examiners_overall_assessment),
          Mechanics_of_writing: Number(item.Mechanics_of_writing)

          // Add more fields here if needed
        }));
        setProposalData(proposalDataFormatted);
        console.log(proposalDataFormatted);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (FinalData.length > 0 && ProposalData.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      const groupIDs = [...new Set([...FinalData.map(item => item.Group_ID), ...ProposalData.map(item => item.Group_ID)])];

      const proposaldataset = groupIDs.map(groupID => {
        const proposalGroupData = ProposalData.filter(item => item.Group_ID === groupID);
        const proposalValues = proposalGroupData.map(item => Number(item[componentMapping[yAxis]]));
        
        console.log(proposalValues);

        return {
          groupID,
          data: proposalValues,
        };
      });

      console.log(proposaldataset);

      const finaldataset = groupIDs.map(groupID => {
        const finalGroupData = FinalData.filter(item => item.Group_ID === groupID);
        const finalValues = finalGroupData.map(item => Number(item[componentMapping[yAxis]]));
        
        console.log(finalValues);

        return {
          groupID,
          data: finalValues,
        };
      });

      console.log(finaldataset);

      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: groupIDs.map(groupID => `Group ${groupID}`),
          datasets: [{
            label: `${componentMapping[yAxis]} (Proposal)`,
            backgroundColor: 'rgba(400, 99, 132, 1.0)',
            data: proposaldataset.map(dataset => dataset.data)
          },
          {
            label: `${componentMapping[yAxis]} (Final)`,
            backgroundColor: '#1177B1',
            data: finaldataset.map(dataset => dataset.data)
          }] 
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              title: {
                font: {
                  family: 'Arial, sans-serif',
                  size: 14
                }
              },
              body: {
                font: {
                  family: 'Arial, sans-serif',
                  size: 12
                }
              }
            }
          },
          animation: {
            onComplete: () => {},
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default') {
                delay = context.dataIndex * 500 + context.datasetIndex * 200;
              }
              return delay;
            },
          },
          scales: {
            x: {
              stacked: false,
              font: {
                family: "Arial, sans-serif",
                size: "20"
              }
            },
            y: {
              stacked: false,
              ticks: {
                beginAtZero: true,
              },
              font: {
                family: "Arial, sans-serif",
                size: "20"
              }
            },
          },
        },
      });

      const summaryStats = calculateSummaryStats();
      displaySummaryStats(summaryStats);
    }
  }, [FinalData, ProposalData, yAxis]);

  const calculateSummaryStats = () => {
    const finalValues = FinalData.map(item => Number(item[componentMapping[yAxis]]));
    const proposalValues = ProposalData.map(item => Number(item[componentMapping[yAxis]]));

    const summaryStats = {
      final: {
        max: Math.max(...finalValues),
        min: Math.min(...finalValues),
        mean: calculateMean(finalValues),
        standardDeviation: calculateStandardDeviation(finalValues),
      },
      proposal: {
        max: Math.max(...proposalValues),
        min: Math.min(...proposalValues),
        mean: calculateMean(proposalValues),
        standardDeviation: calculateStandardDeviation(proposalValues),
      },
    };

    return summaryStats;
  };

  const calculateMean = (values) => {
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return sum / values.length;
  };

  const calculateStandardDeviation = (values) => {
    const mean = calculateMean(values);
    const squareDiffs = values.map(value => Math.pow(value - mean, 2));
    const avgSquareDiff = calculateMean(squareDiffs);
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  };

const displaySummaryStats = (summaryStats) => {
  const summarySection = summaryRef.current;
  if (!summarySection) return;

  const summaryTable = (
    <div>
      <h3 style={{ marginLeft: "50px" }}>Summary Statistics</h3>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-striped table-hover" style={{width: "900px" , marginLeft: "300px"}}>
          <thead >
            <tr>
              <th style={{ backgroundColor: "#1177B1", color: "white" }}>Statistic</th>
              <th style={{ backgroundColor: "#1177B1", color: "white" }}>Proposal</th>
              <th style={{ backgroundColor: "#1177B1", color: "white" }}>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Max</td>
              <td>{summaryStats.proposal.max}</td>
              <td>{summaryStats.final.max}</td>
            </tr>
            <tr>
              <td>Min</td>
              <td>{summaryStats.proposal.min}</td>
              <td>{summaryStats.final.min}</td>
            </tr>
            <tr>
              <td>Mean</td>
              <td>{summaryStats.proposal.mean.toFixed(2)}</td>
              <td>{summaryStats.final.mean.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Standard Deviation</td>
              <td>{summaryStats.proposal.standardDeviation.toFixed(2)}</td>
              <td>{summaryStats.final.standardDeviation.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  ReactDOM.render(summaryTable, summarySection);
};

  

  const handleYAxisChange = (event) => {
    setYAxis(event.target.value);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <span className="coordinatorname"> {user?.fullname} </span>
      <br />
      <br />
      <div className='dropdown'>
        <label htmlFor="yAxis" style={{ marginLeft: "50px" }}>Select Y Axis:</label>
        <select id="yAxis" value={yAxis} onChange={handleYAxisChange} className='form-select' style={{ width: "500px", marginLeft: "50px" }}>
          <option value="component1">Introduction_Background_and_Problem_statement</option>
          <option value="component2">Knowledge_on_related_existing_work</option>
          <option value="component3">Objectives_Scope_and_Methodology</option>
          <option value="component4">Examiners_overall_assessment</option>
          <option value="component5">Mechanics_of_writing</option>
        </select>
        <br />
        <br />
        <br />
        <br />
        <div style={{ height: "300px", marginLeft: "50px" }}>
          <canvas ref={chartRef} />
        </div>
        <br />
        <div ref={summaryRef} style={{ marginTop: "20px" }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Deptheadanalyzeddata;