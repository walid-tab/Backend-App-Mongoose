import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getContacts } from '../JS/actions/userAction';

function Navigation() {
  const dispatch = useDispatch()
  return (
    <div>
         <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" onClick={()=>dispatch(getContacts())}>Contacts</Nav.Link>
      <Nav.Link as={Link} to="/AddContact">Add Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation