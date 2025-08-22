import "../styles/PurchasePage.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { PurchaseList } from "../components/PurchaseList";
import { usePurchases } from "../hooks/usePurchases";
import { PurchaseFilter } from "../components/PurchaseFilter";
export const PurchasePage = () => {
  const { list, handleDeletePurchase } = usePurchases();

  return (
    <div className="purchase-page">
      <div className="purchase-page__container">
        <aside className="purchase-page__sidebar">
          <div className="purchase-page__header">
            <h2 className="purchase-page__title">Agregar compra</h2>
            <Link to={"/purchase-add"} title="Add Purchase">
              <button className="purchase-page__btn">
                <IoIosAddCircle className="purchase-page__icon" />
              </button>
            </Link>
          </div>
          <div className="purchase-page__filter">
            <PurchaseFilter />
          </div>
        </aside>

        <main className="purchase-page__main">
          <div className="purchase-page__list">
            <PurchaseList listPurchase={list} onDelete={handleDeletePurchase} />
          </div>
        </main>
      </div>
    </div>
  );
};
