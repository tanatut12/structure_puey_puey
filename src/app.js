import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js';
import multer from 'multer';
<<<<<<< HEAD

// Import Routes
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; 

=======
import path from 'path';

// Import Routes
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; // Import the new auth routes
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
>>>>>>> 4228bf2ae629f4987698fee6144cc517a78772f8

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
    Image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// API routes
app.use('/', productRoutes);
<<<<<<< HEAD
app.use('/api/auth', authRoutes); 

=======
app.use('/api/auth', authRoutes); // new auth routes
app.use('/cart', cartRoutes);
app.use('/api/order', orderRoutes); // new order routes
app.use('/cart', cartRoutes);
>>>>>>> 4228bf2ae629f4987698fee6144cc517a78772f8
