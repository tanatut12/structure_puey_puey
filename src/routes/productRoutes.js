import express from 'express';
import getAllProducts from "../controllers/products/getProductsController.js"
import postAllProducts from '../controllers/products/addProductController.js';
import getProductById from '../controllers/products/getProductController.js'
import deleteProduct from '../controllers/products/deleteProductController.js';
import updateProductById from '../controllers/products/updateProductController.js';




const router = express.Router();


// get all product
router.get('/', getAllProducts);
// get product by id
router.get('/product/:_id', getProductById)
// add product api
router.post('/', postAllProducts)
// delete product
router.post('/delete',deleteProduct)
// edit product
router.patch('/products/:_id',updateProductById)




export default router