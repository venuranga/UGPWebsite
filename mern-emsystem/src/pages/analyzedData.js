
/*
import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import ReactDOM from 'react-dom';
import "./analyzedData.css";
import { createRoot } from 'react-dom/client';


const AnalyzedData = () => {
  const [FinalData, setFinalData] = useState([]);
  const [ProposalData, setProposalData] = useState([]);
  const [yAxis, setYAxis] = useState('');
  const [xAxis, setXAxis] = useState('');
  const chartRef = useRef(null);
  const summaryRef = useRef(null);
  const [user, setUser] = useState(null);

  //unwanted

  /*const xOptions = ['Group ID', 'Student ID'];
  const yOptions = [
    'Total marks for the Project Proposal',
    'Marks for the Project Proposal report',
    'Marks for the Project Proposal Presentation and VIVA',
    'Total marks for the Project progress',
    'Total marks for the End semester examination',
    'Marks for the final Presentation and VIVA',
    'Marks for the final demonstration',
    'Marks for the final report',
    'Total marks for the UGP',
  ];*/

  /*//wanted
  const handleYAxisChange = (event) => {
    setYAxis(event.target.value);
  };

  const handleXAxisChange = (event) => {
    setXAxis(event.target.value);
  };
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth && storedAuth.success) {
      setUser(storedAuth.user);
    }
  }, []);

  const componentMapping = {
    component1: 'Total marks for the Project Proposal',
    component2: 'Marks for the Project Proposal report',
    component3: 'Marks for the Project Proposal Presentation and VIVA',
    component4: 'Total marks for the Project progress',
    component5: 'Total marks for the End semester examination',
    component6: 'Marks for the final Presentation and VIVA',
    component7: 'Marks for the final demonstration',
    component8: 'Marks for the final report',
    component9: 'Total marks for the UGP'
  };

  const componentMapping1 = {
    component1: "Group ID",
    component2: "Student ID"
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const finalResponse = await fetch('http://localhost:5000/evaluations/get');
        const finalData = await finalResponse.json();

        console.log('final:',finalData);

        const finalDataFormatted = finalData.existingPosts.map(item => ({
          ...item,
          criteria1: Number(item.criteria1),
          criteria2: Number(item.criteria2),
          criteria3: Number(item.criteria3),
          criteria4: Number(item.criteria4)
          //Mechanics_of_writing: Number(item.Mechanics_of_writing)

          // Add more fields here if needed
        }));
        setFinalData(finalDataFormatted);
        console.log('finalform',finalDataFormatted);

        const proposalResponse = await fetch('http://localhost:5000/propevaluations/get');
        const proposalData = await proposalResponse.json();

        console.log('prop:',proposalData);

        const proposalDataFormatted = proposalData.existingPosts.map(item => ({
          ...item,
          criteriaProp1: Number(item.criteriaProp1),
          criteriaProp2: Number(item.criteriaProp2)

          /*Objectives_Scope_and_Methodology: Number(item.Objectives_Scope_and_Methodology),
          Examiners_overall_assessment: Number(item.Examiners_overall_assessment),
          Mechanics_of_writing: Number(item.Mechanics_of_writing)*/

      /*
        }));
        setProposalData(proposalDataFormatted);
        console.log('propformatted:' ,proposalDataFormatted);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (FinalData.length >0 && ProposalData.length >0 ) {
      const ctx = chartRef.current.getContext('2d');
      const groupIDs = [...new Set([...FinalData.map(item => item.GrpNo), ...ProposalData.map(item => item.GrpNo)])];

      const studentIDs = [... new Set([...FinalData.map(item => item.RegNo), ...ProposalData.map(item => item.RegNo)])];

     
      const datasets = componentMapping1[xAxis] === 'Group ID' ? groupIDs.flatMap((groupID, index) => {
        const datasetValues = [];
        groupIDs.forEach((groupID) => {
          const proposalGroupData = ProposalData.find((item) => item.GrpNo === groupID);
          const finalGroupData = FinalData.find((item) => item.GrpNo === groupID);
          let value = 0;
          if (proposalGroupData.length >0  && finalGroupData.length >0) {
            switch (componentMapping[yAxis]) {
              case 'Total marks for the Project Proposal':
                value = Number(proposalGroupData.criteriaProp1) + Number(proposalGroupData.criteriaProp2);
                break;
              case 'Marks for the Project Proposal report':
                value = Number(proposalGroupData.criteriaProp2);
                break;
              case 'Marks for the Project Proposal Presentation and VIVA':
                value = Number(proposalGroupData.criteriaProp1);
                break;
              case 'Total marks for the Project progress':
                value =
                  Number(finalGroupData.criteria1) +
                  Number(finalGroupData.criteria2) +
                  Number(finalGroupData.criteria3) +
                  Number(finalGroupData.criteria4);
                break;
              case 'Total marks for the End semester examination':
                value = Number(finalGroupData.criteria1);
                break;
              case 'Marks for the final Presentation and VIVA':
                value = Number(finalGroupData.criteria2);
                break;
              case 'Marks for the final demonstration':
                value = Number(finalGroupData.criteria3);
                break;
              case 'Marks for the final report':
                value = Number(finalGroupData.criteria4);
                break;
              case 'Total marks for the UGP':
                value =
                  Number(proposalGroupData.criteriaProp1) +
                  Number(proposalGroupData.criteriaProp2) +
                  Number(finalGroupData.criteria1) +
                  Number(finalGroupData.criteria2) +
                  Number(finalGroupData.criteria3) +
                  Number(finalGroupData.criteria4);
                break;
              default:
                value = 0;
                break;
            }
          }
           datasetValues.push(value);
        });

        return {
          label: componentMapping[yAxis],
          backgroundColor: `rgba(${index * 40}, 99, 132, 0.7)`,
          data: datasetValues,
        };
      }) 

     : studentIDs.flatMap((studentID, index) => {
        const datasetValues = [];
        studentIDs.forEach((studentID) => {
          const proposalGroupData = ProposalData.find((item) => item.RegNo === studentID);
          const finalGroupData = FinalData.find((item) => item.RegNo === studentID);
          let value = 0;
          if (proposalGroupData && finalGroupData) {
            switch (componentMapping[yAxis]) {
              case 'Total marks for the Project Proposal':
                value = Number(proposalGroupData.criteriaProp1) + Number(proposalGroupData.criteriaProp2);
                break;
              case 'Marks for the Project Proposal report':
                value = Number(proposalGroupData.criteriaProp2);
                break;
              case 'Marks for the Project Proposal Presentation and VIVA':
                value = Number(proposalGroupData.criteriaProp1);
                break;
              case 'Total marks for the Project progress':
                value =
                  Number(finalGroupData.criteria1) +
                  Number(finalGroupData.criteria2) +
                  Number(finalGroupData.criteria3) +
                  Number(finalGroupData.criteria4);
                break;
              case 'Total marks for the End semester examination':
                value = Number(finalGroupData.criteria1);
                break;
              case 'Marks for the final Presentation and VIVA':
                value = Number(finalGroupData.criteria2);
                break;
              case 'Marks for the final demonstration':
                value = Number(finalGroupData.criteria3);
                break;
              case 'Marks for the final report':
                value = Number(finalGroupData.criteria4);
                break;
              case 'Total marks for the UGP':
                value =
                  Number(proposalGroupData.criteriaProp1) +
                  Number(proposalGroupData.criteriaProp2) +
                  Number(finalGroupData.criteria1) +
                  Number(finalGroupData.criteria2) +
                  Number(finalGroupData.criteria3) +
                  Number(finalGroupData.criteria4);
                break;
              default:
                value = 0;
                break;
            }
          }
          datasetValues.push(value);
        });

        return {
          label: componentMapping[yAxis],
          backgroundColor: `rgba(${index * 40}, 99, 132, 0.7)`,
          data: datasetValues,
        };
      }, [FinalData, ProposalData, yAxis, xAxis]) ;


   console.log('datasets:',datasets);

   //unwanted
   //datasets[0].data.push(value);

      /*const proposaldataset = groupIDs.map(groupID => {
        const proposalGroupData = ProposalData.filter(item => item.GrpNo === groupID);
        const proposalValues = proposalGroupData.map(item => Number(item[componentMapping[yAxis]]));
        
        console.log(proposalValues);

        return {
          groupID,
          data: proposalValues,
        };
      });

      console.log(proposaldataset);

      const finaldataset = groupIDs.map(groupID => {
        const finalGroupData = FinalData.filter(item => item.GrpNo === groupID);
        const finalValues = finalGroupData.map(item => Number(item[componentMapping[yAxis]]));
        
        console.log(finalValues);

        return {
          groupID,
          data: finalValues,
        };
      });

      console.log(finaldataset);*/
    
//wanted

/*
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: xAxis === 'component1' ? groupIDs : studentIDs,
          datasets: datasets,
          
          //unwanted
          /* [{
            label: `${componentMapping[yAxis]} (Proposal)`,
            backgroundColor: 'rgba(400, 99, 132, 1.0)',
            data: proposaldataset.map(dataset => dataset.data)
          },
          {
            label: `${componentMapping[yAxis]} (Final)`,
            backgroundColor: '#1177B1',
            data: finaldataset.map(dataset => dataset.data)
          }] */

          //wanted
          /*
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
              },
                title: {
                display: true,
                text: xAxis === 'component1' ? 'Group ID' : 'Student ID',
              },
            },
            y: {
              stacked: false,
              ticks: {
                beginAtZero: true,
              },
              font: {
                family: "Arial, sans-serif",
                size: "20"
              },
              title: {
                display: true,
                text: componentMapping[yAxis],
              },
            },
          },
        },
      },[FinalData,ProposalData,yAxis, xAxis]);

      const summaryStats = calculateSummaryStats();
      displaySummaryStats(summaryStats);
    }
  }, [FinalData, ProposalData]);

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
      <div className="table-responsive">
        <table className="table table-striped table-hover" style={{width: "900px" , marginLeft: "300px"}}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#1177B1" }}>Statistic</th>
              <th style={{ backgroundColor: "#1177B1" }}>Proposal</th>
              <th style={{ backgroundColor: "#1177B1" }}>Final</th>
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
  const root = createRoot(summarySection);
  root.render(summaryTable);

  //createRoot(summarySection).render(summaryTable);
};

  



  return (
    <div>
      <Header />
      <Navbar />
      <span className="coordinatorname"> {user?.fullname} </span>
      <br />
      <br />
      <div className="dropdown">
            <label htmlFor="x-axis" style = {{marginLeft: "50px"}}>X-axis:</label>
            <select id="x-axis" value={xAxis} onChange={handleXAxisChange} className='form-select' style={{ width: "500px", marginLeft: "50px" }}>
            <option value="component1">Group ID</option>
          <option value="component2">Student ID</option>

            </select>
          </div>

        <br />
        <div className="dropdown">
            <label htmlFor="y-axis" style = {{marginLeft: "50px"}}>Y-axis:</label>
            <select id="y-axis" value={yAxis} onChange={handleYAxisChange} className='form-select' style={{ width: "500px", marginLeft: "50px" }}>
            <option value="component1">Total marks for the Project Proposal</option>
          <option value="component2">Marks for the Project Proposal report</option>
          <option value="component3">Marks for the Project Proposal Presentation and VIVA</option>
          <option value="component4">Total marks for the Project progress</option>
            <option value="component5">Total marks for the End semester examination</option>
            <option value="component6">Marks for the final Presentation and VIVA</option>
            <option value="component7">Marks for the final demonstration</option>
            <option value="component8">Marks for the final report</option>
            <option value="component9">Total marks for the UGP</option>
            </select>
            </div>
        
        
    

        <br />
        <br />
        <br />
        <br />
        <div style={{ height: "300px", marginLeft: "50px" }}>
          <canvas ref={chartRef} />
        </div>
        <br />
        <div ref={summaryRef} style={{ marginTop: "20px" }}></div>
    
      <Footer />
    </div>
  );
};

export default AnalyzedData;*/





import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import ReactDOM from 'react-dom';
import "./analyzedData.css";
import { URL } from '../env.js';


const AnalyzedData = () => {
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
        const finalResponse = await fetch( URL + '/api/results/grades');
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

        const proposalResponse = await fetch( URL + '/api/proposal/grades');
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

export default AnalyzedData;