import {React,useState} from 'react'

export default function ContactForm({relationships}) {
    const [formData, setFormData] = useState({})
    function fillForm(e){
        setFormData({
            ...formData,
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    function handleForm(){
        //post
        fetch('')
    }
  return (
    <div className='border-2 border-black flex-grow'>
        <p className='text-2xl'>New Contact</p>
        <form onSubmit={handleForm} action="#" className='flex ' >
           <label>PFP URL</label> <input onChange={fillForm} name='pfp_url' className='border-black border-2 rounded-md' type="text" />
           <label>First Name</label> <input onChange={fillForm} name='f_name' className='border-black border-2 rounded-md' type="text" />
           <label>Last Name</label> <input onChange={fillForm} name='l_name' className='border-black border-2 rounded-md' type="text" />
           <label>Phone Number</label> <input onChange={fillForm} name='phone_number' className='border-black border-2 rounded-md' type="number" />
           <label>Relation</label>
           <select onChange={fillForm} name='relationship.relation'>
            {relationships.map(e=>{
                return <option key={e.id} value={e.relation}>{e.relation}</option>
            })}
           </select>
        </form>
    </div>
  )
}
