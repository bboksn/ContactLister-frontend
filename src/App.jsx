import {React,useState,useEffect} from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
import Forms from './Forms'

export default function App() {
  const [contacts,setContacts] =useState([{id:0,pfp_url:"",f_name:"",l_name:"",phone_number:0,relationship_id:0,relationship:{}}]);
  const [relationships, setRelationships] = useState([{id:0,relation:"",desc:""}])
  //Want to set up a filter by relationship but am not sure on optimal way of going about it
  //current ideas:
  //option 1: filter data and map acordingly on client side
  // option 2: ternary fetch request fetch/contacts for everything:fetch/contacts/relationship for query
  //option 3: fetch every time option is selected by ${queryparam}
  useEffect(() => {
    fetch('http://localhost:9292/contacts')
    .then((r)=>r.json())
    .then(data=>{
      console.log(data)
      setContacts(data)
    })
    console.log(contacts)
    fetch('http://localhost:9292/relationships')
    .then(r=>r.json())
    .then(r=>{
      console.log(r)
      setRelationships(r)
    })
  }, [])
  
  return (
    <div className=''>
      <h1 className='text-4xl mx-auto'>CONTACTS</h1>
      <Filter></Filter>
      <ContactList contacts={contacts}></ContactList>
      <Forms relationships></Forms>
    </div>  
  )
}
