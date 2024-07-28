import React, { useEffect, useRef } from 'react';
import "./Bar.css";
import stat from "./stat.png";
import Chart from 'chart.js/auto';

const Bargraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '7', '8', '9'],
      datasets: [{
        label: 'Data',
        data: [80, 60, 90, 70, 50, 60, 70, 80, 90, 100, 60, 70,80],
        backgroundColor: '#e4c748', 
        borderColor: '#e4c748',
        borderWidth: 1,
        borderRadius: 20,
      }]
    };

    const options = {
      responsive: true, 
  maintainAspectRatio: false,
      scales: {
        y: {
          display: false // Hide y-axis
        }
      },
      plugins: {
        legend: {
          display: false // Hide legend
        }
      },
      indexAxis: 'x', // Display bars horizontally
      barPercentage: 0.3, // Adjust bar width to fill the entire width of the canvas
      categoryPercentage: 1, // Adjust space between bars
    };

    const ctx = chartRef.current;
    if (ctx) {
      // Destroy existing chart if it exists
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      // Create new chart
      ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
    }
  }, []);

  return (
    <div className="bargraph">
      <div className="barhed">
        <h2 className="lefty">Weekly Revenue</h2>
        <div className="right"> <img src={stat} alt="" /></div>
      </div>
      <div className="bargrph" style={{ width: '100%' ,height:"200px"}}>
        <canvas ref={chartRef} ></canvas>
      </div>
    </div>
  )
}

export default Bargraph;
