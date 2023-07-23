import React, { useEffect } from "react";
import habilidades from "../utils/habilidades";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./styles/habilidades.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Habilidades = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      duration="6000"
      id="habilidades"
      className="contaniner__habilidades"
    >
      <div className="vector__habilidad"></div>
      <div className="vector__habilidad2"></div>
      <div className="vector__habilidad3"></div>
      <div className="content__header-habilidades">
        <div className="text__habilidades">
          <h2>Habilidades</h2>
          <p>
            Estos son mis lenguajes favoritos. Pero te dejo en detalle todas las
            tecnologias con las que he trabajado.
          </p>
        </div>
     
      </div>

  <div className="habilidad__bar">
     
      {habilidades?.map((habilidad) => (
        <div
          data-aos="fade-down"
          duration="6000"
          
          key={habilidad.id}
        >
          <div className="content__circle">
            <h4>{habilidad.name}</h4>
            <div
              style={{
                // width: "130px" /* Ajusta el ancho del círculo */,
                // height: "130px" /* Ajusta la altura del círculo */,
                background: `conic-gradient(from -90deg at 50% 50%, rgb(249, 193, 22) 0%, rgb(190, 170, 12) ${habilidad.pocentaje}%, rgb(210, 210, 210) ${habilidad.pocentaje}%, rgb(210, 210, 210) 100%)`,
              }}
              className="circle"
            >
              <div className="second__circle"></div>
              <img className="img__progress" src={habilidad.img} alt="" />
            </div>
          </div>
        </div>
      ))}
      </div>  

      <ul className="lista__habilidades">
          <li>HTML</li>
          <li>Css</li>
          <li>JavasCript</li>
          <li>React.js</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>Bootstrap</li>
          <li>Taildwind</li>
          <li>React hook form</li>
          <li>Git</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Express validator</li>
          <li>Morgan</li>
          <li>PostgreSQL</li>
        </ul>

   
    </section>
  );
};

export default Habilidades;
