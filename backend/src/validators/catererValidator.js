import { body, param, query } from 'express-validator';

import validateRequest from '../middleware/validateRequest.js';

const validateGetCaterersQuery = [
  query('search')
    .optional()
    .isString()
    .withMessage('Search must be a string')
    .trim(),
  query('minPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Minimum price must be a number greater than or equal to 0'),
  query('maxPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Maximum price must be a number greater than or equal to 0')
    .custom((maxPrice, { req }) => {
      if (req.query.minPrice !== undefined && Number(maxPrice) < Number(req.query.minPrice)) {
        throw new Error('Maximum price must be greater than or equal to minimum price');
      }

      return true;
    }),
  validateRequest
];

const validateCreateCaterer = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string')
    .trim(),
  body('imageUrl')
    .optional()
    .isString()
    .withMessage('Image URL must be a string')
    .trim(),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required'),
  body('pricePerPlate')
    .isFloat({ min: 1 })
    .withMessage('Price per plate must be greater than 0'),
  body('cuisines')
    .isArray({ min: 1 })
    .withMessage('Cuisines must be a non-empty array'),
  body('cuisines.*')
    .isString()
    .withMessage('Each cuisine must be a string')
    .trim()
    .notEmpty()
    .withMessage('Cuisine values cannot be empty'),
  body('rating')
    .isFloat({ min: 0, max: 5 })
    .withMessage('Rating must be between 0 and 5'),
  validateRequest
];

const validateCatererId = [
  param('id')
    .isMongoId()
    .withMessage('Invalid caterer ID'),
  validateRequest
];

export {
  validateGetCaterersQuery,
  validateCreateCaterer,
  validateCatererId
};
