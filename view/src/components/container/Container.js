import React from "react";
import Product from "./Products/Product";
import ProductDetails from "./Products/ProductDetails";
import { Routes, Route } from "react-router-dom";
import "./Container.css";

const Container = (props) => {
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={props.data.map((item) => (
            <Product
              key={` ${Math.random()}${item.id}`}
              id={item.id}
              title={item.title}
              brand={item.brand}
              img={item.images}
              content={item.description}
              price={item.price}
            />
          ))}
        ></Route>
        <Route
          exact
          path="/products/:id"
          element={<ProductDetails products={props.data} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Container;
