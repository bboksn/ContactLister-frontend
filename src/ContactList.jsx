import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList({relationships,getData}) {
  return (
    <>
    <div className='border-solid border-4 border-black h-[700px] w-1/2 m-auto mt-10 mb-2 flex flex-wrap overflow-auto'>
    <ContactCard></ContactCard>
    {relationships.map(e=>{
      let relation = e.relation;
      return e.contacts.map(c=>{
        return <ContactCard relations={relationships} getData={getData} id={c.id} url={c.pfp_url} fname={c.f_name} lname={c.l_name} phone={c.phone_number} relation={relation} key={c.id} rid={c.relationship_id}></ContactCard>
      })
      // return <ContactCard getData={getData} id={e.id} url={e.pfp_url} fname={e.f_name} lname={e.l_name} phone={e.phone_number} relation={e.relationship.relation} key={e.id}></ContactCard>
    })}
    </div>
    </>
  )
}
  