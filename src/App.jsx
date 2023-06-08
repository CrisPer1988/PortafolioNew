import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import FormularioDeContacto from './components/FormularioDeContacto'
import Footer from './components/Footer'
import SeccionImg from './components/SeccionImg'
import CaruselPrueba from './components/CaruselPrueba'
import AcercaDeMi from './components/AcercaDeMi'


function App() {

  return (

    <div className="App">
     <NavBar 
 
     />
     
     <Home/>
     <AcercaDeMi />
    <Proyectos />
    <SeccionImg />
    <Habilidades />
    <FormularioDeContacto />
    <Footer />
    <CaruselPrueba />

    </div>
  )
}

export default App
