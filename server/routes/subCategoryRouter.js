import { Router } from "express";
// Controllers
import {
  getAllSubCategories,
  getSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../controllers/subCategoryController.js";

/// Validators MiddleWare
import { checkSchema } from "express-validator";
import validatorMiddleware from "../middleware/validatorMiddleware.js";

import {
  createSubCategoryValidator,
  getSubCategoryValidator,
} from "../utils/validators/subCategoryValidator.js";

const router = Router({ mergeParams: true });
router
  .route("/")
  .get(getAllSubCategories)
  .post(
    checkSchema(createSubCategoryValidator),
    validatorMiddleware,
    createSubCategory
  );
router
  .route("/:id")
  .get(
    checkSchema(getSubCategoryValidator),
    validatorMiddleware,
    getSubCategory
  )
  .patch(
    checkSchema(getSubCategoryValidator),
    validatorMiddleware,
    updateSubCategory
  )
  .delete(deleteSubCategory);
export default router;
