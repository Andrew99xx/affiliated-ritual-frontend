import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./Piechart.css"

import mont from "./mont.png"

const PieChart = ({ data, labels }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          label: 'Pie',
          data: data,
          backgroundColor: [
            'rgba(228, 199, 72, 1)',
            'rgba(201, 147, 51, 1)',
            'rgba(235, 214, 114, 1)',
          ],
          borderWidth: [0]
        }]
      },
      options: {
        responsive: true
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up on unmount
      }
    };
  }, [data, labels]);

  return (
    <div className='piechart'>
      <div className="hedar"><div className="subhed">Your Pie Chart</div> <img src={mont} alt="" />
</div>
      
      <div className="piecontainer"><canvas id="myChart" ref={chartRef}></canvas></div>
       <div className="split">
         <div className="spleft"> 
         <div className="he"><div className="bludot"></div>Your files</div>
         <div className="mainhe">63% </div>
         </div>
         <div className="spleft"> 
         <div className="he"><div className="purdot"></div>  System</div>
         <div className="mainhe">63%</div>
         </div>
       </div>
    </div>
  );
};

export default PieChart;
