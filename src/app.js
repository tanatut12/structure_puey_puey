import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js';


import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; 


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


app.use('/', productRoutes);
app.use('/api/auth', authRoutes); 

