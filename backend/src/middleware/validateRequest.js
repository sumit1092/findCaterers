import { validationResult } from 'express-validator';

import ApiError from '../utils/apiError.js';

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ApiError(400, 'Validation failed', errors.array()));
  }

  next();
};

export default validateRequest;
