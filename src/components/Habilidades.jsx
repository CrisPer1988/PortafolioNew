import React, { useEffect } from "react";
import habilidades from "../utils/habilidades";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./styles/habilidades.css";
import "aos/dist/aos.css";
import Aos from "aos";
import colors from "../utils/colors";
import { useTranslation } from "react-i18next";

const Habilidades = () => {
  const [t, i18n] = useTranslation("abilities");

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
          <h1>{t("abilities.title")}</h1>
          <p>{t("abilities.paragraph")}</p>
        </div>
      </div>

      <div className="habilidad__bar">
        {habilidades?.map((habilidad) => (
          <div key={habilidad.id}>
            <div className="content__circle">
              <h4>{habilidad.name}</h4>
              <div
                style={{
                  background: `conic-gradient(from -90deg at 50% 50%,${
                    colors[habilidad.name]?.color
                  } 0%,${colors[habilidad.name]?.color} ${
                    habilidad.pocentaje
                  }%, rgb(242, 255, 250) ${
                    habilidad.pocentaje
                  }%, rgb(242, 255, 250) 100%)`,
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

      {/* <ul className="lista__habilidades">
        <li>HTML</li>
        <li>Css</li>
        <li>JavasCript</li>
        <li>React.js</li>
        <li>React Router</li>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>Typescript</li>
        <li>Taildwind</li>
        <li>React hook form</li>
        <li>Git</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Express validator</li>
        <li>Morgan</li>
        <li>PostgreSQL</li>
      </ul> */}
    </section>
  );
};

export default Habilidades;
