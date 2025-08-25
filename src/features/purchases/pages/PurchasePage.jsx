import "../styles/PurchasePage.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { PurchaseList } from "../components/PurchaseList";
import { usePurchases } from "../hooks/usePurchases";
import { PurchaseFilter } from "../components/PurchaseFilter";
import { useState, useEffect } from "react";

export const PurchasePage = () => {
  // values from the custom hook
  const { list, handleDeletePurchase } = usePurchases();
  // Init states to filter the list
  const [listFilter, setListFilter] = useState([]);
  const [orderBy, setOrderBy] = useState({ key: "", value: "" });
  // cont[filterName, setFilterName] = useState("");

  // Update listFilter whenever original list changes
  useEffect(() => {
    setListFilter(list);
  }, [list]);

  const handleFilterList = (filter) => {
    if (filter.key && filter.value) {
      // setOrderBy(filter);
      console.log("Filter in PurchasePage:", filter);
      console.log("Filtering...");
      setOrderBy(filter);
      const sortedList = [...list].sort((a, b) => {
        if (filter.key === "price") {
          return filter.value === 1 ? a.price - b.price : b.price - a.price;
        }

        if (filter.key === "name") {
          return filter.value === 1
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }

        return 0;
      });

      console.log("Sorted List:", sortedList);
      setListFilter(sortedList);
    } else {
      console.log("No filter applied");
      // Reset to original list when no filter is applied
      setListFilter(list);
      setOrderBy({ key: "", value: "" });
    }
  };

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
            <PurchaseFilter
              handleFilterList={handleFilterList}
              orderBy={orderBy}
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
