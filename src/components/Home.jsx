import "./styles/home.css"
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const Home = ({mode}) => {
  const [t, i18n] = useTranslation("home")
  //const [textHome, setTextHome] = useState("Hola, soy Cristian")
  const [show, setShow] = useState(false)


  const handleMouseLeave = () => {
    setTextHome('Hola, soy Cristian');
    setShow(false)
  };

  // const handleHover = () => {
  //   setTextHome(
  //   <div><h1 className="hover-text">CONTACTAME</h1>
  //    <a href="https://wa.me/5492622468440" target="_blank">
  //     <i className='bx bxl-whatsapp whats__home'></i>
  //    </a>
  //   </div>);
  //   setShow(true)
  // };

  return (
  <header id="home" className={`container__home ${mode && "dark_mode"}`}>
    <div className="vector__home">....</div>
    <div className="vector__home1">.....</div>
    <div className="vector__home2">:::::</div>
    <div className="vector__home3"></div>
    <div className="vector__home4"><div className="complemet__vector4"></div></div>
    <div className="circle__home"></div>
    <div className="content__text-home">

    {/* <button onClick={() => i18n.changeLanguage("es")} style={{color: "red", zIndex: 8000}}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")} style={{color: "red", zIndex: 8000}}>EN</button> */}
      
      {/* <div className="content__flags">
      <img onClick={() => i18n.changeLanguage("es")} className="img__flag" src="/images/esp.png" alt="" />
      <img onClick={() => i18n.changeLanguage("en")} className="img__flag" src="/images/eng.png" alt="" />
      </div> */}
      
      <h1 
      className="text__animation-hover"
      // onMouseEnter={handleHover}
      // onMouseLeave={handleMouseLeave}
      >{t("home.title")}</h1>
      
      {/* <h5 className={`finger__hover ${show ? "no" : ""}`}>Pasa el raton 👆</h5> */}
      <h3>&lt; {t("home.subtitle")} &gt;</h3>
      <h5>{t("home.welcome")}</h5>
    </div>
    {/* <div className="animation__home"><img src="images/home-image-removebg-preview.png" alt="" /></div> */}
  </header>
  )
}

export default Home