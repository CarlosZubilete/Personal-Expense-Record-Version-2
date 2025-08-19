1. Chat no entinedo porque necesitarias dos useEffects ??

2. Que te parece mi componete , es un hook customizado

```
import { useState, useEffect } from "react";

export const useNewPurchase = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const saveList = localStorage.getItem("purchaseList");
    if (saveList) setList(JSON.parse(saveList));
  }, []);

  const handlePurchaseForm = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);

    const document = { ...values, id: window.crypto.randomUUID() };

    const newList = [...list, document];
    setList(newList);
    localStorage.setItem("purchaseList", JSON.stringify(newList));

    setTimeout(() => {
      console.log("New register => ", document);
      console.log("Total => ", list);
      resetForm();
      setSubmitting(false);
    }, 1500);
  };

  return { handlePurchaseForm , list};
};

```
