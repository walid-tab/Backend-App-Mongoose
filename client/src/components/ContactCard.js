import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../JS/actions/userAction'

function ContactCard({contact}) {
  const dispatch=useDispatch()
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000" />
  <Card.Body>
    <Card.Title>{contact.name}</Card.Title>
    <Card.Text>{contact.email}</Card.Text>
    <Card.Text>{contact.age}</Card.Text>
    <Button variant="primary">edit</Button>
    <Button variant="danger" onClick={()=>dispatch(deleteContact(contact._id))}>delete</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default ContactCard