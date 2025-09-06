import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Por lo menos 6 caracteres")
    .required("Contraseña es requerida"),
});
