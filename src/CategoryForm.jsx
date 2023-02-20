import {React,useState} from 'react'

export default function CategoryForm() {
 const [data,setData] = useState([{}]);
 function fillData(e){
  setData({
    ...data,
    [e.currentTarget.name]:e.currentTarget.value})
 }
 function handleData(e){
  e.preventDefault()
        fetch('http://localhost:9292/relationships',
         {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
        })
 }
  return (
    <div className='flex-grow'>CategoryForm
      <form onSubmit={handleData} className='flex flex-col'>
        <label>Category:</label> <input name='relation' onChange={fillData} className='border-black border-2 rounded-md' type="text" />
        <label>desc:</label> <input name='desc' onChange={fillData} className='border-black border-2 rounded-md' type="text" />
        <input type="submit" value="" />
      </form>
    </div>
  )
}
