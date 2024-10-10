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
          style={{ backgroundColor: "rgb(64, 64, 64)", height: 80 }}
          fixed="top"
          variant="dark"
          expand="lg"
        >
          <Container>
            <Navbar.Brand
              style={{ color: "white" }}
              className="nombre"
              href="#home"
            >
              {" "}
              Cristian-Perez{" "}
            </Navbar.Brand>
            {/* <div className="content__flags">
              <img
                onClick={() => i18n.changeLanguage("es")}
                className="img__flag"
                src="/images/esp.png"
                alt=""
              />
              <img
                onClick={() => i18n.changeLanguage("en")}
                className="img__flag"
                src="/images/eng.png"
                alt=""
              />
            </div> */}

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-auto"
                // style={{ backgroundColor: --var, padding: 10 }}
              >
                <Nav.Link
                  style={{ color: "white", marginLeft: 10 }}
                  href="#home"
                >
                  {t("navBar.home")}
                </Nav.Link>
                {/* <Nav.Link style={{ color: "white" }} href="#acercaDeMi">
                  {t("navBar.about-me")}
                </Nav.Link> */}
                <Nav.Link
                  style={{ color: "white", marginLeft: 10 }}
                  href="#proyectos"
                >
                  {t("navBar.projects")}
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white", marginLeft: 10 }}
                  href="#habilidades"
                >
                  {t("navBar.abilities")}
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#E8AE1B", marginLeft: 10 }}
                  href="#contacto"
                >
                  {/* <h5 className="contacto"></h5> */}
                  {t("navBar.contact")}
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white", marginLeft: 10 }}
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
