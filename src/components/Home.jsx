import "./styles/home.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Home = () => {

  const [showAmigo, setAmigoShow] = useState(false);

  const handleCloseAmigo = () => setAmigoShow(false);
  const handleShowAmigo = () => setAmigoShow(true);

  console.log(showAmigo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <section id='home' className='container-md content__home'>
        <div className='body__home'>
            <h2 className='title__home'>Hola, Soy <span>Cristian! </span>
            desarrollador Full Stack</h2>
            <img className="img__home" src="./images/home-image.png" alt="" />

            <div>
            
          <h3>Bienvenido: <br /> Voy a presentarme como amigo y como profesional asi podras conocerme a fondo</h3>

          <div className="content__modal">
          
          <Button variant="warning" onClick={handleShowAmigo}>
        Click para conocer una amigo
      </Button>

      <Modal size="lg" show={showAmigo} onHide={handleCloseAmigo}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por leerme...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="presentacion">
          Hincha de Boca Juniors y musico autodidacta. Como buen Argentino tomo mate 2 o 3 veces por dia.
          <br /> Tengo esposa y 3 hijos en edad escolar.
          Amante de la musico rock, sobre todo rock Argentino, pero como gran parte del mundo me rindo ante The Beatles 
          y Queen. Tengo varios idolos, todos dentro de casa y de la familia. <br />
          Considero que si en un trabajo, el equipo que te acompaña no es amigo, realmente estas perdiendo el tiempo.

          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseAmigo}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="warning" onClick={handleShow}>
        Click para conocer un profesional
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por leerme...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="presentacion">Como ya te mencione, soy desarrollador
            Full Stack y un apasionado por la tecnologia.
            <br />Muchos de mis proyectos
            fueron realizados en equipo, algo que me fascina, siempre atento
            a las necesidades del equipo y logrando los resultados esperados.
            Te voy a dejar algunos de mis trabajos en la seccion Proyectos.
            Personalmente me encanta React.js y Node.js, considero que es la combinacion JavaScript mas potente.
            Sin mas preambulos, te invito a hacer scroll o a utilizar el menu 
            de la parte superior para dirigirte a donde guste.
            Estoy a tu entera disposicion. <br /> Abrazo grande de tu amigo y futuro
            compañero de trabajo Cristian.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
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