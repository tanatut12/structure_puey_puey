import express from 'express';
import getAllProducts from "../controllers/products/getProductsController.js"
import postAllProducts from '../controllers/products/addProductController.js';





const router = express.Router();

router.get('/', getAllProducts);

router.post('/',postAllProducts)



export default router