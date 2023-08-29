import { Router } from "express";
// Controllers
import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

/// Validators MiddleWare
import { checkSchema } from "express-validator";
import validatorMiddleware from "./../middleware/validatorMiddleware.js";
import {
  createCategoryValidator,
  getCategoryValidator,
} from "./../utils/validators/categoryValidator.js";

// Nested Routers
import subCategoryRouter from "./subCategoryRouter.js";

const router = Router();

/// Route The /categories/:categoryId/ssubcategories to subcategories Router
router.use("/:categoryId/subcategories", subCategoryRouter);

router
  .route("/")
  .get(getAllCategories)
  .post(
    checkSchema(createCategoryValidator),
    validatorMiddleware,
    createCategory
  );
router
  .route("/:id")
  .get(checkSchema(getCategoryValidator), validatorMiddleware, getCategory)
  .patch(checkSchema(getCategoryValidator), validatorMiddleware, updateCategory)
  .delete(deleteCategory);
export default router;
