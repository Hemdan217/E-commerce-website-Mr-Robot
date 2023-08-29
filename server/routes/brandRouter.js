import { Router } from "express";
// Controllers
import {
  getAllBrands,
  getBrand,
  createBrand,
  resizeImage,
  updateBrand,
  deleteBrand,
} from "../controllers/brandController.js";

/// Validators MiddleWare
import { checkSchema } from "express-validator";
import validatorMiddleware from "../middleware/validatorMiddleware.js";
import { upload } from "../middleware/uploadFileMiddleware.js";
import {
  createBrandValidator,
  getBrandValidator,
} from "../utils/validators/brandValidator.js";

const router = Router({ mergeParams: true });
router
  .route("/")
  .get(getAllBrands)
  .post(
    upload.single("image"),
    resizeImage,
    checkSchema(createBrandValidator),
    validatorMiddleware,
    createBrand
  );
router
  .route("/:id")
  .get(checkSchema(getBrandValidator), validatorMiddleware, getBrand)
  .patch(checkSchema(getBrandValidator), validatorMiddleware, updateBrand)
  .delete(checkSchema(getBrandValidator), validatorMiddleware, deleteBrand);
export default router;

// import multer from "multer";
// let upload = multer({ dest: "uploads/brands" }); upload  in the middleware
//  upload.single("imgUrl"),
