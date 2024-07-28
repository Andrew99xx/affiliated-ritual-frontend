import React from 'react'
import "./SaleTarget.css"
import Box from "../../../../components/box/Box"
import user from "./users.png"
const SalesTarget = () => {
  return (
    <div className='saletarget'>
      <h1 className="heading"> Sale & Target</h1>
      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>
      <div className="salecontent">
        <div className="bigcontainer"> 
        <h1 className="bigheading">Club Decided Target : ₹222040</h1>
        <div className="btn">Auto Assign</div>
        </div>
       
        <h1 className="heading">Team List</h1>

        <table className='table' cellSpacing={0}>
        <thead className='tablehead'>
          <tr>
            <th>ID</th>
            <th>Team Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='tablebody'>
          
            <tr>
              <td>id</td>
              <td>name</td>
              <td>
                <input type="number" placeholder='Enter Amount' className="inputinstall" />
              </td>
              
                <td className='btns'>
                  <a className='btn' href="#">
                    Auto Assign
                  </a>
                </td>
             
            </tr>
          
        </tbody>
      </table>
      </div>
      
      </div>
  )
}

export default SalesTarget