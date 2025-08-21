import { useState, useEffect } from "react";
import purchaseService from "../services/purchaseService";

const savePurchase = (id, values) => {
  if (id) return purchaseService.editByID(id, values);
  return purchaseService.create(values);
};

export const usePurchases = (id) => {
  const [list, setList] = useState([]);
  const [purchase, setPurchase] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  // const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);

  const refreshPurchases = () => {
    try {
      const data = purchaseService.list();
      setList(data);
      setError(false);
    } catch (err) {
      console.error("Error loading purchases: ", err);
      setError(true);
    }
  };

  // *Handle add or edit Form*
  const handlePurchaseForm = (values, { resetForm }) => {
    setSubmitting(true);
    setSuccess(false);
    setError(null);

    setTimeout(() => {
      try {
        savePurchase(id, values);
        refreshPurchases();
        resetForm();
        setSuccess(true);
      } catch (error) {
        console.error("Error saving purchase:", error);
        setError(true);
        setSuccess(false);
      } finally {
        setSubmitting(false);
      }
    }, 1000);
  };

  // *Handle delete button*
  const handleDeletePurchase = (purchaseId) => {
    try {
      const ok = purchaseService.deleteByID(purchaseId);
      if (ok) {
        refreshPurchases();
        setSuccess(true);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (err) {
      console.error("Error deleting purchase:", err);
      setSuccess(false);
    }
  };

  // *Get list from localStorage*
  useEffect(() => {
    refreshPurchases();
  }, []);

  useEffect(() => {
    if (id) {
      try {
        const doc = purchaseService.findById(id);
        setPurchase(doc);
      } catch (err) {
        console.error("Error fetching purchase: ", err);
      }
    }
  }, [id]);

  return {
    handlePurchaseForm,
    handleDeletePurchase,
    refreshPurchases,
    list,
    purchase,
    success,
    error,
    submitting,
  };
};
