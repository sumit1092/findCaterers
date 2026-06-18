import Caterer from '../models/Caterer.js';
import ApiError from '../utils/apiError.js';
import asyncHandler from '../utils/asyncHandler.js';

const getCaterers = asyncHandler(async (req, res) => {
  const { search, minPrice, maxPrice } = req.query;
  const filters = {};
  const hasMinPrice = minPrice !== undefined;
  const hasMaxPrice = maxPrice !== undefined;

  if (search) {
    filters.name = { $regex: search, $options: 'i' };
  }

  if (hasMinPrice || hasMaxPrice) {
    filters.pricePerPlate = {};

    if (hasMinPrice) {
      filters.pricePerPlate.$gte = Number(minPrice);
    }

    if (hasMaxPrice) {
      filters.pricePerPlate.$lte = Number(maxPrice);
    }
  }

  const caterers = await Caterer.find(filters).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: caterers.length,
    data: caterers
  });
});

const getCatererById = asyncHandler(async (req, res) => {
  const caterer = await Caterer.findById(req.params.id);

  if (!caterer) {
    throw new ApiError(404, 'Caterer not found');
  }

  res.status(200).json({
    success: true,
    data: caterer
  });
});

const createCaterer = asyncHandler(async (req, res) => {
  const caterer = await Caterer.create(req.body);

  res.status(201).json({
    success: true,
    message: 'Caterer created successfully',
    data: caterer
  });
});

const updateCaterer = asyncHandler(async (req, res) => {
  const caterer = await Caterer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!caterer) {
    throw new ApiError(404, 'Caterer not found');
  }

  res.status(200).json({
    success: true,
    message: 'Caterer updated successfully',
    data: caterer
  });
});

const deleteCaterer = asyncHandler(async (req, res) => {
  const caterer = await Caterer.findByIdAndDelete(req.params.id);

  if (!caterer) {
    throw new ApiError(404, 'Caterer not found');
  }

  res.status(200).json({
    success: true,
    message: 'Caterer deleted successfully'
  });
});

export {
  getCaterers,
  getCatererById,
  createCaterer,
  updateCaterer,
  deleteCaterer
};

