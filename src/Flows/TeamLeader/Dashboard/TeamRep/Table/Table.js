import React, { useState } from 'react';
import './Table.css';

const Table = ({ data, onViewFull, showAction = true }) => {
  const [displayCount, setDisplayCount] = useState(5);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

  return (
    <div className='tablecon'>
      <table className='table' cellSpacing={0}>
        <thead className='tablehead'>
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
            {showAction && <th>Action</th>} {/* Render action column conditionally */}
          </tr>
        </thead>
        <tbody className='tablebody'>
          {
            data && data.slice(0, displayCount).map((item) => {
              // Calculate total earnings for each user
              const totalEarnings = Object.values(item.monthlyEarnings).reduce((acc, curr) => acc + curr, 0);
              return (
                <tr key={item.id}>
                  <td>{item.id.slice(0, 4) + "..."}</td>
                  <td>{item.firstName}</td>
                  <td>{item.monthlyEarnings["January 2024"] || 0}</td>
                  <td>{item.monthlyEarnings["February 2024"] || 0}</td>
                  <td>{item.monthlyEarnings["March 2024"] || 0}</td>
                  <td>{item.monthlyEarnings["April 2024"] || 0}</td>
                  <td>{item.monthlyEarnings["May 2024"] || 0}</td>
                  <td>{item.monthlyEarnings["June 2024"] || 0}</td>
                  <td>{totalEarnings}</td>
                  {showAction && ( // Render action cell conditionally
                    <td className='btns'>
                      <a className='btn' href="#" onClick={() => onViewFull(item)}>
                        View full
                      </a>
                    </td>
                  )}


                </tr>
              )
            })
          }
        </tbody>
      </table>

      {data && data.length > displayCount && (
        <button className="btn" onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Table;
