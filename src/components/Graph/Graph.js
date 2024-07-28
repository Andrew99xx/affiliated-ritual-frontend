import React from 'react'
import { Line } from "react-chartjs-2";
import "./Graph.css"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import cal from "./cal.png";
import stat from "./stat.png";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Graph = () => {
    const data = {
        labels: ["Mar", "Apr", "May", "June", "July", "Aug", "Sep"],
        datasets: [
          {
            data: [8, 7.8, 7, 9, 6, 5, 8],
            backgroundClor: "transparent",
            borderColor: "#EBD672",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: 0.5,
          },
        ],
      };
      const options = {
        plugins: { legend: false },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            min: 2,
            max: 10,
    
            ticks: {
              stepSize: 2,
              callback: (value) => value + "k",
              display: false,
            },
            grid: {
              borderDash: [10],
            },
          },
        },
      };
  return (
    <div className="linegraph">
    <div className="lineheader">
      <div className="lefthed">
        <img src={cal} alt="" />
        <p>This month</p>
      </div>
      <div className="righthed">
        <img src={stat} height={30} alt="" />
      </div>
    </div>
    <div className="linecontent">
      <div className="record">
        <h1>$37.5k</h1>
        <p>
          total spent <span>+2.45%</span>
        </p>
      </div>
      <div className="mainline">
        <Line
          style={{ height: "148px", width: "427px" }}
          data={data}
          options={options}
        >
          {" "}
        </Line>
      </div>
    </div>
  </div>
  )
}

export default Graph