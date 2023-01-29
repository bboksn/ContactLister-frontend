import React from 'react'
import CategoryForm from './CategoryForm'
import ContactForm from './ContactForm'

export default function Forms() {
  return (
    <div className='border-solid border-black border-4 h-36 flex flex-row '>
      <ContactForm></ContactForm>
      <CategoryForm></CategoryForm>
    </div>
  )
}
