import "../styles/Home.css";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { GiCash } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
// Sample data for the visual demo (replace with real data from your localStorage service)
const sampleExpenses = [
  {
    id: 1,
    name: "Café",
    amount: 150,
    date: "2025-08-20",
    category: "Alimentación",
  },
  {
    id: 2,
    name: "Groceries",
    amount: 3200,
    date: "2025-08-19",
    category: "Hogar",
  },
  {
    id: 3,
    name: "Transporte",
    amount: 500,
    date: "2025-08-18",
    category: "Transporte",
  },
  {
    id: 4,
    name: "Película",
    amount: 1200,
    date: "2025-08-17",
    category: "Ocio",
  },
];

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
      {/* HERO */}
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
            onClick={() => navigate("/purchase")}
            aria-label="Comenzar ahora - ir a registro de gasto"
          >
            Iniciar Segumiento.
          </motion.button>
        </motion.div>
      </section>

      {/* EXPLAINER FLOW */}
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
  );
};

/*
FINAL CTA 
<section className="mt-12 max-w-4xl mx-auto text-center py-10">
  <motion.h4
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-lg font-semibold"
  >
    🚀 Listo para ver tu dinero con claridad. Vamos
  </motion.h4>

</section>
<motion.button
  className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold shadow-lg"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => navigate("/purchase")}
  aria-label="Comenzar a registrar gastos"
>
  Iniciar seguimiento.
</motion.button>
*/

/* 
/* VISUAL DEMO *
<section className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <div className="space-y-4">
    <h4 className="text-xl font-semibold">
      Así se ven tus gastos en un lugar limpio
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      Tu lista se muestra con nombre, monto y fecha. Todo simple para
      revisar en segundos.
    </p>
    <div className="space-y-3 mt-4">
      {sampleExpenses.map((e) => (
        <motion.div
          key={e.id}
          className="flex justify-between items-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-md shadow-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * e.id }}
        >
          <div>
            <div className="font-medium">{e.name}</div>
            <div className="text-xs text-gray-500">
              {e.date} • {e.category}
            </div>
          </div>
          <div className="font-semibold">${e.amount}</div>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="h-64 bg-white/60 dark:bg-gray-800/60 rounded-md p-2 shadow-md">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value} ARS`} />
      </PieChart>
    </ResponsiveContainer>
  </div>
</section>
*/
