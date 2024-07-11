import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js';
import multer from 'multer';
import path from 'path';

// Import Routes
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
app.use(cors());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// API routes
app.use('/', productRoutes);
app.use('/api/auth', authRoutes); // new auth routes
app.use('/cart', cartRoutes);
app.use('/api/order', orderRoutes); // new order routes

// next() error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.status || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
