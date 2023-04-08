import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'
import FormularioDeContacto from './components/FormularioDeContacto'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
     <NavBar />
     
     <Home />

    
    <Proyectos />
    <Habilidades />
    <FormularioDeContacto />
    <Footer />
    </div>
  )
}

export default App
