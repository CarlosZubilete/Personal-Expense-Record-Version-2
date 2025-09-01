import "../styles/Home.css";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaListAlt,
  FaRecycle,
} from "react-icons/fa";
import { motion } from "framer-motion";

export const Home = () => {
  // Variants para animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="home-root">
      {/* Hero */}
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="home-title">Control Personal de Gastos</h1>
        <p className="home-desc">
          Gestiona tus gastos de manera eficiente y mantén el control de tus
          finanzas personales
        </p>
        <div className="home-cta">
          <Link to="/purchase-add">
            <button className="home-cta-btn">Comenzar Ahora</button>
          </Link>
        </div>
      </motion.section>

      {/* Steps */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="home__workflow"
      >
        <div className="home__steps">
          <motion.div className="home__step" variants={item}>
            <div className="home__step-number">1</div>
            <div className="home__step-icon">
              <FaMoneyBillWave />
            </div>
            <h3 className="home__step-title">Registra tus Gastos</h3>
            <p className="home__step-desc">
              Ingresa fácilmente tus compras y gastos diarios con detalles
              completos
            </p>
          </motion.div>

          <motion.div className="home__step" variants={item}>
            <div className="home__step-number">2</div>
            <div className="home__step-icon">
              <FaListAlt />
            </div>
            <h3 className="home__step-title">Organiza y Filtra</h3>
            <p className="home__step-desc">
              Mantén tus gastos organizados y encuentra rápidamente lo que
              buscas
            </p>
          </motion.div>

          <motion.div className="home__step" variants={item}>
            <div className="home__step-number">3</div>
            <div className="home__step-icon">
              <FaChartLine />
            </div>
            <h3 className="home__step-title">Visualiza tu Progreso</h3>
            <p className="home__step-desc">
              Observa patrones y tendencias en tus hábitos de gasto
            </p>
          </motion.div>

          <motion.div className="home__step" variants={item}>
            <div className="home__step-number">
              <FaRecycle className="infinite-icon" />
            </div>
            <div className="home__step-icon">
              <FaRecycle />
            </div>
            <h3 className="home__step-title">Mejora Continuamente</h3>
            <p className="home__step-desc">
              Ajusta tus hábitos basándote en los datos y mejora tu salud
              financiera
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        className="home__features"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="home__feature" variants={item}>
          <div className="home__feature-icon">💰</div>
          <h3 className="home__feature-title">Gestión Simple</h3>
          <p className="home__feature-desc">
            Interfaz intuitiva para registrar y gestionar tus gastos diarios
          </p>
        </motion.div>

        <motion.div className="home__feature" variants={item}>
          <div className="home__feature-icon">🔍</div>
          <h3 className="home__feature-title">Búsqueda Avanzada</h3>
          <p className="home__feature-desc">
            Encuentra rápidamente cualquier gasto con nuestros filtros
            inteligentes
          </p>
        </motion.div>

        <motion.div className="home__feature" variants={item}>
          <div className="home__feature-icon">📊</div>
          <h3 className="home__feature-title">Organización Clara</h3>
          <p className="home__feature-desc">
            Mantén tus finanzas organizadas y fáciles de entender
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
