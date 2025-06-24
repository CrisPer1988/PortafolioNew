import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div id="contacto" className="container__footer">
      <div className="icons__footer">
        <div className="item__icons linkedin">
          <a
            href="https://www.linkedin.com/in/cristian-norberto-perez-2b1b52260/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <h5>LinkedIn</h5>
        </div>

        <div className="item__icons github">
          <a href="https://github.com/CrisPer1988" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <h5>GitHub</h5>
        </div>

        <div className="item__icons whatsapp">
          <a href="https://wa.me/5492622468440" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <h5>WhatsApp</h5>
        </div>

        <div className="item__icons cv">
          <a href="/images/CV-0109.pdf" target="_blank" rel="noopener noreferrer">
            <i className="bx bx-download"></i>
          </a>
          <h5>CV</h5>
        </div>
      </div>

      <h6 className="createBy">Copyright © 2024 Cristian Perez. All rights reserved.</h6>
    </div>
  );
};

export default Footer;
