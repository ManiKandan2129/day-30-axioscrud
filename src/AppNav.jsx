import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './nav.css'


function AppNav() {

  const navigate = useNavigate();
  return (
    <>
     <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container className='nav'>
        <Navbar.Brand href="/"><h5>Users</h5></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className="d-flex gap-3">
        <Button variant="outline-warning" onClick={()=>{navigate('/')}}>Home</Button>
        <Button variant="outline-warning" onClick={()=>{navigate('/user-details')}}>Users details</Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AppNav