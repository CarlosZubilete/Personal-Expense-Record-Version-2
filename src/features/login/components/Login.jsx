import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import { loginSchema } from "../validators/loginSchema";
import { registerSchema } from "../validators/registerSchema";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const { handleSubmitLogin, username, error } = useLogin();

  const handleDemoLogin = () => {
    // Demo mode - direct access
    navigate("/purchase-page");
  };

  if (username) console.log("Username:", username);
  if (error) console.log("Error:", error);
  return (
    <div className="login">
      <div className="login__container">
        <h6>{username ? username : error}</h6>

        <h2 className="login__title">
          {isLogin ? "Iniciar Session" : "Crear una nueva cuenta"}
        </h2>
        <Formik
          initialValues={
            isLogin
              ? { username: "", password: "" }
              : {
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }
          }
          validationSchema={isLogin ? loginSchema : registerSchema}
          onSubmit={handleSubmitLogin}
        >
          {({ isSubmitting }) => (
            <Form className="login__form">
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
                  placeholder="nombre de usuario"
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
                  {isLogin ? "Iniciar" : "Registrar"}
                </button>
                <button
                  type="button"
                  className="login__demo-btn"
                  onClick={handleDemoLogin}
                >
                  Entrar en modo prueba
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
