import "./styles/home.css"
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {

  useEffect(() => {
   Aos.init()
  }, [])
  

  const [showAmigo, setAmigoShow] = useState(false);

  const handleCloseAmigo = () => setAmigoShow(false);
  const handleShowAmigo = () => setAmigoShow(true);


  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <section id='home' className='content__home'>
     
          <div className='body__home'>
            <h2 data-aos="fade-down" duration="6000" className='title__home'>Soy <span>Cristian! </span>
            desarrollador Full Stack</h2>
            <img className="img__home" src="./images/home-image-removebg-preview.png" alt="" />

          <div>

          
            
          <h3>Bienvenido:</h3>
          <h4>Voy a presentarme como amigo y como profesional, asi podras conocerme a fondo</h4> 

          <div className="content__modal">
          
          <Button className="btn__home" variant="dark" expand="lg" onClick={handleShowAmigo}>
        Conoce un amigo
      </Button>

      <Modal size="lg" show={showAmigo} onHide={handleCloseAmigo}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por leerme...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="presentacion">
          Hincha de Boca Juniors y músico autodidacta. Como buen Argentino tomo mate 2 o 3 veces por día.
          <br /> Tengo esposa y 3 hijos en edad escolar.
          Amante de la musica rock, sobre todo rock Argentino, pero como gran parte del mundo me rindo ante The Beatles 
          y Queen. Tengo varios ídolos, todos dentro de casa y de la familia. <br />
          Considero que si en un trabajo, el equipo que te acompaña no es amigo, realmente estas perdiendo el tiempo.

          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseAmigo}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button className="btn__home" variant="dark" expand="lg" onClick={handleShow}>
        Conoce un profesional
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por leerme...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="presentacion">Como ya te mencione, soy desarrollador
            Full Stack y un apasionado por la tecnología.
            <br />Muchos de mis proyectos
            fueron realizados en equipo, algo que me fascina, siempre atento
            a las necesidades del equipo y logrando los resultados esperados.
            Te voy a dejar algunos de mis trabajos en la sección Proyectos.
            Personalmente me encanta React.js y Node.js, considero que es la combinación JavaScript mas potente.
            Sin mas preambulos, te invito a hacer scroll o a utilizar el menú 
            de la parte superior para dirigirte a donde guste.
            Estoy a tu entera disposición. <br /> Abrazo grande de tu amigo y futuro
            compañero de trabajo Cristian.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
         
          </div>  
   
        </div>  

         



       
      
    </section>
  )
}

export default Home