import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';
import catererRoutes from './routes/catererRoutes.js';
import { api_endpoint } from './utils/constants.js';

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API running for find caterers"
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(api_endpoint, catererRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
