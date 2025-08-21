import { ShowDelete, ShowSuccess } from "./PurchaseAlerts";
import { MdDelete } from "react-icons/md";
import { usePurchases } from "../hooks/usePurchases";
export const PurchaseDeleteButton = ({ purchase }) => {
  const { handleDeletePurchase } = usePurchases();
  const handleClick = async () => {
    console.log("HandleClick = ", purchase);
    const result = await ShowDelete(purchase);

    if (result.isConfirmed) {
      const ok = handleDeletePurchase(purchase._id);
      if (ok) ShowSuccess();
    }
  };

  return (
    <button
      className="purchase-list__buttons-delete"
      onClick={handleClick}
      aria-label={`Delete client ${purchase.name}`}
    >
      <MdDelete className="purchase-list__buttons-delete-icon" />
    </button>
  );
};
