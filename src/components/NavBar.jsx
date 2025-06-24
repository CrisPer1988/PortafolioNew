import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/navbar.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("navBar");
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      <div className="navbar__fixed">
        <Navbar
          fixed="top"
          variant="dark"
          expand="lg"
          style={{padding: "10px"}}
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        >
          <Container>
            <Navbar.Brand              
              href="#home"
              onClick={handleNavClick}
            >
              Cristian-Perez
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" onClick={handleNavClick}>
                  {t("navBar.home")}
                </Nav.Link>
                <Nav.Link href="#proyectos" onClick={handleNavClick}>
                  {t("navBar.projects")}
                </Nav.Link>
                <Nav.Link href="#habilidades" onClick={handleNavClick}>
                  {t("navBar.abilities")}
                </Nav.Link>
                <Nav.Link
                  className="contact-link"
                  href="#contacto"
                  onClick={handleNavClick}
                >
                  {t("navBar.contact")}
                </Nav.Link>
                <Nav.Link
                  className="cv-link"
                  href="/images/CV-0109.pdf"
                  target="_blank"
                  onClick={handleNavClick}
                >
                  CV <i className="bx bx-download"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
