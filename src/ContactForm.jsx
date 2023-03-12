import { type } from '@testing-library/user-event/dist/type'
import {React,useState} from 'react'

export default function ContactForm({relationships,getData,setRelationships}) {
    //lift state for possible use elsewhere in the application maybe and rename to contactFormData 
    const [formData, setFormData] = useState([{pfp_url:"",f_name:"",l_name:"",phone_number:123,relationship_id:1}])
    function fillForm(e){
        console.log(formData)
        setFormData({
            ...formData,
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    function handleForm(e){
        e.preventDefault()
     //   console.log(formData)
        //console.log(typeof formData.relationship_id)
        const currentRelationship = relationships.find(relationObj=> relationObj.id  == formData.relationship_id)
        console.log(currentRelationship)
        const newContacts = [...currentRelationship.contacts,formData]
        const newRelationship={...currentRelationship, contacts: newContacts}
        const updatedRelationships = relationships.map(relationObj => relationObj.id == formData.relationship_id ? newRelationship : relationObj);
        
      
      

        //post
        
        
        /*
        -make a copy of the relationship
        -go to the contacts array in the relationship obj 
        -add the new contact object to the contacts array
        -go to the relationships array 
        -replace the old relationship object with the new relationship object
        */
       fetch('http://localhost:9292/contacts',
         {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(r=>{
            
            console.log(`posted ${r} !!`)
           setRelationships(updatedRelationships);
           
        })
        
        //getData()
    }
  return (
    <div className='border-2 border-black flex-grow'>
        <p className='text-2xl'>New Contact</p>
        <form onSubmit={handleForm} className='flex ' >
           <label>PFP URL</label> <input onChange={fillForm} name='pfp_url' className='border-black border-2 rounded-md' type="text" />
           <label>First Name</label> <input onChange={fillForm} name='f_name' className='border-black border-2 rounded-md' type="text" />
           <label>Last Name</label> <input onChange={fillForm} name='l_name' className='border-black border-2 rounded-md' type="text" />
           <label>Phone Number</label> <input onChange={fillForm} name='phone_number' className='border-black border-2 rounded-md' type="number" />
           <label>Relation</label>
           <select name='relationship_id' onClick={fillForm}>
            <option value={0}>Choose</option>
            {relationships.map(e=>{
                
                return <option key={e.id}  value={e.id}>{e.relation}</option>
            })}
           </select>
            <input type="submit" value="" />
        </form>
    </div>
  )
}
