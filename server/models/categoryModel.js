import { Schema, model } from "mongoose";

const categorySchema = Schema(
  {
    name: {
      type: "string",
      unique: [true, "Category Is Unique"],
      required: [true, "Category Is Required"],
      minLength: [3, "Category must be at least 3 chacters"],
    },
    slug: {
      type: "string",
      lowerCase: true,
    },
    image: {
      type: "string",
    },
  },
  { timestamp: true }
);
const categoryModel = model("category", categorySchema);
export default categoryModel;
