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
          <ol className='description__ol'>Ante todo, responsabilidad</ol>
          <li className='title__hablandas'>Atento:</li>
          <ol className='description__ol'>Pendiente a todo</ol>
          <li className='title__hablandas'>Compañero:</li>
          <ol className='description__ol'>Si el equipo no es amigo, no hay equipo</ol>
          <li className='title__hablandas'>Puntual:</li>
          <ol className='description__ol'>Puntualidad = Respeto</ol>
          <li className='title__hablandas'>Facilidad de aprendizaje:</li>
          <ol className='description__ol'>Si alguien lo hizo, tambien puedo hacerlo</ol>
          <ol className='description__ol'>Si nadie lo hizo, seré el primero en hacerlo</ol>
          <li className='title__hablandas'>Trabajo en equipo:</li>
          <ol className='description__ol'>Lo que mas disfruto</ol>
        </ul>
      </div>
      <div>
        <img className='img__acerca' src="images/Foto-home.png" alt="" />
      </div>
    </section>
  )
}

export default AcercaDeMi