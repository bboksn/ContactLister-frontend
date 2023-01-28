import {React,useState,useEffect} from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
import Forms from './Forms'

export default function App() {
  const [contacts,setContacts] =useState([{id:0,pfp_url:"",f_name:"",l_name:"",phone_number:0,relationship_id:0}]);
  useEffect(() => {
    fetch('http://localhost:9292/contacts')
    .then((r)=>r.json())
    .then(data=>{
      console.log(data)
      setContacts(data)
    })
    console.log(contacts)
  }, [])
  
  return (
    <div className=''>
      <h1 className='text-4xl mx-auto'>CONTACTS</h1>
      <Filter></Filter>
      <ContactList contacts={contacts}></ContactList>
      <Forms></Forms>
    </div>  
  )
}
