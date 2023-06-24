import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

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
        setFinalData(finalData);

        const proposalResponse = await fetch('http://localhost:5000/api/proposal/grades');
        const proposalData = await proposalResponse.json();
        setProposalData(proposalData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (FinalData.length > 0 && ProposalData.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      const groupIDs = [...new Set(FinalData.map(item => item.Group_ID))];

      const datasets = groupIDs.map(groupID => {
        const finalGroupData = FinalData.find(item => item.Group_ID === groupID);
        const proposalGroupData = ProposalData.find(item => item.Group_ID === groupID);
        const proposalValue = proposalGroupData ? proposalGroupData[componentMapping[yAxis]] : null;
        const finalValue = finalGroupData ? finalGroupData[componentMapping[yAxis]] : null;

        return {
          label: `Group ${groupID}`,
          data: [proposalValue, finalValue],
          backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'],
        };
      });

      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: groupIDs.map(groupID => `Group ${groupID}`),
          datasets: datasets,
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
     
      <div className='dropdown'>
        <label htmlFor="yAxis">Select Y Axis:</label>
        <select id="yAxis" value={yAxis} onChange={handleYAxisChange}>
          <option value="component1">Introduction_Background_and_Problem_statement</option>
          <option value="component2">Knowledge_on_related_existing_work</option>
          <option value="component3">Objectives_Scope_and_Methodology</option>
          <option value="component4">Examiners_overall_assessment</option>
          <option value="component5">Mechanics_of_writing</option>
        </select>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default AnalyzedData;
