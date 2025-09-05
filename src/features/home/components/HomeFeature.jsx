import "../styles/HomeFeature.css";
import { motion } from "framer-motion";

export const HomeFeature = () => {
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
  );
};
