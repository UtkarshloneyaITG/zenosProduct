import React from "react";
import { Link } from "react-router";

function P_card({ src, title, price, id }) {
  return (
    <div className="product-card">
      <img src={src} alt="Product Image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price} $</p>
      <Link to={`${id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default P_card;
