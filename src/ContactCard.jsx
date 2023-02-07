import React from 'react'
//add ternary togle to edit form
export default function ContactCard({getData,id,url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-circled-user-icon-2240.png&f=1&nofb=1&ipt=1862acc65294eed352047064d5e8fceb07c13ec09e16bbebe0576db61356bc47&ipo=images",fname="first",lname="last",phone=5555555555,relation="relation"}) {
    function handleDelete(){
        fetch(`http://localhost:9292/contacts/${id}`, {
            method:'DELETE'
        })
        .then(getData())
    }
  return (
    <div className='border-2 w-24 flex flex-col items-center shadow-black shadow-md m-1 h-52'>
        <button onClick={handleDelete} className='self-end'>X</button>
        <img className='w-20 h-20 border-blue-600 border-2 rounded-full' src={url} alt="" />
        <p>{fname} {lname}</p>
        <a cl href="">{phone}</a>
        <p>{relation}</p>
        <button className='border-black border-2 rounded-md'>Edit</button>
    
    </div>
  )
}
