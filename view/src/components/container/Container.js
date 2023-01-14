import React from "react";
import Product from "./Products/Product";
import "./Container.css";

const Container = (props) => {
  return (
    <div className="main">
      {props.data.map((item) => (
        <Product
          key={item.id}
          brand={item.brand}
          img={item.thumbnail}
          content={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Container;
