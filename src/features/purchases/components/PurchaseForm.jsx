import "../styles/PurchaseForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Col, Button, FormGroup, Input, Label } from "reactstrap";
import { PurchaseFormError } from "./PurchaseFormError";
import { purchaseSchema } from "../schemas/purchaseSchema";
import { Link, useParams, useNavigate } from "react-router-dom";
import { usePurchases } from "../hooks/usePurchases";
import { useEffect } from "react";
import { ShowSuccess } from "./PurchaseAlerts";

export const PurchaseForm = () => {
  const params = useParams();

  const { handlePurchaseForm, purchase, success, submitting } = usePurchases(
    params.id
  );
  // console.log("There is something params: id => ", params.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      ShowSuccess({ message: "Compra guardada con éxito" });
      navigate("/purchase-page");
    }
  }, [success, navigate]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // o "auto"
  }, []);
  // initial values for formik
  const initialValues = {
    name: purchase?.name || "",
    price: purchase?.price || "",
    createdOn: purchase?.createdOn || new Date().toISOString(),
  };
  // console.log("There is something into: purchase => ", purchase);

  return (
    <Container id="purchase-form__start">
      <Formik
        onSubmit={handlePurchaseForm}
        validationSchema={purchaseSchema}
        initialValues={initialValues}
        enableReinitialize={true}
      >
        {() => (
          <Form className="purchase-form">
            <Col className="purchase-form__header">
              <h2 className="purchase-form__title">
                <strong>{purchase ? "Editar" : "Agregar"}</strong>
              </h2>
              <div className="purchase-form__title-date-container">
                <span className="purchase-form__title-date"></span>
                <span
                  aria-live="polite"
                  id="createdOn"
                  className="purchase-form__title-date"
                >
                  {new Date().toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Col>
            <Col>
              <FormGroup>
                <Label for="name" className="purchase-form__label">
                  Purchase
                </Label>
                <Field
                  name="name"
                  as={Input}
                  type="text"
                  id="name"
                  placeholder="Write down your shopping"
                  className="purchase-form__input"
                />
                <ErrorMessage name="name" component={PurchaseFormError} />
              </FormGroup>
            </Col>
            <Col>
              <Label for="price" className="purchase-form__label">
                Price
              </Label>
              <FormGroup>
                <Field
                  name="price"
                  as={Input}
                  type="number"
                  id="price"
                  placeholder="Write down how much cost is"
                  className="purchase-form__input"
                />
                <ErrorMessage name="price" component={PurchaseFormError} />
              </FormGroup>
            </Col>
            <Col className="purchase-form__actions">
              <Button
                type="submit"
                color="primary"
                className="purchase-form__actions-btn purchase-form__actions-btn--submit"
              >
                {!submitting ? "Add" : "..."}
              </Button>
              <Link
                to={"/purchase-page"}
                onClick={(e) => (submitting ? e.preventDefault() : "")}
              >
                <Button
                  className="purchase-form__actions-btn purchase-form__actions-btn--cancel"
                  disabled={submitting}
                >
                  {submitting ? "...." : "Cancel"}
                </Button>
              </Link>
            </Col>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

/*
<Col>
  <FormGroup>
    <Label for="createdOn">Fecha de ingreso</Label>
    <p aria-live="polite" id="createdOn">
      {new Date().toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  </FormGroup>
</Col>
  
*/
