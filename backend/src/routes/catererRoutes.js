import express from 'express';

import {
  getCaterers,
  getCatererById,
  createCaterer,
  updateCaterer,
  deleteCaterer
} from '../controllers/catererController.js';
import {
  validateCreateCaterer,
  validateGetCaterersQuery,
  validateCatererId
} from '../validators/catererValidator.js';

const router = express.Router();

router.route('/').get(validateGetCaterersQuery, getCaterers).post(validateCreateCaterer, createCaterer);
router.route('/:id').get(validateCatererId, getCatererById).put(validateCatererId, updateCaterer).delete(validateCatererId, deleteCaterer);


export default router;
