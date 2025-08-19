import "../styles/PurchaseFormError.css";
import { Alert } from "reactstrap";

export const PurchaseFormError = ({ children }) => {
  return (
    <Alert color="danger" className="py-0 px-2 mt-1 mb-0">
      {children}
    </Alert>
  );
};
