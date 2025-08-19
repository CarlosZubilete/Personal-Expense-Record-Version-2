import "../styles/PurchaseFormError.css";
import { Alert } from "reactstrap";

export const PurchaseFormError = ({ children }) => {
  return <Alert className="error-message">{children}</Alert>;
};
