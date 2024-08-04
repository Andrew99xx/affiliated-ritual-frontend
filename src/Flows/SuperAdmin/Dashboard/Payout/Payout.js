import React, { useState } from "react";
import "./Payout.css";
import Box from "../../../../components/box/Box";
import user from "./users.png";
import Bargraph from "../../../../components/Graph/Bargraph";
import Smallbar from "../../../../components/Smallbar/Smallbar";
import PieChart from "../../../../components/Pie/PieChart";
import data from "./Data.js";
const Payout = () => {
  const [displayCount, setDisplayCount] = useState(5);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };
  return (
    <div className="Payout">
      <h1 className="heading">Payout</h1>
      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>
      <div className="graphs">
        <Smallbar />
        <PieChart data={[10, 20, 30]} labels={["Red", "Blue", "Yellow"]} />
        <Bargraph />
      </div>

      <div className="tablespayout">
        <div className="sl">
          <h1 className="heading">Trainer</h1> <h1 className="viw">View All</h1>
        </div>
        <div className="tb">
          <div className="tablecon">
            <table className="table" cellSpacing={0}>
              <thead className="tablehead">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Jan</th>
                  <th>Feb</th>
                  <th>Mar</th>
                  <th>Apr</th>
                  <th>May</th>
                  <th>June</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {data.slice(0, displayCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.Jan}</td>
                    <td>{item.Feb}</td>
                    <td>{item.Mar}</td>
                    <td>{item.Apr}</td>
                    <td>{item.May}</td>
                    <td>{item.June}</td>
                    <td>{item.Total}</td>

                    <td className="btns">
                      <a className="btnn">Pay Now</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="sl">
          {" "}
          <h1 className="heading">Team Leader</h1>
          <h1 className="viw">View All</h1>
        </div>
        <div className="tb">
          <div className="tablecon">
            <table className="table" cellSpacing={0}>
              <thead className="tablehead">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Jan</th>
                  <th>Feb</th>
                  <th>Mar</th>
                  <th>Apr</th>
                  <th>May</th>
                  <th>June</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {data.slice(0, displayCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.Jan}</td>
                    <td>{item.Feb}</td>
                    <td>{item.Mar}</td>
                    <td>{item.Apr}</td>
                    <td>{item.May}</td>
                    <td>{item.June}</td>
                    <td>{item.Total}</td>

                    <td className="btns">
                      <a className="btnn">Pay Now</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="sl">
          <h1 className="heading">Team Member</h1>
          <h1 className="viw">View All</h1>
        </div>
        <div className="tb">
          <div className="tablecon">
            <table className="table" cellSpacing={0}>
              <thead className="tablehead">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Jan</th>
                  <th>Feb</th>
                  <th>Mar</th>
                  <th>Apr</th>
                  <th>May</th>
                  <th>June</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {data.slice(0, displayCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.Jan}</td>
                    <td>{item.Feb}</td>
                    <td>{item.Mar}</td>
                    <td>{item.Apr}</td>
                    <td>{item.May}</td>
                    <td>{item.June}</td>
                    <td>{item.Total}</td>

                    <td className="btns">
                      <a className="btnn">Pay Now</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
