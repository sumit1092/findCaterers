import mongoose from 'mongoose';
import { transformDocument } from '../utils/constants.js';

const catererSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    description: {
      type: String,
      required: [false, 'Description is not required'],
      trim: true
    },
    imageUrl: {
      type: String,
      required: [false, 'Image URL is not required'],
      trim: true
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true
    },
    pricePerPlate: {
      type: Number,
      required: [true, 'Price per plate is required'],
      min: [1, 'Price per plate must be greater than 0']
    },
    cuisines: {
      type: [String],
      required: [true, 'Cuisines are required'],
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: 'At least one cuisine is required'
      }
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot be greater than 5']
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: transformDocument
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: transformDocument
    }
  }
);

catererSchema.index(
  {
    name: 1,
    location: 1
  },
  {
    unique: true
  }
);

const Caterer = mongoose.model('Caterer', catererSchema);

export default Caterer;
