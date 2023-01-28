import React from 'react'
import { FaUserCricle } from "@react-icons/all-files/fa/FaUserCircle";

export default function ContactCard({url=<FaUserCircle></FaUserCircle>,fname="first",lname="last",phone=5555555555,relation}) {
  return (
    <div className='border-2'>
        <img src={url} alt="" />
        <p>{fname} {lname}</p>
        <a href="">{phone}</a>
        
    </div>
  )
}
