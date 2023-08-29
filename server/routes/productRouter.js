import { Router } from "express";
// Controllers
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  resizeImage,
} from "../controllers/productController.js";

/// Validators MiddleWare
import { checkSchema } from "express-validator";
import validatorMiddleware from "../middleware/validatorMiddleware.js";
import { upload } from "../middleware/uploadFileMiddleware.js";

import {
  createProductValidator,
  getProductValidator,
} from "../utils/validators/productValidator.js";

const router = Router({ mergeParams: true });
router
  .route("/")
  .get(getAllProducts)
  .post(
    upload.fields([
      {
        name: "imageCover",
        maxCount: 1,
      },
      {
        name: "images",
        maxCount: 5,
      },
    ]),
    resizeImage,
    checkSchema(createProductValidator),
    validatorMiddleware,
    createProduct
  );
router
  .route("/:id")
  .get(checkSchema(getProductValidator), validatorMiddleware, getProduct)
  .patch(checkSchema(getProductValidator), validatorMiddleware, updateProduct)
  .delete(checkSchema(getProductValidator), validatorMiddleware, deleteProduct);
export default router;
