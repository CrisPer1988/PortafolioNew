import "./styles/home.css"
import React from 'react';

const Home = () => {

 

  return (
  <header id="home" className="container__home">
    <div className="content__text-home">
      <h1>Hola, soy Cristian</h1>
      <h4>DESARROLLADOR FULL STACK</h4>
      <h5>Bienvenid@</h5>
    </div>
    <div className="animation__home"><img src="images/home-image-removebg-preview.png" alt="" /></div>
  </header>
  )
}

export default Home