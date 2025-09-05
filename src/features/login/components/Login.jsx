import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import { loginSchema } from "../validators/loginSchema";
import { registerSchema } from "../validators/registerSchema";

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would typically make an API call to authenticate
    console.log("Form values:", values);
    setSubmitting(false);
    // For demo purposes, just redirect to the main page
    navigate("/purchase-page");
  };

  const handleDemoLogin = () => {
    // Demo mode - direct access
    navigate("/purchase-page");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">
          {isLogin ? "Iniciar Session" : "Crear una nueva cuenta"}
        </h2>
        <Formik
          initialValues={
            isLogin
              ? { email: "", password: "" }
              : {
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }
          }
          validationSchema={isLogin ? loginSchema : registerSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="login__form">
              {!isLogin && (
                <div className="login__form-group">
                  <label htmlFor="username" className="login__label">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className="login__input"
                    placeholder="Enter your username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="login__error"
                  />
                </div>
              )}

              <div className="login__form-group">
                <label htmlFor="email" className="login__label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="login__input"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="login__error"
                />
              </div>

              <div className="login__form-group">
                <label htmlFor="password" className="login__label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="login__input"
                  placeholder="Enter your password"
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
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="login__input"
                    placeholder="Confirm your password"
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
