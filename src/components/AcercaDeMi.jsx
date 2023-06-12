import {useState} from 'react';

import Aos from "aos"
import "aos/dist/aos.css"

import "./styles/acercaDeMi.css"

const AcercaDeMi = () => {
  


  return (
    <section id='acercaDeMi' className="container content__home">
      <div className='acercaDeMi__text'>
        <h2>¿Que me describe? <br /> ¿Como soy?</h2>
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
      <div>
        <img className='img__acerca' src="images/Foto-home.png" alt="" />
      </div>
    </section>
  )
}

export default AcercaDeMi