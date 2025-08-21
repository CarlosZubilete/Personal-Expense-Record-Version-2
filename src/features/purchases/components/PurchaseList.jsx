import { GrEdit } from "react-icons/gr";
import "../styles/PurchaseList.css";
import { PurchaseCard } from "./PurchaseCard";
import { PurchaseDeleteButton } from "./PurchaseDeleteButton";
import { Link } from "react-router-dom";

export const PurchaseList = ({ listPurchase, onDelete }) => {
  return (
    <div className="purchase-list">
      <div className="purchase-list__card">
        {listPurchase.map((purchase) => (
          <div key={purchase._id} className="purchase-list__item">
            <PurchaseCard
              purchase={{
                name: purchase.name,
                price: purchase.price,
                date: purchase.createdOn,
              }}
            />

            <div className="purchase-list__buttons">
              <Link to={`/purchase-edit/${purchase._id}`} title="Edit Purchase">
                <button className="purchase-list__buttons-edit">
                  <GrEdit className="purchase-list__buttons-edit-icon" />
                </button>
              </Link>
              <PurchaseDeleteButton
                purchase={{ ...purchase }}
                title="Delete Purchase"
                onDelete={onDelete}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
