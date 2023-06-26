import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';

const AnalyzedData = () => {
  const [FinalData, setFinalData] = useState([]);
  const [ProposalData, setProposalData] = useState([]);
  const [yAxis, setYAxis] = useState('');
  const chartRef = useRef(null);

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
        const finalResponse = await fetch('http://localhost:5000/api/results/grades');
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

        const proposalResponse = await fetch('http://localhost:5000/api/proposal/grades');
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


      // const datasets = [];

      //   groupIDs.flatMap(( groupID, index) => {
      //   const proposalGroupData = ProposalData.filter(item => item.Group_ID === groupID);
      //   const finalGroupData = FinalData.filter(item => item.Group_ID === groupID);
      //   const proposalValues = proposalGroupData.map(item => Number(item[componentMapping[yAxis]]));
      //   const finalValues = finalGroupData.map(item => Number(item[componentMapping[yAxis]]));

      //   console.log(proposalValues);
      //   console.log(finalValues);






        // const proposalValues = proposalGroupData.length > 0 ? Number(proposalGroupData[componentMapping[yAxis]]) : 0;
        // const finalValues = finalGroupData.length > 0 ? Number(finalGroupData[componentMapping[yAxis]]) : 0;



        // const data = [];
        // if (index === 0 && proposalValues.length > 0) {
        //   data.push(proposalValues[0]);
        // }
        // if (index === 1 && finalValues.length > 0) {
        //   data.push(finalValues[0]);
        // }

        // const data = [proposalValues, finalValues];

        // const data = [];
        // if (index === 0 && proposalValues !== 0) {
        //   data.push(proposalValues);
        // }
        // if (index === 0 && finalValues !== 0) {
        //   data.push(finalValues);
        // }

        // const data = [];
        // if (proposalValues !== 0) {
        //   data.push(proposalValues);
        // }
        // if (finalValues !== 0) {
        //   data.push(finalValues);
        // }

        // return {
        //   label: componentMapping[yAxis],
        //   data: data,

        //   backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)']
        // }



        //latest working


      //   const backgroundColor = ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'];

      //   const proposalDataset = {groupID,
      //     label: `Group ${groupID} (Proposal)`,
      //     backgroundColor: backgroundColor[0],
      //     data: [proposalValues],
   
      //   };

      //   const finalDataset = {groupID,
      //     label: `Group ${groupID} (Final)`,
      //     backgroundColor: backgroundColor[1],
      //     data: [finalValues],
        
      //   };

      //   datasets.push(proposalDataset);
      //   datasets.push(finalDataset);


      //   return [proposalDataset, finalDataset];

      // }).flat();

      // console.log(datasets);



      //  const backgroundColor = ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'];

      //   return {
      //     label: `Group ${groupID}`,
      //     backgroundColor: backgroundColor,
      //     data: [...proposalValues, ...finalValues],
      //   };
      // });


      const proposaldataset = [];

      groupIDs.map( groupID => {
        const proposalGroupData = ProposalData.filter(item => item.Group_ID === groupID);
        const proposalValues = proposalGroupData.map(item => Number(item[componentMapping[yAxis]]));
        
        console.log(proposalValues);

        const proposalDataset = {groupID,
        //   // label: `Group ${groupID} (Proposal)`,
        //   // backgroundColor: 'rgba(255, 99, 132, 0.7)',
          data: proposalValues,
   
        };

        proposaldataset.push(proposalDataset);

        return proposalValues;

      });

      console.log(proposaldataset);


      const finaldataset = [];

      groupIDs.map( groupID => {
        const finalGroupData = FinalData.filter(item => item.Group_ID === groupID);
        const finalValues = finalGroupData.map(item => Number(item[componentMapping[yAxis]]));
        
        console.log(finalValues);

        const finalDataset = {groupID,
        //   // label: `Group ${groupID} (Final)`,
        //   // backgroundColor: 'rgba(54, 162, 235, 0.7)',
          data: finalValues,
   
        };

        finaldataset.push(finalDataset);

        return finalValues;

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

            backgroundColor: 'rgba(255, 99, 132, 0.7)',

            data: proposaldataset.map(dataset => dataset.data)

          },
        {
          label : `${componentMapping[yAxis]} (Final)`,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          data : finaldataset.map(dataset => dataset.data)
        }] 
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: false,
            },
            y: {
              stacked: false,
              ticks: {
                beginAtZero: true,
              },
            },
          },
        },
      });
    }
  }, [FinalData, ProposalData, yAxis]);

  const handleYAxisChange = (event) => {
    setYAxis(event.target.value);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className='dropdown'>
        <label htmlFor="yAxis">Select Y Axis:</label>
        <select id="yAxis" value={yAxis} onChange={handleYAxisChange}>
          <option value="component1">Introduction_Background_and_Problem_statement</option>
          <option value="component2">Knowledge_on_related_existing_work</option>
          <option value="component3">Objectives_Scope_and_Methodology</option>
          <option value="component4">Examiners_overall_assessment</option>
          <option value="component5">Mechanics_of_writing</option>
        </select>
        <div style={{ height: "500px" }}>
          <canvas ref={chartRef} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnalyzedData;
