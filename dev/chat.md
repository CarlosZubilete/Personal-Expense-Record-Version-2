1. Chat crees que puedes guardar los colores en variables que estoy usando en estos los siguientes estilos:

```
.purchase-form {
  /*
  margin: auto;
  max-width: 600px;
  padding: 1rem; */
  background-color: #ffffff;
  margin: 1rem;
  color: var(--text-color);
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px var(--form-bg-shadow);
  transition: background-color 0.5s ease, color 0.5s ease;
}

.purchase-form__title-text,
.purchase-form__title-date {
  /* border: 1px solid red; */
  text-align: center;
  /* color: var(--form-title); */
  color: #21262d;
}

.purchase-form__input {
  /* background-color: var(--input-bg); */
  /* background-color: var(--input-bg); */
  background-color: #f8f9fa;
  color: var(--input-field-text);
  /* border: 1px solid var(--input-border); */
  border: 1px solid #0022453c;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.purchase-form__input:focus {
  outline: none;
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px var(--third-blue);
}

.purchase-form__actions {
  /* border: 1px solid red; */
  display: flex;
  justify-content: start;
  align-self: center;
}

.purchase-form__actions-btn--submit {
  /* background-color: var(--btn-bg); */
  /* background-color: var(--primary-variant); */
  background-color: #03dac5;
  color: #fff;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  border: none;
}

.purchase-form__actions-btn--submit:hover {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* color: #4d4343; */
  background-color: #02d2bd;
}

.purchase-form__actions-btn--cancel {
  /* border: none; */
  padding: 0.6rem 1.5rem;
  margin-left: 1rem;
  color: #1e1e1e;
  background-color: #ffffff;
  text-decoration: underline;
  /* border-bottom: 1px solid #3700b3; */
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  border: none;
}

.purchase-form__actions-btn--cancel:hover {
  background-color: #f8f9fa;
  /* color: #3700b3; */
  color: rgba(214, 20, 20, 0.774);
}

/* *DARK MODE* */
.dark-mode .purchase-form {
  background-color: #1f1f1f; /*212529 - 1e1e1e*/
}

.dark-mode .purchase-form__title-text {
  color: #efefef;
}

.dark-mode .purchase-form__title-date {
  color: #efefef;
}

.dark-mode .purchase-form__input {
  background-color: #212529;
  color: #efefef;
  border: 1px solid #343a40; /* Darker border for contrast */
}

.dark-mode .purchase-form__actions-btn--submit {
  background-color: #bb86fc;
  color: #efefef;
}

.dark-mode .purchase-form__actions-btn--cancel {
  background-color: #1f1f1f;
  color: rgba(214, 20, 20, 0.8);
}

.dark-mode .purchase-form__actions-btn--cancel:hover {
  background-color: #373636;
  color: #6a6a6a;
}

```

Para usarlos con el siguiente formato

```
:root {
  /* *Body* */
  --bg-body-color: #f8f9fa;
  --bg-body-gradient: linear-gradient(135deg, #ffffff, #e9ecef);
  --text-body-color: #212121;
}


.dark-mode {
  /* *Body* */
  --bg-body-color: #0d1117;
  --bg-body-gradient: linear-gradient(135deg, #0d1117, #161b22);
  --text-body-color: #8b949e;
}

```
