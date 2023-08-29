import slugify from "slugify";
import categoryModel from "./../../models/categoryModel.js";
export const createCategoryValidator = {
  name: {
    optional: false,
    notEmpty: true,
    isLength: { options: { min: 3 } },
    errorMessage: "category must have name",
    custom: {
      options: async (value, { req }) => {
        const category = await categoryModel.findOne({ name: value });
        req.body.slug = slugify(value);
        if (category) {
          throw new Error(`Category Exists Before Make Sure `);
        }
      },
    },
  },
};
export const getCategoryValidator = {
  id: {
    isMongoId: true,

    errorMessage: "id is invalid",
  },
};
