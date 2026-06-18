const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let details = err.details || undefined;

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid caterer ID format";
  }

  if (err.code === 11000) {
    statusCode = 409;
    message = "Caterer already exists";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Database validation failed";
    details = Object.values(err.errors).map((validationError) => ({
      field: validationError.path,
      message: validationError.message,
    }));
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors: details,
  });
};

export default errorHandler;
