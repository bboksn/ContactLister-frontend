import {React,useState,useEffect} from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
import Forms from './Forms'
//current problem is im trying to put a contact into my relationship state rather than the contacts [{}] in my relationships
export default function App() {
  //const [contacts,setContacts] =useState([{id:0,pfp_url:"",f_name:"",l_name:"",phone_number:0,relationship_id:0,relationship:{}}]);
  const [relationships, setRelationships] = useState([{id:0,relation:"",desc:"",contacts:[{}]}])
  useEffect(() => {
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
     {/*<Filter></Filter>*/} 
      <ContactList relationships={relationships} setRelationships={setRelationships}></ContactList>
      <Forms relationships={relationships} setRelationships={setRelationships}></Forms>
    </div>  
  )
}
