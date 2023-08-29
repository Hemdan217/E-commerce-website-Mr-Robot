export const globalErrorMessage = (error, req, res, next) => {
  error.status = error.status || "erroror";
  error.statusCode = error.statusCode || 400;
  console.log(error);
  res.status(error.statusCode).json({ error: error.message });
};
