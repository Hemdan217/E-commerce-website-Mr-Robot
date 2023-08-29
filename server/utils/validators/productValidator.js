import slugify from "slugify";
import productModel from "./../../models/productModel.js";
export const createProductValidator = {
  title: {
    optional: false,
    notEmpty: true,
    isLength: { options: { min: 3 } },
    errorMessage: "Product must have title",
    custom: {
      options: async (value, { req }) => {
        const Product = await productModel.findOne({ title: value });
        req.body.slug = slugify(value);
        if (Product) {
          throw new Error(`Product Exists Before Make Sure `);
        }
      },
    },
  },
};
export const getProductValidator = {
  id: {
    isMongoId: true,
    errorMessage: "id is invalid",
  },
};
