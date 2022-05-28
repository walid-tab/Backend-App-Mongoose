import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function ContactList() {
  const users = useSelector((state)=>state.userReducer.users)
  const loading = useSelector((state)=>state.userReducer.load)
  return (
    <div style={{margin:'10px',display:'flex', gap:'20px', flexWrap:'wrap'}}>
      {loading? 
      
      <div className="loading">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
      : users.map((contact,i)=>(<ContactCard contact={contact} key={i}/>)) }
    </div>
  )
}

export default ContactList