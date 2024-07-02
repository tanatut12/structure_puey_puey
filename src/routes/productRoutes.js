import express from 'express';
import getAllProducts from "../controllers/products/getProductsController.js"
import postAllProducts from '../controllers/products/addProductController.js';
import getProductById from '../controllers/products/getProductController.js'
import deleteProduct from '../controllers/products/deleteProductController.js';




const router = express.Router();
// get all product
router.get('/', getAllProducts);
// get product by id
router.get('/product/:_id', getProductById)
// add product api
router.post('/', postAllProducts)
// delete product
router.post('/delete',deleteProduct)



export default router