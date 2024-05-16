import React from "react";
import { proyectoActual } from "../utils/proyectoActual";
import "./styles/proyectoActual.css";

const ProyectoActual = () => {
  return (
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
                style={{
                  display: "flex",
                  padding: 10,
                  maxHeight: 400,
                  objectFit: "contain",
                }}
                src={img.img}
                alt=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProyectoActual;
