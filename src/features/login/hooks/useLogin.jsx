import loginService from "../services/loginServices";
import { useState } from "react";

export const useLogin = () => {
  // Add your login logic here
  const [username, setUserName] = useState("");
  // const [ok, setOk] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmitLogin = async (values, { setSubmitting }) => {
    // console.log("Form values:", values);
    setSubmitting(true);

    loginService
      .login({
        username: values.username.trim(),
        password: values.password.trim(),
      })
      .then((data) => {
        setUserName(data.username);
        console.log("OK: ", data);
      })
      .catch((err) => {
        // axios puts the reply in err.response
        setError(err.response?.data?.message || err.message);
        console.log("Login Error:", err.response?.data || err.message);
      })
      .finally(() => setSubmitting(false));
  };

  return { handleSubmitLogin, username, error };
};
