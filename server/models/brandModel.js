import { Schema, model } from "mongoose";
import process from "process";

const brandSchema = Schema(
  {
    name: {
      type: "string",
      unique: [true, "brand Is Unique"],
      required: [true, "brand Is Required"],
      minLength: [3, "brand must be at least 3 chacters"],
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

const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}${doc.image}`;
    doc.image = imageUrl;
  }
};
// findOne, findAll and update
brandSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
brandSchema.post("save", (doc) => {
  setImageURL(doc);
});
const brandModel = model("brand", brandSchema);
export default brandModel;
