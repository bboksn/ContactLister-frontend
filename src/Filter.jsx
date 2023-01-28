import React from 'react'

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
