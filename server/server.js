import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { globalErrorMessage } from "./middleware/errorMiddleware.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import categoryRouter from "./routes/categoryRouter.js";
import subCategoryRouter from "./routes/subCategoryRouter.js";
import brandRouter from "./routes/brandRouter.js";
import productRouter from "./routes/productRouter.js";
const app = express();

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Middlewares
app.use(express.json());
app.use(express.static(__dirname));
//ERROR HANDLING
app.use(cors());
dotenv.config();
if (process.env.ENV == "DEV") {
  app.use(morgan("dev"));
  //   console.log(process.env.ENV);
}
dbConnection();
//Catch All Routes

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/subcategories", subCategoryRouter);
app.use("/api/v1/brands", brandRouter);
app.use("/api/v1/products", productRouter);
//Catch All Routes
app.use("*", (request, response) => {
  response.status(200).json({ error: "This Route Is Not Correct" });
});

//ERROR HANDLING
app.use(globalErrorMessage);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
// Handle rejection outside express
// process.on("unhandledRejection", (err) => {
//   console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
//   server.close(() => {
//     console.error(`Shutting down....`);
//     process.exit(1);
//   });
// });
