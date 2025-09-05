import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

export const AboutUs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.14 } },
  };
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="about-us page-container">
      {/* HERO */}
      <motion.header
        className="about-us__hero"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="about-us__title">Somos Control Personal de Gastos</h1>
        <p className="about-us__lead">
          Una app simple para registrar, entender y mejorar tus hábitos de
          gasto. Rápida, directa y sin complicaciones.
        </p>

        <div className="about-us__hero-ctas">
          <Link to="/purchase-add" className="btn btn-primary">
            Probar ahora
          </Link>
          <a
            href="https://github.com/CarlosZubilete/Personal-Expense-Record"
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Ver código
          </a>
        </div>
      </motion.header>

      {/* MAIN GRID */}
      <motion.main
        className="about-us__grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT: Story + Benefits */}
        <motion.section className="about-us__panel" variants={item}>
          <h2 className="about-us__heading">Nuestra historia</h2>
          <p className="about-us__text">
            Nacimos como un proyecto personal para aprender y resolver un
            problema real: hacer el seguimiento de gastos personal accesible.
            Empezamos con lo mínimo viable y hoy queremos ayudar a cualquiera a
            tomar mejores decisiones con datos claros.
          </p>

          <h3 className="about-us__subheading">Por qué te sirve</h3>
          <ul className="about-us__benefits">
            <li>
              <strong>Registrar en segundos:</strong> agrega gastos rápido y
              vuelve a tu día.
            </li>
            <li>
              <strong>Filtrar y ordenar:</strong> encuentra lo que buscás sin
              perder tiempo.
            </li>
            <li>
              <strong>Mejorar con datos:</strong> patrones simples que te ayudan
              a ajustar hábitos.
            </li>
          </ul>
        </motion.section>

        {/* RIGHT: Vision/Mission + Tech */}
        <motion.aside
          className="about-us__panel about-us__aside"
          variants={item}
        >
          <div className="about-us__card">
            <h3 className="about-us__small-heading">Misión</h3>
            <p className="about-us__text small">
              Hacer que controlar tus finanzas sea rápido, accesible y
              entendible para todos.
            </p>
          </div>

          <div className="about-us__card">
            <h3 className="about-us__small-heading">Visión</h3>
            <p className="about-us__text small">
              Ser la herramienta preferida para personas que buscan simplicidad
              y claridad en sus gastos.
            </p>
          </div>

          <div className="about-us__card tech">
            <h3 className="about-us__small-heading">Tecnologías</h3>
            <div className="tech__list">
              <span className="tech__chip">React + Vite</span>
              <span className="tech__chip">React Router</span>
              <span className="tech__chip">Framer Motion</span>
              <span className="tech__chip">Formik + Yup</span>
              <span className="tech__chip">Reactstrap + bootstrap</span>
              <span className="tech__chip">Sweet Alerts</span>
            </div>
          </div>
        </motion.aside>
      </motion.main>

      {/* FOOTER / CTA FINAL */}
      <motion.footer className="about-us__footer" variants={item}>
        <p className="about-us__final">
          Si querés colaborar o ver el código, podés visitar el repositorio en
          GitHub.
        </p>
      </motion.footer>
    </div>
  );
};
