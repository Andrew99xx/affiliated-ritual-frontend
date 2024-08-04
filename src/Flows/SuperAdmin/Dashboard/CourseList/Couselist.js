import React, { useState } from 'react';
import "./CourseList.css";
import data from "./Data";


const Couselist = () => {
  const [displayCount, setDisplayCount] = useState(5);
  
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

  
  return (
    <div className='courselist'>
      <div className="courseheader">
        <h1 className="heading">Course List</h1>
      </div>

      <div className="courselist">
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
                <th>Status</th>
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
                  <td>status</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      

    </div>
  );
}

export default Couselist;
