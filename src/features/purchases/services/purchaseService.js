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

  /*
  sort: (sortOptions) => {
    const list = getAll();

    if (!sortOptions || Object.keys(sortOptions).length === 0) {
      return list;
    }

    return [...list].sort((a, b) => {
      const [field] = Object.keys(sortOptions);
      const direction = sortOptions[field];

      if (field === "price") {
        return direction === 1 ? a.price - b.price : b.price - a.price;
      }

      if (field === "name") {
        return direction === 1
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      return 0;
    });
  },
*/
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
