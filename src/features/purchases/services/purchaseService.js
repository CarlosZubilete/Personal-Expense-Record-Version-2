const STORAGE_KEY = "purchaseList";

function getAll() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveAll(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export default {
  list: () => {
    return getAll();
  },

  create: (values) => {
    const newPurchase = { ...values, _id: crypto.randomUUID() };
    const list = getAll();
    list.push(newPurchase);
    saveAll(list);
    return newPurchase;
  },

  findById: (id) => {
    const list = getAll();
    const purchase = list.find((p) => p._id === id);
    return purchase || null;
  },

  editByID: (id, values) => {
    const list = getAll();
    const index = list.findIndex((p) => p._id === id);
    if (index !== -1) {
      list[index] = { ...list[index], ...values };
      saveAll(list);
      return list[index];
    }
    throw new Error("Purchase not found");
  },

  deleteByID: (id) => {
    const list = getAll();
    const newList = list.filter((p) => p._id !== id);
    saveAll(newList);
    return true;
  },
};
