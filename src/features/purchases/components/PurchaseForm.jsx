import "../styles/PurchaseForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Button, FormGroup, Input } from "reactstrap";
import { PurchaseFormError } from "./PurchaseFormError";
import { purchaseSchema } from "../schemas/purchaseSchema";
import { useNewPurchase } from "../hooks/useNewPurchase";

export const PurchaseForm = () => {
  // const handlePurchaseForm = (values) => {
  //   console.log(values);
  // };

  const { handlePurchaseForm } = useNewPurchase();

  return (
    <Container className="purchaseForm">
      <Formik
        onSubmit={handlePurchaseForm}
        validationSchema={purchaseSchema}
        initialValues={{ purchase: "", price: "", createdOn: new Date() }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Col>
              <FormGroup>
                <span aria-live="polite" id="createdOn">
                  {new Date().toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Field
                  name="purchase"
                  as={Input}
                  type="text"
                  id="purchase"
                  placeholder="Write down your shopping"
                />
                <ErrorMessage name="purchase" component={PurchaseFormError} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Field
                  name="price"
                  as={Input}
                  type="number"
                  id="price"
                  placeholder="Write down how much cost is"
                />
                <ErrorMessage name="price" component={PurchaseFormError} />
              </FormGroup>
            </Col>
            <Col>
              <Button type="submit" color="primary">
                {!isSubmitting ? "Add" : "..."}
              </Button>
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
