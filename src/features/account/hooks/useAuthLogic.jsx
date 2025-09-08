import { useNavigate } from "react-router-dom";
import loginService from "../services/loginServices";
import { useState } from "react";

// this function decide if the user want to login or register , but both use the same form and doing different action
const loginOrRegister = async (values) => {
  const { username, password, email, name, confirmPassword } = values;
  const payload = {
    username: username.trim(),
    password: password.trim(),
  };

  if (confirmPassword) {
    console.log("Registering new user..."); // Debug log
    return loginService.create({
      ...payload,
      email: email.trim(),
      name: name.trim(),
    });
  }

  console.log("Logging in user..."); // Debug log
  return loginService.login(payload);
};

export const useAuthLogic = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  // this handle the login or register form submission
  const handleSubmitLogin = async (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted with values:", values); // Debug log
    setSubmitting(true);
    setError(null);

    try {
      const data = await loginOrRegister(values);
      console.log("Auth successful, response:", data); // Debug log
      // Handle different response formats
      const username = data.username || data.user?.username || values.username;
      setUser({ username });
      console.log("User set to:", username); // Debug log
      // Simulate a delay for better UX (e.g., show loading spinner)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resetForm();

      if (values.confirmPassword) {
        // Register ->  home-page
        navigate("/");
        window.location.reload();
      } else {
        // Login ->  purchase-page
        navigate("/purchase-page");
      }
    } catch (err) {
      console.error("Auth Error:", err);
      setError(
        err.response?.data?.message || err.message || "Error en autenticación"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleLoginOut = async () => {
    console.log("Logging out...");
    loginService
      .logout()
      .then((data) => {
        setUser({ username: "" });
        setError(null);
        console.log("Logout OK: ", data);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response?.data?.message || err.message);
        console.log("Logout Error:", err.response?.data || err.message);
      });
  };

  return {
    handleSubmitLogin,
    username: user.username,
    error,
    handleLoginOut,
  };
};

/*
console.log("Submitting login with values:", values); // Debug log
setSubmitting(true);
setError(null); // Clear previous errors

loginService
  .login({
    username: values.username.trim(),
    password: values.password.trim(),
  })
  .then((data) => {
    console.log("Login response data:", data); // Debug log

    // Handle different response formats
    const username =
      data.username || data.user?.username || values.username;

    setUser({ username: username });
    console.log("User set to:", { username: username }); // Debug log
    navigate("/purchase-page");
  })
  .catch((err) => {
    console.error("Login Error:", err); // Debug log
    setError(
      err.response?.data?.message || err.message || "Error de login"
    );
  })
  .finally(() => setSubmitting(false));
*/
