import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js';
import multer from 'multer';
import path from 'path';

// Import Routes
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; // Import the new auth routes
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

//api upload img
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const upload = multer({ storage: storage });

//Creating Upload img
app.use('/images', express.static('./upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    Image_url: `https://structure-puey-puey.onrender.com/${PORT}/images/${req.file.filename}`,
  });
});

// API routes
app.use('/', productRoutes);
app.use('/api/auth', authRoutes); // new auth routes
app.use('/cart', cartRoutes);
app.use('/api/order', orderRoutes); // new order routes

