// 1) Import Mongoose
import mongoose from "mongoose";

// 3) Create the Schema to the database
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
    minLength: 3,
  },
  price: {
    type: Number,
    min: 4,
  },
  rating: {
    type: mongoose.Schema.Types.Mixed,
  },
  stock: {
    type: Number,
    min: 4,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: String,
  images: {
    type: [String],
  },
});

/// 4) Create the Model
const Product = mongoose.model("product", productSchema);

export default Product;
