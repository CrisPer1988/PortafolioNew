import "./styles/home.css"
import React, { useState } from 'react';

const Home = () => {

  const [textHome, setTextHome] = useState("Hola, soy Cristian")

  const handleMouseLeave = () => {
    setTextHome('Hola, soy Cristian');
  };

  const handleHover = () => {
    setTextHome(
    <div><h1 className="hover-text">CONTACTAME</h1>
     <a href="https://wa.me/5492622468440" target="_blank">
      <i className='bx bxl-whatsapp whats__home'></i>
     </a>
    </div>);
  };

  return (
  <header id="home" className="container__home">
    <div className="content__text-home">
      <h1 
      className="hola"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >{textHome}</h1>
      <h5 className="finger__hover">Pasa el raton 👆</h5>
      <h4>&lt; DESARROLLADOR FULL STACK &gt;</h4>
      <h5>Bienvenid@</h5>
    </div>
    {/* <div className="animation__home"><img src="images/home-image-removebg-preview.png" alt="" /></div> */}
  </header>
  )
}

export default Home