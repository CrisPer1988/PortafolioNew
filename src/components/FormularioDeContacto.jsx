import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import "./styles/formulario.css"
import "aos/dist/aos.css"

const FormularioDeContacto = () => {
    
    const [state, handleSubmit] = useForm("xnqyongg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    

  return (
    <div className='content__form'>
    <form data-aos="fade-down" duration="10000" className='form__items' onSubmit={handleSubmit}>
    <h2>Contactame</h2>
<div className="item__form">
<label htmlFor="name">
        Nombre
      </label>
      <input
      placeholder='Escribe tu nombre'
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      </div>
    <div className="item__form">
      <label htmlFor="email">
        Email
      </label>
      <input
      placeholder='Escribe tu email'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>

    <div className="item__form">
        <label htmlFor="">Mensaje</label>
      <textarea
      placeholder='Escribe tu mensaje'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn__form' type="submit" disabled={state.submitting}>
        Enviar
      </button>
      </div>
      
    </form>
    <hr />
    
    </div>
    
  )
}

export default FormularioDeContacto