import Product from "../model/productModel.js";

// export const getAllProducts = async (req, res) => {
//   let AllProducts = await Product.find({});
//   res.json(AllProducts);
// };
export const getAllProducts = async (req, res) => {
  let AllProducts = await Product.aggregate([
    {
      $unwind: "$images",
    },
  ]);
  res.json(AllProducts);
};
