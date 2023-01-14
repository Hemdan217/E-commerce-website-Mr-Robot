import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoute from "./routes/products.js";
mongoose.set("strictQuery", true);
const app = express();
app.use(express.json());
app.use(cors());

// 2) Connectionto the Database
mongoose
  .connect("mongodb://127.0.0.1:27017/Cart")
  .then(() => {
    console.log("Connection to the database");
  })
  .catch((err) => console.log(err));

app.use("/", productRoute);
export default app;
