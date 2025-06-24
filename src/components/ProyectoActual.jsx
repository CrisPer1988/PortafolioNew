import React, { useState } from "react";
import { proyectoActual } from "../utils/proyectoActual";
import "./styles/proyectoActual.css";

const ProyectoActual = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="contaniner__actual">
        <h1>Actualmente me encuentro trabajando en este proyecto</h1>
        {proyectoActual.map((actual, i) => (
          <div key={i}>
            <h3>{actual.title}</h3>
            <p>{actual.description}</p>
            <div className="content_imgs">
              {actual.images.map((img, i) => (
                <img
                  key={i}
                  src={img.img}
                  alt={`${actual.title} - Imagen ${i + 1}`}
                  loading="lazy"
                  onClick={() => openModal(img.img)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        ))}
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

export default ProyectoActual;
