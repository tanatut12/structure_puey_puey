import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from 'express'
import cors from 'cors'
import connectDB from './utils/db.js';

//Route
import productRoutes from './routes/productRoutes.js'


//server config
dotenv.config();
const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use(cors())
//database connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
//api route
app.use('/', productRoutes);





