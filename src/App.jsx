import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import FormularioDeContacto from "./components/FormularioDeContacto";
import Footer from "./components/Footer";
import SeccionImg from "./components/SeccionImg";
import CaruselPrueba from "./components/CaruselPrueba";
import AcercaDeMi from "./components/AcercaDeMi";
import ProyectoActual from "./components/ProyectoActual";

function App() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className={`App ${mode && "dark_mode"}`}>
      <div onClick={handleMode} className="mode">
        {mode ? (
          <i className="bx bxs-sun moon__sun"></i>
        ) : (
          <i className="bx bxs-moon moon__sun"></i>
        )}
      </div>
      
      <NavBar />
      <Home mode={mode} />
      <Proyectos />
      <ProyectoActual />
      <Habilidades />
      <FormularioDeContacto />
      <Footer />
    </div>
  );
}

export default App;
