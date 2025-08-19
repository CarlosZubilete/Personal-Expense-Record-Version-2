Me puedes ayudar para que el usaurio vea la fecha que esta haciendo el ingreso pero que no la pueda cambiar ?

```
          <Col>
            <FormGroup>
              {/* <Field
                name="date"
                as={Label}
                type="date"
                id="price"
                placeholder="Write down how much cost is"
              /> */}
              <Label > {} </Label>
            </FormGroup>
          </Col>
```

En este funcion solo me imprime los inputs pero no la fecha ?

```

  const handlePurchaseForm = (values) => {
    console.log(values);
  };


     <Formik
        onSubmit={handlePurchaseForm}
        validationSchema={purchaseSchema}
        initialValues={{ purchase: "", price: "", date: new Date() }}
      >
```
