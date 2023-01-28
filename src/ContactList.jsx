import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList({contacts}) {
  return (
    <>
    <div className='border-solid border-4 border-black h-[700px] w-1/2 m-auto mt-10 mb-2 flex flex-wrap overflow-auto'>
    <ContactCard></ContactCard>
    <ContactCard></ContactCard>
    <ContactCard></ContactCard>
    {contacts.map(e=>{
       return <ContactCard url={e.pfp_url} fname={e.f_name} lname={e.l_name} phone={e.phone_number} relation={e.relationship.relation} key={e.id}></ContactCard>
    })}
    

    </div>
    </>
  )
}
