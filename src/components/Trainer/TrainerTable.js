import React, { useState } from "react";
import "./TrainerTable.css";
import deleteimg from "./delete.png";
import edit from "./edit.png";
import view from "./view.png";
import Pay from "../Pay/Pay";

const TrainerTable = ({ data, onViewFull, showAction = true }) => {
  const [showPay, setShowPay] = useState(false);

  const showPayModal = () => {
    setShowPay(true);
  };

  const closePayModal = () => {
    setShowPay(false);
  };

  const [displayCount, setDisplayCount] = useState(5);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

  return (
    <div className="tablecon">
      <table className="table" cellSpacing={0}>
        <thead className="tablehead">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>June</th>
            <th>Status</th>
            {showAction && <th className="center">Action</th>}
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
              <td>{item.May}</td>
              <td>switch</td>
              {showAction && (
                <td className="btns">
                  <div className="icns">
                    <div className="editicon">
                      <img src={edit} alt="Edit" />
                    </div>
                    <div className="view">
                      <img src={view} alt="View" />
                    </div>
                    <div className="delete">
                      <img src={deleteimg} alt="Delete" />
                    </div>
                    <div className="payno" onClick={showPayModal}>Pay Now</div>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {data.length > displayCount && (
        <button className="btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      <Pay showPayModal={showPay} closePayModal={closePayModal} />
    </div>
  );
};

export default TrainerTable;
