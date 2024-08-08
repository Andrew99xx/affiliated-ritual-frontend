import React, { useState } from 'react';
import moment from 'moment';
import './Table.css';

const Table = ({ data,  onClickPay, showAction = true }) => {
  const [displayCount, setDisplayCount] = useState(5);

  // Generate last six months
  const getLastSixMonths = () => {
    const months = [];
    for (let i = 0; i < 6; i++) {
      months.push(moment().subtract(i, 'months').format('MMMM YYYY'));
    }
    return months.reverse(); 
    // Reverse to display from oldest to newest
  };

  const lastSixMonths = getLastSixMonths();

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
            {lastSixMonths.map(month => (
              <th key={month}>{month.slice(0, 3)}</th> // Display first 3 letters of the month
            ))}
            <th>Total</th>
            {showAction && <th>Action</th>} {/* Render action column conditionally */}
          </tr>
        </thead>
        <tbody className='tablebody'>
          {data && data.slice(0, displayCount).map((item) => {
            // Calculate total earnings for each user
            const totalEarnings = lastSixMonths.reduce((acc, month) => acc + (item.monthlyEarnings[month] || 0), 0);

            return (
              <tr key={item.id}>
                <td>{item.id.slice(0, 4) + "..."}</td>
                <td>{item.firstName}</td>
                {lastSixMonths.map(month => (
                  <td key={month}>{item.monthlyEarnings[month] || 0}</td>
                ))}
                <td>{totalEarnings}</td>
                {showAction && (
                  <td className='btns'>
                    <a className='btn' href="#" onClick={() => onClickPay(item)}>
                      Pay
                    </a>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      {data && data.length > displayCount && (
        <button className="btn" onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Table;
