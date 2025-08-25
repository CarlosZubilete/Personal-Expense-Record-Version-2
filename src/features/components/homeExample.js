// !is not a component, just data to show in Home component. No hooks or jsx here

import { LuListTodo } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";

export const sampleExpenses = [
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

export const features = [
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
