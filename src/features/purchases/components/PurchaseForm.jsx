import "../styles/PurchaseForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { PurchaseFormError } from "./PurchaseFormError";
import { purchaseSchema } from "../schemas/purchaseSchema";
import { useNewPurchase } from "../hooks/useNewPurchase";
import { Link } from "react-router-dom";

export const PurchaseForm = () => {
  const { handlePurchaseForm } = useNewPurchase();

  return (
    <Container className="d-flex justify-content-center">
      <Formik
        onSubmit={handlePurchaseForm}
        validationSchema={purchaseSchema}
        initialValues={{
          name: "",
          price: "",
          createdOn: new Date().toISOString(),
        }}
      >
        {({ isSubmitting }) => (
          <Form className="purchase-form">
            <Col className="purchase-form__title">
              <span className="purchase-form__title-text">Date: </span>
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
                {!isSubmitting ? "Add" : "..."}
              </Button>
              <Link
                to={"/purchase-page"}
                onClick={(e) => (isSubmitting ? e.preventDefault() : "")}
              >
                <Button
                  className="purchase-form__actions-btn purchase-form__actions-btn--cancel"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "...." : "Cancel"}
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
