import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nombre debe tener al menos 3 caracteres")
    .required("Nombre es requerido"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string().email("Email es inválido").required("Email es requerido"),
  password: Yup.string()
    .min(6, "Por lo menos 6 caracteres")
    .required("Contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Contraseñas no coinciden")
    .required("Confirmar contraseña es requerido"),
});
