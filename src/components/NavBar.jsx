import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/navbar.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("navBar");

  return (
    <div>
      <div className="navbar__fixed">
        <Navbar
          fixed="top"
          variant="dark"
          expand="lg"
        >
          <Container>
            <Navbar.Brand
              className="nombre"
              href="#home"
            >
              Cristian-Perez
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {t("navBar.home")}
                </Nav.Link>
                <Nav.Link href="#proyectos">
                  {t("navBar.projects")}
                </Nav.Link>
                <Nav.Link href="#habilidades">
                  {t("navBar.abilities")}
                </Nav.Link>
                <Nav.Link
                  className="contact-link"
                  href="#contacto"
                >
                  {t("navBar.contact")}
                </Nav.Link>
                <Nav.Link
                  className="cv-link"
                  href="/images/CV-0109.pdf"
                  target="_blank"
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
