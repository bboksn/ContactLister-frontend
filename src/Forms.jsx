import React from 'react'
import CategoryForm from './CategoryForm'
import ContactForm from './ContactForm'

export default function Forms({relationships,getData}) {
  return (
    <div className='border-solid border-black border-4 h-36 flex flex-row '>
      <ContactForm getData={getData} relationships={relationships}></ContactForm>
      <CategoryForm getData={getData}></CategoryForm>
    </div>
  )
}
