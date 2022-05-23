import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addContact } from '../JS/actions/userAction'


function AddContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAdd=(e)=>{
        dispatch(addContact({name,email,age}, navigate))
        e.preventDefault()
       // navigate("/")
  }
  return (
    <div>
    <Form style={{width:"60%",margin:"auto"}} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>setName(e.target.value)} value={name}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control type="number" placeholder="Age" onChange={(e)=>setAge(e.target.value)} value={age}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={handleAdd}>
    Add Contact
  </Button>
</Form>
    </div>
  )
}

export default AddContact