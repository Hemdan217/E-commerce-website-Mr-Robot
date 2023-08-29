import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import brandModel from "../models/brandModel.js";
import {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} from "./rootController.js";

export const resizeImage = async (req, res, next) => {
  // console.log(req.file);
  const imagePath = `uploads/brands/brand_${uuidv4()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(320, 240)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(imagePath);
    req.body.image = imagePath;
  }
  next();
};

// @desc Get List Of Brands
// @route GET /brands
// @access Public
export const getAllBrands = getAll(brandModel);

// @desc Create New Brand
// @route POST /Brands
// @access Private
export const createBrand = createOne(brandModel);
// @desc Get Specific Brand
// @route GET /Brands/:id
// @access Public
export const getBrand = getOne(brandModel);

// @desc Update Specific Brand
// @route PATCH /Brands/:id
// @access Private
export const updateBrand = updateOne(brandModel);

// @desc Get List Of Brands
// @route GET /Brands
// @access Public
export const deleteBrand = deleteOne(brandModel);
