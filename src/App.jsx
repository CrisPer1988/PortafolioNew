import React from 'react'
import './App.css'
import { Button} from 'react-bootstrap'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'


function App() {

  return (
    <div className="App">
     <NavBar />
     
     <Home />

    
    <Proyectos />
    <Habilidades />
    </div>
  )
}

export default App
