import React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={props.img} alt={props.brand} />
      </div>
      <h3>{props.brand}</h3>
      <sapn>{props.content.slice(0, 50)}...</sapn>
      <h4>${props.price}</h4>
    </div>
  );
};

export default Product;
