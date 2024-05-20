import React from 'react'
import Table from '../../../../components/Table/Table'
import data from '../TeamRep/Data'
import "./direct.css"
const Direct = () => {
  
  return (
    <div className='Direct'>
      <h1 className="heading">Direct Sale Report</h1>
      <div className="containe"><h2 className="subheading">In-Active Students</h2> <input placeholder='Search' className='input' type="text" /></div>
      <div className="flex">
      <Table data={data} onViewFull={() => {}} showAction={false} />
      </div>

      <div className="containe"><h2 className="subheading">In-Active Students</h2> <input placeholder='Search' className='input' type="text" /></div>
      <div className="flex">
      <Table data={data} onViewFull={() => {}} showAction={false} />
      </div>

      <div className="containe"><h2 className="subheading">In-Active Students</h2> <input placeholder='Search' className='input' type="text" /></div>
      <div className="flex">
      <Table data={data} onViewFull={() => {}} showAction={false} />
      </div>
    </div>
  )
}

export default Direct