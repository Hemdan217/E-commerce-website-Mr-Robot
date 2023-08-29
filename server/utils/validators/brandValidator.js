import slugify from "slugify";
import brandModel from "../../models/brandModel.js";
export const createBrandValidator = {
  name: {
    optional: false,
    notEmpty: true,
    isLength: { options: { min: 3 } },
    errorMessage: "brand must have name",
    custom: {
      options: async (value, { req }) => {
        const brand = await brandModel.findOne({ name: value });
        req.body.slug = slugify(value);
        if (brand) {
          throw new Error(`brand Exists Before Make Sure `);
        }
      },
    },
  },
};
export const getBrandValidator = {
  id: {
    isMongoId: true,
    errorMessage: "id is invalid",
  },
};
