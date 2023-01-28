import React from 'react'

export default function ContactCard({url,fname="first",lname="last",phone=5555555555,relation}) {
  return (
    <div className='border-2'>
        <img src={url} alt="" />
        <p>{fname} {lname}</p>
        <a href="">{phone}</a>
    </div>
  )
}
