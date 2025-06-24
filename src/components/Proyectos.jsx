import React, { useEffect, useState } from "react";
import "./styles/proyectos.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";
import { proyectos } from "../utils/proyectos";

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
        
        <div className="proyectos-container">
          <div className="text__proyectos">
            <h1>{t("projects.title")}</h1>
            <p>{t("projects.paragraph")}</p>
          </div>

          {proyectos.map((proyecto, i) => (
            <div
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
                  <img
                    key={i}
                    src={image.img}
                    alt={`${proyecto.title} - Imagen ${i + 1}`}
                    onClick={() => openModal(image.img)}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para mostrar imágenes - fuera del contenedor principal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="bx bx-x"></i>
            </button>
            <img src={selectedImage} alt="Vista ampliada" />
          </div>
        </div>
      )}
    </>
  );
};

export default Proyectos;
