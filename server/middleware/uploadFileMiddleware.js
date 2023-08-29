import multer from "multer";
import { ApiError } from "./../utils/apiError.js";
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/brands");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     console.log(ext);
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
//   },
// });
const storage = multer.memoryStorage();
const onlyImages = (req, file, cb) => {
  console.log(file);
  if (file.mimetype.startsWith("image")) {
    return cb(null, true);
  } else {
    return cb(new ApiError("Invalid File Extesion", 400), false);
  }
};
export let upload = multer({ storage, fileFilter: onlyImages });
