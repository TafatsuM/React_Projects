import React from "react";

function ShoppingCart({ ShoppingCart }) {
  return (
    <div className="card w-50 border-success mb-3" style={{ margin: "0 auto" }}>
      <div className="card-header border-success">Shopping Cart</div>
      <ul className="list-group list-group-flush">
        {ShoppingCart.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item.quantity} kg. {item.name} ({item.rating})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShoppingCart;
