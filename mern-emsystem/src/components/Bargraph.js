import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ finaldata, proposalData, yAxis }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (finaldata.length > 0 && proposalData.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      const groupIDs = [...new Set(finaldata.map(item => item.Group_ID))];

      // Prepare the dataset for Chart.js
      const datasets = groupIDs.map(groupID => {
        const finalGroupData = finaldata.filter(item => item.Group_ID === groupID);
        const proposalGroupData = proposalData.filter(item => item.Group_ID === groupID);

        const proposalValue = proposalGroupData.find(item => item.component === yAxis)?.proposal;
        const finalValue = finalGroupData.find(item => item.component === yAxis)?.final;

        return {
          label: `Group ID: ${groupID}`,
          data: [proposalValue, finalValue],
          backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'],
        };
      });

      // Destroy the existing Chart instance if it exists
      if (chartRef.current.chart) {
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
              max: 100,
              ticks: {
                beginAtZero: true,
                stepSize: 10,
              },
            },
          },
        },
      });
    }
  }, [finaldata, proposalData, yAxis]);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
