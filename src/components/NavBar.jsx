import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css"
import Spinner from 'react-bootstrap/Spinner';

const NavBar = () => {
  return (
    <div>
      <div className='navbar__fixed'>
          <Navbar  bg="primary" fixed="top" variant="dark" expand="lg">
      <Container>
      
        <Navbar.Brand className='nombre' href="#home"> Cristian-Perez </Navbar.Brand>
       <Spinner animation="border" size='sm' />
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default NavBar