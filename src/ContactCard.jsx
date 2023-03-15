import {React,useState} from 'react'
//add ternary togle to edit form
export default function ContactCard({relationships,getData,setRelationships,id,url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-circled-user-icon-2240.png&f=1&nofb=1&ipt=1862acc65294eed352047064d5e8fceb07c13ec09e16bbebe0576db61356bc47&ipo=images",fname="first",lname="last",phone=5555555555,relation="relation",rid}) {
const [formTogle, setFormTogle] = useState(true)   
//const [data,setData] = useState([{pfp_url:"",f_name:"",l_name:"",phone_number:123,relationship_id:1}])

//using seperate input state so setting state on update wont affect other
const [pfp_Url,setPfp_URL]=useState(url);
const [f_Name,setF_Name] = useState(fname);
const [l_Name,setL_Name] = useState(lname);
const [phone_Number,setPhone_Number] = useState(phone);
const [relationship_Id,setRelationshipId] = useState(rid)
/*function fillForm(e){
  console.log(data)
  setData({
      ...data,
      [e.currentTarget.name]:e.currentTarget.value
  })
}*/
function togForm(){
  setFormTogle(!formTogle);
}
function handleEdit(e){
  
  //console.log(data)
        //patch
       
        //const updatedContact= {...currentContact,f_name:f_Name,l_name:l_Name,phone_number:phone_Number,relationship_id:relationship_Id}
        //console.log(currentRelationship)
       // console.log(currentContact)
        
        e.preventDefault()
        fetch(`http://localhost:9292/contacts/${id}`,
         {
            method:"PATCH",
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify({
              pfp_url: pfp_Url,
              f_name: f_Name,
              l_name:l_Name,
              phone_number:phone_Number,
              relationship_id:relationship_Id
            }),
        })
        .then(r=>r.json())
        .then(c=>{
            console.log(`patched ${c} !!`)
         
        const currentRelationship = relationships.find(relationObj=> relationObj.id  == c.relationship_id)
         const updatedContact = currentRelationship.contacts.map(contact=> contact.id == id ? c:contact)
         const updatedRelationship ={...currentRelationship,contacts:updatedContact}
         const updatedRelationships = relationships.map(relationshipObj=> relationshipObj.id == c.relationship_id ? updatedRelationship: relationshipObj)
  
           setRelationships(updatedRelationships)
        })

        togForm()
        
}
function handleDelete(){
        fetch(`http://localhost:9292/contacts/${id}`, {
            method:'DELETE'
        })
        .then(r=>r.json())
        .then(c=>{

          // .then(getData())
       //in the then remove the item from the state array
       //filter contacts that dont have the id and replace 
       //the contact we need to delete is the id
       const currentRelationship = relationships.find(relationObj=> relationObj.id  == c.relationship_id)
       const filteredContacts = currentRelationship.contacts.filter(contactObj=>contactObj.id !=id)
       const updatedRelationship ={...currentRelationship,contacts:filteredContacts}
       const updatedRelationships = relationships.map(relationshipObj=> relationshipObj.id == c.relationship_id ? updatedRelationship: relationshipObj)
       setRelationships(updatedRelationships)
        })
       

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
           <label htmlFor="">pfpURl</label> <input defaultValue={url} onChange={(e)=>setPfp_URL(e.target.value)} name="pfp_url" className='w-20 border-2 border-dashed border-gray-500' type="text" />
           <label htmlFor="">First Name</label> <input defaultValue={fname} onChange={(e)=>setF_Name(e.target.value)}  name="f_name" className='w-20 border-2 border-dashed border-gray-500' type="text" />
           <label htmlFor="">Last Name</label> <input defaultValue={lname} onChange={(e)=>setL_Name(e.target.value)}  name="l_name" className='w-20 border-2 border-dashed border-gray-500' type="text" />
           <label htmlFor="">Phone</label> <input defaultValue={phone} onChange={(e)=>setPhone_Number(e.target.value)}  name="phone_number" className='w-20 border-2 border-dashed border-gray-500' type="number" />
           <select required name='relationship_id' onChange={(e)=>setRelationshipId(e.target.value)}>
            <option value={rid}>choose</option>
            {relationships.map(e=>{
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
