const STORAGE_KEY = "purchaseList";

function getAll() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveAll(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export default {
  list: async () => {
    return getAll();
  },

  create: async (values) => {
    const newPurchase = { ...values, _id: crypto.randomUUID() };
    const list = getAll();
    list.push(newPurchase);
    saveAll(list);
    return newPurchase;
  },

  findById: async (id) => {
    const list = getAll();
    const purchase = list.find((p) => p._id === id);
    return purchase || null;
  },

  editByID: async (id, values) => {
    const list = getAll();
    const index = list.findIndex((p) => p._id === id);
    if (index !== -1) {
      list[index] = { ...list[index], ...values };
      saveAll(list);
      return list[index];
    }
    throw new Error("Purchase not found");
  },

  deleteByID: async (id) => {
    const list = getAll();
    const newList = list.filter((p) => p._id !== id);
    saveAll(newList);
    return true;
  },
};

/* 
  const updateList = (newList) => {
    try {
      setList(newList);
      localStorage.setItem("purchaseList", JSON.stringify(newList));
      setSuccess(true);
      return true;
    } catch (err) {
      setError(err);
      return false;
    }
  };

  const addPurchase = (values) => {
    const document = { ...values, _id: crypto.randomUUID() };
    return updateList([...list, document]); 
  };

  const deletePurchase = (_id) => {
    return updateList(list.filter((p) => p._id !== _id)); 
  };

  const updatePurchase = (_id, updatedData) => {
    return updateList(
      list.map((p) => (p._id === _id ? { ...p, ...updatedData } : p))
    );
  };

  const getPurchaseById = (_id) => {
    const found = list.find((p) => p._id === _id) || null;
    setPurchase(found);
    return found;
  };

  const clearStatus = () => {
    setSuccess(false);
    setError(null);
  };

*/
