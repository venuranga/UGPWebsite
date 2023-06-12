import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

const AnalyzedData = () => {
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
};

export default AnalyzedData;
