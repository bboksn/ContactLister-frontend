import {React,useState} from 'react'

export default function CategoryForm() {
 const [data,setData] = useState();
  return (
    <div className='flex-grow'>CategoryForm
      <form action="" className='flex flex-col'>
        <label>Category:</label> <input className='border-black border-2 rounded-md' type="text" />
        <label>desc:</label> <input className='border-black border-2 rounded-md' type="text" />
        <input type="submit" value="" />
      </form>
    </div>
  )
}
