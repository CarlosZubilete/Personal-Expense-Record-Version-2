import "../styles/PurchaseFilter.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Input } from "reactstrap";

export const PurchaseFilter = ({ handleFilterList, orderBy, filterTxt }) => {
  // handle the form submission
  const handleSubmitPurchaseFilter = (values, { setSubmitting }) => {
    // console.log("Form Values:", values);
    const nextOrderBy = {};
    if (values.key !== "0" && values.value !== "0") {
      nextOrderBy.key = values.key;
      nextOrderBy.value = parseInt(values.value);

      handleFilterList({ key: nextOrderBy.key, value: nextOrderBy.value });

      if (values.filterTxt.trim().length > 0) {
        handleFilterList({ ...nextOrderBy, filterTxt: values.filterTxt });
      }
    } else if (values.filterTxt.trim().length > 0) {
      handleFilterList({ filterTxt: values.filterTxt });
    }

    setSubmitting(false);
  };

  return (
    <div className="purchase-filter">
      <Formik
        initialValues={{
          filterTxt: filterTxt || "",
          key: orderBy?.key || "",
          value: orderBy?.value || "",
        }}
        onSubmit={handleSubmitPurchaseFilter}
      >
        {({ handleChange, values, resetForm, isSubmitting }) => (
          <Form className="purchase-filter__form">
            {/* FIRST FILTER */}
            <FormGroup className="purchase-filter__group">
              <label htmlFor="filter" className="purchase-filter__label">
                Filtrar por nombre:
              </label>
              <Input
                tag={Field}
                type="text"
                id="filterTxt"
                name="filterTxt"
                className="purchase-filter__input"
              />
              <ErrorMessage
                name="filterTxt"
                component="div"
                className="purchase-filter__error"
              />
            </FormGroup>
            {/* SECOND FILTER */}
            <FormGroup className="purchase-filter__group">
              <label htmlFor="key" className="purchase-filter__label">
                Ordenar por
              </label>
              <Field
                name="key"
                as="select"
                className="purchase-filter__select"
                value={values.key}
                onChange={handleChange}
              >
                <option value="0">-- Seleccionar --</option>
                <option value="name">Nombre</option>
                <option value="price">Precio</option>
              </Field>
            </FormGroup>
            <FormGroup className="purchase-filter__group">
              <label htmlFor="value" className="purchase-filter__label">
                De forma:
              </label>
              <Input
                tag={Field}
                name="value"
                as="select"
                className="purchase-filter__select"
                value={values.value}
                onChange={handleChange}
              >
                <option value="0">-- Seleccionar --</option>
                <option value="1">Ascendente</option>
                <option value="-1">Descendente</option>
              </Input>
            </FormGroup>
            <div className="purchase-filter__actions">
              <button
                type="submit"
                className="purchase-filter__btn purchase-filter__btn--submit"
              >
                Filtrar
              </button>
              <button
                type="submit"
                className="purchase-filter__btn purchase-filter__btn--reset"
                onClick={() => {
                  resetForm();
                  handleFilterList({ key: "", value: "", filterTxt: "" });
                }}
              >
                {!isSubmitting ? "Limpiar filtros" : "Limpiando..."}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
