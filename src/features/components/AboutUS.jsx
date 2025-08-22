import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="about-us container-fluid">
      {/* header */}
      <motion.header
        className="about-us__header text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="about-us__title">Sobre Nosotros</h1>
        <p className="about-us__subtitle">
          Esta aplicación nació con la idea de ayudarte a organizar tus gastos
          de manera clara, simple y accesible.
        </p>
      </motion.header>

      {/* Main Section */}
      <div className="row justify-content-center">
        <motion.section
          className="about-us__content col-12 col-md-8 d-flex flex-column align-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="about-us__heading mb-3">Nuestra Historia</h2>
          <p className="about-us__text mb-4">
            Empezamos como un pequeño proyecto personal para aprender React y
            rápidamente vimos el potencial de crear una herramienta práctica
            para el día a día. Nuestro objetivo es que cualquiera pueda
            registrar y visualizar sus gastos sin complicaciones.
          </p>

          <h2 className="about-us__heading mb-3">Tecnologías que usamos</h2>
          <ul className="about-us__list mb-4">
            <li className="about-us__list-item">⚛️ React con Vite</li>
            <li className="about-us__list-item">
              🎨 CSS con variables para dark mode
            </li>
            <li className="about-us__list-item">📦 React Router DOM</li>
            <li className="about-us__list-item">
              📊 Recharts para visualizaciones
            </li>
            <li className="about-us__list-item">
              ✨ Framer Motion para animaciones
            </li>
          </ul>

          <h2 className="about-us__heading mb-3">Próximos pasos</h2>
          <p className="about-us__text">
            Planeamos agregar reportes más avanzados, integración con categorías
            personalizadas y una experiencia de usuario aún más fluida. Queremos
            que esta app evolucione contigo.
          </p>
        </motion.section>
      </div>
    </div>
  );
};
