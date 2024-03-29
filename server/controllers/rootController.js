import { ApiError } from "../utils/apiError.js";
import ApiFeatures from "../utils/apiFeatures.js";

// @desc Get List Of /
export const getAll = (Model) => {
  return async (req, res, next) => {
    try {
      // Build query
      const documentsCounts = await Model.countDocuments();
      const apiFeatures = new ApiFeatures(Model.find(), req.query)
        .paginate(documentsCounts)
        .filter()
        .search()
        .limitFields()
        .sort();

      // Execute query
      const { mongooseQuery, paginationResult } = apiFeatures;
      const documents = await mongooseQuery; // apiFeatures.mongooseQuery

      res
        .status(200)
        .json({ results: documents.length, paginationResult, data: documents });
    } catch (error) {
      next(new ApiError(error.message, 404));
    }
  };
};

// @desc Create New One /
export const createOne = (Model) => {
  return async (req, res, next) => {
    try {
      const document = await Model.create(req.body);

      res.status(200).json({
        message: "Document Created Successfully",
        data: document,
      });
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  };
};

// @desc Get Specific One  /:id
export const getOne = (Model) => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const document = await Model.findOne({ _id: id });
      if (!document) {
        return next(new ApiError("fail can't find Document", 404));
      }
      res.status(200).json({
        data: document,
      });
    } catch (error) {
      next(new ApiError(error.message, 404));
    }
  };
};

// @desc Update Specific One /:id
export const updateOne = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;

    try {
      const updatedDocument = await Model.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedDocument) {
        return next(new ApiError("fail can't find Document", 404));
      }
      res.status(200).json({
        message: "Document Updated Successfully",
        data: updatedDocument,
      });
    } catch (err) {
      next(new ApiError(err.message, 404));
    }
  };
};

// @desc Delete Specific One
export const deleteOne = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;

    try {
      const deletedDocument = await Model.findByIdAndDelete(id);
      if (!deletedDocument) {
        return next(new ApiError("fail can't find Document", 404));
      }
      res.status(200).json({
        message: "Document deleted Successfully",
      });
    } catch (err) {
      next(new ApiError(err.message, 404));
    }
  };
};
