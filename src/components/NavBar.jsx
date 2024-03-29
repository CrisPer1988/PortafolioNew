import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css"
import {useTranslation} from "react-i18next"


const NavBar = () => {
  const [t, i18n] = useTranslation("navBar")

  return (
    <div>
      <div className='navbar__fixed'>
          <Navbar  className="navv" fixed="top" variant="" bg="warning" expand="lg">
      <Container>
      
        <Navbar.Brand className='nombre' href="#home"> Cristian-Perez </Navbar.Brand>
        <div className="content__flags">
      <img onClick={() => i18n.changeLanguage("es")} className="img__flag" src="/images/esp.png" alt="" />
      <img onClick={() => i18n.changeLanguage("en")} className="img__flag" src="/images/eng.png" alt="" />
      </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{t("navBar.home")}</Nav.Link>
            <Nav.Link href="#acercaDeMi">{t("navBar.about-me")}</Nav.Link>
            <Nav.Link href="#proyectos">{t("navBar.projects")}</Nav.Link>
            <Nav.Link href="#habilidades">{t("navBar.abilities")}</Nav.Link>
            <Nav.Link href="#contacto"><h6 className="contacto">{t("navBar.contact")}</h6></Nav.Link>
            <Nav.Link href="/images/CV.pdf" target='_blank'>CV <i className='bx bx-download'></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default NavBar