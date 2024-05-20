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
              {showAction && ( // Render action cell conditionally
                <td className='btns'>
                  <a className='btn' href="#" onClick={() => onViewFull(item)}>
                    View full
                  </a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length > displayCount && (
        <button className="btn" onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Table;
