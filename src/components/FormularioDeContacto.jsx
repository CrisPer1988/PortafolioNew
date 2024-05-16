import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/formulario.css";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const FormularioDeContacto = () => {
  const [t, i18next] = useTranslation("contact");

  const [state, handleSubmit] = useForm("xnqyongg");
  if (state.succeeded) {
    return confirm("Gracias por contactarme!!! A la brevedad te respondere");
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
            type="name"
            name="name"
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
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="item__form">
          <label htmlFor="">{t("contact.labelMessage")}</label>
          <textarea
            className="puto"
            placeholder={t("contact.inputMessage")}
            id="message"
            name="message"
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
            Enviar
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default FormularioDeContacto;
