import subCategoryModel from "../models/subCategoryModel.js";
import {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} from "./rootController.js";

// @desc Get List Of SubCategories
// @route GET /subcategories OR /:categoryId/subcategories
// @access Public
export const getAllSubCategories = getAll(subCategoryModel);

// @desc Create New SubCategory
// @route POST /subcategories OR /:categoryId/subcategories
// @access Private
export const createSubCategory = createOne(subCategoryModel);

// @desc Get Specific SubCategory
// @route GET /SubCategories/:id
// @access Public
export const getSubCategory = getOne(subCategoryModel);

// @desc Update Specific SubCategory
// @route PATCH /SubCategories/:id
// @access Private
export const updateSubCategory = updateOne(subCategoryModel);

// @desc delete specific  SubCategory
// @route GET /SubCategories/:id
// @access Public
export const deleteSubCategory = deleteOne(subCategoryModel);
