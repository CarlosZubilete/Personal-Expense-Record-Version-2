import "../styles/PurchaseList.css";
import { PurchaseCard } from "./PurchaseCard";

export const PurchaseList = ({ listPurchase }) => {
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
          </div>
        ))}
      </div>
    </div>
  );
};
