import "../styles/Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { loginSchema } from "../validators/loginSchema";
import { registerSchema } from "../validators/registerSchema";
import { useAuthContext } from "../context/useAuthContext";

export const Login = () => {
  const { error, handleSubmitLogin } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login">
      <div className="login__container">
        {error && <div className="login__error-message">{error}</div>}

        <h2 className="login__title">
          {isLogin ? "Iniciar Session" : "Crear una cuenta"}
        </h2>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={isLogin ? loginSchema : registerSchema}
          onSubmit={handleSubmitLogin}
        >
          {({ isSubmitting }) => (
            <Form className="login__form">
              {!isLogin && (
                <div className="login__form-group">
                  <label htmlFor="name" className="login__label">
                    Nombre Completo:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="login__input"
                    placeholder="Nombre y Apellido"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="login__error"
                  />
                </div>
              )}
              {!isLogin && (
                <div className="login__form-group">
                  <label htmlFor="email" className="login__label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="login__input"
                    placeholder="ejemplo123@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="login__error"
                  />
                </div>
              )}

              <div className="login__form-group">
                <label htmlFor="username" className="login__label">
                  Nombre de Usuario:
                </label>
                <Field
                  type="text"
                  name="username"
                  className="login__input"
                  placeholder="Nombre de usuario"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="login__error"
                />
              </div>
              <div className="login__form-group">
                <label htmlFor="password" className="login__label">
                  Contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  className="login__input"
                  placeholder="Letras y números"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="login__error"
                />
              </div>

              {!isLogin && (
                <div className="login__form-group">
                  <label htmlFor="confirmPassword" className="login__label">
                    Repetir Contraseña
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="login__input"
                    placeholder="Confirmar tu contraseña"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="login__error"
                  />
                </div>
              )}

              <div className="login__buttons">
                <button
                  type="submit"
                  className="login__submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Cargando..."
                    : isLogin
                    ? "Iniciar"
                    : "Registrar"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="login__switch-mode">
          {isLogin ? "No tienes una cuenta? " : "Ya tienes una cuenta? "}
          <button
            type="button"
            className="login__switch-mode-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Registrar" : "Iniciar"}
          </button>
        </div>
      </div>
    </div>
  );
};
