import React from "react";
import { useParams, useLocation } from "react-router-dom";
import qs from "query-string";
// import { useNavigate } from "react-router-dom";

// const handleSave = async (history) => {
//   history("/cart", "replace");
// };
// import Product from './Product';

function ProductDetails(props) {
  // Get the userId param from the URL.
  console.log(props);
  console.log(useParams());
  //   console.log(useLocation());
  //   const parsed = qs.parse(useLocation().search);
  //   console.log(parsed);
  //   console.log(props.history);

  const SingleProduct = props.products.filter(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (p) => p.id === Number(useParams().id)
  )[0];
  console.log(SingleProduct);

  //   const history = useNavigate();

  return (
    <div>
      <h1>Number {useParams().id}</h1>
      {props.products
        .filter(
          // eslint-disable-next-line react-hooks/rules-of-hooks
          (p) => p.id === Number(useParams().id)
        )
        .map((item) => (
          <div className="product">
            <div className="image-wrapper">
              <img src={item.thumbnail} alt={item.brand} />
            </div>
            <h2>{item.title.slice(0, 20)}</h2>
            <sapn>{item.description.slice(0, 30)}...</sapn>
            <div>
              <h4>{item.brand}</h4>
              <h5>${item.price}</h5>
            </div>
            <div className="options-wrapper">
              <div class="main-button">
                <a href="browse.html">View details</a>
              </div>
            </div>
          </div>
        ))}
      {/* <button className="btn btn-primary">Save</button> */}
    </div>
  );
}

// const ProductDetails = (props) => {
//   console.log(props);
//   console.log(useParams());
//   //   console.log(useLocation());
//   //   const parsed = qs.parse(useLocation().search);
//   //   console.log(parsed);
//   //   console.log(props.history);

//   const SingleProduct = props.products.filter(
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     (p) => p.id === Number(useParams().id)
//   )[0];
//   console.log(SingleProduct);

//   //   const history = useNavigate();

//   return (
//     <div>
//       <h1>Number {useParams().id}</h1>
//       {SingleProduct.title}
//       <button className="btn btn-primary">Save</button>
//     </div>
//   );
// };

export default ProductDetails;
