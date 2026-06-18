import 'dotenv/config';

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import connectDB from '../config/db.js';
import Caterer from '../models/Caterer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getSampleCaterers = async () => {
  const filePath = path.join(__dirname, '../data/sampleCaterers.json');
  const fileContents = await readFile(filePath, 'utf-8');
  return JSON.parse(fileContents);
};

const seedCaterers = async () => {
  try {
    const sampleCaterers = await getSampleCaterers();
    await connectDB();
    await Caterer.deleteMany();
    await Caterer.insertMany(sampleCaterers);

    console.log('Sample caterers seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedCaterers();
