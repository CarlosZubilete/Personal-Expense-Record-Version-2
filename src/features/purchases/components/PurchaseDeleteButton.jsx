import { ShowDelete, ShowSuccess } from "./PurchaseAlerts";
import { MdDelete } from "react-icons/md";
export const PurchaseDeleteButton = ({ purchase, onDelete }) => {
  const handleClick = async () => {
    console.log("HandleClick = ", purchase);
    const result = await ShowDelete(purchase);

    if (result.isConfirmed) {
      await onDelete?.(purchase._id);
      ShowSuccess();
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
