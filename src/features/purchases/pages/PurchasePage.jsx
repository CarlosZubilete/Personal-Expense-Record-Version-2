import "../styles/PurchasePage.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { PurchaseList } from "../components/PurchaseList";
import { usePurchases } from "../hooks/usePurchases";
import { PurchaseFilter } from "../components/PurchaseFilter";
import { useFilterList } from "../hooks/useFilterList";

export const PurchasePage = () => {
  // values from the custom hook
  const { list, handleDeletePurchase } = usePurchases();
  // use the custom hook to manage filtering and sorting
  const { listFilter, orderBy, filterTxt, handleFilterList } =
    useFilterList(list);

  return (
    <div className="purchase-page">
      <div className="purchase-page__container">
        <aside className="purchase-page__sidebar">
          <div className="purchase-page__header">
            <h4 className="purchase-page__title">Agregar compra</h4>
            <Link to={"/purchase-add"} title="Add Purchase">
              <button className="purchase-page__btn">
                <IoIosAddCircle className="purchase-page__icon" />
              </button>
            </Link>
          </div>
          <div className="purchase-page__filter">
            <PurchaseFilter
              handleFilterList={handleFilterList}
              orderBy={orderBy}
              filterString={filterTxt}
            />
          </div>
        </aside>

        <main className="purchase-page__main">
          <div className="purchase-page__list">
            <PurchaseList
              listPurchase={listFilter}
              onDelete={handleDeletePurchase}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
