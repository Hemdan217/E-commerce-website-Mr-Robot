import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/E_NODE")
    .then(() => {
      console.log("Connection To DB Successfully");
    })
    .catch((e) => {
      console.log("Error connecting");
    });
};
