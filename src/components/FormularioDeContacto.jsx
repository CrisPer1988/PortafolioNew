import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/formulario.css";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const FormularioDeContacto = () => {
  const [t, i18next] = useTranslation("contact");
  const [state, handleSubmit] = useForm("xnqyongg");

  if (state.succeeded) {
    return (
      <div className="content__form">
        <div className="form__items">
          <h2>¡Gracias por contactarme!</h2>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "var(--text-light)" }}>
            Te responderé a la brevedad posible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="content__form">
      <form
        data-aos="fade-down"
        duration="10000"
        className="form__items"
        onSubmit={handleSubmit}
      >
        <h2>{t("contact.title")}</h2>
        
        <div className="item__form">
          <label htmlFor="name">{t("contact.labelName")}</label>
          <input
            placeholder={t("contact.inputName")}
            id="name"
            type="text"
            name="name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        
        <div className="item__form">
          <label htmlFor="email">{t("contact.labelEmail")}</label>
          <input
            placeholder={t("contact.inputEmail")}
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="item__form">
          <label htmlFor="message">{t("contact.labelMessage")}</label>
          <textarea
            placeholder={t("contact.inputMessage")}
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          
          <button
            className="btn__form"
            type="submit"
            disabled={state.submitting}
          >
            <span>{state.submitting ? "Enviando..." : "Enviar"}</span>
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default FormularioDeContacto;
