import "../styles/PurchasePage.css";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
export const PurchasePage = () => {
  return (
    <div className="purchasePage container">
      <section className="purchasePage__header">
        <h2 children="purchasePage__title">Purchase Page </h2>
        <Link to={"/purchase-add"} title="Add Purchase">
          <button className="purchasePage__btn">
            <IoIosAddCircle className="purchasePage__icon" />
          </button>
        </Link>
      </section>
    </div>
  );
};
