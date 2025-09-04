// import * as Yup from "yup";
import { object, string, number, date } from "yup";

export const purchaseSchema = object({
  name: string().required(),
  price: number("Ingrese solo números")
    .required()
    .positive("Ingrese un precio positivo"),
  createdOn: date().default(() => new Date().toISOString()),
});
