import React from 'react'
import CategoryForm from './CategoryForm'
import ContactForm from './ContactForm'

export default function Forms({relationships,setRelationships,getData}) {
  return (
    <div className='border-solid border-black border-4 h-36 flex flex-row '>
      <ContactForm getData={getData} relationships={relationships} setRelationships={setRelationships}></ContactForm>
      <CategoryForm getData={getData} relationships={relationships} setRelationships={setRelationships}></CategoryForm>
    </div>
  )
}
