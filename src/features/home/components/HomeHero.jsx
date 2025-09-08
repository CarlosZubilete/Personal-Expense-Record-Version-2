import { motion } from "framer-motion";
import { Login } from "../../account/components/Login";
import "../styles/HomeHero.css";
export const HomeHero = () => {
  return (
    <motion.section className="hero-container">
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="home-title">Control Personal de Gastos</h1>
        <p className="home-description">
          Gestiona tus gastos de manera eficiente y mantén el control de tus
          finanzas personales en un par de clicks
        </p>
      </motion.section>
      {/* Login */}
      <motion.section className="hero-login">
        <Login />
      </motion.section>
      {/* Hero */}
    </motion.section>
  );
};
