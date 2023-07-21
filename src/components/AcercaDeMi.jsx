import {useState} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

import "./styles/acercaDeMi.css"

const AcercaDeMi = () => {
  


  return (
    <section data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id='acercaDeMi' className="content__home">
      <div className='vector__aboutme1'></div>
      <div className='vector__aboutme2'></div>
      <div className='vector__aboutme3'>:::::</div>
      <div className='acercaDeMi__text'>
        <div className='content__title-carita'>
        <h1>¿Que me describe? <br /> <h3>¿Como soy?...</h3></h1>
        <span className='carita'>🤔</span>
        </div>
        
        <ul>
          <li className='title__hablandas'>Responsable:</li>
          <h5 className='description__ol'>Ante todo, responsabilidad</h5>
          <li className='title__hablandas'>Atento:</li>
          <h5 className='description__ol'>Pendiente a todo</h5>
          <li className='title__hablandas'>Compañero:</li>
          <h5 className='description__ol'>Si el equipo no es amigo, no hay equipo</h5>
          <li className='title__hablandas'>Puntual:</li>
          <h5 className='description__ol'>Puntualidad = Respeto</h5>
          <li className='title__hablandas'>Facilidad de aprendizaje:</li>
          <h5 className='description__ol'>Si alguien lo hizo, tambien puedo hacerlo</h5>
          <h5 className='description__ol'>Si nadie lo hizo, seré el primero en hacerlo</h5>
          <li className='title__hablandas'>Trabajo en equipo:</li>
          <h5 className='description__ol'>Lo que mas disfruto</h5>
        </ul>
      </div>
      {/* <div>
        <img className='img__acerca' src="images/acercaDeMiIMG.png" alt="" />
      </div> */}
    </section>
  )
}

export default AcercaDeMi