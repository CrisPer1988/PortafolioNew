import React from 'react'
import "./styles/footer.css"

const Footer = () => {
  return (
    <div  id='contacto' className='container-md container__footer'>
    <div className='icons__footer'>
            <div className='item__icons'>
            
            <a href=""><i class='bx bxl-linkedin'></i></a>
            </div>
            <div className='item__icons'>
           
            <a href=""><i class='bx bxl-github' ></i></a>
            </div>
            <div className='item__icons'>
            
            <a href=""><i class='bx bxl-whatsapp'></i></a>
            </div>
        </div>
        <h6 className='createBy'>Creado por Cristian</h6>
        </div>
  )
}

export default Footer