import {React,useState} from 'react'

export default function ContactForm({relationships,getData}) {
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
        console.log(formData)
        //post
        e.preventDefault()
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
        })
        getData()
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
