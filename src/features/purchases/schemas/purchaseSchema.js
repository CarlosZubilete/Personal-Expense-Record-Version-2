// import * as Yup from "yup";
import { object, string, number, date } from "yup";

export const purchaseSchema = object({
  name: string().required(),
  price: number().required().positive(),
  createdOn: date().default(() => new Date().toISOString()),
});
