import React from "react";
import "./Product.css";
import { FaGift, FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { BsArrowUpRightSquare } from "react-icons/bs";
const Product = (props) => {
  return (
    <>
      <div className="product">
        <div className="image-wrapper">
          <img src={props.img} alt={props.brand} />
        </div>
        <h2>{props.title.slice(0, 20)}</h2>
        <sapn>{props.content.slice(0, 30)}...</sapn>
        <div>
          <h4>{props.brand}</h4>
          <h5>${props.price}</h5>
        </div>
        <div className="options-wrapper">
          <span>
            <FaShippingFast /> Free shipping
          </span>
          <span>
            <FaGift /> Free gift
          </span>

          <div className="main-button">
            <Link to={`/products/${props.id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
