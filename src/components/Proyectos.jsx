import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import imgData from "../utils/imgData";
import "./styles/proyectos.css";
import Nav from "react-bootstrap/Nav";
import "aos/dist/aos.css";
import Aos from "aos";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Proyectos = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <div id="proyectos" className="content__proyectos">
      <div className="vector__proyectos">:::::</div>
      <div className="vector__proyectos vector__proyectos2">:::::</div>
      <div className="bootstrap">
        <div data-aos="fade-up" duration="6000" className="text__proyectos">
          <h2>Proyectos</h2>
          <p>
            En esta seccion te mostrare algunos de mis proyectos preferidos.
            Pasa el raton por encima para acceder al link de muestra y a la
            descripcion de cada proyecto. Espero que lo disfrutes tanto como yo
            disfrute al realizarlos.{" "}
          </p>
        </div>
        <Carousel data-aos="fade-down" duration="8000" variant="dark">
          {imgData.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-75 img__proyectos"
                src={image.img}
                alt="First slide"
              />
              <div className="content__info-proyectos">
                <h3 className="title__descripcion">{image.descripcion}</h3>
                <Nav.Link href={image.link} target="_blank">
                  {image.link}
                </Nav.Link>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        <div className="content__proyectos owl">
        <div data-aos="fade-up" duration="6000" className="text__proyectos">
          <h2>Proyectos</h2>
          <p>
            En esta seccion te mostrare algunos de mis proyectos preferidos.
            Pasa el raton por encima para acceder al link de muestra y a la
            descripcion de cada proyecto. Espero que lo disfrutes tanto como yo
            disfrute al realizarlos.{" "}
          </p>
          </div>
        <OwlCarousel
          className="owl-theme"
          loop
          nav
          items={3}
          autoplay
          autoplayTimeout={4000}
        >
          {imgData.map((image) => (
            <div key={image.id} className="item">
              <img className="img__proyectos" src={image.img} alt="" />
              <div className="content__info-proyectos">
                <h3 className="title__descripcion">{image.descripcion}</h3>
                <Nav.Link href={image.link} target="_blank">
                  {image.link}
                </Nav.Link>
              </div>
            </div>
          ))}
        </OwlCarousel>
        </div>
      </div>
      {/* <div id="proyectos" className="content__proyectos owl">
       
      </div> */}
    </>
  );
};

export default Proyectos;
