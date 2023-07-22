import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css"


const NavBar = () => {

  return (
    <div>
      <div className='navbar__fixed'>
          <Navbar  className="navv" fixed="top" variant="" bg="warning" expand="lg">
      <Container>
      
        <Navbar.Brand className='nombre' href="#home"> Cristian-Perez </Navbar.Brand>
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#acercaDeMi">Sobre mí</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#contacto"><h6 className="contacto">Contacto</h6></Nav.Link>
            <Nav.Link href="/images/update-CV.pdf" target='_blank'>CV <i className='bx bx-download'></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default NavBar