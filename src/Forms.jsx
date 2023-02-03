import React from 'react'
import CategoryForm from './CategoryForm'
import ContactForm from './ContactForm'

export default function Forms({relationships}) {
  return (
    <div className='border-solid border-black border-4 h-36 flex flex-row '>
      <ContactForm relationships={relationships}></ContactForm>
      <CategoryForm></CategoryForm>
    </div>
  )
}
