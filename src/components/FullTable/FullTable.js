import React from "react";
import Table from "../Table/Table";
import "./FullTable.css";

import Arrow from "./arrow.png"
const FullTable = ({ item, onBack }) => {
  // Remove the action column from the item
  const { action, ...tableItem } = item;

  return (
    <div className="full-table-container">
      <div className="flex">
        <div className="headinc">
          <h1 className="heading">Team Report</h1>
          <h3 className="subheading">Team Report/{item.first_name}</h3>
        </div>
        <button className="back-button" onClick={onBack}>
        <img src={Arrow} alt="" />
        </button>
      </div>

      <Table data={[tableItem]} onViewFull={() => {}} showAction={false} />

    </div>
  );
};

export default FullTable;
