import React from 'react'
//map relationships to options under the all option
//set a relation state up in app acordingly to be used as filter
export default function Filter() {
  return (
    <div className='border-2 flex flex-col'>
        <label htmlFor="">category: </label>
        <select name="Category" id="">
            <option value="All">All</option>
            <option value="2">two</option>
        </select>
    </div>
  )
}
