import "../styles/PurchasePage.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { PurchaseList } from "../components/PurchaseList";
import { usePurchases } from "../hooks/usePurchases";

export const PurchasePage = () => {
  const { list, handleDeletePurchase } = usePurchases();

  return (
    <div className="purchase-page container">
      <section className="purchase-page__header">
        <h2 className="purchase-page__title">Purchase Page</h2>
        <Link to={"/purchase-add"} title="Add Purchase">
          <button className="purchase-page__btn">
            <IoIosAddCircle className="purchase-page__icon" />
          </button>
        </Link>
      </section>
      <section className="purchase-page__list">
        <PurchaseList listPurchase={list} onDelete={handleDeletePurchase} />
      </section>
    </div>
  );
};
