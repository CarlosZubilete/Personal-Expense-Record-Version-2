Por defecto, yo le estoy seteando un valor al ingresar el documento en el Componente Formulario

```
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
```

Nose si tiene que ver , creo que no , pero tambien uso un schema de validacion con yup donde ` createdOn: date().default(() => new Date()),`.
Ahora con estos datos, que me recomendas usar, es un poryecto pequeño trabajando con el local storage, pero pude ser que mas a delante , se guarde en una base de datos. :D
