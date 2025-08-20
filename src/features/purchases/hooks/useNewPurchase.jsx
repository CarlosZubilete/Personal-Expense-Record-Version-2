import { useState, useEffect } from "react";

export const useNewPurchase = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      const saveList = localStorage.getItem("purchaseList");
      if (saveList) setList(JSON.parse(saveList));
    } catch (error) {
      console.log("Error loading purchase list: ", error);
    }
  }, []);

  const handlePurchaseForm = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    const document = { ...values, _id: window.crypto.randomUUID() };
    const newList = [...list, document];
    try {
      setList(newList);
      localStorage.setItem("purchaseList", JSON.stringify(newList));
    } catch (error) {
      console.log("Error saving purchase: ", error);
    }
    setTimeout(() => {
      console.log("New register => ", document);
      console.log("Total => ", newList);
      resetForm();
      setSubmitting(false);
    }, 1500);
  };

  return { handlePurchaseForm, list };
};

/* 
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const saveList = localStorage.getItem("purchaseList");
  //   if (saveList) setList(JSON.parse(saveList));
  // }, []);


*/
