import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaListAlt,
  FaRecycle,
} from "react-icons/fa";
import "../styles/HomeWorkFlow.css";

export const HomeWorkFlow = () => {
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
          <h3 className="home__step-title">Registrar tus Gastos</h3>
          <p className="home__step-desc">
            Ingresa fácilmente tus compras y gastos diarios con detalles
            completos.
          </p>
        </motion.div>

        <motion.div className="home__step" variants={item}>
          <div className="home__step-number">2</div>
          <div className="home__step-icon">
            <FaListAlt />
          </div>
          <h3 className="home__step-title">Organiza y Filtra</h3>
          <p className="home__step-desc">
            Mantén tus gastos organizados y encuentra rápidamente lo que buscas
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
  );
};
