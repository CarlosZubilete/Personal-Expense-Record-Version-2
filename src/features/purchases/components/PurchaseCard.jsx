import "../styles/PurchaseCard.css";

export const PurchaseCard = ({ purchase }) => {
  return (
    <div className="purchase-card">
      <h3 className="purchase-card__title">{purchase.name}</h3>
      <p className="purchase-card__price">{purchase.price}</p>
      <p className="purchase-card__date">
        {new Date(purchase.date).toLocaleDateString("es-AR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};
