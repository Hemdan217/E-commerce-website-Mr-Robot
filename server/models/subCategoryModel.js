import { Schema, model } from "mongoose";

const subCategorySchema = Schema(
  {
    name: {
      type: "string",
      unique: [true, "subCategory Is Unique"],
      required: [true, "subCategory Is Required"],
      minLength: [3, "subCategory must be at least 3 chacters"],
    },
    slug: {
      type: "string",
      lowerCase: true,
    },
    categoryId: {
      type: Schema.ObjectId,
      ref: "category",
      required: true,
    },
  },
  { timestamp: true }
);
const subCategoryModel = model("subCategory", subCategorySchema);
export default subCategoryModel;
