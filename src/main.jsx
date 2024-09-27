import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import home_es from "./translation/components/home/es/home.json";
import home_en from "./translation/components/home/en/home.json";

import aboutMe_es from "./translation/components/aboutMe/es/about-me.json";
import aboutMe_en from "./translation/components/aboutMe/en/about-me.json";

import projects_en from "./translation/components/projects/en/projects.json";
import projects_es from "./translation/components/projects/es/projects.json";

import abilities_es from "./translation/components/abilities/es/abilities.json";
import abilities_en from "./translation/components/abilities/en/abilities.json";

import contact_es from "./translation/components/contact/es/contac.json";
import contact_en from "./translation/components/contact/en/contac.json";

import navBar_es from "./translation/components/navBar/es/navBar.json";
import navBar_en from "./translation/components/navBar/en/navBar.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      home: home_es,
      about_me: aboutMe_es,
      projects: projects_es,
      abilities: abilities_es,
      contact: contact_es,
      navBar: navBar_es,
    },
    en: {
      home: home_en,
      about_me: aboutMe_en,
      projects: projects_en,
      abilities: abilities_en,
      contact: contact_en,
      navBar: navBar_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
