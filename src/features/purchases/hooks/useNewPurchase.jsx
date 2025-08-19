export const useNewPurchase = () => {
  const handlePurchaseForm = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);

    setTimeout(() => {
      console.log(values);
      resetForm();
      setSubmitting(false);
    }, 1500);
  };

  return { handlePurchaseForm };
};
