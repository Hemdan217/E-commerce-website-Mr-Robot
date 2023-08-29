import categoryModel from "../models/categoryModel.js";
import {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} from "./rootController.js";

// @desc Get List Of Categories
// @route GET /categories
// @access Public
export const getAllCategories = getAll(categoryModel);

// @desc Create New Category
// @route POST /categories
// @access Private
export const createCategory = createOne(categoryModel);
// @desc Get Specific Category
// @route GET /categories/:id
// @access Public
export const getCategory = getOne(categoryModel);

// @desc Update Specific Category
// @route PATCH /categories/:id
// @access Private
export const updateCategory = updateOne(categoryModel);

// @desc Get List Of Categories
// @route GET /categories
// @access Public
export const deleteCategory = deleteOne(categoryModel);
