import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddlware.js';
import connDB from './config/db.js';
import productRouter from './routes/productRoutes.js';
import colors from 'colors';

dotenv.config();

const PORT = process.env.PORT || 5000;

connDB();

app.use(cors());

app.use(express.json());

app.use('/api/products', productRouter);

app.use(notFound);

app.use(errorHandler);

console.log(process.env.PORT);

app.listen(PORT, () => console.log(`Listening on ${PORT}`.yellow.bold));