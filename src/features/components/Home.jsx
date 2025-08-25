import "../styles/Home.css";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import { GiCash } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
// Sample data for the visual demo (replace with real data from your localStorage service)
// import { features } from "./homeExample";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaListAlt,
  FaRecycle,
} from "react-icons/fa";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

// Small helper to aggregate by category for the pie chart
// const aggregateByCategory = (items) => {
//   const map = {};
//   items.forEach((it) => {
//     map[it.category] = (map[it.category] || 0) + Number(it.amount);
//   });
//   return Object.entries(map).map(([name, value]) => ({ name, value }));
// };

export const Home = () => {
  const navigate = useNavigate();
  // const pieData = aggregateByCategory(sampleExpenses);

  // todo: replace with real features data from a constants file or create a homeExample.js file
  const features = [
    {
      id: 1,
      icon: <GiCash className="home__feature-icon" />,
      title: "Agrega lo que gastas — rápido y simple",
      desc: "Toma solo segundos registrar un gasto y seguir en tu día.",
    },
    {
      id: 2,
      icon: <LuListTodo className="home__feature-icon" />,
      title: "Observa tus gastos organizarse solos",
      desc: "La lista y las cifras se actualizan al instante para que veas el panorama.",
    },
    {
      id: 3,
      icon: <IoGameController className="home__feature-icon" />,
      title: "Relájate — edita o elimina cuando quieras",
      desc: "Todo es reversible: corrige errores o elimina entradas fácilmente.",
    },
  ];

  return (
    <div className="home-root">
      <section className="home-hero">
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
      </section>

      <div className="home__workflow">
        <div className="home__steps">
          <div className="home__step">
            <div className="home__step-number">1</div>
            <div className="home__step-icon">
              <FaMoneyBillWave />
            </div>
            <h3 className="home__step-title">Registra tus Gastos</h3>
            <p className="home__step-desc">
              Ingresa fácilmente tus compras y gastos diarios con detalles
              completos
            </p>
          </div>

          <div className="home__step">
            <div className="home__step-number">2</div>
            <div className="home__step-icon">
              <FaListAlt />
            </div>
            <h3 className="home__step-title">Organiza y Filtra</h3>
            <p className="home__step-desc">
              Mantén tus gastos organizados y encuentra rápidamente lo que
              buscas
            </p>
          </div>

          <div className="home__step">
            <div className="home__step-number">3</div>
            <div className="home__step-icon">
              <FaChartLine />
            </div>
            <h3 className="home__step-title">Visualiza tu Progreso</h3>
            <p className="home__step-desc">
              Observa patrones y tendencias en tus hábitos de gasto
            </p>
          </div>

          <div className="home__step">
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
          </div>
        </div>
      </div>

      <div className="home__features">
        <div className="home__feature">
          <div className="home__feature-icon">💰</div>
          <h3 className="home__feature-title">Gestión Simple</h3>
          <p className="home__feature-desc">
            Interfaz intuitiva para registrar y gestionar tus gastos diarios
          </p>
        </div>

        <div className="home__feature">
          <div className="home__feature-icon">🔍</div>
          <h3 className="home__feature-title">Búsqueda Avanzada</h3>
          <p className="home__feature-desc">
            Encuentra rápidamente cualquier gasto con nuestros filtros
            inteligentes
          </p>
        </div>

        <div className="home__feature">
          <div className="home__feature-icon">📊</div>
          <h3 className="home__feature-title">Organización Clara</h3>
          <p className="home__feature-desc">
            Mantén tus finanzas organizadas y fáciles de entender
          </p>
        </div>
      </div>
    </div>
  );
};

/* 
<div className="home-root">
     
      <section className="home-hero">
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Convierte el caos en claridad.
        </motion.h1>
        <motion.p
          className="home-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          En pocos toques, verás a dónde va tu dinero y cómo gastar más
          inteligentemente — sin dolor de cabeza.
        </motion.p>
        <motion.div
          className="home-cta"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.45 }}
        >
          <motion.button
            className="home-cta-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/purchase-add")}
            aria-label="Comenzar ahora - ir a registro de gasto"
          >
            Iniciar Segumiento.
          </motion.button>
        </motion.div>
      </section>

    
      <section id="features" className="home__features">
        {features.map((f) => (
          <motion.div
            key={f.id}
            className="home__feature"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {f.icon}
            <h3 className="home__feature-title">{f.title}</h3>
            <p className="home__feature-desc">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>

*/
