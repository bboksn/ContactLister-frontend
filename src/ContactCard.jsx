import {React,useState} from 'react'
//add ternary togle to edit form
export default function ContactCard({relations,getData,id,url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-circled-user-icon-2240.png&f=1&nofb=1&ipt=1862acc65294eed352047064d5e8fceb07c13ec09e16bbebe0576db61356bc47&ipo=images",fname="first",lname="last",phone=5555555555,relation="relation"}) {
const [formTogle, setFormTogle] = useState(true)   
const [data,setData] = useState([{pfp_url:"",f_name:"",l_name:"",phone_number:123,relationship_id:1}])
function fillForm(e){
  console.log(data)
  setData({
      ...data,
      [e.currentTarget.name]:e.currentTarget.value
  })
}
function togForm(){
  setFormTogle(!formTogle);
}
function handleEdit(e){
  
  console.log(data)
        //patch
        e.preventDefault()
        fetch(`http://localhost:9292/contacts/${id}`,
         {
            method:"PATCH",
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify(data),
        })
        /*.then(r=>r.json())
        .then(r=>{
            console.log(`posted ${r} !!`)
        })*/
        getData()
        togForm()
}
function handleDelete(){
        fetch(`http://localhost:9292/contacts/${id}`, {
            method:'DELETE'
        })
        .then(getData())
    }
  return (
    <div className='border-2 w-24 flex flex-col items-center shadow-black shadow-md m-1 h-52'>
        {formTogle ? 
        <div>
          <button onClick={handleDelete} className='self-end'>X</button>
        <img className='w-20 h-20 border-blue-600 border-2 rounded-full' src={url} alt="" />
        <p>{fname} {lname}</p>
        <a cl href="">{phone}</a>
        <p>{relation}</p>
        <button onClick={togForm} className='border-black border-2 rounded-md'>Edit</button>
        </div>
        :
        <div className='flex flex-col w-24 overflow-auto'>
          <form onSubmit={handleEdit}>
           <label htmlFor="">pfpURl</label> <input onChange={fillForm} name="pfp_url" className='w-20 border-2 border-dashed border-gray-500' type="text" />
           <label htmlFor="">First Name</label> <input onChange={fillForm} name="f_name" className='w-20 border-2 border-dashed border-gray-500' type="text" />
           <label htmlFor="">Last Name</label> <input onChange={fillForm} name="l_name" className='w-20 border-2 border-dashed border-gray-500' type="text" />
           <label htmlFor="">Phone</label> <input onChange={fillForm} name="phone_number" className='w-20 border-2 border-dashed border-gray-500' type="number" />
           <select name='relationship_id' onClick={fillForm}>
            <option value={0}>Choose</option>
            {relations.map(e=>{
                return <option key={e.id}  value={e.id}>{e.relation}</option>
            })}
           </select>
          </form>
          <button onClick={handleEdit} className='border-black border-2 rounded-md'>Save</button>
        </div>
        }
        
    
    </div>
  )
}
