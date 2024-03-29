import {React,useState} from 'react'

export default function CategoryForm({getData,relationships,setRelationships}) {
 const [data,setData] = useState();
 function fillData(e){
  setData({
    ...data,
    [e.currentTarget.name]:e.currentTarget.value,
    //contacts:[{}]
  }
    )
 }
 function handleData(e){
  //const rel = [...relationships,data]
  e.preventDefault()
        fetch('http://localhost:9292/relationships',
         {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
        })
        .then(r=>r.json())
        .then(rel=>{
          //console.log("AHHH "+data.relation)
         // console.log("AHHH "+data.desc)'
         console.log("AHHH "+data.contacts)
         console.log("rel "+ rel.relationship_id)
           setRelationships([...relationships,rel])
            
        })
        //getData()
 }
  return (
    <div className='flex-grow'>CategoryForm
      <form onSubmit={handleData} className='flex flex-col'>
        <label>Category:</label> <input onSubmit={(e)=>e.currentTarget.value=""} name='relation' onChange={fillData} className='border-black border-2 rounded-md' type="text" />
        <label>desc:</label> <input name='desc' onSubmit={(e)=>e.currentTarget.value=""}  onChange={fillData} className='border-black border-2 rounded-md' type="text" />
        <input type="submit" value="" />
      </form>
    </div>
  )
}
