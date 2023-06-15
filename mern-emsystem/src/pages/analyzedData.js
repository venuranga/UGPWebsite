import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

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


  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/results/grades');
        if (!response.ok) {
          throw new Error('Response not OK');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const chartElement = chartRef.current;

      if (chartElement) {
        const ctx = chartElement.getContext('2d');
        const labels = data.map(item => item.Group_ID);
        const datasets = [ {
        
        label: 'Introduction_Background_and_Problem_statement',
        data: data.map(item => item.Introduction_Background_and_Problem_statement ),
        backgroundColor: 'red'
        },

        {

        label: 'Knowledge_on_related_existing_work',
        data: data.map(item => item.Knowledge_on_related_existing_work ),
        backgroundColor: 'blue'

        },

        {

        label: 'Objectives_Scope_and_Methodology',
        data: data.map(item => item.Objectives_Scope_and_Methodology ),
        backgroundColor: 'green'

        },


        {

        label: 'Examiners_overall_assessment',
        data :data.map(item => item.Examiners_overall_assessment),
        backgroundColor: 'yellow'

        },

        {

        label: 'Mechanics_of_writing',
        data: data.map(item => item.Mechanics_of_writing),
        backgroundColor: 'purple'
        }
    
    
    
    ]; 


        // label: ['Introduction_Background_and_Problem_statement', 'Knowledge_on_related_existing_work', 'Objectives_Scope_and_Methodology', 'Examiners_overall_assessment', 'Mechanics_of_writing'],
        // data: [item.Introduction_Background_and_Problem_statement, item.Group_ID.Knowledge_on_related_existing_work, item.Group_ID.Objectives_Scope_and_Methodology, item.Group_ID.Examiners_overall_assessment, item.Group_ID.Mechanics_of_writing],
        // backgroundColor: item.backgroundColor,

        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: datasets,
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

        return () => {
          // Cleanup chart instance when the component is unmounted
          chart.destroy();
        };
      }
    }
  }, [data]);

  return (
    <div>
      <Header />
      <canvas ref={chartRef} aria-label="chart" height="350" width="580" />
      <Footer />
    </div>
  );





};

export default AnalyzedData;
