import "../styles/PurchaseFilter.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup } from "reactstrap";

export const PurchaseFilter = () => {
  return (
    <div className="purchase-filter">
      {/* <h3 className="purchase-filter__title">Filtrar compras</h3> */}
      <Formik>
        <Form className="purchase-filter__form">
          <FormGroup className="purchase-filter__group">
            <label htmlFor="filter" className="purchase-filter__label">
              Filtrar por nombre:
            </label>
            <Field
              type="text"
              id="filter"
              name="filter"
              className="purchase-filter__input"
            />
            <ErrorMessage
              name="filter"
              component="div"
              className="purchase-filter__error"
            />
          </FormGroup>
          <FormGroup className="purchase-filter__group">
            <label htmlFor="key" className="purchase-filter__label">
              Ordenar por
            </label>
            <Field name="key" as="select" className="purchase-filter__select">
              <option value="0">-- Seleccionar --</option>
              <option value="name">Nombre</option>
              <option value="price">Precio</option>
            </Field>
          </FormGroup>
          <FormGroup className="purchase-filter__group">
            <label htmlFor="value" className="purchase-filter__label">
              De forma:
            </label>
            <Field name="value" as="select" className="purchase-filter__select">
              <option value="0">-- Seleccionar --</option>
              <option value="1">Ascendente</option>
              <option value="-1">Descendente</option>
            </Field>
          </FormGroup>
          <div className="purchase-filter__actions">
            <button
              type="submit"
              className="purchase-filter__btn purchase-filter__btn--submit"
            >
              Filtrar
            </button>
            <button
              type="reset"
              className="purchase-filter__btn purchase-filter__btn--reset"
            >
              Limpiar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
