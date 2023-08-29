import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

import productModel from "../models/productModel.js";

import {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} from "./rootController.js";
export const resizeImage = async (req, res, next) => {
  console.log(req.file);
  const imagePath = `uploads/products/product_cover_image${uuidv4()}.jpeg`;
  if (req.files) {
    await sharp(req.files.imageCover[0].buffer)
      .resize(320, 240)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(imagePath);
    req.body.imageCover = imagePath;
  }
  // console.log("Hiere", req.files.imageCover[0].buffer);
  next();
};
// @desc Get List Of Products
// @route GET /products
// @access Public
export const getAllProducts = getAll(productModel);

// @desc Create New product
// @route POST /products
// @access Private
export const createProduct = createOne(productModel);

// @desc Get Specific product
// @route GET /Products/:id
// @access Public
export const getProduct = getOne(productModel);

// @desc Update Specific product
// @route PATCH /products/:id
// @access Private
export const updateProduct = updateOne(productModel);

// @desc Delete Specific Product
// @route Delete /products/:id
// @access Public
export const deleteProduct = deleteOne(productModel);

//  ?page,limit,sort,fields
// let queryObj = { ...req.query };
// let exclues = ["page", "sort", "limit", "fields"];
// exclues.forEach((f) => delete queryObj[f]);
// console.log(queryObj);
// console.log(req.query);
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 5;
// const skip = (page - 1) * limit;

// ?1)Filtering => price[gte]=50
// let queryStr = JSON.stringify(queryObj);
// queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
// queryStr = JSON.parse(queryStr);
// console.log(queryStr);
// let mongooseQuery = productModel.find(queryStr).skip(skip).limit(limit);

// ?2)sorting ?sort=price,rating => price rating
// if (req.query.sort) {
//   let sortBy = req.query.sort.split(",").join(" ");
//   mongooseQuery = mongooseQuery.sort(sortBy);
// } else {
//   mongooseQuery = mongooseQuery.sort("createdAt");
// }

// ?3)Limiting Fileld ?fileds=price,
// if (req.query.fields) {
//   mongooseQuery = mongooseQuery.select(
//     req.query.fields.split(",").join(" ")
//   );
// } else {
//   mongooseQuery = mongooseQuery.select("-__v");
// }
// ?4)Search ?keyword=jacket
// if (req.query.keyword) {
//   let query = {};
//   query.$or = [
//     { title: { $regex: req.query.keyword, $options: "i" } },
//     { description: { $regex: req.query.keyword, $options: "i" } },
//   ];
//   mongooseQuery = mongooseQuery.find(query);
// }

// export const getAllProducts = async (req, res, next) => {
//   try {
//     // Build query
//     const documentsCounts = await productModel.countDocuments();
//     const apiFeatures = new ApiFeatures(productModel.find(), req.query)
//       .paginate(documentsCounts)
//       .filter()
//       .search()
//       .limitFields()
//       .sort();

//     // Execute query
//     const { mongooseQuery, paginationResult } = apiFeatures;
//     const documents = await mongooseQuery; // apiFeatures.mongooseQuery

//     res
//       .status(200)
//       .json({ results: documents.length, paginationResult, data: documents });
//   } catch (error) {
//     next(new ApiError(error.message, 404));
//   }
// };

// // @desc Create New product
// // @route POST /products
// // @access Private
// export const createProduct = async (req, res, next) => {
//   try {
//     req.body.slug = slugify(req.body.title);

//     const newProduct = await productModel.create(req.body);

//     res.status(200).json(newProduct);
//   } catch (error) {
//     next(new ApiError(error.message, 500));
//   }
// };

// // @desc Get Specific product
// // @route GET /Products/:id
// // @access Public
// export const getProduct = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const product = await productModel.findOne({ _id: id });
//     if (!product) {
//       return next(new ApiError("fail can't find product", 404));
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     next(new ApiError(error.message, 404));
//   }
// };

// // @desc Update Specific product
// // @route PATCH /products/:id
// // @access Private
// export const updateProduct = async (req, res, next) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   if (title) {
//     return next(new ApiError("please Provide New Name For product", 404));
//   }
//   try {
//     const updatedproduct = await productModel.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!updatedproduct) {
//       return next(new ApiError("fail can't find product", 404));
//     }
//     res.status(200).json(updatedproduct);
//   } catch (err) {
//     next(new ApiError(err.message, 404));
//   }
// };

// // @desc Delete Specific Product
// // @route Delete /products/:id
// // @access Public
// export const deleteProduct = async (req, res, next) => {
//   const { id } = req.params;

//   try {
//     const deletedProduct = await productModel.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return next(new ApiError("fail can't find product", 404));
//     }
//     res.status(200).json({
//       message: "product deleted Successfully",
//     });
//   } catch (err) {
//     next(new ApiError(err.message, 404));
//   }
// };
