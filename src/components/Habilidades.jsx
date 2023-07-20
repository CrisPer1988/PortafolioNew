import React, { useEffect } from 'react'
import habilidades from "../utils/habilidades"
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./styles/habilidades.css"
import "aos/dist/aos.css"
import Aos from "aos"

const Habilidades = () => {

    useEffect(() => {
    Aos.init()
   }, [])

  return (
    <section  data-aos="fade-up" duration="6000" id='habilidades' className='container contaniner__habilidades'>
        <div className='text__habilidades'>
        <h2>Habilidades</h2>
        <p >Estos son mis lenguajes favoritos. Pero te dejo en detalle todas las
          tecnologias con las que he trabajado.
        </p>
        </div>
        <ul className='lista__habilidades'>
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
        
        
        {
            habilidades?.map(habilidad => (
                <div data-aos="fade-down" duration="6000" className='habilidad__bar' key={habilidad.id}>
                    <h2>{habilidad.name}</h2>
                    <ProgressBar animated variant="warning" striped now={habilidad.pocentaje} />                 
                </div>
            ))     
        }
       
   
            

         <div className='habilidad__grid'>
        
        {
          habilidades.map(habilImg => (
            <div className='content__img-habilidad' key={habilImg.id}>
                
                    <img className='img__habilidades' src={habilImg.img} alt="" />
                    </div>
                 
          ))
        }
        </div>
    </section>
  )
}

export default Habilidades