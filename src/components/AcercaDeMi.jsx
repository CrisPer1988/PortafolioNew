import {useState} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next";


import "./styles/acercaDeMi.css"

const AcercaDeMi = () => {
  const [t, i18n] = useTranslation("about_me")
  


  return (
    <section data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" id='acercaDeMi' className="content__home">
      <div className='vector__aboutme1'></div>
      <div className='vector__aboutme2'></div>
      <div className='vector__aboutme3'>:::::</div>
      <div className='acercaDeMi__text'>
        <div className='content__title-carita'>
        <h1>{t("about_me.title")}<br /> <h3>{t("about_me.subtitle")}</h3></h1>
        <span className='carita'>🤔</span>
        </div>
        
        <ul>
          <li className='title__hablandas'>{t("about_me.li1")}</li>
          <h5 className='description__ol'>{t("about_me.ul1")}</h5>
          <li className='title__hablandas'>{t("about_me.li2")}</li>
          <h5 className='description__ol'>{t("about_me.ul2")}</h5>
          <li className='title__hablandas'>{t("about_me.li3")}</li>
          <h5 className='description__ol'>{t("about_me.ul3")}</h5>
          <li className='title__hablandas'>{t("about_me.li4")}</li>
          <h5 className='description__ol'>{t("about_me.ul4")}</h5>
          <li className='title__hablandas'>{t("about_me.li5")}</li>
          <h5 className='description__ol'>{t("about_me.ul5")}</h5>
          <h5 className='description__ol'>{t("about_me.ul5_2")}</h5>
          <li className='title__hablandas'>{t("about_me.li6")}</li>
          <h5 className='description__ol'>{t("about_me.ul6")}</h5>
        </ul>
      </div>
      {/* <div>
        <img className='img__acerca' src="images/acercaDeMiIMG.png" alt="" />
      </div> */}
    </section>
  )
}

export default AcercaDeMi