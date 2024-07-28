import React from 'react'
import "./Reviews.css"

import Star from "./star.png"
const Reviews = () => {
  return (
    <div className='Reviews' >
      <h1 className='heading'> Reviews</h1>
      <table className="table" cellSpacing={0}>
        <thead className="tablehead">
          <tr>
            <td>#</td>
            <td>Rating</td>
            <td>Comment</td>
          </tr>
        </thead>
        <tbody className='tablebody'>
          
          <tr>
            <td>0001</td>
            <td className='icons'><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /><img src={Star} alt="" /></td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione?</td>
          </tr>


        </tbody>
      </table>

      
    </div>
  )
}

export default Reviews