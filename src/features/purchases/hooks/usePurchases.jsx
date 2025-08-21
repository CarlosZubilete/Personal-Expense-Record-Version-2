import { useState, useEffect } from "react";
import purchaseService from "../services/purchaseService";

const savePurchase = async (id, values) => {
  if (id) return purchaseService.editByID(id, values);
  return purchaseService.create(values);
};

export const usePurchases = (id) => {
  const [list, setList] = useState([]);
  const [purchase, setPurchase] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // *Get list from localStorage*
  useEffect(() => {
    purchaseService
      .list()
      .then((data) => {
        // console.log("get data from purchaseService: ok => ", data); // shows 5 times
        setList(data);
      })
      .catch((error) => {
        console.log("get data from purchaseService : error  =>", error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (id) {
      purchaseService
        .findById(id)
        .then((doc) => setPurchase(doc))
        .catch((error) => console.error("Error fetching purchase:", error));
    }
  }, [id]);

  // *Handle add or edit Form*
  const handlePurchaseForm = (values, { resetForm }) => {
    setSubmitting(true);
    console.log("setSubmitting: ");
    try {
      savePurchase(id, values)
        .then((doc) => {
          setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
            setPurchase(doc);
            console.log("First them of handlePurchaseForm : doc =>", doc);
          }, 1500);
          // update list on memory
          return purchaseService.list();
        })
        .then((data) => {
          setList(data);
          resetForm();
          console.log("Second them of handlePurchaseForm : data =>", data);
        })
        .catch(() => {
          console.error("Error saving purchase:", error);
          setSubmitting(false);
          setSuccess(false);
        });
    } catch (error) {
      console.error("Error saving purchase:", error);
      setSubmitting(false);
      setSuccess(false);
    }
  };

  // *Handle delete button*

  const handleDeletePurchase = (purchaseId) => {
    purchaseService
      .deleteByID(purchaseId)
      .then(() => purchaseService.list())
      .then((data) => {
        setList(data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error deleting purchase:", error);
        setSuccess(false);
      });
  };

  return {
    handlePurchaseForm,
    handleDeletePurchase,
    list,
    purchase,
    success,
    error,
    submitting,
  };
};

/* 

  useEffect(() => {
    try {
      const saveList = localStorage.getItem("purchaseList");
      if (saveList) setList(JSON.parse(saveList));
    } catch (error) {
      console.log("Error loading purchase list: ", error);
      setError(error);
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

  const handlePurchaseDeleteButton = (_id) => {
    console.log("handlePurchaseDeleteButton => ", _id);
    const newList = list.filter((purchase) => purchase._id != _id);
    try {
      setList(newList);
      localStorage.setItem("purchaseList", JSON.stringify(newList));
    } catch (error) {
      console.log("Error saving purchase: ", error);
    }
  };

  return { handlePurchaseForm, list, handlePurchaseDeleteButton };
*/
