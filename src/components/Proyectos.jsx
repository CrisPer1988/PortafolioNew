import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imgData from "../utils/imgData";
import "./styles/proyectos.css";
import Nav from "react-bootstrap/Nav";
import "aos/dist/aos.css";
import Aos from "aos";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";
import { proyectos } from "../utils/proyectos";
import { proyectoActual } from "../utils/proyectoActual";

const Proyectos = () => {
  const [t, i18n] = useTranslation("projects");
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        duration="6000"
        id="proyectos"
        className="content__proyectos"
      >
        <div className="vector__proyectos">:::::</div>
        <div className="vector__proyectos vector__proyectos2">:::::</div>
        <div>
          <div className="text__proyectos">
            <h1>{t("projects.title")}</h1>
            <p>{t("projects.paragraph")}</p>
          </div>
        </div>

        <div>
          {proyectos.map((proyecto, i) => (
            <div
              style={{ marginTop: 60 }}
              className={
                i % 2 === 0 ? "nuevo_proyectos" : "nuevo_proyectos_reverse"
              }
              key={i}
            >
              <div>
                <h3>{proyecto.title}</h3>
                <p>{proyecto.descripcion}</p>
              </div>

              <div className="content_imgs">
                {proyecto.images.map((image, i) => (
                  <div key={i}>
                    <img
                      style={{
                        display: "flex",
                        padding: 10,
                        maxHeight: 400,
                        objectFit: "contain",
                      }}
                      src={image.img}
                      alt=""
                      onClick={() => openModal(image.img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Proyectos;
