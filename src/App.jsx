import {React,useState,useEffect} from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
import Forms from './Forms'

export default function App() {
  //const [contacts,setContacts] =useState([{id:0,pfp_url:"",f_name:"",l_name:"",phone_number:0,relationship_id:0,relationship:{}}]);
  const [relationships, setRelationships] = useState([{id:0,relation:"",desc:"",contacts:[{}]}])
  function getData(){
    //could also update data state on the client rather than fetching and setting data again though this keeps state consistant with the db
    /*
    fetch('http://localhost:9292/contacts')
    .then((r)=>r.json())
    .then(data=>{
      console.log(data)
      setContacts(data)
    })
    // only fetch relationships and get data from there
    console.log(contacts)
    */
    fetch('http://localhost:9292/relationships')
    .then(r=>r.json())
    .then(r=>{
      console.log(r)
      setRelationships(r)
    })
  }
  useEffect(() => {
   getData()
  }, [])
  
  return (
    <div className=''>
      <h1 className='text-4xl mx-auto'>CONTACTS</h1>
      <Filter></Filter>
      <ContactList getData={getData} contacts={relationships}></ContactList>
      <Forms relationships={relationships} getData={getData}></Forms>
    </div>  
  )
}
